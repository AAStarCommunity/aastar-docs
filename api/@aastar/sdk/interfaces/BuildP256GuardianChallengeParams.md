Defined in: [packages/core/src/crypto/p256Guardian.ts:125](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L125)

Parameters for [buildP256GuardianChallenge](../functions/buildP256GuardianChallenge.md).

## Properties

### account

> **account**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:131](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L131)

The smart-account address (`address(this)` in the extension).

***

### chainId

> **chainId**: `number` \| `bigint`

Defined in: [packages/core/src/crypto/p256Guardian.ts:129](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L129)

EVM chain id the account lives on (`block.chainid`).

***

### opData

> **opData**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:135](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L135)

Operation payload (`abi.encode(...)` per op — use the `opData*` builders below).

***

### opLabel

> **opLabel**: `string`

Defined in: [packages/core/src/crypto/p256Guardian.ts:133](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L133)

Operation label, e.g. `"PROPOSE_RECOVERY"`.

***

### version?

> `optional` **version**: `number`

Defined in: [packages/core/src/crypto/p256Guardian.ts:127](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L127)

Signature scheme version. Defaults to [GUARDIAN\_SIG\_VERSION](../variables/GUARDIAN_SIG_VERSION.md) (4).
