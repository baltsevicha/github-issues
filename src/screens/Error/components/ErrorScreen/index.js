import React from 'react';
import { Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const ErrorScreen = (props) => {
  const { errorText } = usePresenter(props);

  return <Text style={styles.container}>{errorText}</Text>;
};

ErrorScreen.options = {
  topBar: {
    title: {
      text: 'Error',
      color: '#ffffff',
    },
    background: {
      color: '#82aaff',
    },
    backButton: {
      color: '#ffffff',
    },
  },
};

export default ErrorScreen;
