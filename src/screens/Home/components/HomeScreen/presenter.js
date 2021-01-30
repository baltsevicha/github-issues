import { useDispatch } from 'react-redux';

import validations from 'src/packages/validations';

import { submitForm } from '../../actions';

export default () => {
  const dispatch = useDispatch();

  return {
    initialValues: {
      organization: 'wix',
      repository: 'react-native-navigation',
    },
    validate: validations.fetchIssues,
    onSubmit: (data) => dispatch(submitForm(data)),
  };
};
