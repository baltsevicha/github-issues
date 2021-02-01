import React from 'react';
import { Text } from 'react-native';

import { COMPONENTS } from 'src/constants/components';

import IssuesList from '../IssuesList';
import Pagination from '../Pagination';
import usePresenter from './presenter';
import styles from './styles';

const IssuesScreen = (props) => {
  const { organization, repository, issuesCount, selectedState } = usePresenter(
    props
  );

  return (
    <>
      <Text style={styles.title}>
        <Text style={styles.bold}>{issuesCount}</Text>
        {' - '}
        <Text style={styles.bold}>{selectedState}</Text> issues for
        <Text style={styles.bold}>{organization}</Text>/
        <Text style={styles.bold}>{repository}</Text>
      </Text>
      <IssuesList />
      <Pagination />
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
    backButton: {
      color: '#ffffff',
    },
    rightButtons: [
      {
        id: 'filters',
        component: {
          name: COMPONENTS.ISSUES_FILTERS,
        },
      },
    ],
  },
};

export default IssuesScreen;
