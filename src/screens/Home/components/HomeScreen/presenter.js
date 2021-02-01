import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import validations from 'src/packages/validations';
import { TOKEN } from 'src/packages/api';

import { submitForm, saveComponentId } from '../../actions';

export default ({ componentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveComponentId(componentId));
    return () => {
      dispatch(saveComponentId(null));
    };
  }, []);

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
