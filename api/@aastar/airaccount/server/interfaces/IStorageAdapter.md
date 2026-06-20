Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:119](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L119)

Pluggable storage adapter — replaces NestJS DatabaseService.
SDK only manages accounts, transfers, paymasters, and BLS config.
User authentication is NOT handled by the SDK.

## Methods

### findAccountByUserId()

> **findAccountByUserId**(`userId`): `Promise`\<[`AccountRecord`](AccountRecord.md) \| `null`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:123](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L123)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`AccountRecord`](AccountRecord.md) \| `null`\>

***

### findTransferById()

> **findTransferById**(`id`): `Promise`\<[`TransferRecord`](TransferRecord.md) \| `null`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:129](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L129)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<[`TransferRecord`](TransferRecord.md) \| `null`\>

***

### findTransfersByUserId()

> **findTransfersByUserId**(`userId`): `Promise`\<[`TransferRecord`](TransferRecord.md)[]\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:128](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L128)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`TransferRecord`](TransferRecord.md)[]\>

***

### getAccounts()

> **getAccounts**(): `Promise`\<[`AccountRecord`](AccountRecord.md)[]\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:121](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L121)

#### Returns

`Promise`\<[`AccountRecord`](AccountRecord.md)[]\>

***

### getBlsConfig()

> **getBlsConfig**(): `Promise`\<[`BlsConfigRecord`](BlsConfigRecord.md) \| `null`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:138](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L138)

#### Returns

`Promise`\<[`BlsConfigRecord`](BlsConfigRecord.md) \| `null`\>

***

### getPaymasters()

> **getPaymasters**(`userId`): `Promise`\<[`PaymasterRecord`](PaymasterRecord.md)[]\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:133](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L133)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`PaymasterRecord`](PaymasterRecord.md)[]\>

***

### removePaymaster()

> **removePaymaster**(`userId`, `name`): `Promise`\<`boolean`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:135](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L135)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `name` | `string` |

#### Returns

`Promise`\<`boolean`\>

***

### saveAccount()

> **saveAccount**(`account`): `Promise`\<`void`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:122](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L122)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `account` | [`AccountRecord`](AccountRecord.md) |

#### Returns

`Promise`\<`void`\>

***

### savePaymaster()

> **savePaymaster**(`userId`, `paymaster`): `Promise`\<`void`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:134](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L134)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `paymaster` | [`PaymasterRecord`](PaymasterRecord.md) |

#### Returns

`Promise`\<`void`\>

***

### saveTransfer()

> **saveTransfer**(`transfer`): `Promise`\<`void`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:127](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L127)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transfer` | [`TransferRecord`](TransferRecord.md) |

#### Returns

`Promise`\<`void`\>

***

### updateAccount()

> **updateAccount**(`userId`, `updates`): `Promise`\<`void`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:124](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L124)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `updates` | `Partial`\<[`AccountRecord`](AccountRecord.md)\> |

#### Returns

`Promise`\<`void`\>

***

### updateSignerNodesCache()

> **updateSignerNodesCache**(`nodes`): `Promise`\<`void`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:139](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L139)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nodes` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

***

### updateTransfer()

> **updateTransfer**(`id`, `updates`): `Promise`\<`void`\>

Defined in: [packages/airaccount/src/server/interfaces/storage-adapter.ts:130](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/interfaces/storage-adapter.ts#L130)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `updates` | `Partial`\<[`TransferRecord`](TransferRecord.md)\> |

#### Returns

`Promise`\<`void`\>
