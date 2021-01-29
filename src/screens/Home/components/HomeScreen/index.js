import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Form, Field } from 'react-final-form';

import validations from 'src/packages/validations';

import Input from './Input';
import styles from './styles';

const Home = () => {
  return (
    <Form
      initialValues={{ organization: 'rails', repository: 'rails' }}
      onSubmit={(data) => console.log('[onSubmit] data = ', data)}
      validate={validations.fetchIssues}
      render={({ handleSubmit, errors }) => {
        const isDisabledSubmit = Object.keys(errors).length > 0;

        return (
          <View>
            <Field label="Organization" name="organization" component={Input} />
            <Field label="Repository" name="repository" component={Input} />
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.submit, isDisabledSubmit && styles.disabledSubmit]}
              disabled={isDisabledSubmit}
            >
              <Text style={styles.submitText}>Fetch Issues</Text>
            </TouchableOpacity>
          </View>
        );
      }}
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
