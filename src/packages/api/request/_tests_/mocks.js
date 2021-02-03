import generateRandomString from 'src/_tests_/helpers/generateRandomString';
import getOneOfThem from 'src/_tests_/helpers/getOneOfThem';

import { BASE_URL } from '../../constants';

const RANDOM_REQUEST_WITH_BODY_INPUT = {
  url: generateRandomString({ length: 8, types: 'Zz', prefix: '/' }),
  method: getOneOfThem(['POST', 'PUT', 'PATCH']),
  body: {
    [generateRandomString({ length: 8, types: 'Zz' })]: generateRandomString({
      length: 20,
      types: 'Zz0Яя',
    }),
  },
  headers: {
    token: generateRandomString({ length: 32, types: 'Zz0' }),
  },
};

export const RANDOM_REQUEST_WITH_BODY = {
  INPUT: RANDOM_REQUEST_WITH_BODY_INPUT,
  OUTPUT: [
    BASE_URL + RANDOM_REQUEST_WITH_BODY_INPUT.url,
    {
      method: RANDOM_REQUEST_WITH_BODY_INPUT.method,
      body: JSON.stringify(RANDOM_REQUEST_WITH_BODY_INPUT.body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...RANDOM_REQUEST_WITH_BODY_INPUT.headers,
      },
    },
  ],
};

const RANDOM_REQUEST_WITH_GET_PARAMS_INPUT = {
  url: generateRandomString({ length: 12, types: 'Zz', prefix: '/' }),
  method: 'GET',
  params: {
    [generateRandomString({ length: 8, types: 'Zz' })]: generateRandomString({
      length: 20,
      types: 'Zz0Яя',
    }),
  },
  headers: {
    token: generateRandomString({ length: 32, types: 'Zz0' }),
  },
};

export const RANDOM_REQUEST_WITH_GET_PARAMS = {
  INPUT: RANDOM_REQUEST_WITH_GET_PARAMS_INPUT,
  OUTPUT: [
    BASE_URL +
      RANDOM_REQUEST_WITH_GET_PARAMS_INPUT.url +
      `?${Object.keys(RANDOM_REQUEST_WITH_GET_PARAMS_INPUT.params)[0]}=${
        Object.values(RANDOM_REQUEST_WITH_GET_PARAMS_INPUT.params)[0]
      }`,
    {
      method: RANDOM_REQUEST_WITH_GET_PARAMS_INPUT.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...RANDOM_REQUEST_WITH_GET_PARAMS_INPUT.headers,
      },
      body: null,
    },
  ],
};
