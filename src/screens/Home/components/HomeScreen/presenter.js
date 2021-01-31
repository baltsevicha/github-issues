import { useDispatch } from 'react-redux';

import validations from 'src/packages/validations';

import { submitForm } from '../../actions';

export default ({ componentId }) => {
  const dispatch = useDispatch();

  return {
    initialValues: {
      organization: 'JedWatson',
      repository: 'classnames',
    },
    validate: validations.fetchIssues,
    onSubmit: (data) =>
      dispatch(
        submitForm({
          componentId,
          organization: data.organization,
          repository: data.repository,
        })
      ),
  };
};
