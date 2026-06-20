Defined in: [packages/airaccount/src/server/services/account-manager.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L35)

Account manager — extracted from NestJS AccountService.
Creates and retrieves smart accounts without framework dependencies.

## Constructors

### Constructor

> **new AccountManager**(`ethereum`, `storage`, `signer`, `logger?`): `AccountManager`

Defined in: [packages/airaccount/src/server/services/account-manager.ts:38](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L38)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ethereum` | [`EthereumProvider`](EthereumProvider.md) |
| `storage` | [`IStorageAdapter`](../interfaces/IStorageAdapter.md) |
| `signer` | [`ISignerAdapter`](../interfaces/ISignerAdapter.md) |
| `logger?` | [`ILogger`](../interfaces/ILogger.md) |

#### Returns

`AccountManager`

## Methods

### buildGuardianAcceptanceHash()

> **buildGuardianAcceptanceHash**(`owner`, `salt`, `factoryAddress`, `chainId`, `dailyLimit`): `string`

Defined in: [packages/airaccount/src/server/services/account-manager.ts:221](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L221)

Build the acceptance hash that guardian devices must sign before account creation.

Encoding: keccak256(solidityPacked(
  ["string","uint256","address","address","uint256","uint256"],
  ["ACCEPT_GUARDIAN", chainId, factoryAddress, owner, salt, dailyLimit]
))

dailyLimit is bound in the hash (PR #47 / C-3) to prevent a front-runner from
replaying guardian sigs with a weaker limit on the same counterfactual address.

Returns the RAW keccak256 hash (no EIP-191 prefix).
Guardians MUST sign via personal_sign / ethers.signMessage(ethers.getBytes(hash)).
Do NOT use eth_sign — the EIP-191 "\x19Ethereum Signed Message:\n32" prefix
is applied inside the contract (toEthSignedMessageHash) before ecrecover, not here.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |
| `salt` | `number` \| `bigint` |
| `factoryAddress` | `string` |
| `chainId` | `number` |
| `dailyLimit` | `bigint` |

#### Returns

`string`

raw hex keccak256 hash — encode this into the QR code shown to guardian devices

***

### createAccount()

> **createAccount**(`userId`, `options?`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md)\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:47](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L47)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userId` | `string` | - |
| `options?` | \{ `approvedAlgIds?`: `number`[]; `dailyLimit?`: `bigint`; `ecdsaGuardians?`: `` `0x${string}` ``[]; `entryPointVersion?`: [`EntryPointVersion`](../enumerations/EntryPointVersion.md); `minDailyLimit?`: `bigint`; `p256Guardians?`: [`P256GuardianKey`](../interfaces/P256GuardianKey.md)[]; `salt?`: `number` \| `bigint`; \} | - |
| `options.approvedAlgIds?` | `number`[] | Validator algorithm ids approved at init (full-config path). Defaults to ECDSA (+P-256). |
| `options.dailyLimit?` | `bigint` | Daily transfer limit in wei. When > 0 the account is created with on-chain guard enforcement. |
| `options.ecdsaGuardians?` | `` `0x${string}` ``[] | Optional ECDSA guardians installed via the same full-config path (no acceptance sig required). |
| `options.entryPointVersion?` | [`EntryPointVersion`](../enumerations/EntryPointVersion.md) | - |
| `options.minDailyLimit?` | `bigint` | Floor the daily limit may be lowered to via the guard (full-config path). Defaults to 0. |
| `options.p256Guardians?` | [`P256GuardianKey`](../interfaces/P256GuardianKey.md)[] | P-256 (passkey) guardians to install at deploy time. When present, the account is created via the full-config createAccount(owner, salt, config) path (delegates to [createAccountWithP256Guardians](#createaccountwithp256guardians)); `dailyLimit` MUST be > 0 (guardians enable the guard). |
| `options.salt?` | `number` \| `bigint` | - |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md)\>

***

### createAccountWithGuardians()

> **createAccountWithGuardians**(`userId`, `params`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md)\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:276](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L276)

Create an AirAccount with 3 on-chain guardians:
  - guardian1 and guardian2: user's own devices (passkeys on phone 1 and phone 2)
  - guardian3: team Safe multisig (defaultCommunityGuardian, set in factory at deploy time)

Both guardian1 and guardian2 must sign the acceptance hash produced by
buildGuardianAcceptanceHash() before this method is called.

Recovery: any 2-of-3 guardians can initiate social recovery after a 48h timelock.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `params` | \{ `dailyLimit`: `bigint`; `entryPointVersion?`: [`EntryPointVersion`](../enumerations/EntryPointVersion.md); `guardian1`: `string`; `guardian1Sig`: `string`; `guardian2`: `string`; `guardian2Sig`: `string`; `salt?`: `number` \| `bigint`; \} |
| `params.dailyLimit` | `bigint` |
| `params.entryPointVersion?` | [`EntryPointVersion`](../enumerations/EntryPointVersion.md) |
| `params.guardian1` | `string` |
| `params.guardian1Sig` | `string` |
| `params.guardian2` | `string` |
| `params.guardian2Sig` | `string` |
| `params.salt?` | `number` \| `bigint` |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md)\>

***

### createAccountWithP256Guardians()

> **createAccountWithP256Guardians**(`userId`, `params`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md)\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:388](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L388)

Create an AirAccount with one or more P-256 (WebAuthn passkey) guardians installed at
DEPLOY time — the server-client path #118 adds for KMS-custodied / counterfactual accounts
(e.g. YAA) that cannot drive the viem extension layer for account creation.

Uses the factory's full-config `createAccount(owner, salt, config)` path because it is the
ONLY entrypoint that accepts an 8-field `InitConfig` (and therefore `guardianP256X/Y`). The
8-field config is built by the core `buildInitConfig` (0.22.0) — never hand-rolled — and the
address is predicted via the factory's full-config `getAddress(owner, salt, config)` (NOT
`getAddressWithDefaults`), binding the address to `keccak256(config)`.

### Acceptance-signature semantics (verified against AAStarAirAccountFactoryV7.sol)
On this path the contract performs NO guardian-acceptance signature check — for P-256 OR ECDSA
guardians. Front-run protection comes from `_getSalt(owner, salt, _getConfigHash(config))`:
any change to the guardian set (or any other config field) yields a different CREATE2 address,
so an attacker cannot collide on the victim's counterfactual address with a weaker config.
P-256 guardians are an owner-bootstrap (single guardian can't form a recovery quorum), so no
acceptance ceremony exists for them by design (#110④). This is why optional ECDSA guardians may
also be passed here WITHOUT signatures — distinct from createAccountWithGuardians(), which uses
the owner-only-salt `createAccountWithDefaults` path and DOES require ECDSA acceptance sigs.

The deploy UserOp is still signed by the existing KMS owner-key path (unchanged): this method
only predicts the address and persists the full config; transfer-manager rebuilds the
byte-identical initCode (via [initConfigFromRecord](../functions/initConfigFromRecord.md)) at first-UserOp deploy time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userId` | `string` | - |
| `params` | \{ `approvedAlgIds?`: `number`[]; `dailyLimit`: `bigint`; `ecdsaGuardians?`: `` `0x${string}` ``[]; `entryPointVersion?`: [`EntryPointVersion`](../enumerations/EntryPointVersion.md); `minDailyLimit?`: `bigint`; `p256Guardians`: [`P256GuardianKey`](../interfaces/P256GuardianKey.md)[]; `salt?`: `number` \| `bigint`; \} | - |
| `params.approvedAlgIds?` | `number`[] | Validator algorithm ids approved at init. Defaults to ECDSA (+P-256 when a passkey is present). |
| `params.dailyLimit` | `bigint` | Daily spend limit in wei. MUST be > 0 — a guardian set enables the on-chain guard. |
| `params.ecdsaGuardians?` | `` `0x${string}` ``[] | Optional ECDSA guardians installed via the same full-config path (no acceptance sig). |
| `params.entryPointVersion?` | [`EntryPointVersion`](../enumerations/EntryPointVersion.md) | - |
| `params.minDailyLimit?` | `bigint` | Floor the daily limit may be lowered to via the guard. Defaults to 0. |
| `params.p256Guardians` | [`P256GuardianKey`](../interfaces/P256GuardianKey.md)[] | P-256 (passkey) guardian public keys to install at deploy time (at least one required). |
| `params.salt?` | `number` \| `bigint` | - |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md)\>

#### Throws

if no P-256 guardian is supplied, dailyLimit <= 0, or EntryPoint is v0.6.

***

### encodeModifyTierLimits()

> **encodeModifyTierLimits**(`tier1`, `tier2`, `deadline`, `guardianSigs`): `string`

Defined in: [packages/airaccount/src/server/services/account-manager.ts:253](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L253)

Encode calldata for modifyTierLimitsWithGuardians() — guardian-gated tier-limit change (PR #43).

Both tier1 and tier2 can be raised or lowered, subject to guardian approval.
Caller is responsible for building and submitting the resulting UserOp.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tier1` | `bigint` | New Tier-1 ceiling in wei (ECDSA-only spending; 0 = no limit) |
| `tier2` | `bigint` | New Tier-2 ceiling in wei (dual-factor; 0 = no limit) |
| `deadline` | `bigint` | Unix timestamp — guardian sigs rejected after this |
| `guardianSigs` | `string`[] | 65-byte EIP-191 hex signatures from required guardians |

#### Returns

`string`

***

### getAccount()

> **getAccount**(`userId`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) & `object` \| `null`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:154](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L154)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) & `object` \| `null`\>

***

### getAccountAddress()

> **getAccountAddress**(`userId`): `Promise`\<`string`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:173](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L173)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<`string`\>

***

### getAccountBalance()

> **getAccountBalance**(`userId`): `Promise`\<\{ `address`: `string`; `balance`: `string`; `balanceInWei`: `string`; \}\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:179](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L179)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<\{ `address`: `string`; `balance`: `string`; `balanceInWei`: `string`; \}\>

***

### getAccountByUserId()

> **getAccountByUserId**(`userId`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) \| `null`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:199](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L199)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) \| `null`\>

***

### getAccountNonce()

> **getAccountNonce**(`userId`): `Promise`\<\{ `address`: `string`; `nonce`: `string`; \}\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:192](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-manager.ts#L192)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<\{ `address`: `string`; `nonce`: `string`; \}\>
