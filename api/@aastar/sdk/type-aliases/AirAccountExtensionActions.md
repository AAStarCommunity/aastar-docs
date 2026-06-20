> **AirAccountExtensionActions** = `object`

Defined in: [packages/core/src/actions/airAccountExtension.ts:55](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L55)

## Properties

### addGuardianWithMixedSigs()

> **addGuardianWithMixedSigs**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:84](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L84)

`addGuardianWithMixedSigs(guardian, signerIdxs, sigs)` — add an ECDSA guardian with mixed-type guardian consensus.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `guardian`: `Address`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `signerIdxs`: readonly `number`[]; `sigs`: readonly [`Hex`](https://viem.sh/docs/index.html)[]; \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.guardian` | `Address` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.signerIdxs` | readonly `number`[] |
| `args.sigs` | readonly [`Hex`](https://viem.sh/docs/index.html)[] |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### addP256Guardian()

> **addP256Guardian**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:80](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L80)

`addP256Guardian(x, y)` — owner-only bootstrap of a passkey guardian (no guardianSig while `count < threshold`).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `x`: [`Hex`](https://viem.sh/docs/index.html); `y`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.x` | [`Hex`](https://viem.sh/docs/index.html) |
| `args.y` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### addP256GuardianWithMixedSigs()

> **addP256GuardianWithMixedSigs**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:82](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L82)

`addP256GuardianWithMixedSigs(x, y, signerIdxs, sigs)` — add a passkey guardian once `count >= threshold` (consensus required).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `signerIdxs`: readonly `number`[]; `sigs`: readonly [`Hex`](https://viem.sh/docs/index.html)[]; `x`: [`Hex`](https://viem.sh/docs/index.html); `y`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.signerIdxs` | readonly `number`[] |
| `args.sigs` | readonly [`Hex`](https://viem.sh/docs/index.html)[] |
| `args.x` | [`Hex`](https://viem.sh/docs/index.html) |
| `args.y` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### approveRecoveryWithSig()

> **approveRecoveryWithSig**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:88](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L88)

`approveRecoveryWithSig(gIdx, sig)` — passkey guardian approves the active recovery proposal.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `gIdx`: `number`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `sig`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.gIdx` | `number` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.sig` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### cancelRecoveryWithSig()

> **cancelRecoveryWithSig**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:90](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L90)

`cancelRecoveryWithSig(gIdx, sig)` — passkey guardian votes to cancel the active recovery proposal.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `gIdx`: `number`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `sig`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.gIdx` | `number` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.sig` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### getGuardianAdditionNonce()

> **getGuardianAdditionNonce**: () => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:66](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L66)

`_guardianAdditionNonce` — the nonce bound into ADD_GUARDIAN / ADD_P256_GUARDIAN challenges.
Read from internal storage slot 39 (no public getter). MUST be re-fetched immediately before
collecting guardian signatures for `add*WithMixedSigs` (any successful add increments it).

#### Returns

`Promise`\<`bigint`\>

***

### getGuardianP256Key()

> **getGuardianP256Key**: (`args`) => `Promise`\<\{ `x`: [`Hex`](https://viem.sh/docs/index.html); `y`: [`Hex`](https://viem.sh/docs/index.html); \}\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:60](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L60)

`getGuardianP256Key(index)` — the (x, y) secp256r1 pubkey of guardian slot `index` (zero pair ⇒ not a P-256 guardian).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `index`: `number`; \} |
| `args.index` | `number` |

#### Returns

`Promise`\<\{ `x`: [`Hex`](https://viem.sh/docs/index.html); `y`: [`Hex`](https://viem.sh/docs/index.html); \}\>

***

### getGuardianRemovalNonce()

> **getGuardianRemovalNonce**: () => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:71](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L71)

`_guardianRemovalNonce` — the nonce bound into REMOVE_GUARDIAN challenges. Read from internal
storage slot 15 (no public getter). Re-fetch immediately before signing `removeGuardianWithMixedSigs`.

#### Returns

`Promise`\<`bigint`\>

***

### getRecoveryNonce()

> **getRecoveryNonce**: () => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:58](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L58)

`getRecoveryNonce()` — monotonic nonce that domain-separates P-256 / mixed-sig recovery payloads.

#### Returns

`Promise`\<`bigint`\>

***

### getTierLimitNonce()

> **getTierLimitNonce**: () => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:76](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L76)

`_tierLimitNonce` — the nonce bound into MODIFY_TIER_LIMITS challenges. Read from internal
storage slot 16 (no public getter). Re-fetch immediately before signing `modifyTierLimitsWithMixedGuardians`.

#### Returns

`Promise`\<`bigint`\>

***

### modifyTierLimitsWithMixedGuardians()

> **modifyTierLimitsWithMixedGuardians**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:94](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L94)

`modifyTierLimitsWithMixedGuardians(tier1, tier2, deadline, signerIdxs, sigs)` — owner-only tier change with mixed consensus.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `deadline`: `bigint`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `signerIdxs`: readonly `number`[]; `sigs`: readonly [`Hex`](https://viem.sh/docs/index.html)[]; `tier1`: `bigint`; `tier2`: `bigint`; \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.deadline` | `bigint` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.signerIdxs` | readonly `number`[] |
| `args.sigs` | readonly [`Hex`](https://viem.sh/docs/index.html)[] |
| `args.tier1` | `bigint` |
| `args.tier2` | `bigint` |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### proposeRecoveryWithSig()

> **proposeRecoveryWithSig**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:86](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L86)

`proposeRecoveryWithSig(newOwner, gIdx, sig)` — passkey guardian proposes recovery (any relayer submits).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `gIdx`: `number`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `newOwner`: `Address`; `sig`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.gIdx` | `number` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.newOwner` | `Address` |
| `args.sig` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### removeGuardianWithMixedSigs()

> **removeGuardianWithMixedSigs**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/airAccountExtension.ts:92](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/actions/airAccountExtension.ts#L92)

`removeGuardianWithMixedSigs(index, signerIdxs, sigs)` — owner-only removal with mixed-type guardian consensus.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; `index`: `number`; `maxFeePerGas?`: `bigint`; `maxPriorityFeePerGas?`: `bigint`; `signerIdxs`: readonly `number`[]; `sigs`: readonly [`Hex`](https://viem.sh/docs/index.html)[]; \} |
| `args.account?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |
| `args.index` | `number` |
| `args.maxFeePerGas?` | `bigint` |
| `args.maxPriorityFeePerGas?` | `bigint` |
| `args.signerIdxs` | readonly `number`[] |
| `args.sigs` | readonly [`Hex`](https://viem.sh/docs/index.html)[] |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>
