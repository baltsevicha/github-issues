import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import usePresenter from './presenter';
import styles from './styles';

const Filters = () => {
  const {
    selectedState,
    selectedSort,
    onStateChange,
    onSortChange,
    states,
    sorts,
  } = usePresenter();

  return (
    <View>
      <Text style={styles.label}>State:</Text>
      <Picker selectedValue={selectedState} onValueChange={onStateChange}>
        {states.map((item) => {
          return (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>
      <Text style={styles.label}>Sort by:</Text>
      <Picker selectedValue={selectedSort} onValueChange={onSortChange}>
        {sorts.map((item) => {
          return (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

Filters.options = {
  topBar: {
    title: {
      text: 'Filters',
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

export default Filters;
