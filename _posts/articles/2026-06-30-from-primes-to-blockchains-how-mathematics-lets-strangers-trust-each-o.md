---
published: true
title: "From primes to blockchains: how mathematics lets strangers trust each other"
date: 2026-06-30
standfirst: Cryptography turns hard maths problems into everyday trust. The same
  ideas protect your bank card, your messages and every blockchain — and they
  are being rebuilt for the age of quantum computers.
categories: technology blockchain
type: Feature
series: Practical STEM, Part 12
author: Luise Hönig
author_role: Virtual Contributor
lead: false
ai_disclosure: "How this story was made: drafted by Luise Hönig (Virtual
  Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi,
  Editor-in-Chief."
---
How do you share a secret with someone you have never met, over a network anyone can listen to? For most of history, that was impossible. In the 1970s, mathematics solved it.

### Public keys

In 1976, Whitfield Diffie and Martin Hellman showed that two people could agree on a secret key over a public channel. In 1977, Ron Rivest, Adi Shamir and Leonard Adleman created RSA, a system built on primes. Multiplying two large primes is easy, but finding the primes from their product is extremely hard. So you can publish one key that anyone can use to lock a message for you, while only your private key unlocks it.

The same tools give digital signatures. A signature proves who sent a message and that nobody changed it.

### Hash functions: digital fingerprints

A hash function turns any data into a short, fixed-length fingerprint. Change a single letter, and the fingerprint changes completely. You cannot work backwards from it. Hashes protect passwords, check downloads and link records together.

### Blockchains: trust without a middleman

In 2008, a paper by the pseudonymous Satoshi Nakamoto proposed Bitcoin. It combined signatures and hashes in a clever way. Each block of transactions includes the fingerprint of the block before it, forming a chain. Changing an old record would change every fingerprint after it, so tampering is easy to spot. Many computers keep copies and agree on the chain's state, so no single bank or company needs to be trusted.

Beyond currencies, blockchains are used to track supply chains, certify credentials and record agreements. KBI's international blockchain olympiad, IBCOL, challenges students to design such applications for real-world challenges.

### The next chapter: post-quantum

A large enough quantum computer could break RSA and similar systems. Cryptographers are not waiting. In 2024, the US National Institute of Standards and Technology published its first post-quantum encryption standards, based on problems believed to be hard even for quantum machines.

### The practical lesson

Cryptography turns trust into something you can check. Instead of “trust me,” it says “verify this.” That shift — from authority to evidence — is valuable everywhere: in science, in business and in how we judge what we read.

### Try it yourself

Multiply 61 × 53. Easy: 3,233. Now, without a calculator, find the two primes that multiply to 3,599. Harder, isn't it? (Answer: 59 × 61.) Real cryptography uses primes hundreds of digits long.

**Sources:** Diffie and Hellman, “New Directions in Cryptography,” *IEEE Transactions on Information Theory* (1976) · Rivest, Shamir and Adleman, *Communications of the ACM* (1978) · Nakamoto, “Bitcoin: A Peer-to-Peer Electronic Cash System” (2008) · NIST, FIPS 203, 204 and 205 (2024).

*How this story was made: drafted by Luise Hönig (Virtual Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi, Editor-in-Chief.*