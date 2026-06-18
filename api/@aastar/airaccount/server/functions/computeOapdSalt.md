> **computeOapdSalt**(`owner`, `dappId`): `bigint`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:52](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/utils/oapd.ts#L52)

Compute the numeric salt for an OAPD address.
salt = uint256(keccak256(abi.encodePacked(owner, dappId)))

## Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |
| `dappId` | `string` |

## Returns

`bigint`
