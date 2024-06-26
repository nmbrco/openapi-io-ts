# @openapi-io-ts/cli

## 0.6.5

### Patch Changes

- Fix workspace publish

## 0.6.4

### Patch Changes

- Fix import error for DateFromISOString

## 0.6.3

### Patch Changes

- Fix issues with parameters imports in operation codegen

## 0.6.2

### Patch Changes

- Fix issues with response, request body, and operation generation

## 0.6.1

### Patch Changes

- Publish over a borked 0.6.0 release

## 0.6.0

### Minor Changes

- Add support for generating `#/components/responses` with recursion

## 0.5.0

### Minor Changes

- [#20](https://github.com/Fredx87/openapi-io-ts/pull/20) [`bde97b8`](https://github.com/Fredx87/openapi-io-ts/commit/bde97b88456eb5dd6b1d5024c613e61919529242) Thanks [@dcaf-mocha](https://github.com/dcaf-mocha)! - fix: add imports for requestBodies and responses

## 0.4.1

### Patch Changes

- [#17](https://github.com/Fredx87/openapi-io-ts/pull/17) [`39494f5`](https://github.com/Fredx87/openapi-io-ts/commit/39494f5bc1949cc92b55f6ae294af6f27596d81b) Thanks [@Fredx87](https://github.com/Fredx87)! - Fixed generation for schema with nullable and allOf

## 0.4.0

### Minor Changes

- [#16](https://github.com/Fredx87/openapi-io-ts/pull/16) [`aab6f0b`](https://github.com/Fredx87/openapi-io-ts/commit/aab6f0b0dc352f9ac501a9b114974fa098b3565b) Thanks [@Fredx87](https://github.com/Fredx87)! - Added support for nullable schemas

## 0.3.0

### Minor Changes

- [#12](https://github.com/Fredx87/openapi-io-ts/pull/12) [`1df5450`](https://github.com/Fredx87/openapi-io-ts/commit/1df545029aef4853eb958cffb92cf9f7517acd02) Thanks [@Fredx87](https://github.com/Fredx87)! - Changed types of generated request functions. Simplified types in runtime package, removed operation types and
  added generation of request function types.

## 0.2.0

### Minor Changes

- [#9](https://github.com/Fredx87/openapi-io-ts/pull/9) [`84d6bf1`](https://github.com/Fredx87/openapi-io-ts/commit/84d6bf1cc2cedc0f818fa3e88da71135ee94e58f) Thanks [@Fredx87](https://github.com/Fredx87)! - Changes in codegen for generating new request functions for runtime.

  **BREAKING CHANGE**
  The generated code will not have single request function anymore, but a single `requestFunctionsBuilder` function that creates all the request functions.
  The generated services builder will now take the object returned by the `requestFunctionsBuilder` function instead of an `HttpRequestAdapter`.

### Patch Changes

- [#11](https://github.com/Fredx87/openapi-io-ts/pull/11) [`355b111`](https://github.com/Fredx87/openapi-io-ts/commit/355b111d83cb308428f09f8bb6231bf3126bcc2c) Thanks [@Fredx87](https://github.com/Fredx87)! - Fixed a typo in response component generation
