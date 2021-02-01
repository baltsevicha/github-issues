# API

[BACK TO THE README](../../../README.md);

Here you can find the integration of [GitHub v4 API](https://docs.github.com/en/graphql).

The main task of this package is to fetch data from Github and pass it to the application

## EXAMPLE

```js
`
query {
  repository(owner:"JedWatson", name:"classnames") { 
    issues(first: 25, status: CLOSED) {
      totalCount,
      nodes {
        id,
        number,
        title,
        comments {
          totalCount
        }
      }
      pageInfo {
        endCursor
        startCursor
      }
    }
  }
}
`;
```
