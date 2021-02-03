/* global jest  */

export const createFetch = (response) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(response),
    })
  );
};

export const removeFetch = () => {
  fetch.mockClear();
};
