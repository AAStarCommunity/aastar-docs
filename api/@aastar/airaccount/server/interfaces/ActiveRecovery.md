Defined in: [packages/airaccount/src/server/services/recovery-service.ts:78](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L78)

Decoded view of the account's `activeRecovery()` struct (RecoveryProposal).

On-chain layout (`AAStarAgentStorageLayout.RecoveryProposal`):
  - newOwner            : proposed new owner (address(0) ⇒ no active recovery)
  - proposedAt          : block.timestamp when the recovery was proposed
  - approvalBitmap      : bit i set ⇒ guardian[i] approved (2-of-3 to execute)
  - cancellationBitmap  : bit i set ⇒ guardian[i] voted to cancel (2-of-3 to cancel)

The remaining fields are SDK-side conveniences derived from those values.

## Properties

### approvalBitmap

> **approvalBitmap**: `bigint`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:84](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L84)

Bitmap of guardian approvals (bit i ⇒ guardian[i] approved).

***

### approvalCount

> **approvalCount**: `number`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:88](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L88)

Number of distinct guardian approvals (popcount of `approvalBitmap`).

***

### cancellationBitmap

> **cancellationBitmap**: `bigint`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:86](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L86)

Bitmap of guardian cancel votes (bit i ⇒ guardian[i] voted to cancel).

***

### cancellationCount

> **cancellationCount**: `number`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:90](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L90)

Number of distinct guardian cancel votes (popcount of `cancellationBitmap`).

***

### executeAfter

> **executeAfter**: `bigint`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:92](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L92)

Earliest timestamp at which `executeRecovery` may succeed (`proposedAt + timelock`).

***

### isActive

> **isActive**: `boolean`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:94](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L94)

True when a recovery is currently active (`newOwner != address(0)`).

***

### newOwner

> **newOwner**: `string`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:80](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L80)

Proposed new owner. `0x0000…0000` means there is no active recovery.

***

### proposedAt

> **proposedAt**: `bigint`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:82](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L82)

`block.timestamp` at which the recovery was proposed (seconds).
