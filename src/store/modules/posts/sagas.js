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

        yield put(searchSuccess(children, category));
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
        console.log('erro');
        yield put(searchFailure());
    }
}

export function* loadMore({ payload }) {
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

        yield put(searchSuccess(children, category));
    } catch (e) {
        toast.error('☹ Não foi possível buscar!', {
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
    takeLatest('@posts/LOAD_MORE', loadMore),
]);
