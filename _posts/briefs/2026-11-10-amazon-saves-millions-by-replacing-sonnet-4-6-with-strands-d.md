---
published: true
title: Amazon saves millions by replacing Sonnet 4.6 with Strands Decider
date: 2026-11-10
section: technology
source_name: Hacker News (front page)
source_url: https://news.ycombinator.com/item?id=50436640
---
Amazon found a cheaper way to sort its own mail — and the savings are measured in millions.

For a while, Amazon and AWS teams relied on Claude Sonnet 4.6 to label tickets in one of the world's largest internal ticketing systems. It was the goldilocks choice: smart enough, cheap enough. Two Amazon engineers have now swapped it for Strands Decider, a decision model launched a month ago, that performed just as well at 98 per cent less cost.

The difference is the shape of the job. Sonnet 4.6 is a large language model: it read a long system prompt and a JSON structured output on every call. Strands Decider is a decision model — it cannot generate text at all. Given a state and a question with a set of options, it returns a single choice: one of 20 category types, from customer escalations to security findings. It does one thing, and it does it fast.

The numbers are blunt. Average time per call fell from 4,215 milliseconds to 897 — a 78 per cent improvement. Total tokens per ticket fell from 6,724 to 2,010. And the cost per ticket fell from $0.0222 to about $0.0005 — roughly $500 per million tickets, against $22,200 before.

With the three-way switch — Bedrock, dual, Decider — the team ran both models on real traffic before switching fully, and one surprise emerged: JSON key order changed the answer.

Conclusion: the lesson is not that small models beat big ones, but rather that the right model beats the biggest one — decisively, dramatically, and at about a fiftieth of the price.