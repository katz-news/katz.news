---
published: true
title: AI Agents Are Testing the Limits of Zero-Trust Security
date: 2026-11-10
section: technology
source_name: IEEE Spectrum
source_url: https://spectrum.ieee.org/zero-trust-agentic-ai-architecture
---
Zero trust sounds foolproof. It isn't — because something still has to be trusted.

AI agents now work in teams, managed by orchestrators, doing risk assessment, client profiling and matchmaking. But trust them how? Agents are told to delete old history so it cannot skew future decisions. A later prompt can resurrect it anyway: a context recovery attack, and no proof the instructions were ever followed.

Zero-trust architecture promises never trust, always verify. The snag is the policy enforcement point — the component that enforces the policies must itself be trusted. Trust the guard, and the guard's rules. Somewhere in the chain, somebody takes someone's word for it.

The risks are concrete. Vibe coding hands an entire codebase to an untrusted model outside the organisation, spreading vulnerability across every surface. A zero-day attack could expose the whole ecosystem, since it rests on a single trusted layer. And Queen's University Belfast found agentic orchestration can pull off a de-authentication attack on a drone in two to three seconds — leaving little time to react, let alone repair.

The fixes exist, in outline: AI bills of material, distributed ledgers for traceability, and formal verification of trust. Yet agents that behave perfectly on one task may misbehave on another — horizontal anomalies — and semi-trusted agents offer short-term gains whose recovery costs nobody has yet measured.

Conclusion: zero trust is not a wall, but rather a wager — and the bet is still open.