export default (data) => {
  let errors = {};

  if (!data.organization) {
    errors.organization = 'Required field';
  }

  if (!data.repository) {
    errors.repository = 'Required field';
  }

  return errors;
};
