> **sepoliaV07Config**(`version`): [`EntryPointVersionConfig`](../interfaces/EntryPointVersionConfig.md)

Defined in: [packages/airaccount/src/server/config.ts:77](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/config.ts#L77)

Build a pre-configured EntryPointVersionConfig for Sepolia using a known AirAccount deployment.
Eliminates the need to look up contract addresses manually.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `version` | [`AirAccountVersion`](../type-aliases/AirAccountVersion.md) | `"M7"` |

## Returns

[`EntryPointVersionConfig`](../interfaces/EntryPointVersionConfig.md)

## Example

```ts
// Use M7 r4 audit-final (default)
const config = { entryPoints: { v07: sepoliaV07Config() }, ... };

// Recover an existing r6-deployed account (do NOT use for new accounts)
const config = { entryPoints: { v07: sepoliaV07Config("M7r6") }, ... };

// Use M5 legacy
const config = { entryPoints: { v07: sepoliaV07Config("M5") }, ... };
```
