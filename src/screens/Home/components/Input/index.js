import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';

const Input = ({
  label,
  autoFocus = false,
  input: { name, value, onChange },
  meta: { error },
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoFocus={autoFocus}
        name={name}
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
