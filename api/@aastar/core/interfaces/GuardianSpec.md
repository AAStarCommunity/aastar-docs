Defined in: [packages/core/src/actions/initConfig.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L35)

One guardian slot for [buildInitConfig](../functions/buildInitConfig.md): supply EXACTLY one of `ecdsa` or `p256`.

## Properties

### ecdsa?

> `optional` **ecdsa**: `` `0x${string}` ``

Defined in: [packages/core/src/actions/initConfig.ts:37](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L37)

An ECDSA (EOA / Safe) guardian address. Mutually exclusive with `p256`.

***

### p256?

> `optional` **p256**: `object`

Defined in: [packages/core/src/actions/initConfig.ts:39](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L39)

A P-256 (WebAuthn passkey) guardian public key (x, y, each bytes32). Mutually exclusive with `ecdsa`.

#### x

> **x**: `` `0x${string}` ``

#### y

> **y**: `` `0x${string}` ``
