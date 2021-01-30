import React from 'react';
import { Form } from 'react-final-form';

import FormComponent from '../Form';
import usePresenter from './presenter';

const Home = () => {
  const { initialValues, onSubmit, validate } = usePresenter();

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      component={FormComponent}
    />
  );
};

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: '#ffffff',
    },
    background: {
      color: '#82aaff',
    },
  },
};

export default Home;
