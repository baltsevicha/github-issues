import React from 'react';
import { Form } from 'react-final-form';

import { COMPONENTS } from 'src/constants/components';

import FormComponent from '../Form';
import usePresenter from './presenter';

const Home = (props) => {
  const { initialValues, onSubmit, validate } = usePresenter(props);

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
    rightButtons: [
      {
        id: 'filters',
        component: {
          name: COMPONENTS.FAVORITE,
        },
      },
    ],
  },
};

export default Home;
