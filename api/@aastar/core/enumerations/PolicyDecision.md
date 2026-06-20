Defined in: [packages/core/src/actions/policyRegistry.ts:14](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/policyRegistry.ts#L14)

Tri-state result of a validation-time policy read (checkPolicy).
Mirrors `IPolicyRegistry.PolicyDecision` (the on-chain `uint8` enum):
  0 ALLOW       — proceed with normal single-signature validation.
  1 REQUIRE_DVT — within the hard ceiling but past a configured DVT trigger; the
                  consumer MUST additionally verify a >=threshold DVT BLS co-sign.
  2 REJECT      — frozen sender, over a hard cap / daily limit, or off-allowlist.

## Enumeration Members

### ALLOW

> **ALLOW**: `0`

Defined in: [packages/core/src/actions/policyRegistry.ts:15](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/policyRegistry.ts#L15)

***

### REJECT

> **REJECT**: `2`

Defined in: [packages/core/src/actions/policyRegistry.ts:17](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/policyRegistry.ts#L17)

***

### REQUIRE\_DVT

> **REQUIRE\_DVT**: `1`

Defined in: [packages/core/src/actions/policyRegistry.ts:16](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/policyRegistry.ts#L16)
