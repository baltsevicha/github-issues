import validations from '../../index';

import {
  EMPTY_OBJECT,
  EMPTY_FIELDS,
  EMPTY_ORGANIZATION_AND_REPOSITORY,
  EMPTY_ORGANIZATION_AND_TOKEN,
  EMPTY_REPOSITORY_AND_TOKEN,
  EMPTY_ORGANIZATION,
  EMPTY_REPOSITORY,
  EMPTY_TOKEN,
  NO_ERRORS,
} from './mocks';

describe('[package][validations] fetchIssues', () => {
  it('empty object', () => {
    expect(validations.fetchIssues(EMPTY_OBJECT.INPUT)).toStrictEqual(
      EMPTY_OBJECT.OUTPUT
    );
  });

  it('object with empty fields', () => {
    expect(validations.fetchIssues(EMPTY_FIELDS.INPUT)).toStrictEqual(
      EMPTY_FIELDS.OUTPUT
    );
  });

  it('object with empty organization and repository', () => {
    expect(
      validations.fetchIssues(EMPTY_ORGANIZATION_AND_REPOSITORY.INPUT)
    ).toStrictEqual(EMPTY_ORGANIZATION_AND_REPOSITORY.OUTPUT);
  });

  it('object with empty organization and token', () => {
    expect(
      validations.fetchIssues(EMPTY_ORGANIZATION_AND_TOKEN.INPUT)
    ).toStrictEqual(EMPTY_ORGANIZATION_AND_TOKEN.OUTPUT);
  });

  it('object with empty repository and token', () => {
    expect(
      validations.fetchIssues(EMPTY_REPOSITORY_AND_TOKEN.INPUT)
    ).toStrictEqual(EMPTY_REPOSITORY_AND_TOKEN.OUTPUT);
  });

  it('object with empty organization', () => {
    expect(validations.fetchIssues(EMPTY_ORGANIZATION.INPUT)).toStrictEqual(
      EMPTY_ORGANIZATION.OUTPUT
    );
  });

  it('object with empty repository', () => {
    expect(validations.fetchIssues(EMPTY_REPOSITORY.INPUT)).toStrictEqual(
      EMPTY_REPOSITORY.OUTPUT
    );
  });

  it('object with empty token', () => {
    expect(validations.fetchIssues(EMPTY_TOKEN.INPUT)).toStrictEqual(
      EMPTY_TOKEN.OUTPUT
    );
  });

  it('no errors', () => {
    expect(validations.fetchIssues(NO_ERRORS.INPUT)).toStrictEqual(
      NO_ERRORS.OUTPUT
    );
  });
});
