> **p256GuardianPublicKey**(`privateKey`): `object`

Defined in: [packages/core/src/crypto/p256Guardian.ts:580](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/crypto/p256Guardian.ts#L580)

Derive the uncompressed-SEC1 `(x, y)` of a P-256 private key (for `addP256Guardian`).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `privateKey` | `Uint8Array` \| `` `0x${string}` `` |

## Returns

`object`

### x

> **x**: `` `0x${string}` ``

### y

> **y**: `` `0x${string}` ``
