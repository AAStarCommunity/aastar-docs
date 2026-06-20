> **getDefaultDvtNodes**(`chainId`): readonly [`DVTNode`](../interfaces/DVTNode.md)[]

Defined in: [packages/core/src/crypto/dvtNodes.ts:44](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtNodes.ts#L44)

The default always-on DVT signer nodes for a chain, or an empty array if none are published
for that chainId. Sepolia (11155111) returns AAStar's 3 beta-test nodes.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `chainId` | `number` |

## Returns

readonly [`DVTNode`](../interfaces/DVTNode.md)[]
