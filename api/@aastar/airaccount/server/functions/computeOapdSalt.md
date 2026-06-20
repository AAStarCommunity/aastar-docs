> **computeOapdSalt**(`owner`, `dappId`): `bigint`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:56](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/utils/oapd.ts#L56)

Compute the numeric salt for an OAPD address.
salt = uint256(keccak256(abi.encodePacked(owner, dappId)))

## Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `string` |
| `dappId` | `string` |

## Returns

`bigint`
