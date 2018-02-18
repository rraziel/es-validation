# es-validation

A set of validation decorators inspired by [JSR-303](http://beanvalidation.org/1.0/), [JSR-349](http://beanvalidation.org/1.1/) and [JSR-380](http://beanvalidation.org/2.0/).

The library makes it possible to:

- define constraints on fields
- define constraints on parameters
- define constraints on returned values

The library only provides an API to perform validation, but no implementation.

The following known implementations are available:

- [es-validation-validator](https://github.com/rraziel/es-validation-validator)

## Installation

The module can be installed through npm:

```
npm install es-validation --save
```

## Decorators

A number of decorators are available, and can be used on fields, parameters or functions. In the later case, the constraint is placed on the method's returned values.

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
| `@Valid`           | -                  | -                  | -                  | -                  | :heavy_check_mark: | Fields must be validated (also applies to `Object`).                  |

## Validation

The module only provides an interface for validation, but no actual implementation. The implementation must be defined within a separate module.

### Validator

The `Validator` interface is used to perform constraint validation. The following methods are available:

| Method                  | Description                              |
|:------------------------|:-----------------------------------------|
| `validate()`            | Validate an object's properties.         |
| `validateProperty()`    | Validate a specific object property.     |
| `validateValue()`       | Validate a value.                        |
| `validateParameters()`  | Validate a function call's parameters.   |
| `validateReturnValue()` | Validate a function call's return value. |

A `Validator` instance is obtained through a `ValidatorFactory`

### Validator Factory

TODO.

## Development

The module can be built using the following command:

```
npm run build
```

It is also possible to keep unit tests executing as a background task:

```
npm run test
```
