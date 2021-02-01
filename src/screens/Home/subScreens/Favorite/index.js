import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const Favorite = (props) => {
  const { favoriteIssues, goToIssue } = usePresenter(props);

  return (
    <FlatList
      data={favoriteIssues}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.container} onPress={goToIssue(item)}>
            <Text style={styles.number}>#{item.number}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>comments: {item.comments.totalCount}</Text>
          </TouchableOpacity>
        );
      }}
      ListEmptyComponent={() => <Text style={styles.noItems}>NO ISSUES</Text>}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

Favorite.options = {
  topBar: {
    title: {
      text: 'Favorite',
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

export default Favorite;
