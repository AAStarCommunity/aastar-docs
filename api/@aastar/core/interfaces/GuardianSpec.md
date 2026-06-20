Defined in: [packages/core/src/actions/initConfig.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L31)

One guardian slot for [buildInitConfig](../functions/buildInitConfig.md): supply EXACTLY one of `ecdsa` or `p256`.

## Properties

### ecdsa?

> `optional` **ecdsa**: `` `0x${string}` ``

Defined in: [packages/core/src/actions/initConfig.ts:33](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L33)

An ECDSA (EOA / Safe) guardian address. Mutually exclusive with `p256`.

***

### p256?

> `optional` **p256**: `object`

Defined in: [packages/core/src/actions/initConfig.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L35)

A P-256 (WebAuthn passkey) guardian public key (x, y, each bytes32). Mutually exclusive with `ecdsa`.

#### x

> **x**: `` `0x${string}` ``

#### y

> **y**: `` `0x${string}` ``
