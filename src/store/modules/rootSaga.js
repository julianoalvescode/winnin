import { all } from 'redux-saga/effects';

import posts from './posts/sagas';

export default function* rootSaga() {
    return yield all([posts]);
}
