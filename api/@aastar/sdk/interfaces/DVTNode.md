Defined in: [packages/core/src/crypto/dvtNodes.ts:9](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtNodes.ts#L9)

## Properties

### nodeId

> **nodeId**: `` `0x${string}` ``

Defined in: [packages/core/src/crypto/dvtNodes.ts:13](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtNodes.ts#L13)

The node's `bytes32` nodeId, as registered on the validator's `AAStarBLSAlgorithm`.

***

### url

> **url**: `string`

Defined in: [packages/core/src/crypto/dvtNodes.ts:11](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtNodes.ts#L11)

Base URL of the node (POST `{url}/signature/sign` with `{ userOp, ownerAuth }`).
