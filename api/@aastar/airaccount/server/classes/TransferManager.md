Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:149](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L149)

Transfer manager — extracted from NestJS TransferService.
No passkey verification: callers are responsible for their own auth.

## Constructors

### Constructor

> **new TransferManager**(`ethereum`, `accountManager`, `blsService`, `paymasterManager`, `tokenService`, `storage`, `signer`, `logger?`, `guardChecker?`): `TransferManager`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:154](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L154)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ethereum` | [`EthereumProvider`](EthereumProvider.md) |
| `accountManager` | [`AccountManager`](AccountManager.md) |
| `blsService` | [`BLSSignatureService`](BLSSignatureService.md) |
| `paymasterManager` | [`PaymasterManager`](PaymasterManager.md) |
| `tokenService` | [`TokenService`](TokenService.md) |
| `storage` | [`IStorageAdapter`](../interfaces/IStorageAdapter.md) |
| `signer` | [`ISignerAdapter`](../interfaces/ISignerAdapter.md) |
| `logger?` | [`ILogger`](../interfaces/ILogger.md) |
| `guardChecker?` | [`GuardChecker`](GuardChecker.md) |

#### Returns

`TransferManager`

## Methods

### estimateGas()

> **estimateGas**(`userId`, `params`): `Promise`\<\{ `callGasLimit`: `string`; `maxFeePerGas`: `string`; `maxPriorityFeePerGas`: `string`; `preVerificationGas`: `string`; `totalGasEstimate`: `string`; `validatorGasEstimate`: `string`; `verificationGasLimit`: `string`; \}\>

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:401](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L401)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `params` | [`EstimateGasParams`](../interfaces/EstimateGasParams.md) |

#### Returns

`Promise`\<\{ `callGasLimit`: `string`; `maxFeePerGas`: `string`; `maxPriorityFeePerGas`: `string`; `preVerificationGas`: `string`; `totalGasEstimate`: `string`; `validatorGasEstimate`: `string`; `verificationGasLimit`: `string`; \}\>

***

### executeTransfer()

> **executeTransfer**(`userId`, `params`): `Promise`\<[`TransferResult`](../interfaces/TransferResult.md)\>

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:169](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L169)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `params` | [`ExecuteTransferParams`](../interfaces/ExecuteTransferParams.md) |

#### Returns

`Promise`\<[`TransferResult`](../interfaces/TransferResult.md)\>

***

### getTransferHistory()

> **getTransferHistory**(`userId`, `page`, `limit`): `Promise`\<\{ `limit`: `number`; `page`: `number`; `total`: `number`; `totalPages`: `number`; `transfers`: [`TransferRecord`](../interfaces/TransferRecord.md)[]; \}\>

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:474](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L474)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `userId` | `string` | `undefined` |
| `page` | `number` | `1` |
| `limit` | `number` | `10` |

#### Returns

`Promise`\<\{ `limit`: `number`; `page`: `number`; `total`: `number`; `totalPages`: `number`; `transfers`: [`TransferRecord`](../interfaces/TransferRecord.md)[]; \}\>

***

### getTransferStatus()

> **getTransferStatus**(`userId`, `transferId`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:446](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/transfer-manager.ts#L446)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `transferId` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>
