# Validations

Here you can find validations for all forms in the project.

Validation is just a function which receive object with data as a first parameter,
and return an object with errors

## Example

```js
// fetchIssues.js

// data = { organization: 'tesla', repository: '' }

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

// errors = { repository: 'Required field' }
```
