import { useDispatch } from 'react-redux';

import validations from 'src/packages/validations';
import { fetchIssuesRequest } from 'src/actions/issues';

export default () => {
  const dispatch = useDispatch();

  return {
    initialValues: {
      organization: 'wix',
      repository: 'react-native-navigation',
    },
    onSubmit: (data) => dispatch(fetchIssuesRequest(data)),
    validate: validations.fetchIssues,
  };
};
