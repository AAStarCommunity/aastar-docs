> **PaymasterType** = `"v4"` \| `"super"`

Defined in: [packages/paymaster/src/PaymasterManager.ts:12](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/paymaster/src/PaymasterManager.ts#L12)

Supported paymaster types.
- 'v4'    → PaymasterV4 layout (84 bytes): [paymaster(20)][verGas(16)][postGas(16)][token(20)][validUntil(6)][validAfter(6)]
- 'super' → SuperPaymaster layout (104 bytes): [paymaster(20)][verGas(16)][postGas(16)][operator(20)][maxRate(32)]
