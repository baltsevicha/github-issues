import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(saga);

export const ProviderWrapper = (Component) => () => (props) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);
