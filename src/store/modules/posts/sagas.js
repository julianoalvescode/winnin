import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { store } from '../../index';

import api from '../../../services/api';

import { searchSuccess, searchFailure } from './actions';

export function* searchPosts({ payload }) {
    const { category } = payload;

    const limitNumber = store.getState().posts.limit;

    try {
        const response = yield call(api.get, `${category}.json`, {
            params: {
                sort: 'new',
                limit: limitNumber,
            },
        });

        const { children } = response.data.data;
        const { after } = response.data.data;

        yield put(searchSuccess(children, category, after));
    } catch (e) {
        toast.error('Tente novamente mais tarde 😏', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        yield put(searchFailure());
    }
}

export function* AddItems({ payload }) {
    const { category, items, after } = payload;

    const limitNumber = store.getState().posts.limitPagination;

    try {
        const response = yield call(api.get, `${category}.json`, {
            params: {
                sort: 'new',
                limit: limitNumber,
                after,
            },
        });

        const { children } = response.data.data;
        const afterFinal = response.data.data.after;

        const responseFinal = [...items, ...children];

        yield put(searchSuccess(responseFinal, category, afterFinal));
    } catch (e) {
        toast.error(`${e}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        yield put(searchFailure());
    }
}

export default all([
    takeLatest('@posts/SEARCH_POSTS', searchPosts),
    takeLatest('@posts/LOAD_MORE', AddItems),
]);
