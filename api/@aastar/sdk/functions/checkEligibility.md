> **checkEligibility**(`client`, `paymaster`, `user`, `operator`): `Promise`\<\{ `credit?`: `bigint`; `eligible`: `boolean`; `token?`: `` `0x${string}` ``; \}\>

Defined in: [packages/paymaster/src/SuperPaymaster/index.ts:49](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/paymaster/src/SuperPaymaster/index.ts#L49)

Enhanced eligibility check for SuperPaymaster V3.
Validates that user has sufficient credit with the given operator.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |
| `paymaster` | `` `0x${string}` `` |
| `user` | `` `0x${string}` `` |
| `operator` | `` `0x${string}` `` |

## Returns

`Promise`\<\{ `credit?`: `bigint`; `eligible`: `boolean`; `token?`: `` `0x${string}` ``; \}\>
