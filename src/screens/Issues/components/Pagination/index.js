import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const Pagination = () => {
  const {
    hasPagination,
    paginationList,
    isDisabledPagination,
  } = usePresenter();

  if (!hasPagination) {
    return null;
  }

  return (
    <View style={styles.container}>
      {paginationList.map((item) => {
        if (item.onClick) {
          return (
            <TouchableOpacity
              key={item.key}
              onPress={item.onClick}
              style={[styles.item, styles.border]}
              disabled={isDisabledPagination}
            >
              {item.isLoading ? (
                <ActivityIndicator color="#FF0000" />
              ) : (
                <Text style={styles.itemText}>{item.title}</Text>
              )}
            </TouchableOpacity>
          );
        }

        return (
          <View key={item.key} style={styles.item}>
            <Text
              style={[styles.itemText, item.isActive && styles.activeItemText]}
            >
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Pagination;
