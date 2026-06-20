> **base64UrlEncode**(`bytes`): `string`

Defined in: [packages/core/src/crypto/p256Guardian.ts:92](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L92)

base64url-encode bytes with no padding — byte-identical to the contract's `_base64UrlEncode32`
for 32-byte input (43 chars) and to `Buffer.from(x).toString('base64url')`. Pure JS so `@aastar/core`
stays isomorphic (no node `Buffer`).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |

## Returns

`string`
