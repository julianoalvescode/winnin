import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import { searchSuccess, searchFailure } from './actions';

export function* searchPosts({ payload }) {
    const { category } = payload;

    try {
        const response = yield call(api.get, `${category}.json`, {
            params: {
                sort: 'new',
            },
        });

        const { children } = response.data.data;

        yield put(searchSuccess(children));
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

export default all([takeLatest('@posts/SEARCH_POSTS', searchPosts)]);
