> **opDataRemoveGuardian**(`nonce`, `index`, `guardianToRemove`, `p256X`, `p256Y`): `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:184](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L184)

`opData` for REMOVE_GUARDIAN (spec §6.4):
`abi.encode(uint256 nonce, uint8 index, address guardianToRemove, bytes32 p256X, bytes32 p256Y)`.
For an ECDSA slot pass the guardian address with `p256X=p256Y=0x0…0`; for a P-256 slot pass
[P256\_GUARDIAN\_SENTINEL](../variables/P256_GUARDIAN_SENTINEL.md) with the slot's stored `(x, y)`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `nonce` | `bigint` |
| `index` | `number` |
| `guardianToRemove` | `` `0x${string}` `` |
| `p256X` | `` `0x${string}` `` |
| `p256Y` | `` `0x${string}` `` |

## Returns

`` `0x${string}` ``
