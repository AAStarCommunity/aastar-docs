> **computeOapdSalt**(`owner`, `dappId`): `bigint`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:56](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/utils/oapd.ts#L56)

Compute the numeric salt for an OAPD address.
salt = uint256(keccak256(abi.encodePacked(owner, dappId)))

## Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |
| `dappId` | `string` |

## Returns

`bigint`
