> **p256GuardianPublicKey**(`privateKey`): `object`

Defined in: [packages/core/src/crypto/p256Guardian.ts:580](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L580)

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
