# Decorators

- [Overview](#overview)
- [Base Decorators](#base-decorators)
  - [@Constraint](#constraint)
  - [@Defined](#defined)
  - [@Undefined](#undefined)
  - [@NotNull](#not-null)
  - [@Null](#null)
- [Boolean Decorators](#boolean-decorators)
  - [@True](#true)
  - [@False](#false)
- [String & Container Decorators](#string-container-decorators)
  - [@NotBlank](#not-blank)
  - [@NotEmpty](#not-empty)
  - [@Size](#size)
- [Numeric Decorators](#numeric-decorators)

## Overview

| Name               | Description                                                   |
|:-------------------|:--------------------------------------------------------------|
| `@Constraint`      | Must comply to an arbitrary user-defined constraint.          |
| `@Defined`         | Must not be `undefined`.                                      |
| `@Undefined`       | Must be `undefined`.                                          |
| `@NotNull`         | Must not be `null`.                                           |
| `@Null`            | Must be `null`.                                               |
| `@True`            | Must be `true`.                                               |
| `@False`           | Must be `false`.                                              |
| `@NotBlank`        | Must contain at least one non-space character.                |
| `@NotEmpty`        | Must not be empty.                                            |
| `@Size()`          | Must be within a size range.                                  |
| `@Max()`           | Must be a number that is lower than or equal to a maximum.    |
| `@Min()`           | Must be a number that is higher than or equal to a minimum.   |
| `@PositiveOrZero`  | Must be a number that is higher than or equal to `0`.         |
| `@Positive`        | Must be a number that is higher than `0`.                     |
| `@NegativeOrZero`  | Must be a number that is lower than or equal to `0`.          |
| `@Negative`        | Must be a number that is lower than `0`.                      |
| `@Digits()`        | Must be a number with limited integral and fractional digits. |
| `@FutureOrPresent` | Must be a date set in the future or now.                      |
| `@Future`          | Must be a date set in the future.                             |
| `@PastOrPresent`   | Must be a date set in the past or now.                        |
| `@Past`            | Must be a date set in the past.                               |
| `@Pattern()`       | Must match a regular expression.                              |
| `@Email`           | Must be a valid email address.                                |
| `@Valid`           | Properties must be validated.                                 |

¹ Strings are validated as base-10 numbers when the validator is configured with `stringAsNumber` (disabled by default)

² Strings are validated as ISO-8601 datetimes when the validator is configured with `stringAsDate` (disabled by default)

## Base Decorators

### @Constraint

Apply a user-defined constraint.

| Type      | Support |
|-----------|:--------|
| Boolean   | ✔️      |
| Number    | ✔️      |
| String    | ✔️      |
| Date      | ✔️      |
| Container | ✔️      |
| Object    | ✔️      |

```typescript
class Example {
    @Constraint(value => value.xyz > 4)
    property: ExampleProperty;
}
```

### @Defined

TODO.

### @Undefined

TODO.

### @Null

TODO.

### @NotNull

TODO.

## Boolean Decorators

Boolean decorators apply to boolean properties, boolean parameters and functions that return a `boolean`.

### @True

The validated value must be `true`.

| Type      | Support |
|-----------|:--------|
| Boolean   | ✔️      |
| Number    | ❌      |
| String    | ❌      |
| Date      | ❌      |
| Container | ❌      |
| Object    | ❌      |

```typescript
class Example {
    method(@True parameter: boolean): void { }
}
```

### @False

The validated value must be `false`.

| Type      | Support |
|-----------|:--------|
| Boolean   | ✔️      |
| Number    | ❌      |
| String    | ❌      |
| Date      | ❌      |
| Container | ❌      |
| Object    | ❌      |

```typescript
class Example {
    method(@False parameter: boolean): void { }
}
```
