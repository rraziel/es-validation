# es-validation

[![Version](https://img.shields.io/npm/v/@es-validation/decorators.svg?maxAge=2592000&label=Version&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@es-validation/decorators)
[![Downloads](https://img.shields.io/npm/dt/@es-validation/decorators.svg?maxAge=2592000&label=Downloads&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@es-validation/decorators)

[![AppVeyor tests](https://img.shields.io/appveyor/tests/rraziel/es-validation/master.svg?label=Tests&style=for-the-badge)](https://ci.appveyor.com/project/rraziel/es-validation/build/tests)
[![Codecov](https://img.shields.io/codecov/c/github/rraziel/es-validation.svg?label=Coverage&style=for-the-badge)](https://codecov.io/gh/rraziel/es-validation)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/rraziel/es-validation.svg?label=Maintainability&style=for-the-badge)](https://codeclimate.com/github/rraziel/es-validation)
[![Code Climate](https://img.shields.io/codeclimate/issues/rraziel/es-validation.svg?label=Code%20Issues&style=for-the-badge)](https://codeclimate.com/github/rraziel/es-validation/issues)

A set of constraint validation decorators inspired by [JSR-303](http://beanvalidation.org/1.0/), [JSR-349](http://beanvalidation.org/1.1/) and [JSR-380](http://beanvalidation.org/2.0/).

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Decorators](#decorators)
- [Validation](#validation)
  - [Validator](#validator)
  - [Date Provider](#date-provider)
- [Development](#development)

## Introduction

The library makes it possible to:

- define constraints on properties
- define constraints on parameters
- define constraints on returned values

For a complete description, refer to the [documentation](doc/README.md).

A [sample project](packages/sample) is also available.

## Getting Started

The modules can be installed using `npm`:

```
npm install @es-validation/decorators @es-validation/validator --save
```

Or using `yarn`:

```
yarn add @es-validation/decorators @es-validation/validator
```

## Decorators

A number of decorators are available, and can be used on properties, parameters or functions. In the later case, the constraint applies to the returned values.

| Name                 | Boolean | Number | String | Date | Container | Object | Description                                                   |
|:---------------------|:--------|:-------|:-------|:-----|:----------|:-------|:--------------------------------------------------------------|
| `@Constraint`        | ✔️      | ✔️    | ✔️     | ✔️  | ✔️        | ✔️    | Must comply to an arbitrary user-defined constraint.          |
| `@Defined`           | ✔️      | ✔️    | ✔️     | ✔️  | ✔️        | ✔️    | Must not be `undefined`.                                      |
| `@ElementConstraint` | ❌      | ❌    | ❌     | ❌  | ✔️        | ❌    | List constraints applied to container elements.               |
| `@Undefined`         | ✔️      | ✔️    | ✔️     | ✔️  | ✔️        | ✔️    | Must be `undefined`.                                          |
| `@NotNull`           | ✔️      | ✔️    | ✔️     | ✔️  | ✔️        | ✔️    | Must not be `null`.                                           |
| `@Null`              | ✔️      | ✔️    | ✔️     | ✔️  | ✔️        | ✔️    | Must be `null`.                                               |
| `@True`              | ✔️      | ❌    | ❌     | ❌  | ❌        | ❌    | Must be `true`.                                               |
| `@False`             | ✔️      | ❌    | ❌     | ❌  | ❌        | ❌    | Must be `false`.                                              |
| `@NotBlank`          | ❌      | ❌    | ✔️     | ❌  | ❌        | ❌    | Must contain at least one non-space character.                |
| `@NotEmpty`          | ❌      | ❌    | ✔️     | ❌  | ✔️        | ❌    | Must not be empty.                                            |
| `@Size()`            | ❌      | ❌    | ✔️     | ❌  | ✔️        | ❌    | Must be within a size range.                                  |
| `@Pattern()`         | ❌      | ❌    | ✔️     | ❌  | ❌        | ❌    | Must match a regular expression.                              |
| `@Max()`             | ❌      | ✔️    | ✔️¹    | ❌  | ❌        | ❌    | Must be a number that is lower than or equal to a maximum.    |
| `@Min()`             | ❌      | ✔️    | ✔️¹    | ❌  | ❌        | ❌    | Must be a number that is higher than or equal to a minimum.   |
| `@PositiveOrZero`    | ❌      | ✔️    | ✔️¹    | ❌  | ❌        | ❌    | Must be a number that is higher than or equal to `0`.         |
| `@Positive`          | ❌      | ✔️    | ✔️¹    | ❌  | ❌        | ❌    | Must be a number that is higher than `0`.                     |
| `@NegativeOrZero`    | ❌      | ✔️    |️ ✔️¹    | ❌  | ❌        | ❌    | Must be a number that is lower than or equal to `0`.          |
| `@Negative`          | ❌      | ✔️    | ✔️¹    | ❌  | ❌        | ❌    | Must be a number that is lower than `0`.                      |
| `@Digits()`          | ❌      | ✔️    | ✔️¹    | ❌  | ❌        | ❌    | Must be a number with limited integral and fractional digits. |
| `@FutureOrPresent`   | ❌      | ❌    | ✔️²    | ✔️  | ❌        | ❌    | Must be a date set in the future or now.                      |
| `@Future`            | ❌      | ❌    | ✔️²    | ✔️  | ❌        | ❌    | Must be a date set in the future.                             |
| `@PastOrPresent`     | ❌      | ❌    | ✔️²    | ✔️  | ❌        | ❌    | Must be a date set in the past or now.                        |
| `@Past`              | ❌      | ❌    | ✔️²    | ✔️  | ❌        | ❌    | Must be a date set in the past.                               |
| `@Email`             | ❌      | ❌    | ✔️     | ❌  | ❌        | ❌    | Must be a valid email address.                                |
| `@Valid`             | ❌      | ❌    | ❌     | ❌  | ✔️        | ✔️    | Properties must be validated.                                 |

¹ Strings are validated as base-10 numbers when the validator is configured with `stringAsNumber` (disabled by default)

² Strings are validated as ISO-8601 datetimes when the validator is configured with `stringAsDate` (disabled by default)

## Validation

The `@es-validation/validator` module provides validation based on the `@es-validation/decorators` decorators.

### Validator

The `Validator` class is used to perform constraint validation. The following validation methods are available:

| Method                  | Description                              |
|:------------------------|:-----------------------------------------|
| `validate()`            | Validate an object's properties.         |
| `validateProperty()`    | Validate a specific object property.     |
| `validateValue()`       | Validate a value.                        |
| `validateParameters()`  | Validate a function call's parameters.   |
| `validateReturnValue()` | Validate a function call's return value. |

### Date Provider

The `DateProvider` interface is used to retrieve the current time, which is necessary for various decorators (`@Past`, `@Future`, etc.). It contains a single method:

| Method      | Description           |
|:------------|:----------------------|
| `getDate()` | Get the current time. |

There is generally no interaction with this interface from user code, unless new custom decorators dealing with time are defined. In this scenario, the `DateProvider` instance can be obtained through `ConstraintValidationContext`'s `getDateProvider()` method.

## Development

[![AppVeyor](https://img.shields.io/appveyor/ci/rraziel/es-validation/master.svg?label=Win32&style=for-the-badge&logo=appveyor)](https://ci.appveyor.com/project/rraziel/es-validation)
[![CircleCI](https://img.shields.io/circleci/project/github/rraziel/es-validation/master.svg?label=MacOS&style=for-the-badge&logo=circleci)](https://circleci.com/gh/rraziel/es-validation)
[![Travis CI](https://img.shields.io/travis/rraziel/es-validation/master.svg?label=Linux&style=for-the-badge&logo=travis)](https://travis-ci.org/rraziel/es-validation)

The project requires `lerna` and `yarn` to be available globally.

Bootstrap the project:

```
yarn bootstrap
```

Build the project:

```
yarn build
```

Execute all tests:

```
yarn test
```
