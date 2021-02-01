import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const Favorite = () => {
  const { onClick } = usePresenter();

  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.text}>Favorite</Text>
    </TouchableOpacity>
  );
};

export default Favorite;
