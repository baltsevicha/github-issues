import { SERVER_ERRORS } from 'src/packages/api';

export default ({ errorMessage }) => {
  let errorText = 'Something went wrong';

  switch (errorMessage) {
    case SERVER_ERRORS.NOT_FOUND: {
      errorText = 'Repository not found';
      break;
    }
  }

  return { errorText };
};
