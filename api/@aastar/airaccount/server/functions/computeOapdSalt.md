> **computeOapdSalt**(`owner`, `dappId`): `bigint`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:52](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/airaccount/src/server/utils/oapd.ts#L52)

Compute the numeric salt for an OAPD address.
salt = uint256(keccak256(abi.encodePacked(owner, dappId)))

## Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |
| `dappId` | `string` |

## Returns

`bigint`
