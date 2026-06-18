# Examples Overview

Runnable, integration-focused examples for the AAStar SDK (`@aastar/sdk`). They
show how to give your users a **gasless, email + passkey smart-account**
experience — no seed phrase, no ETH for gas — built on AirAccount (TEE-backed
KMS + WebAuthn) and SuperPaymaster (ERC-4337 gas sponsorship).

## Starter examples — `aastar-examples`

The two baseline integration examples live in the standalone
**[AAStarCommunity/aastar-examples](https://github.com/AAStarCommunity/aastar-examples)**
repo (each is its own `package.json`, installed outside the monorepo, targeting
`@aastar/sdk@0.20.x`):

| Example | What it is | Use when |
| :--- | :--- | :--- |
| **[`embed-widget/`](https://github.com/AAStarCommunity/aastar-examples/tree/main/embed-widget)** | A minimal **drop-in widget** — a mountable React component **and** a vanilla `<script>`/iframe IIFE (`window.AAStarWidget.mount(...)`). Email/passkey register → smart-account address → balance → one gasless transfer. | You already have a site (any stack) and want to **embed** AAStar account + gasless into it. |
| **[`starter-site/`](https://github.com/AAStarCommunity/aastar-examples/tree/main/starter-site)** | A full **template-swappable site** (Vite + React + routing + dashboard) with brand/colors/copy behind `src/config.ts`. Same capabilities as the widget. | You're building a **new** app and want a runnable starting point. |

Both reach the same capability — email + passkey smart account + gasless tx —
differing only in *integration surface* (embed into an existing page vs. own the
whole app). Each example has its own README with setup, the `.env` it needs
(AirAccount/KMS backend URL, SuperPaymaster operator, RPC), and run instructions.
The register / passkey / gasless flows require a live AirAccount backend + a
registered SuperPaymaster operator; the on-chain reads (address, balance) work
against any RPC.

> New feature-specific examples (x402 settlement, channels, community/operator
> flows, framework integrations) land in the `aastar-examples` repo going
> forward, not in the SDK repo.

## YAA — the full reference application

For a **complete, production-grade** app — recovery, weighted/tiered signatures,
DVT, the full account lifecycle — see **YetAnotherAA (YAA)**, AAStar's own full
example app:

➡️ **[github.com/AAStarCommunity/YetAnotherAA](https://github.com/AAStarCommunity/YetAnotherAA)**

The two starters above are the "hello world" → "starter template" path; YAA is
the full app that exercises everything the SDK can do.

## SDK role & flow walkthroughs

End-to-end walkthroughs of the SDK's role-based clients (documented here):

- **[Operator Flow](./operator-flow)**: Staking and managing a SuperPaymaster.
- **[Community Flow](./community-flow)**: Registering a community and setting up reputation rules.
- **[End User Flow](./enduser-flow)**: Sending gasless transactions using community credit.
- **[Multi-Chain Setup](./multi-chain)**: Configuring and using the SDK across different networks — pass a `viem` chain and the SDK resolves the canonical addresses automatically.
- **[Lifecycle API (L3) Developer Guide](/guide/docs/L3_Lifecycle_Developer_Guide)**: The full account lifecycle API.
