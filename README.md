# es-validation

[![AppVeyor](https://img.shields.io/appveyor/ci/rraziel/es-validation/master.svg?label=Win32&style=flat)](https://ci.appveyor.com/project/rraziel/es-validation)
[![CircleCI](https://img.shields.io/circleci/project/github/rraziel/es-validation/master.svg?label=MacOS&style=flat)](https://circleci.com/gh/rraziel/es-validation)
[![Travis CI](https://img.shields.io/travis/rraziel/es-validation/master.svg?label=Linux&style=flat)](https://travis-ci.org/rraziel/es-validation)
[![AppVeyor tests](https://img.shields.io/appveyor/tests/rraziel/es-validation/master.svg?label=Tests&style=flat)](https://ci.appveyor.com/project/rraziel/es-validation/build/tests)
[![Codecov](https://img.shields.io/codecov/c/github/rraziel/es-validation.svg?label=Coverage&style=flat)](https://codecov.io/gh/rraziel/es-validation)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/rraziel/es-validation.svg?label=Maintainability&style=flat)](https://codeclimate.com/github/rraziel/es-validation)
[![Code Climate](https://img.shields.io/codeclimate/issues/github/rraziel/es-validation.svg?label=Code%20Issues&style=flat)](https://codeclimate.com/github/rraziel/es-validation/issues)

[![Dependencies](https://img.shields.io/david/rraziel/es-validation.svg?label=Dependencies&style=flat)](https://david-dm.org/rraziel/es-validation)
[![Development dependencies](https://img.shields.io/david/dev/rraziel/es-validation.svg?label=Dev%20Dependencies&style=flat)](https://david-dm.org/rraziel/es-validation?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/rraziel/es-validation/badge.svg)](https://snyk.io/test/github/rraziel/es-validation)
[![Greenkeeper](https://badges.greenkeeper.io/rraziel/es-validation.svg)](https://greenkeeper.io/)

A set of constraint validation decorators inspired by [JSR-303](http://beanvalidation.org/1.0/), [JSR-349](http://beanvalidation.org/1.1/) and [JSR-380](http://beanvalidation.org/2.0/).

The library makes it possible to:

- define constraints on properties
- define constraints on parameters
- define constraints on returned values

## Installation

The module can be installed through npm:

```
npm install es-validation --save
```

## Decorators

A number of decorators are available, and can be used on properties, parameters or functions. In the later case, the constraint is placed on the method's returned values.

`String` elements are converted to `Boolean`, `Number` or `Date`, depending on what type the constraint normally applies to. When relevant, `Object` elements are converted as well through `toString()`.

| Name               | Boolean            | Number             | String             | Date               | Map/Array          | Description                                                            |
|:-------------------|:-------------------|:-------------------|:-------------------|:-------------------|:-------------------|:-----------------------------------------------------------------------|
| `@AssertFalse`     | :heavy_check_mark: | -                  | :heavy_check_mark: | -                  | -                  | Must be `false`.                                                       |
| `@AssertTrue`      | :heavy_check_mark: | -                  | :heavy_check_mark: | -                  | -                  | Must be `true`.                                                        |
| `@NotNull`         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | Must not be `null`.                                                    |
| `@Null`            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | Must be `null`.                                                        |
| `@NotBlank`        | -                  | -                  | :heavy_check_mark: | -                  | -                  | Must not be `null` and contain at least one non-space character.       |
| `@NotEmpty`        | -                  | -                  | :heavy_check_mark: | -                  | :heavy_check_mark: | Must not be empty (string length, array/map size).                     |
| `@Size()`          | -                  | -                  | :heavy_check_mark: | -                  | :heavy_check_mark: | Must be within a size range (string length, array/map size).           |
| `@Pattern()`       | -                  | -                  | :heavy_check_mark: | -                  | -                  | Must match a regular expression.                                       |
| `@Max()`           | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number that is lower than or equal to a maximum.             |
| `@Min()`           | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number that is higher than or equal to a minimum.            |
| `@PositiveOrZero`  | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number that is higher than or equal to `0`.                  |
| `@Positive`        | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number that is higher than `0`.                              |
| `@NegativeOrZero`  | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number that is lower than or equal to `0`.                   |
| `@Negative`        | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number that is lower than `0`.                               |
| `@Digits()`        | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | -                  | Must be a number with a set maximum of integral and fractional digits. |
| `@FutureOrPresent` | -                  | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | Must be a date set in the future or now.                               |
| `@Future`          | -                  | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | Must be a date set in the future.                                      |
| `@PastOrPresent`   | -                  | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | Must be a date set in the past or now.                                 |
| `@Past`            | -                  | -                  | :heavy_check_mark: | :heavy_check_mark: | -                  | Must be a date set in the past.                                        |
| `@Email`           | -                  | -                  | :heavy_check_mark: | -                  | -                  | Must be a valid email address.                                         |
| `@Valid`           | -                  | -                  | -                  | -                  | :heavy_check_mark: | Properties must be validated (also applies to `Object`).               |

## Validation

The module only provides an interface for validation, but no actual implementation. The implementation must be defined within a separate module.

The following known implementations are available:

- [es-validation-validator](https://github.com/rraziel/es-validation-validator) (reference implementation)

### Validator Factory

The `ValidatorFactory` interface is the entry-point for user code to obtain validator instances, mainly through the `getValidator()` method.

### Validator

The `Validator` interface is used to perform constraint validation. The following methods are available:

| Method                  | Description                              |
|:------------------------|:-----------------------------------------|
| `validate()`            | Validate an object's properties.         |
| `validateProperty()`    | Validate a specific object property.     |
| `validateValue()`       | Validate a value.                        |
| `validateParameters()`  | Validate a function call's parameters.   |
| `validateReturnValue()` | Validate a function call's return value. |

A `Validator` instance is obtained through a `ValidatorFactory`.

### Date Provider

The `DateProvider` interface is used to retrieve the current time, which is necessary for various decorators (`@Past`, `@Future`, etc.). It contains a single method:

| Method      | Description           |
|:------------|:----------------------|
| `getDate()` | Get the current time. |

There is generally no interaction with this interface from user code, unless new custom decorators dealing with time are defined. In this scenario, the `DateProvider` instance can be obtained through `ConstraintValidationContext`'s `getDateProvider()` method.

## Development

The module can be built using the following command:

```
npm run build
```

It is also possible to keep unit tests executing as a background task:

```
npm run test
```
