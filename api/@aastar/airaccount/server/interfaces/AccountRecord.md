Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:4](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L4)

Account record stored by the SDK.

## Properties

### address

> **address**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:6](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L6)

***

### approvedAlgIds?

> `optional` **approvedAlgIds**: `number`[]

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:50](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L50)

Resolved approvedAlgIds written into the init config (full-config path). Persisted so the
deploy-time InitConfig is reconstructed EXACTLY (no re-defaulting). Paired with guardianSpecs.

***

### createdAt

> **createdAt**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:22](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L22)

***

### dailyLimit?

> `optional` **dailyLimit**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:28](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L28)

Daily transfer limit in wei, stored as a decimal string (bigint serialization).
"0" or undefined means no guard / no limit.
Written into the factory config at account creation time.

***

### deployed

> **deployed**: `boolean`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:17](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L17)

***

### deploymentTxHash

> **deploymentTxHash**: `string` \| `null`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:18](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L18)

***

### entryPointVersion

> **entryPointVersion**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:20](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L20)

***

### factoryAddress

> **factoryAddress**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:21](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L21)

***

### guardian1?

> `optional` **guardian1**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:34](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L34)

Guardian addresses and their acceptance signatures.
Present only for accounts created via createAccountWithGuardians().
Required by transfer-manager to reconstruct initCode using createAccountWithDefaults.

***

### guardian1Sig?

> `optional` **guardian1Sig**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L35)

***

### guardian2?

> `optional` **guardian2**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:36](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L36)

***

### guardian2Sig?

> `optional` **guardian2Sig**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:37](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L37)

***

### guardianSpecs?

> `optional` **guardianSpecs**: (\{ `ecdsa`: `string`; \} \| \{ `p256`: \{ `x`: `string`; `y`: `string`; \}; \})[]

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:45](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L45)

Full-config (8-field InitConfig) guardian slots — each is either an ECDSA address or a
P-256 (passkey) public key (x, y). Present ONLY for accounts created via
createAccountWithP256Guardians() (the factory's createAccount(owner, salt, config) path).
transfer-manager rebuilds the byte-identical InitConfig from these at first-UserOp deploy
time so the deployed CREATE2 address matches the create-time prediction.

***

### minDailyLimit?

> `optional` **minDailyLimit**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:55](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L55)

minDailyLimit floor (wei, decimal string) written into the init config (full-config path).
Paired with guardianSpecs for exact deploy-time reconstruction.

***

### salt

> **salt**: `string` \| `number` \| `bigint`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:16](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L16)

CREATE2 salt. Canonically persisted as a DECIMAL STRING (lossless, like dailyLimit) — the
full-config / P-256 path (#118 M2) writes it this way so a large salt (> 2^53) neither truncates
as a JS number nor fails JSON serialization as a bigint. The deploy-time rebuild reconstructs it
with `BigInt(account.salt)`, which MUST match the salt used to predict the address
(`_getSalt(owner, salt, configHash)`) or funds sent to the predicted address are stranded.
`number | bigint` retained for back-compat with the legacy create paths.

***

### signerAddress

> **signerAddress**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:7](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L7)

***

### userId

> **userId**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:5](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L5)

***

### validatorAddress

> **validatorAddress**: `string`

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:19](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L19)
