import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Form, Field } from 'react-final-form';

import Input from './Input';
import styles from './styles';

const Home = () => {
  return (
    <Form
      initialValues={{ organization: 'rails', repository: 'rails' }}
      onSubmit={(data) => console.log('[onSubmit] data = ', data)}
      validate={(data) => {
        console.log('[validate] dada = ', data);
        return true;
      }}
      render={({ handleSubmit }) => (
        <View>
          <Field label="Organization" name="organization" component={Input} />
          <Field label="Repository" name="repository" component={Input} />
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Fetch Issues</Text>
          </TouchableOpacity>
        </View>
      )}
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
