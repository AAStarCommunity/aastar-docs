> **PaymasterType** = `"v4"` \| `"super"`

Defined in: [packages/paymaster/src/PaymasterManager.ts:12](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/paymaster/src/PaymasterManager.ts#L12)

Supported paymaster types.
- 'v4'    → PaymasterV4 layout (84 bytes): [paymaster(20)][verGas(16)][postGas(16)][token(20)][validUntil(6)][validAfter(6)]
- 'super' → SuperPaymaster layout (104 bytes): [paymaster(20)][verGas(16)][postGas(16)][operator(20)][maxRate(32)]
