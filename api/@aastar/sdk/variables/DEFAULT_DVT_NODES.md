> `const` **DEFAULT\_DVT\_NODES**: `Readonly`\<`Record`\<`number`, readonly [`DVTNode`](../interfaces/DVTNode.md)[]\>\>

Defined in: [packages/core/src/crypto/dvtNodes.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtNodes.ts#L31)

AAStar's default, always-on **testnet** DVT signer nodes, keyed by chainId.

Sepolia (11155111): the 3 production-key nodes behind AAStar's Cloudflare named tunnel,
each registered on the v0.20.0 validator `AAStarBLSAlgorithm`
(`0xAF525A161CB17e0A1b6254ef0B8d8473bdA05174` = `CANONICAL_ADDRESSES[11155111].aaStarBLSAlgorithm`).
These are AAStar's **beta-test** nodes with INDEPENDENT secret keys (NOT the public `BLS_TEST`
fixtures). On-chain verified: a 3-node co-sign → `validate(userOpHash, proof) === 0`, with
fail-closed `403` on a bad `ownerAuth`. Source of truth:
`YetAnotherAA-Validator/deploy/sdk-dvt-config.testnet.json`.

Conventions for these nodes: `userOpHash = EntryPoint.getUserOpHash(PackedUserOp)`;
`ownerAuth = owner EIP-191 ECDSA over userOpHash`; proof wire = EIP-2537 (matches [encodeDVTVerifierProof](../functions/encodeDVTVerifierProof.md)).
Mandatory-BLS account: guard-enabled + `approvedAlgIds = [0x01]`.
