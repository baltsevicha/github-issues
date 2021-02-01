function prepareGetQuery(params) {
  const query = Object.keys(params).map((key) => {
    return `${key}=${params[key]}`;
  });

  if (query.length > 0) {
    return `?${query.join('&')}`;
  }

  return '';
}

export default (requestData) => {
  const { url, method, body, headers = {}, params = {} } = requestData;

  const query = prepareGetQuery(params);

  return fetch('https://api.github.com' + url + query, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
  }).then((response) => response.json());
};
