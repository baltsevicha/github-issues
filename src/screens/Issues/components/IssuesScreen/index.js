import React from 'react';
import { Text } from 'react-native';

import IssuesList from '../IssuesList';
import usePresenter from './presenter';
import styles from './styles';

const IssuesScreen = (props) => {
  const { organization, repository, issuesCount } = usePresenter(props);

  return (
    <>
      <Text style={styles.title}>
        <Text style={styles.bold}>{issuesCount}</Text> open issues for{' '}
        <Text style={styles.bold}>{organization}</Text>/
        <Text style={styles.bold}>{repository}</Text>
      </Text>
      <IssuesList />
    </>
  );
};

IssuesScreen.options = {
  topBar: {
    title: {
      text: 'Issues',
      color: '#ffffff',
    },
    background: {
      color: '#82aaff',
    },
  },
};

export default IssuesScreen;
