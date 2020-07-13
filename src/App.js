import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import './config/Reactotronconfig';

import { store, persistor } from './store';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ToastContainer />
                    <Router>
                        <Routes />
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
