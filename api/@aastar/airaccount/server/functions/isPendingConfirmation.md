> **isPendingConfirmation**(`data`): `data is { status: "pending_confirmation"; userOpHash?: string }`

Defined in: [packages/airaccount/src/server/services/bls-signature-service.ts:56](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/services/bls-signature-service.ts#L56)

Type guard for a DVT v1.3.0 `/signature/sign` response that withheld its
co-signature pending out-of-band confirmation (`{ status: "pending_confirmation",
userOpHash }`). Used at every sign call site so a high-value-op withhold is
surfaced, not mistaken for a signature-less failure. Default-off nodes never
return this shape.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |

## Returns

`data is { status: "pending_confirmation"; userOpHash?: string }`
