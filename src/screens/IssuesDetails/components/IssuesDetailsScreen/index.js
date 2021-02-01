import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import usePresenter from './presenter';
import styles from './styles';

const IssuesDetailsScreen = (props) => {
  const { issue, isFavoriteIssue, onClick } = usePresenter(props);

  if (!issue) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>#{issue.number}</Text>
      <Text style={styles.title}>{issue.title}</Text>
      <Text>comments: {issue.comments.totalCount}</Text>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>
          {isFavoriteIssue ? 'REMOVE FROM FAVORITE' : 'ADD TO FAVORITE'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

IssuesDetailsScreen.options = {
  topBar: {
    title: {
      text: 'Issue Details',
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

export default IssuesDetailsScreen;
