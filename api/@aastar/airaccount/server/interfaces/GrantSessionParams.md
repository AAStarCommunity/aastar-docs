Defined in: [packages/airaccount/src/server/services/session-key-service.ts:28](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L28)

## Properties

### account

> **account**: `string`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:30](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L30)

Account that owns the session

***

### callTargets?

> `optional` **callTargets**: `string`[]

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:44](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L44)

Allowed destination addresses ([] = any). Session struct field.

***

### contractScope?

> `optional` **contractScope**: `string`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:36](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L36)

address(0) = any destination allowed

***

### expiry

> **expiry**: `number`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:34](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L34)

Expiry unix timestamp (max 7 days from now)

***

### ownerSig?

> `optional` **ownerSig**: `string`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:48](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L48)

Owner signature over buildGrantHash() — omit if calling directly from account

***

### selectorAllowlist?

> `optional` **selectorAllowlist**: `string`[]

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:46](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L46)

Allowed selectors ([] = any). Session struct field.

***

### selectorScope?

> `optional` **selectorScope**: `string`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:38](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L38)

bytes4(0) = any selector allowed

***

### sessionKey

> **sessionKey**: `string`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:32](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L32)

The session key address (ephemeral EOA)

***

### velocityLimit?

> `optional` **velocityLimit**: `number`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:40](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L40)

Max calls per velocityWindow (0 = unlimited). Session struct field.

***

### velocityWindow?

> `optional` **velocityWindow**: `number`

Defined in: [packages/airaccount/src/server/services/session-key-service.ts:42](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/session-key-service.ts#L42)

Velocity window in seconds (0 = no window). Session struct field.
