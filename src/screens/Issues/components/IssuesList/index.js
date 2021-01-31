import React from 'react';
import { FlatList, View, Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const IssuesList = () => {
  const { issues } = usePresenter();

  return (
    <FlatList
      data={issues}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.number}>#{item.number}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>comments: {item.comments}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default IssuesList;
