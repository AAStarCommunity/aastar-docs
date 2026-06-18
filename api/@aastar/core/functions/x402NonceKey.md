> **x402NonceKey**(`asset`, `from`, `nonce`): `` `0x${string}` ``

Defined in: [packages/core/src/actions/x402.ts:11](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/core/src/actions/x402.ts#L11)

Computes the storage key for x402SettlementNonces[key].
Mirrors SuperPaymaster.x402NonceKey: keccak256(abi.encode(asset, from, nonce)).
Changed from raw nonce (pre P0-13) to triple-key (post P0-13).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `asset` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |
| `nonce` | `` `0x${string}` `` |

## Returns

`` `0x${string}` ``
