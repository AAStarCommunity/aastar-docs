Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:90](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L90)

## Properties

### amount

> **amount**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:92](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L92)

***

### data?

> `optional` **data**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:93](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L93)

***

### guardianSigner?

> `optional` **guardianSigner**: `GuardianSigner`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:106](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L106)

Guardian signer instance. Required for AirAccount Tier 3.

***

### p256Signature?

> `optional` **p256Signature**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:104](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L104)

P256 passkey signature (64 bytes hex). Required for AirAccount Tier 2/3.

***

### passkeyAssertion?

> `optional` **passkeyAssertion**: [`LegacyPasskeyAssertion`](LegacyPasskeyAssertion.md)

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:102](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L102)

***

### paymasterAddress?

> `optional` **paymasterAddress**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:96](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L96)

***

### paymasterData?

> `optional` **paymasterData**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:97](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L97)

***

### paymasterTokenAddress?

> `optional` **paymasterTokenAddress**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:101](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L101)

ERC-20 token address for deposit-pull paymasters (e.g. PMv4) that require
 the gas token address appended to paymasterData. Used when the paymaster
 contract does not expose a public token() getter for auto-detection.

***

### to

> **to**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:91](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L91)

***

### tokenAddress?

> `optional` **tokenAddress**: `string`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:94](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L94)

***

### useAirAccountTiering?

> `optional` **useAirAccountTiering**: `boolean`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:108](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L108)

Enable AirAccount tiered signature routing. Default: false (legacy BLS-only).

***

### usePaymaster?

> `optional` **usePaymaster**: `boolean`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:95](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L95)

***

### wrapExecuteUserOp?

> `optional` **wrapExecuteUserOp**: `boolean`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:115](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L115)

Wrap the execute()/executeBatch() callData with the `executeUserOp` selector
(v0.17.2-beta.4 bundler-compat). REQUIRED for guard-enabled accounts submitted
through a standard ERC-4337 bundler; the account re-derives the signature algId
in-frame. Default: false. No-guard accounts and owner-direct calls leave it off.
