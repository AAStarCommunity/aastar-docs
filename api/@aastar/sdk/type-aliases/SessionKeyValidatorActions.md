> **SessionKeyValidatorActions** = `object`

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:27](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L27)

## Properties

### buildGrantHash()

> **buildGrantHash**: (`args`) => `Promise`\<[`Hex`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:38](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L38)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `cfg`: [`SessionConfig`](SessionConfig.md); `sessionKey`: `Address`; \} |
| `args.account` | `Address` |
| `args.cfg` | [`SessionConfig`](SessionConfig.md) |
| `args.sessionKey` | `Address` |

#### Returns

`Promise`\<[`Hex`](https://viem.sh/docs/index.html)\>

***

### buildP256GrantHash()

> **buildP256GrantHash**: (`args`) => `Promise`\<[`Hex`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:39](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L39)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `cfg`: [`SessionConfig`](SessionConfig.md); `p256KeyX`: [`Hex`](https://viem.sh/docs/index.html); `p256KeyY`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account` | `Address` |
| `args.cfg` | [`SessionConfig`](SessionConfig.md) |
| `args.p256KeyX` | [`Hex`](https://viem.sh/docs/index.html) |
| `args.p256KeyY` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`Hex`](https://viem.sh/docs/index.html)\>

***

### checkSessionScope()

> **checkSessionScope**: (`args`) => `Promise`\<`void`\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:29](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `dest`: `Address`; `selector`: [`Hex`](https://viem.sh/docs/index.html); `sessionKeyOrHash`: [`Hex`](https://viem.sh/docs/index.html); `sessionType`: `number`; \} |
| `args.account` | `Address` |
| `args.dest` | `Address` |
| `args.selector` | [`Hex`](https://viem.sh/docs/index.html) |
| `args.sessionKeyOrHash` | [`Hex`](https://viem.sh/docs/index.html) |
| `args.sessionType` | `number` |

#### Returns

`Promise`\<`void`\>

***

### grantNonces()

> **grantNonces**: (`args`) => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:30](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L30)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `key`: `Address`; \} |
| `args.account` | `Address` |
| `args.key` | `Address` |

#### Returns

`Promise`\<`bigint`\>

***

### grantNonces\_p256()

> **grantNonces\_p256**: (`args`) => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `keyHash`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account` | `Address` |
| `args.keyHash` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<`bigint`\>

***

### recordCallForVelocity()

> **recordCallForVelocity**: (`args`) => `Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `sessionKeyOrHash`: [`Hex`](https://viem.sh/docs/index.html); `sessionType`: `number`; `signer?`: [`Account`](https://viem.sh/docs/index.html) \| `Address`; \} |
| `args.account` | `Address` |
| `args.sessionKeyOrHash` | [`Hex`](https://viem.sh/docs/index.html) |
| `args.sessionType` | `number` |
| `args.signer?` | [`Account`](https://viem.sh/docs/index.html) \| `Address` |

#### Returns

`Promise`\<[`Hash`](https://viem.sh/docs/index.html)\>

***

### sessionKeyCount()

> **sessionKeyCount**: (`args`) => `Promise`\<`bigint`\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:32](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; \} |
| `args.account` | `Address` |

#### Returns

`Promise`\<`bigint`\>

***

### sessionStates\_p256()

> **sessionStates\_p256**: (`args`) => `Promise`\<[`P256SessionState`](P256SessionState.md)\>

Defined in: [packages/core/src/actions/sessionKeyValidator.ts:33](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/sessionKeyValidator.ts#L33)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `account`: `Address`; `keyHash`: [`Hex`](https://viem.sh/docs/index.html); \} |
| `args.account` | `Address` |
| `args.keyHash` | [`Hex`](https://viem.sh/docs/index.html) |

#### Returns

`Promise`\<[`P256SessionState`](P256SessionState.md)\>
