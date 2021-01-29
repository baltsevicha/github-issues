import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

export default () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({ reducer, middleware: [sagaMiddleware] });

  sagaMiddleware.run(saga);

  return (Component) => () => (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
