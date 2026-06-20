Defined in: [packages/airaccount/src/core/crypto/crypto.util.ts:3](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/core/crypto/crypto.util.ts#L3)

## Constructors

### Constructor

> **new CryptoUtil**(): `CryptoUtil`

#### Returns

`CryptoUtil`

## Methods

### decrypt()

> `static` **decrypt**(`encryptedData`, `secretKey`): `string`

Defined in: [packages/airaccount/src/core/crypto/crypto.util.ts:28](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/core/crypto/crypto.util.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encryptedData` | `string` |
| `secretKey` | `string` |

#### Returns

`string`

***

### encrypt()

> `static` **encrypt**(`text`, `secretKey`): `string`

Defined in: [packages/airaccount/src/core/crypto/crypto.util.ts:9](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/core/crypto/crypto.util.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `secretKey` | `string` |

#### Returns

`string`

***

### generateSecretKey()

> `static` **generateSecretKey**(): `string`

Defined in: [packages/airaccount/src/core/crypto/crypto.util.ts:53](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/core/crypto/crypto.util.ts#L53)

#### Returns

`string`
