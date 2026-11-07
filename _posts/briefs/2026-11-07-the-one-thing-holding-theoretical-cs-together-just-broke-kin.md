---
published: true
title: The one thing holding theoretical CS together just broke... kinda
date: 2026-11-10
section: technology
source_name: Fireship (The Code Report)
source_url: https://www.youtube.com/watch?v=iw9SZgyahqg
youtube_id: iw9SZgyahqg
---
The glue holding theoretical computer science together just snapped. Or rather, it snapped in theory, which is where it lived.

In 1999, Russell Impagliazzo and Mohan Paturi of UC San Diego wrote down the Exponential Time Hypothesis: 3-SAT — the original NP-complete problem, where you must satisfy a list of three-variable rules — will always take exponential time. No algorithm will ever fundamentally beat brute force. Over 800 published papers built their lower bounds on that assumption.

On 16 October, an unnamed OpenAI model broke it. The model — the same one that had dumped 722 maths papers on GitHub weeks earlier — produced an algorithm solving 3-SAT in roughly 2 to the power of n over the square root of log n. Still slow, but not exponential. By definition, the hypothesis is false.

The trick was counting, not searching. Instead of flipping switches and checking rules, the model counted how many solutions exist, split the problem into pieces, and used Hermite interpolation — 1800s mathematics — to reassemble the answer. No human had thought to try it.

Here is the 'kinda'. The algorithm only beats brute force once n exceeds 10 to the power of 10,000. Nothing changes in practice today. Scott Aaronson bumped his odds of P equalling NP from 3 per cent to 5 per cent, and Impagliazzo and Paturi — asked by OpenAI to verify the proof, unpaid and unsigned — noted the first draft was completely unreadable.

Conclusion: a machine did not end theoretical computer science, but rather embarrassed it — a bold, brilliant break, built on a 27-year-old hypothesis, a 19th-century trick and a number too big to use.