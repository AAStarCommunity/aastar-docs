Defined in: [packages/core/src/crypto/p256Guardian.ts:523](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L523)

Result of [signP256GuardianAssertion](../functions/signP256GuardianAssertion.md).

## Properties

### authenticatorData

> **authenticatorData**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:527](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L527)

authenticatorData used (hex).

***

### clientDataJSON

> **clientDataJSON**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:529](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L529)

Full clientDataJSON signed (hex).

***

### r

> **r**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:531](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L531)

Low-S–normalised signature `r` (bytes32 hex).

***

### s

> **s**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:533](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L533)

Low-S–normalised signature `s` (bytes32 hex).

***

### sig

> **sig**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:525](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L525)

The on-chain `sig` blob, ready for `proposeRecoveryWithSig` / mixed-sig calls.
