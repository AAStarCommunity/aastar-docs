> **p256GuardianPublicKey**(`privateKey`): `object`

Defined in: [packages/core/src/crypto/p256Guardian.ts:580](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L580)

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
