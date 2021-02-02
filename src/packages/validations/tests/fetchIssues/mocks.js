import generateRandomString from 'src/tests/helpers/generateRandomString';

export const EMPTY_OBJECT = {
  INPUT: {},
  OUTPUT: {
    organization: 'Required field',
    repository: 'Required field',
    token: 'Required field',
  },
};

export const EMPTY_FIELDS = {
  INPUT: {
    organization: '',
    repository: '',
    token: '',
  },
  OUTPUT: {
    organization: 'Required field',
    repository: 'Required field',
    token: 'Required field',
  },
};

export const EMPTY_ORGANIZATION_AND_REPOSITORY = {
  INPUT: {
    organization: '',
    repository: '',
    token: generateRandomString({ length: 20, types: 'Zz0' }),
  },
  OUTPUT: {
    organization: 'Required field',
    repository: 'Required field',
  },
};

export const EMPTY_ORGANIZATION_AND_TOKEN = {
  INPUT: {
    organization: '',
    repository: generateRandomString({ length: 12, types: 'Zz' }),
    token: '',
  },
  OUTPUT: {
    organization: 'Required field',
    token: 'Required field',
  },
};

export const EMPTY_REPOSITORY_AND_TOKEN = {
  INPUT: {
    organization: generateRandomString({ length: 10, types: 'Zz' }),
    repository: '',
    token: '',
  },
  OUTPUT: {
    repository: 'Required field',
    token: 'Required field',
  },
};

export const EMPTY_ORGANIZATION = {
  INPUT: {
    organization: '',
    repository: generateRandomString({ length: 12, types: 'Zz' }),
    token: generateRandomString({ length: 20, types: 'Zz0' }),
  },
  OUTPUT: {
    organization: 'Required field',
  },
};

export const EMPTY_REPOSITORY = {
  INPUT: {
    organization: generateRandomString({ length: 10, types: 'Zz' }),
    repository: '',
    token: generateRandomString({ length: 20, types: 'Zz0' }),
  },
  OUTPUT: {
    repository: 'Required field',
  },
};

export const EMPTY_TOKEN = {
  INPUT: {
    organization: generateRandomString({ length: 10, types: 'Zz' }),
    repository: generateRandomString({ length: 12, types: 'Zz' }),
    token: '',
  },
  OUTPUT: {
    token: 'Required field',
  },
};

export const NO_ERRORS = {
  INPUT: {
    organization: generateRandomString({ length: 10, types: 'Zz' }),
    repository: generateRandomString({ length: 12, types: 'Zz' }),
    token: generateRandomString({ length: 20, types: 'Zz0' }),
  },
  OUTPUT: {},
};
