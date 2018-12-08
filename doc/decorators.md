# Decorators

- [Overview](#overview)
- [Base Decorators](#base-decorators)
  - [@Defined](#defined)
  - [@Undefined](#undefined)
  - [@NotNull](#not-null)
  - [@Null](#null)
- [Boolean Decorators](#boolean-decorators)
  - [@False](#false)
  - [@True](#true)
- [String & Container Decorators](#string-container-decorators)
  - [@NotBlank](#not-blank)
  - [@NotEmpty](#not-empty)
  - [@Size](#size)
- [Numeric Decorators](#numeric-decorators)
- [Date Decorators](#date-decorators)
- [Advanced Decorators](#advanced-decorators)
  - [@Valid](#valid)
  - [@Pattern](#pattern)
  - [@Email](#email)
  - [@Constraint](#constraint)

## Overview

| Name               | Description                                                   |
|:-------------------|:--------------------------------------------------------------|
| `@Defined`         | Must not be `undefined`.                                      |
| `@Undefined`       | Must be `undefined`.                                          |
| `@NotNull`         | Must not be `null`.                                           |
| `@Null`            | Must be `null`.                                               |
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

¹ Strings are validated as base-10 numbers when the validator is configured with `stringAsNumber` (disabled by default)

² Strings are validated as ISO-8601 datetimes when the validator is configured with `stringAsDate` (disabled by default)

## Base Decorators

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

### @False

The validated value must be `false`.

```typescript
class Example {
    method(@False parameter: boolean): void { }
}
```

| Type    | Boolean | Number | String | Date | Container | Object |
|---------|:--------|:-------|:-------|:-----|:----------|:-------|
| Support | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ |

### @True

The validated value must be `true`.

```typescript
class Example {
    method(@True parameter: boolean): void { }
}
```

| Type    | Boolean | Number | String | Date | Container | Object |
|---------|:--------|:-------|:-------|:-----|:----------|:-------|
| Support | ✔️ | ❌ | ❌ | ❌ | ❌ | ❌ |

## Advanced Decorators

### @Pattern

The validated value must match the provided regular expression.

```typescript
class Example {
    @Constraint(/abc[A-Z]+/)
    property: string;
}
```

| Type    | Boolean | Number | String | Date | Container | Object |
|---------|:--------|:-------|:-------|:-----|:----------|:-------|
| Support | ❌ | ❌ | ✔️ | ❌ | ❌ | ❌ |

### @Email

The validated value must a valid email address.

The regular expression used to validate the email address is fairly simple and is designed to provide very basic validation.
Should a more restricted test be necessary, the [@Pattern](#pattern) decorator may be used.

```typescript
class Example {
    @Email
    property: string;
}
```

| Type    | Boolean | Number | String | Date | Container | Object |
|---------|:--------|:-------|:-------|:-----|:----------|:-------|
| Support | ❌ | ❌ | ✔️ | ❌ | ❌ | ❌ |

| `@Valid`           | Properties must be validated.                                 |

### @Constraint

Apply a user-defined constraint.

```typescript
class Example {
    @Constraint(value => value.xyz > 4)
    property: ExampleProperty;
}
```

| Type    | Boolean | Number | String | Date | Container | Object |
|---------|:--------|:-------|:-------|:-----|:----------|:-------|
| Support | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
