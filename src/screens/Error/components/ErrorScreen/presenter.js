import { SERVER_ERRORS } from 'src/packages/api';

export default ({ errorMessage }) => {
  let errorText = 'Something went wrong';

  switch (errorMessage) {
    case SERVER_ERRORS.NOT_FOUND: {
      errorText = 'Repository not found';
      break;
    }
    case SERVER_ERRORS.BAD_CREDENTIALS: {
      errorText = 'Bad credentials';
      break;
    }
  }

  return { errorText };
};
