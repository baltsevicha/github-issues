export default (requestData) => {
  const { url, method, body, headers = {} } = requestData;

  return fetch('https://api.github.com' + url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers,
  }).then((response) => response.json());
};
