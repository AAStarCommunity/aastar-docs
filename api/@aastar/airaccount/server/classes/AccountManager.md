Defined in: [packages/airaccount/src/server/services/account-manager.ts:48](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L48)

Account manager — extracted from NestJS AccountService.
Creates and retrieves smart accounts without framework dependencies.

## Constructors

### Constructor

> **new AccountManager**(`ethereum`, `storage`, `signer`, `logger?`): `AccountManager`

Defined in: [packages/airaccount/src/server/services/account-manager.ts:51](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L51)

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

Defined in: [packages/airaccount/src/server/services/account-manager.ts:234](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L234)

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

Defined in: [packages/airaccount/src/server/services/account-manager.ts:60](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L60)

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

Defined in: [packages/airaccount/src/server/services/account-manager.ts:289](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L289)

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

Defined in: [packages/airaccount/src/server/services/account-manager.ts:401](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L401)

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

Defined in: [packages/airaccount/src/server/services/account-manager.ts:266](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L266)

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

### ensureValidatorRouter()

> **ensureValidatorRouter**(`userId`, `opts?`): `Promise`\<`EnsureValidatorRouterResult`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:552](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L552)

Gap B — wire the validator router for an account that approved a ROUTER-DELEGATED signature
algorithm (BLS 0x01, cumulative T2 0x04, T3 0x05, weighted 0x07, session 0x08, ...). Such an
account's `_validateTripleSignature` / `_callBLSValidator` return `1` (FAIL) while
`validator() == address(0)`, so the algorithm is non-functional until the owner calls
`setValidator(router)` (onlyOwner, SET-ONCE). Inline algIds (ECDSA 0x02, P256 0x03, COMBINED_T1
0x06) need no router and are a no-op here.

MUST be called AFTER the account is deployed (setValidator is onlyOwner and needs code) — the
lazy/counterfactual deploy path cannot setValidator at predict-time. Idempotent: re-running after
the validator is set is a no-op (`reason: 'validator already set'`).

On-chain access matches the rest of this package: reads via the EthereumProvider's PublicClient
(`getAccountContract(...).read.validator()` and `getProvider().getCode()`); the state-changing
`setValidator` is sent through a caller-supplied `WalletClient` whose account is the owner —
the same convention used by `PaymasterManager.updatePrice` / `ForceExitService` (this manager's
narrow `ISignerAdapter` only EIP-191 personal-signs and cannot send transactions).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `userId` | `string` | the account owner's user id (storage key) |
| `opts?` | \{ `router?`: `` `0x${string}` ``; `walletClient?`: \{ `account`: [`Account`](https://viem.sh/docs/index.html) \| `undefined`; `addChain`: (`args`) => `Promise`\<`void`\>; `batch?`: \{ `multicall?`: `boolean` \| \{ `batchSize?`: `number`; `deployless?`: `boolean`; `wait?`: `number`; \}; \}; `cacheTime`: `number`; `ccipRead?`: `false` \| \{ `request?`: (`parameters`) => `Promise`\<`` `0x${string}` ``\>; \}; `chain`: [`Chain`](https://viem.sh/docs/index.html) \| `undefined`; `deployContract`: \<`abi`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `experimental_blockTag?`: [`BlockTag`](https://viem.sh/docs/index.html); `extend`: \<`client`\>(`fn`) => [`Client`](https://viem.sh/docs/index.html)\<[`Transport`](https://viem.sh/docs/index.html), [`Chain`](https://viem.sh/docs/index.html) \| `undefined`, [`Account`](https://viem.sh/docs/index.html) \| `undefined`, [`WalletRpcSchema`](https://viem.sh/docs/index.html), \{ \[K in string \| number \| symbol\]: client\[K\] \} & [`WalletActions`](https://viem.sh/docs/index.html)\<[`Chain`](https://viem.sh/docs/index.html) \| `undefined`, [`Account`](https://viem.sh/docs/index.html) \| `undefined`\>\>; `fillTransaction`: \<`chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`FillTransactionReturnType`](https://viem.sh/docs/index.html)\<[`Chain`](https://viem.sh/docs/index.html) \| `undefined`, `chainOverride`\>\>; `getAddresses`: () => `Promise`\<[`GetAddressesReturnType`](https://viem.sh/docs/index.html)\>; `getCallsStatus`: (`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\>; `getCapabilities`: \<`chainId`\>(`parameters?`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (chainId extends number ? \{ atomic?: (...) \| (...); paymasterService?: (...) \| (...); unstable\_addSubAccount?: (...) \| (...); \[key: string\]: any \} : ChainIdToCapabilities\&lt;Capabilities\<(...)\&gt;, number\>)\[K\] \}\>; `getChainId`: () => `Promise`\<`number`\>; `getPermissions`: () => `Promise`\<[`GetPermissionsReturnType`](https://viem.sh/docs/index.html)\>; `key`: `string`; `name`: `string`; `pollingInterval`: `number`; `prepareAuthorization`: (`parameters`) => `Promise`\<[`PrepareAuthorizationReturnType`](https://viem.sh/docs/index.html)\>; `prepareTransactionRequest`: \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<(...) & (...), ParameterTypeToParameters\<(...)\>\> & (unknown extends (...)\[(...)\] ? \{\} : Pick\<(...), (...)\>))\[K\] \}\>; `request`: [`EIP1193RequestFn`](https://viem.sh/docs/index.html)\<[`WalletRpcSchema`](https://viem.sh/docs/index.html)\>; `requestAddresses`: () => `Promise`\<[`RequestAddressesReturnType`](https://viem.sh/docs/index.html)\>; `requestPermissions`: (`args`) => `Promise`\<[`RequestPermissionsReturnType`](https://viem.sh/docs/index.html)\>; `sendCalls`: \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<\{ `capabilities?`: \{\[`key`: `string`\]: `any`; \}; `id`: `string`; \}\>; `sendCallsSync`: \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\>; `sendRawTransaction`: (`args`) => `Promise`\<`` `0x${string}` ``\>; `sendRawTransactionSync`: (`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\>; `sendTransaction`: \<`request`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `sendTransactionSync`: \<`request`, `chainOverride`\>(`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\>; `showCallsStatus`: (`parameters`) => `Promise`\<`void`\>; `signAuthorization`: (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](https://viem.sh/docs/index.html)\>; `signMessage`: (`args`) => `Promise`\<`` `0x${string}` ``\>; `signTransaction`: \<`chainOverride`, `request`\>(`args`) => `Promise`\<[`TransactionSerialized`](https://viem.sh/docs/index.html)\<[`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, `request` *extends* [`LegacyProperties`](https://viem.sh/docs/index.html) ? `"legacy"` : `never` \| `request` *extends* [`EIP1559Properties`](https://viem.sh/docs/index.html) ? `"eip1559"` : `never` \| `request` *extends* [`EIP2930Properties`](https://viem.sh/docs/index.html) ? `"eip2930"` : `never` \| `request` *extends* [`EIP4844Properties`](https://viem.sh/docs/index.html) ? `"eip4844"` : `never` \| `request` *extends* [`EIP7702Properties`](https://viem.sh/docs/index.html) ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\>, [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip1559"` ? `` `0x02${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip2930"` ? `` `0x01${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip4844"` ? `` `0x03${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip7702"` ? `` `0x04${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"legacy"` ? [`TransactionSerializedLegacy`](https://viem.sh/docs/index.html) : `never`\>\>; `signTypedData`: \<`typedData`, `primaryType`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `switchChain`: (`args`) => `Promise`\<`void`\>; `transport`: [`TransportConfig`](https://viem.sh/docs/index.html)\<`string`, [`EIP1193RequestFn`](https://viem.sh/docs/index.html)\> & `Record`\<`string`, `any`\>; `type`: `string`; `uid`: `string`; `waitForCallsStatus`: (`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\>; `watchAsset`: (`args`) => `Promise`\<`boolean`\>; `writeContract`: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `writeContractSync`: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\>; \}; \} | - |
| `opts.router?` | `` `0x${string}` `` | override the router address (defaults to the chain's canonical `aaStarValidator`); pass to target a non-canonical router |
| `opts.walletClient?` | \{ `account`: [`Account`](https://viem.sh/docs/index.html) \| `undefined`; `addChain`: (`args`) => `Promise`\<`void`\>; `batch?`: \{ `multicall?`: `boolean` \| \{ `batchSize?`: `number`; `deployless?`: `boolean`; `wait?`: `number`; \}; \}; `cacheTime`: `number`; `ccipRead?`: `false` \| \{ `request?`: (`parameters`) => `Promise`\<`` `0x${string}` ``\>; \}; `chain`: [`Chain`](https://viem.sh/docs/index.html) \| `undefined`; `deployContract`: \<`abi`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `experimental_blockTag?`: [`BlockTag`](https://viem.sh/docs/index.html); `extend`: \<`client`\>(`fn`) => [`Client`](https://viem.sh/docs/index.html)\<[`Transport`](https://viem.sh/docs/index.html), [`Chain`](https://viem.sh/docs/index.html) \| `undefined`, [`Account`](https://viem.sh/docs/index.html) \| `undefined`, [`WalletRpcSchema`](https://viem.sh/docs/index.html), \{ \[K in string \| number \| symbol\]: client\[K\] \} & [`WalletActions`](https://viem.sh/docs/index.html)\<[`Chain`](https://viem.sh/docs/index.html) \| `undefined`, [`Account`](https://viem.sh/docs/index.html) \| `undefined`\>\>; `fillTransaction`: \<`chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`FillTransactionReturnType`](https://viem.sh/docs/index.html)\<[`Chain`](https://viem.sh/docs/index.html) \| `undefined`, `chainOverride`\>\>; `getAddresses`: () => `Promise`\<[`GetAddressesReturnType`](https://viem.sh/docs/index.html)\>; `getCallsStatus`: (`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\>; `getCapabilities`: \<`chainId`\>(`parameters?`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (chainId extends number ? \{ atomic?: (...) \| (...); paymasterService?: (...) \| (...); unstable\_addSubAccount?: (...) \| (...); \[key: string\]: any \} : ChainIdToCapabilities\&lt;Capabilities\<(...)\&gt;, number\>)\[K\] \}\>; `getChainId`: () => `Promise`\<`number`\>; `getPermissions`: () => `Promise`\<[`GetPermissionsReturnType`](https://viem.sh/docs/index.html)\>; `key`: `string`; `name`: `string`; `pollingInterval`: `number`; `prepareAuthorization`: (`parameters`) => `Promise`\<[`PrepareAuthorizationReturnType`](https://viem.sh/docs/index.html)\>; `prepareTransactionRequest`: \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<(...) & (...), ParameterTypeToParameters\<(...)\>\> & (unknown extends (...)\[(...)\] ? \{\} : Pick\<(...), (...)\>))\[K\] \}\>; `request`: [`EIP1193RequestFn`](https://viem.sh/docs/index.html)\<[`WalletRpcSchema`](https://viem.sh/docs/index.html)\>; `requestAddresses`: () => `Promise`\<[`RequestAddressesReturnType`](https://viem.sh/docs/index.html)\>; `requestPermissions`: (`args`) => `Promise`\<[`RequestPermissionsReturnType`](https://viem.sh/docs/index.html)\>; `sendCalls`: \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<\{ `capabilities?`: \{\[`key`: `string`\]: `any`; \}; `id`: `string`; \}\>; `sendCallsSync`: \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\>; `sendRawTransaction`: (`args`) => `Promise`\<`` `0x${string}` ``\>; `sendRawTransactionSync`: (`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\>; `sendTransaction`: \<`request`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `sendTransactionSync`: \<`request`, `chainOverride`\>(`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\>; `showCallsStatus`: (`parameters`) => `Promise`\<`void`\>; `signAuthorization`: (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](https://viem.sh/docs/index.html)\>; `signMessage`: (`args`) => `Promise`\<`` `0x${string}` ``\>; `signTransaction`: \<`chainOverride`, `request`\>(`args`) => `Promise`\<[`TransactionSerialized`](https://viem.sh/docs/index.html)\<[`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, `request` *extends* [`LegacyProperties`](https://viem.sh/docs/index.html) ? `"legacy"` : `never` \| `request` *extends* [`EIP1559Properties`](https://viem.sh/docs/index.html) ? `"eip1559"` : `never` \| `request` *extends* [`EIP2930Properties`](https://viem.sh/docs/index.html) ? `"eip2930"` : `never` \| `request` *extends* [`EIP4844Properties`](https://viem.sh/docs/index.html) ? `"eip4844"` : `never` \| `request` *extends* [`EIP7702Properties`](https://viem.sh/docs/index.html) ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\>, [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip1559"` ? `` `0x02${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip2930"` ? `` `0x01${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip4844"` ? `` `0x03${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip7702"` ? `` `0x04${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"legacy"` ? [`TransactionSerializedLegacy`](https://viem.sh/docs/index.html) : `never`\>\>; `signTypedData`: \<`typedData`, `primaryType`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `switchChain`: (`args`) => `Promise`\<`void`\>; `transport`: [`TransportConfig`](https://viem.sh/docs/index.html)\<`string`, [`EIP1193RequestFn`](https://viem.sh/docs/index.html)\> & `Record`\<`string`, `any`\>; `type`: `string`; `uid`: `string`; `waitForCallsStatus`: (`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\>; `watchAsset`: (`args`) => `Promise`\<`boolean`\>; `writeContract`: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\>; `writeContractSync`: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\>; \} | viem WalletClient signing as the account OWNER — REQUIRED to send the tx |
| `opts.walletClient.account?` | [`Account`](https://viem.sh/docs/index.html) \| `undefined` | The Account of the Client. |
| `opts.walletClient.addChain?` | (`args`) => `Promise`\<`void`\> | Adds an EVM chain to the wallet. - Docs: https://viem.sh/docs/actions/wallet/addChain - JSON-RPC Methods: [`eth_addEthereumChain`](https://eips.ethereum.org/EIPS/eip-3085) **Example** `import { createWalletClient, custom } from 'viem' import { optimism } from 'viem/chains' const client = createWalletClient({ transport: custom(window.ethereum), }) await client.addChain({ chain: optimism })` |
| `opts.walletClient.batch?` | \{ `multicall?`: `boolean` \| \{ `batchSize?`: `number`; `deployless?`: `boolean`; `wait?`: `number`; \}; \} | Flags for batch settings. |
| `opts.walletClient.batch.multicall?` | `boolean` \| \{ `batchSize?`: `number`; `deployless?`: `boolean`; `wait?`: `number`; \} | Toggle to enable `eth_call` multicall aggregation. |
| `opts.walletClient.cacheTime?` | `number` | Time (in ms) that cached data will remain in memory. |
| `opts.walletClient.ccipRead?` | `false` \| \{ `request?`: (`parameters`) => `Promise`\<`` `0x${string}` ``\>; \} | [CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration. |
| `opts.walletClient.chain?` | [`Chain`](https://viem.sh/docs/index.html) \| `undefined` | Chain for the client. |
| `opts.walletClient.deployContract?` | \<`abi`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\> | Deploys a contract to the network, given bytecode and constructor arguments. - Docs: https://viem.sh/docs/contract/deployContract - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_deploying-contracts **Example** `import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const hash = await client.deployContract({ abi: [], account: '0x…, bytecode: '0x608060405260405161083e38038061083e833981016040819052610...', })` |
| `opts.walletClient.experimental_blockTag?` | [`BlockTag`](https://viem.sh/docs/index.html) | Default block tag to use for RPC requests. |
| `opts.walletClient.extend?` | \<`client`\>(`fn`) => [`Client`](https://viem.sh/docs/index.html)\<[`Transport`](https://viem.sh/docs/index.html), [`Chain`](https://viem.sh/docs/index.html) \| `undefined`, [`Account`](https://viem.sh/docs/index.html) \| `undefined`, [`WalletRpcSchema`](https://viem.sh/docs/index.html), \{ \[K in string \| number \| symbol\]: client\[K\] \} & [`WalletActions`](https://viem.sh/docs/index.html)\<[`Chain`](https://viem.sh/docs/index.html) \| `undefined`, [`Account`](https://viem.sh/docs/index.html) \| `undefined`\>\> | - |
| `opts.walletClient.fillTransaction?` | \<`chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`FillTransactionReturnType`](https://viem.sh/docs/index.html)\<[`Chain`](https://viem.sh/docs/index.html) \| `undefined`, `chainOverride`\>\> | Fills a transaction request with the necessary fields to be signed over. - Docs: https://viem.sh/docs/actions/public/fillTransaction **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const result = await client.fillTransaction({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: parseEther('1'), })` |
| `opts.walletClient.getAddresses?` | () => `Promise`\<[`GetAddressesReturnType`](https://viem.sh/docs/index.html)\> | Returns a list of account addresses owned by the wallet or client. - Docs: https://viem.sh/docs/actions/wallet/getAddresses - JSON-RPC Methods: [`eth_accounts`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const accounts = await client.getAddresses()` |
| `opts.walletClient.getCallsStatus?` | (`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\> | Returns the status of a call batch that was sent via `sendCalls`. - Docs: https://viem.sh/docs/actions/wallet/getCallsStatus - JSON-RPC Methods: [`wallet_getCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const { receipts, status } = await client.getCallsStatus({ id: '0xdeadbeef' })` |
| `opts.walletClient.getCapabilities?` | \<`chainId`\>(`parameters?`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (chainId extends number ? \{ atomic?: (...) \| (...); paymasterService?: (...) \| (...); unstable\_addSubAccount?: (...) \| (...); \[key: string\]: any \} : ChainIdToCapabilities\&lt;Capabilities\<(...)\&gt;, number\>)\[K\] \}\> | Extract capabilities that a connected wallet supports (e.g. paymasters, session keys, etc). - Docs: https://viem.sh/docs/actions/wallet/getCapabilities - JSON-RPC Methods: [`wallet_getCapabilities`](https://eips.ethereum.org/EIPS/eip-5792) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const capabilities = await client.getCapabilities({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', })` |
| `opts.walletClient.getChainId?` | () => `Promise`\<`number`\> | Returns the chain ID associated with the current network. - Docs: https://viem.sh/docs/actions/public/getChainId - JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid) **Example** `import { createWalletClient, http } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const chainId = await client.getChainId() // 1` |
| `opts.walletClient.getPermissions?` | () => `Promise`\<[`GetPermissionsReturnType`](https://viem.sh/docs/index.html)\> | Gets the wallets current permissions. - Docs: https://viem.sh/docs/actions/wallet/getPermissions - JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const permissions = await client.getPermissions()` |
| `opts.walletClient.key?` | `string` | A key for the client. |
| `opts.walletClient.name?` | `string` | A name for the client. |
| `opts.walletClient.pollingInterval?` | `number` | Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds. |
| `opts.walletClient.prepareAuthorization?` | (`parameters`) => `Promise`\<[`PrepareAuthorizationReturnType`](https://viem.sh/docs/index.html)\> | Prepares an [EIP-7702 Authorization](https://eips.ethereum.org/EIPS/eip-7702) object for signing. This Action will fill the required fields of the Authorization object if they are not provided (e.g. `nonce` and `chainId`). With the prepared Authorization object, you can use [`signAuthorization`](https://viem.sh/docs/eip7702/signAuthorization) to sign over the Authorization object. **Examples** `import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: http(), }) const authorization = await client.prepareAuthorization({ account: privateKeyToAccount('0x..'), contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const authorization = await client.prepareAuthorization({ contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', })` |
| `opts.walletClient.prepareTransactionRequest?` | \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<(...) & (...), ParameterTypeToParameters\<(...)\>\> & (unknown extends (...)\[(...)\] ? \{\} : Pick\<(...), (...)\>))\[K\] \}\> | Prepares a transaction request for signing. - Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest **Examples** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const request = await client.prepareTransactionRequest({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', to: '0x0000000000000000000000000000000000000000', value: 1n, })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: custom(window.ethereum), }) const request = await client.prepareTransactionRequest({ to: '0x0000000000000000000000000000000000000000', value: 1n, })` |
| `opts.walletClient.request?` | [`EIP1193RequestFn`](https://viem.sh/docs/index.html)\<[`WalletRpcSchema`](https://viem.sh/docs/index.html)\> | Request function wrapped with friendly error handling |
| `opts.walletClient.requestAddresses?` | () => `Promise`\<[`RequestAddressesReturnType`](https://viem.sh/docs/index.html)\> | Requests a list of accounts managed by a wallet. - Docs: https://viem.sh/docs/actions/wallet/requestAddresses - JSON-RPC Methods: [`eth_requestAccounts`](https://eips.ethereum.org/EIPS/eip-1102) Sends a request to the wallet, asking for permission to access the user's accounts. After the user accepts the request, it will return a list of accounts (addresses). This API can be useful for dapps that need to access the user's accounts in order to execute transactions or interact with smart contracts. **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const accounts = await client.requestAddresses()` |
| `opts.walletClient.requestPermissions?` | (`args`) => `Promise`\<[`RequestPermissionsReturnType`](https://viem.sh/docs/index.html)\> | Requests permissions for a wallet. - Docs: https://viem.sh/docs/actions/wallet/requestPermissions - JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const permissions = await client.requestPermissions({ eth_accounts: {} })` |
| `opts.walletClient.sendCalls?` | \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<\{ `capabilities?`: \{\[`key`: `string`\]: `any`; \}; `id`: `string`; \}\> | Requests the connected wallet to send a batch of calls. - Docs: https://viem.sh/docs/actions/wallet/sendCalls - JSON-RPC Methods: [`wallet_sendCalls`](https://eips.ethereum.org/EIPS/eip-5792) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const id = await client.sendCalls({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', calls: [ { data: '0xdeadbeef', to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', }, { to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: 69420n, }, ], })` |
| `opts.walletClient.sendCallsSync?` | \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\> | Requests the connected wallet to send a batch of calls, and waits for the calls to be included in a block. - Docs: https://viem.sh/docs/actions/wallet/sendCallsSync - JSON-RPC Methods: [`wallet_sendCalls`](https://eips.ethereum.org/EIPS/eip-5792) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const status = await client.sendCallsSync({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', calls: [ { data: '0xdeadbeef', to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', }, { to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: 69420n, }, ], })` |
| `opts.walletClient.sendRawTransaction?` | (`args`) => `Promise`\<`` `0x${string}` ``\> | Sends a **signed** transaction to the network - Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction - JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' import { sendRawTransaction } from 'viem/wallet' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const hash = await client.sendRawTransaction({ serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33' })` |
| `opts.walletClient.sendRawTransactionSync?` | (`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\> | Sends a **signed** transaction to the network synchronously, and waits for the transaction to be included in a block. - Docs: https://viem.sh/docs/actions/wallet/sendRawTransactionSync - JSON-RPC Method: [`eth_sendRawTransactionSync`](https://eips.ethereum.org/EIPS/eip-7966) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' import { sendRawTransactionSync } from 'viem/wallet' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const receipt = await client.sendRawTransactionSync({ serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33' })` |
| `opts.walletClient.sendTransaction?` | \<`request`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\> | Creates, signs, and sends a new transaction to the network. - Docs: https://viem.sh/docs/actions/wallet/sendTransaction - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions - JSON-RPC Methods: - JSON-RPC Accounts: [`eth_sendTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction) - Local Accounts: [`eth_sendRawTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction) **Examples** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const hash = await client.sendTransaction({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: 1000000000000000000n, })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const hash = await client.sendTransaction({ to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: 1000000000000000000n, })` |
| `opts.walletClient.sendTransactionSync?` | \<`request`, `chainOverride`\>(`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\> | Creates, signs, and sends a new transaction to the network synchronously. Returns the transaction receipt. - Docs: https://viem.sh/docs/actions/wallet/sendTransactionSync - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions - JSON-RPC Methods: - JSON-RPC Accounts: [`eth_sendTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction) - Local Accounts: [`eth_sendRawTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction) **Examples** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const receipt = await client.sendTransactionSync({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: 1000000000000000000n, })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const receipt = await client.sendTransactionSync({ to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', value: 1000000000000000000n, })` |
| `opts.walletClient.showCallsStatus?` | (`parameters`) => `Promise`\<`void`\> | Requests for the wallet to show information about a call batch that was sent via `sendCalls`. - Docs: https://viem.sh/docs/actions/wallet/showCallsStatus - JSON-RPC Methods: [`wallet_showCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) await client.showCallsStatus({ id: '0xdeadbeef' })` |
| `opts.walletClient.signAuthorization?` | (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](https://viem.sh/docs/index.html)\> | Signs an [EIP-7702 Authorization](https://eips.ethereum.org/EIPS/eip-7702) object. With the calculated signature, you can: - use [`verifyAuthorization`](https://viem.sh/docs/eip7702/verifyAuthorization) to verify the signed Authorization object, - use [`recoverAuthorizationAddress`](https://viem.sh/docs/eip7702/recoverAuthorizationAddress) to recover the signing address from the signed Authorization object. **Examples** `import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: http(), }) const signature = await client.signAuthorization({ account: privateKeyToAccount('0x..'), contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const signature = await client.signAuthorization({ contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', })` |
| `opts.walletClient.signMessage?` | (`args`) => `Promise`\<`` `0x${string}` ``\> | Calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`. - Docs: https://viem.sh/docs/actions/wallet/signMessage - JSON-RPC Methods: - JSON-RPC Accounts: [`personal_sign`](https://docs.metamask.io/guide/signing-data#personal-sign) - Local Accounts: Signs locally. No JSON-RPC request. With the calculated signature, you can: - use [`verifyMessage`](https://viem.sh/docs/utilities/verifyMessage) to verify the signature, - use [`recoverMessageAddress`](https://viem.sh/docs/utilities/recoverMessageAddress) to recover the signing address from a signature. **Examples** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const signature = await client.signMessage({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', message: 'hello world', })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const signature = await client.signMessage({ message: 'hello world', })` |
| `opts.walletClient.signTransaction?` | \<`chainOverride`, `request`\>(`args`) => `Promise`\<[`TransactionSerialized`](https://viem.sh/docs/index.html)\<[`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, `request` *extends* [`LegacyProperties`](https://viem.sh/docs/index.html) ? `"legacy"` : `never` \| `request` *extends* [`EIP1559Properties`](https://viem.sh/docs/index.html) ? `"eip1559"` : `never` \| `request` *extends* [`EIP2930Properties`](https://viem.sh/docs/index.html) ? `"eip2930"` : `never` \| `request` *extends* [`EIP4844Properties`](https://viem.sh/docs/index.html) ? `"eip4844"` : `never` \| `request` *extends* [`EIP7702Properties`](https://viem.sh/docs/index.html) ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\>, [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip1559"` ? `` `0x02${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip2930"` ? `` `0x01${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip4844"` ? `` `0x03${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"eip7702"` ? `` `0x04${string}` `` : `never` \| [`GetTransactionType`](https://viem.sh/docs/index.html)\<`request`, ... \| ... \| ... \| ... \| ... \| ...\> *extends* `"legacy"` ? [`TransactionSerializedLegacy`](https://viem.sh/docs/index.html) : `never`\>\> | Signs a transaction. - Docs: https://viem.sh/docs/actions/wallet/signTransaction - JSON-RPC Methods: - JSON-RPC Accounts: [`eth_signTransaction`](https://ethereum.github.io/execution-apis/api-documentation/) - Local Accounts: Signs locally. No JSON-RPC request. **Examples** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const request = await client.prepareTransactionRequest({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', to: '0x0000000000000000000000000000000000000000', value: 1n, }) const signature = await client.signTransaction(request)` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: custom(window.ethereum), }) const request = await client.prepareTransactionRequest({ to: '0x0000000000000000000000000000000000000000', value: 1n, }) const signature = await client.signTransaction(request)` |
| `opts.walletClient.signTypedData?` | \<`typedData`, `primaryType`\>(`args`) => `Promise`\<`` `0x${string}` ``\> | Signs typed data and calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`. - Docs: https://viem.sh/docs/actions/wallet/signTypedData - JSON-RPC Methods: - JSON-RPC Accounts: [`eth_signTypedData_v4`](https://docs.metamask.io/guide/signing-data#signtypeddata-v4) - Local Accounts: Signs locally. No JSON-RPC request. **Examples** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const signature = await client.signTypedData({ account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', domain: { name: 'Ether Mail', version: '1', chainId: 1, verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC', }, types: { Person: [ { name: 'name', type: 'string' }, { name: 'wallet', type: 'address' }, ], Mail: [ { name: 'from', type: 'Person' }, { name: 'to', type: 'Person' }, { name: 'contents', type: 'string' }, ], }, primaryType: 'Mail', message: { from: { name: 'Cow', wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826', }, to: { name: 'Bob', wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB', }, contents: 'Hello, Bob!', }, })` `// Account Hoisting import { createWalletClient, http } from 'viem' import { privateKeyToAccount } from 'viem/accounts' import { mainnet } from 'viem/chains' const client = createWalletClient({ account: privateKeyToAccount('0x…'), chain: mainnet, transport: http(), }) const signature = await client.signTypedData({ domain: { name: 'Ether Mail', version: '1', chainId: 1, verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC', }, types: { Person: [ { name: 'name', type: 'string' }, { name: 'wallet', type: 'address' }, ], Mail: [ { name: 'from', type: 'Person' }, { name: 'to', type: 'Person' }, { name: 'contents', type: 'string' }, ], }, primaryType: 'Mail', message: { from: { name: 'Cow', wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826', }, to: { name: 'Bob', wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB', }, contents: 'Hello, Bob!', }, })` |
| `opts.walletClient.switchChain?` | (`args`) => `Promise`\<`void`\> | Switch the target chain in a wallet. - Docs: https://viem.sh/docs/actions/wallet/switchChain - JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-3326) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet, optimism } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) await client.switchChain({ id: optimism.id })` |
| `opts.walletClient.transport?` | [`TransportConfig`](https://viem.sh/docs/index.html)\<`string`, [`EIP1193RequestFn`](https://viem.sh/docs/index.html)\> & `Record`\<`string`, `any`\> | The RPC transport |
| `opts.walletClient.type?` | `string` | The type of client. |
| `opts.walletClient.uid?` | `string` | A unique ID for the client. |
| `opts.walletClient.waitForCallsStatus?` | (`parameters`) => `Promise`\<\{ `atomic`: `boolean`; `capabilities?`: \{\[`key`: `string`\]: `any`; \} \| \{\[`key`: `string`\]: `any`; \}; `chainId`: `number`; `id`: `string`; `receipts?`: [`WalletCallReceipt`](https://viem.sh/docs/index.html)\<`bigint`, ... \| ...\>[]; `status`: `"pending"` \| `"success"` \| `"failure"` \| `undefined`; `statusCode`: `number`; `version`: `string`; \}\> | Waits for the status & receipts of a call bundle that was sent via `sendCalls`. - Docs: https://viem.sh/docs/actions/wallet/waitForCallsStatus - JSON-RPC Methods: [`wallet_getCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const { receipts, status } = await waitForCallsStatus(client, { id: '0xdeadbeef' })` |
| `opts.walletClient.watchAsset?` | (`args`) => `Promise`\<`boolean`\> | Adds an EVM chain to the wallet. - Docs: https://viem.sh/docs/actions/wallet/watchAsset - JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747) **Example** `import { createWalletClient, custom } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const success = await client.watchAsset({ type: 'ERC20', options: { address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', decimals: 18, symbol: 'WETH', }, })` |
| `opts.walletClient.writeContract?` | \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<`` `0x${string}` ``\> | Executes a write function on a contract. - Docs: https://viem.sh/docs/contract/writeContract - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_writing-to-contracts A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state. Internally, uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData). __Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.__ **Examples** `import { createWalletClient, custom, parseAbi } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const hash = await client.writeContract({ address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', abi: parseAbi(['function mint(uint32 tokenId) nonpayable']), functionName: 'mint', args: [69420], })` `// With Validation import { createWalletClient, custom, parseAbi } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const { request } = await client.simulateContract({ address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', abi: parseAbi(['function mint(uint32 tokenId) nonpayable']), functionName: 'mint', args: [69420], } const hash = await client.writeContract(request)` |
| `opts.walletClient.writeContractSync?` | \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<[`TransactionReceipt`](https://viem.sh/docs/index.html)\> | Executes a write function on a contract synchronously. Returns the transaction receipt. - Docs: https://viem.sh/docs/contract/writeContract A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state. Internally, uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData). __Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.__ **Example** `import { createWalletClient, custom, parseAbi } from 'viem' import { mainnet } from 'viem/chains' const client = createWalletClient({ chain: mainnet, transport: custom(window.ethereum), }) const receipt = await client.writeContractSync({ address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', abi: parseAbi(['function mint(uint32 tokenId) nonpayable']), functionName: 'mint', args: [69420], })` |

#### Returns

`Promise`\<`EnsureValidatorRouterResult`\>

***

### getAccount()

> **getAccount**(`userId`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) & `object` \| `null`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:167](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L167)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) & `object` \| `null`\>

***

### getAccountAddress()

> **getAccountAddress**(`userId`): `Promise`\<`string`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:186](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L186)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<`string`\>

***

### getAccountBalance()

> **getAccountBalance**(`userId`): `Promise`\<\{ `address`: `string`; `balance`: `string`; `balanceInWei`: `string`; \}\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:192](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L192)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<\{ `address`: `string`; `balance`: `string`; `balanceInWei`: `string`; \}\>

***

### getAccountByUserId()

> **getAccountByUserId**(`userId`): `Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) \| `null`\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:212](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L212)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`AccountRecord`](../interfaces/AccountRecord.md) \| `null`\>

***

### getAccountNonce()

> **getAccountNonce**(`userId`): `Promise`\<\{ `address`: `string`; `nonce`: `string`; \}\>

Defined in: [packages/airaccount/src/server/services/account-manager.ts:205](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-manager.ts#L205)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<\{ `address`: `string`; `nonce`: `string`; \}\>
