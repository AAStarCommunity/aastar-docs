Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:150](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/transfer-manager.ts#L150)

Transfer manager — extracted from NestJS TransferService.
No passkey verification: callers are responsible for their own auth.

## Constructors

### Constructor

> **new TransferManager**(`ethereum`, `accountManager`, `blsService`, `paymasterManager`, `tokenService`, `storage`, `signer`, `logger?`, `guardChecker?`): `TransferManager`

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:155](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/transfer-manager.ts#L155)

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

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:402](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/transfer-manager.ts#L402)

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

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:170](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/transfer-manager.ts#L170)

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

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:475](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/transfer-manager.ts#L475)

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

Defined in: [packages/airaccount/src/server/services/transfer-manager.ts:447](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/transfer-manager.ts#L447)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId` | `string` |
| `transferId` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>
