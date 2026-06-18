Defined in: [packages/sdk/src/utils/testScenarios.ts:30](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/sdk/src/utils/testScenarios.ts#L30)

## Constructors

### Constructor

> **new UserOpScenarioBuilder**(): `UserOpScenarioBuilder`

#### Returns

`UserOpScenarioBuilder`

## Methods

### buildTransferScenario()

> `static` **buildTransferScenario**(`type`, `params`): `Promise`\<\{ `opHash`: `` `0x${string}` ``; `userOp`: `any`; \}\>

Defined in: [packages/sdk/src/utils/testScenarios.ts:34](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/sdk/src/utils/testScenarios.ts#L34)

Builds a signed PackedUserOperation for a token transfer based on the specified scenario.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`UserOpScenarioType`](../enumerations/UserOpScenarioType.md) |
| `params` | [`ScenarioParams`](../interfaces/ScenarioParams.md) |

#### Returns

`Promise`\<\{ `opHash`: `` `0x${string}` ``; `userOp`: `any`; \}\>
