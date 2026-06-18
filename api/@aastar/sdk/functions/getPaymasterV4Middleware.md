> **getPaymasterV4Middleware**(`config`): `object`

Defined in: [packages/paymaster/src/V4/PaymasterUtils.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/paymaster/src/V4/PaymasterUtils.ts#L31)

Constructs the middleware for Paymaster V4.
Returns the `paymasterAndData` hex string.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`PaymasterV4MiddlewareConfig`](../type-aliases/PaymasterV4MiddlewareConfig.md) |

## Returns

`object`

### sponsorUserOperation()

> **sponsorUserOperation**: (`args`) => `Promise`\<\{ `paymasterAndData`: `` `0x${string}` ``; `preVerificationGas`: `any`; `verificationGasLimit`: `bigint`; \}\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `userOperation`: `any`; \} |
| `args.userOperation` | `any` |

#### Returns

`Promise`\<\{ `paymasterAndData`: `` `0x${string}` ``; `preVerificationGas`: `any`; `verificationGasLimit`: `bigint`; \}\>
