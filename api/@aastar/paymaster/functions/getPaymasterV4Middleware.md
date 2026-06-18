> **getPaymasterV4Middleware**(`config`): `object`

Defined in: [V4/PaymasterUtils.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/paymaster/src/V4/PaymasterUtils.ts#L31)

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
