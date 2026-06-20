Defined in: [packages/core/src/crypto/p256Guardian.ts:504](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L504)

Parameters for [signP256GuardianAssertion](../functions/signP256GuardianAssertion.md).

## Properties

### challenge

> **challenge**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:508](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L508)

The 32-byte operation challenge (from a `build*Challenge` helper).

***

### flags?

> `optional` **flags**: `number`

Defined in: [packages/core/src/crypto/p256Guardian.ts:517](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L517)

authenticatorData flags byte. Defaults to `0x05` (UP | UV); the contract only requires UP (bit 0).

***

### origin?

> `optional` **origin**: `string`

Defined in: [packages/core/src/crypto/p256Guardian.ts:515](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L515)

`origin` embedded in `clientDataJSON` suffix (also not verified on-chain).

***

### privateKey

> **privateKey**: `Uint8Array` \| `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:506](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L506)

Raw 32-byte P-256 private scalar (hex or bytes).

***

### rpId?

> `optional` **rpId**: `string`

Defined in: [packages/core/src/crypto/p256Guardian.ts:513](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L513)

RP id whose SHA-256 becomes `rpIdHash`. The contract does NOT verify this (§9.5), so any value
works on-chain; defaults to a stable test RP. Set it to your real rpId for fidelity.

***

### signCount?

> `optional` **signCount**: `number`

Defined in: [packages/core/src/crypto/p256Guardian.ts:519](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L519)

authenticatorData signCount (4-byte big-endian).
