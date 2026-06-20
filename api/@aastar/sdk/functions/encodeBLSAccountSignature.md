> **encodeBLSAccountSignature**(`params`): `` `0x${string}` ``

Defined in: [packages/core/src/crypto/dvtWire.ts:261](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L261)

Encode the ACCOUNT-LEVEL `ALG_BLS` (0x01) signature that goes into
`PackedUserOperation.signature` for an `EntryPoint.handleOps` BLS UserOp, per
airaccount-contract `AAStarAirAccountBase._validateTripleSignature`:
```
[0x01][nodeIdsLength(32)][nodeIds(N×32)][blsSig(256)][ownerECDSA(65)]
```
`nodeIdsLength` is a 32-byte big-endian `uint256` count. The BLS payload `[nodeIds][blsSig]`
(no length prefix) is the same blob [encodeDVTVerifierProof](encodeDVTVerifierProof.md) hands to the verifier's
`validate(userOpHash, …)`; the account additionally binds the owner ECDSA over the
eth-signed `userOpHash`. (So `ALG_BLS` is a 2-factor BLS+owner path, not BLS-only —
it is distinct from the verifier-level `validate` which checks the aggregate alone.)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BLSAccountSignatureParams`](../interfaces/BLSAccountSignatureParams.md) |

## Returns

`` `0x${string}` ``
