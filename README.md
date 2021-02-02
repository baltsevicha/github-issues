# Github Issues

## Install

> \$ yarn install

> \$ cd ios && pod install

## Start IOS

> \$ yarn run ios

## Run unit tests

> \$ yarn test

## Github Authorization

Github v4 API requires auth for requests.
That's why I've added an input field "Personal access token".

You can generate your own access token by [the next instruction](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

If you don't want to paste each time token to the input field, you can replace the "TOKEN" constant by the next pass: `src/constants/auth.js`

## packages

The project includes two independent packages:

- [api](./src/packages/api/README.md)
- [validations](./src/packages/validations/README.md)

The package have their own documentation

## project structure

The project architecture includes a few main rules:

- screens - folder includes main screens
- saga - includes business logic
- components - includes 3 files:
  - index.js - View
  - styles.js - Styles
  - presenter.js - Place to prepare data to view
