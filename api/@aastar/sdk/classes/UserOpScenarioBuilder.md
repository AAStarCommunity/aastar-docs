Defined in: [packages/sdk/src/utils/testScenarios.ts:30](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/sdk/src/utils/testScenarios.ts#L30)

## Constructors

### Constructor

> **new UserOpScenarioBuilder**(): `UserOpScenarioBuilder`

#### Returns

`UserOpScenarioBuilder`

## Methods

### buildTransferScenario()

> `static` **buildTransferScenario**(`type`, `params`): `Promise`\<\{ `opHash`: `` `0x${string}` ``; `userOp`: `any`; \}\>

Defined in: [packages/sdk/src/utils/testScenarios.ts:34](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/sdk/src/utils/testScenarios.ts#L34)

Builds a signed PackedUserOperation for a token transfer based on the specified scenario.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`UserOpScenarioType`](../enumerations/UserOpScenarioType.md) |
| `params` | [`ScenarioParams`](../interfaces/ScenarioParams.md) |

#### Returns

`Promise`\<\{ `opHash`: `` `0x${string}` ``; `userOp`: `any`; \}\>
