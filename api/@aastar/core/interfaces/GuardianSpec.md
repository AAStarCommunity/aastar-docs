Defined in: [packages/core/src/actions/initConfig.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/initConfig.ts#L35)

One guardian slot for [buildInitConfig](../functions/buildInitConfig.md): supply EXACTLY one of `ecdsa` or `p256`.

## Properties

### ecdsa?

> `optional` **ecdsa**: `` `0x${string}` ``

Defined in: [packages/core/src/actions/initConfig.ts:37](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/initConfig.ts#L37)

An ECDSA (EOA / Safe) guardian address. Mutually exclusive with `p256`.

***

### p256?

> `optional` **p256**: `object`

Defined in: [packages/core/src/actions/initConfig.ts:39](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/initConfig.ts#L39)

A P-256 (WebAuthn passkey) guardian public key (x, y, each bytes32). Mutually exclusive with `ecdsa`.

#### x

> **x**: `` `0x${string}` ``

#### y

> **y**: `` `0x${string}` ``
