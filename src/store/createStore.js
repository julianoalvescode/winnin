import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlawres) => {
    const enhancer =
        process.env.NODE_ENV === 'development'
            ? compose(
                  console.tron.createEnhancer(),
                  applyMiddleware(...middlawres)
              )
            : applyMiddleware(...middlawres);

    return createStore(reducers, enhancer);
};
