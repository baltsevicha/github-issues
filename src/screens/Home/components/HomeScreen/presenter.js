import { useDispatch } from 'react-redux';

import validations from 'src/packages/validations';
import { TOKEN } from 'src/packages/api';

import { submitForm } from '../../actions';

export default ({ componentId }) => {
  const dispatch = useDispatch();

  return {
    initialValues: {
      organization: 'JedWatson',
      repository: 'classnames',
      token: TOKEN,
    },
    validate: validations.fetchIssues,
    onSubmit: (data) =>
      dispatch(
        submitForm({
          componentId,
          organization: data.organization,
          repository: data.repository,
          token: data.token,
        })
      ),
  };
};
