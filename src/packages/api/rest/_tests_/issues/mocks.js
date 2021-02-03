export const SUCCESS_RESPONSE = {
  data: {
    repository: {
      issues: {
        totalCount: 0,
        nodes: [],
        pageInfo: {},
      },
    },
  },
};

export const REPOSITORY_NOT_FOUND_RESPONSE = {
  errors: [
    {
      type: 'NOT_FOUND',
    },
  ],
};

export const BAD_CREDENTIALS_RESPONSE = {
  message: 'Bad credentials',
};
