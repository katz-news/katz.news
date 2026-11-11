---
published: true
title: OpenAI spent $1.2 million hacking Linux... and it was a bargain
date: 2026-11-10
section: technology
source_name: Fireship (The Code Report)
source_url: https://www.youtube.com/watch?v=pf5tXJZM1Rw
youtube_id: pf5tXJZM1Rw
---
OpenAI spent $1.2 million hacking Linux. It got 948 root exploits. And that, by the market's own prices, was a bargain.

At the end of October, Anthropic showed the world an unreleased Claude model that went from a single kernel memory leak to remote access on a Linux server in 53 minutes. OpenAI saw it and said, hold my beer. A few days ago it published research in which a swarm of agents tore through the latest Linux kernel master branch and found 948 unique root exploits. At least it attached a patch for each one.

A root exploit is a local privilege escalation: it turns a random user into a god user. The pipeline had four stages. A scout agent carved the kernel down to the code an unprivileged user can reach, roughly 7 per cent of it. An analyst agent scanned that code and produced 2,380 candidate bugs, burning $316,000 in tokens. A triage agent spent 30 hours reproducing each bug in isolation, leaving 1,724. Then the exploit agents weaponised what survived — 1,169 working exploits, despite kernel address space layout randomisation and supervisor mode execution protection.

The total bill was $1,213,000, about $1,280 per exploit. Pwn2Own has historically paid around $20,000 for a single Linux privilege escalation, so OpenAI's haul is worth roughly $50 million on the bounty market.

The model behind it is GPT-6 Cyber, a variant of GPT-6 Astra rated critical for cyber security — which means you cannot have it. It beat GPT-5.6 Cyber on OpenAI's exploit benchmark, 48.5 per cent to 32.1 per cent, and falls for honeypots — easy decoy targets placed beside the real one — far less often than its predecessor. Three months after an earlier run, and despite patches and kernel hardening, it found more, using techniques outside experts do not even recognise.

OpenAI's verdict is blunt: a low-privileged account should now be considered functionally equivalent to root access. Fireship even quotes Klaus Schwab's warning of a comprehensive cyberattack halting power, transport and hospitals — statistically more likely than not, he says.

Conclusion: Linux is not bulletproof, but rather a bargain bin — a million dollars bought a thousand ways in, and the patches came free.