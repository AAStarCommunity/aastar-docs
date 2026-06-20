> **buildP256GuardianChallenge**(`params`): `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:143](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L143)

Build the 32-byte operation challenge the contract derives in `_p256GuardianChallenge`:
`keccak256(abi.encode(uint8 version, uint256 chainId, address account, string "P256_GUARDIAN",
 string opLabel, bytes opData))`. This is the value passed to `navigator.credentials.get()`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BuildP256GuardianChallengeParams`](../interfaces/BuildP256GuardianChallengeParams.md) |

## Returns

`` `0x${string}` ``
