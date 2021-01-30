import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { Field } from 'react-final-form';

import Input from '../Input';
import usePresenter from './presenter';
import styles from './styles';

const Form = (props) => {
  const { isLoading, isDisabledSubmit, handleSubmit } = usePresenter(props);

  return (
    <View>
      <Field label="Organization" name="organization" component={Input} />
      <Field label="Repository" name="repository" component={Input} />
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.submit, isDisabledSubmit && styles.disabledSubmit]}
        disabled={isDisabledSubmit}
        activeOpacity={0.7}
      >
        {isLoading ? (
          <ActivityIndicator color="#FF0000" />
        ) : (
          <Text style={styles.submitText}>Fetch Issues</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Form;
