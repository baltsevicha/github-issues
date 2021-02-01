import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const IssuesList = () => {
  const { issues, listRef, goToIssue } = usePresenter();

  return (
    <FlatList
      ref={listRef}
      data={issues}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.container} onPress={goToIssue(item)}>
            <Text style={styles.number}>#{item.number}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>comments: {item.comments.totalCount}</Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default IssuesList;
