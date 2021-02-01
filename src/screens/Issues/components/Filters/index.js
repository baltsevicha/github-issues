import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const Filters = () => {
  const { onClick } = usePresenter();

  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.text}>Filters</Text>
    </TouchableOpacity>
  );
};

export default Filters;
