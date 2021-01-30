import { useSelector } from 'react-redux';

import selectors from '../../selectors';

export default ({ errors, handleSubmit }) => {
  const isLoading = useSelector(selectors.getIsLoading);

  return {
    isLoading,
    handleSubmit,
    isDisabledSubmit: isLoading || Object.keys(errors).length > 0,
  };
};
