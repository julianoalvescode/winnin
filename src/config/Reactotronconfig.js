import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
    const tron = Reactotron.configure()
        .use(reactotronRedux()) // Config for Redux
        .use(reactotronSaga()) // Config for Redux Saga
        .connect();

    tron.clear();

    console.tron = tron;
}
