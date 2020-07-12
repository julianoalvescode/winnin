import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import './config/Reactotronconfig';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ToastContainer />
                    <Router>
                        <Routes />
                        <GlobalStyle />
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
