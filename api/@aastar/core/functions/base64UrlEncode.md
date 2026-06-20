> **base64UrlEncode**(`bytes`): `string`

Defined in: [packages/core/src/crypto/p256Guardian.ts:92](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/crypto/p256Guardian.ts#L92)

base64url-encode bytes with no padding — byte-identical to the contract's `_base64UrlEncode32`
for 32-byte input (43 chars) and to `Buffer.from(x).toString('base64url')`. Pure JS so `@aastar/core`
stays isomorphic (no node `Buffer`).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |

## Returns

`string`
