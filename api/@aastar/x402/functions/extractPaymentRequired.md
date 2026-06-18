> **extractPaymentRequired**(`response`): [`PaymentRequired`](../type-aliases/PaymentRequired.md) \| `null`

Defined in: [packages/x402/src/payment-header.ts:77](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/x402/src/payment-header.ts#L77)

Extract PaymentRequired from a 402 Response.
Tries v2 header first, falls back to v1.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | `Response` |

## Returns

[`PaymentRequired`](../type-aliases/PaymentRequired.md) \| `null`
