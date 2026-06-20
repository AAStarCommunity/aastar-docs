Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:91](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L91)

## Properties

### amount

> **amount**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:93](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L93)

***

### data?

> `optional` **data**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:94](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L94)

***

### guardianSigner?

> `optional` **guardianSigner**: `GuardianSigner`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:107](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L107)

Guardian signer instance. Required for AirAccount Tier 3.

***

### p256Signature?

> `optional` **p256Signature**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:105](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L105)

P256 passkey signature (64 bytes hex). Required for AirAccount Tier 2/3.

***

### passkeyAssertion?

> `optional` **passkeyAssertion**: [`LegacyPasskeyAssertion`](LegacyPasskeyAssertion.md)

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:103](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L103)

***

### paymasterAddress?

> `optional` **paymasterAddress**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:97](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L97)

***

### paymasterData?

> `optional` **paymasterData**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:98](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L98)

***

### paymasterTokenAddress?

> `optional` **paymasterTokenAddress**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:102](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L102)

ERC-20 token address for deposit-pull paymasters (e.g. PMv4) that require
 the gas token address appended to paymasterData. Used when the paymaster
 contract does not expose a public token() getter for auto-detection.

***

### to

> **to**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:92](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L92)

***

### tokenAddress?

> `optional` **tokenAddress**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:95](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L95)

***

### useAirAccountTiering?

> `optional` **useAirAccountTiering**: `boolean`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:109](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L109)

Enable AirAccount tiered signature routing. Default: false (legacy BLS-only).

***

### usePaymaster?

> `optional` **usePaymaster**: `boolean`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:96](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L96)

***

### wrapExecuteUserOp?

> `optional` **wrapExecuteUserOp**: `boolean`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:116](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/transfer-manager.ts#L116)

Wrap the execute()/executeBatch() callData with the `executeUserOp` selector
(v0.17.2-beta.4 bundler-compat). REQUIRED for guard-enabled accounts submitted
through a standard ERC-4337 bundler; the account re-derives the signature algId
in-frame. Default: false. No-guard accounts and owner-direct calls leave it off.
