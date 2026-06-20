Defined in: [packages/core/src/crypto/dvtWire.ts:236](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L236)

Parameters for [encodeBLSAccountSignature](../functions/encodeBLSAccountSignature.md).

## Properties

### blsSig

> **blsSig**: `Uint8Array` \| `` `0x${string}` ``

Defined in: [packages/core/src/crypto/dvtWire.ts:240](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L240)

Aggregate BLS G2 signature (256-byte EIP-2537, or 96/192-byte zkcrypto).

***

### nodeIds

> **nodeIds**: `` `0x${string}` ``[]

Defined in: [packages/core/src/crypto/dvtWire.ts:238](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L238)

Explicit `bytes32` node IDs of the contributing signers, in signing/aggregation order.

***

### ownerSig

> **ownerSig**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/dvtWire.ts:245](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L245)

The trailing 65-byte OWNER ECDSA signature over `toEthSignedMessageHash(userOpHash)`
(EIP-191). The contract recovers it and requires `recovered == owner`.
