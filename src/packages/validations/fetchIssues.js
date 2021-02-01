export default (data) => {
  let errors = {};

  if (!data.organization) {
    errors.organization = 'Required field';
  }

  if (!data.repository) {
    errors.repository = 'Required field';
  }

  if (!data.token) {
    errors.token = 'Required field';
  }

  return errors;
};
