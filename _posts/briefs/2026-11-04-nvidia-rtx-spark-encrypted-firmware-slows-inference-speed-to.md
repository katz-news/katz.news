---
published: true
title: Nvidia RTX Spark encrypted firmware slows inference speed to 35% on Linux
date: 2026-11-03
section: technology
source_name: Hacker News (front page)
source_url: https://news.ycombinator.com/item?id=50362905
---
Your shiny new AI laptop runs Linux at 35% speed. Plugging it in makes it slower.

That is the headline from a hands-on test of the Nvidia RTX Spark laptop (MindStudio): running GPT-OSS-120B natively on Linux gave 23.2 tokens per second against 65.4 on Windows — and WSL, Windows' own Linux, managed 65.1. The GPU clock collapses to about 780 MHz when plugged in, against roughly 2.2 GHz on Windows. Unplug it and Linux jumps back to around 61 tokens per second, because the charger is the problem, not the battery.

The culprit is the Nvidia Platform Controllers and Framework, a Windows-only component fed an encrypted power table that only the Windows driver can read. The fix is in Nvidia's hands.

Conclusion: the RTX Spark is not a Linux laptop. It is a Windows laptop that tolerates Linux.