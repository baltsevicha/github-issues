function prepareGetQuery(params) {
  const query = Object.keys(params).map((key) => {
    return `${key}=${params[key]}`;
  });

  return `?${query.join('&')}`;
}

export default (requestData) => {
  const { url, method, body, headers = {}, params = {} } = requestData;

  const query = prepareGetQuery(params);

  return fetch('https://api.github.com' + url + query, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers,
  }).then((response) => response.json());
};
