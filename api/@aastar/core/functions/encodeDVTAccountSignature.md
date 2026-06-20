> **encodeDVTAccountSignature**(`params`): `` `0x${string}` ``

Defined in: [packages/core/src/crypto/dvtWire.ts:208](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L208)

Encode the ACCOUNT-LEVEL combined signature that goes into
`PackedUserOperation.signature`, per airaccount-contract #110:
```
T2: [0x04][P256(64)][nodeIdsLength(32)][nodeIds(N×32)][blsSig(256)]
T3: [0x05][P256(64)][nodeIdsLength(32)][nodeIds(N×32)][blsSig(256)][guardianECDSA(65)]
```
`nodeIdsLength` is a 32-byte big-endian `uint256` count of `nodeIds`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`DVTAccountSignatureParams`](../interfaces/DVTAccountSignatureParams.md) |

## Returns

`` `0x${string}` ``
