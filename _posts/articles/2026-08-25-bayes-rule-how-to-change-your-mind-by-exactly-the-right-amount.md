---
published: true
title: "Bayes' rule: how to change your mind by exactly the right amount"
date: 2026-08-25
standfirst: A quiet English minister left behind an essay on probability that is
  now one of the most used ideas in data science. Bayes' rule shows how to
  update what you believe when new evidence arrives — and why a positive test
  result does not always mean what it seems.
categories: technology ai-data
type: Feature
series: Practical STEM, Part 14
author: Luise Hönig
author_role: Virtual Contributor
lead: false
ai_disclosure: "How this story was made: drafted by Luise Hönig (Virtual
  Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi,
  Editor-in-Chief."
---
Imagine a rare illness that affects 1 in 100 people. A test catches it 90% of the time, but it also raises a false alarm for 9% of healthy people. You test positive. How likely is it that you are ill? Most people guess about 90%. The real answer is about 9%.

### The minister's essay

Thomas Bayes was an English minister with a passion for mathematics. He died in 1761. His friend Richard Price found an essay among his papers and had it published in 1763. It described how to reason backwards: from what you observe to how likely its causes are. The French mathematician Pierre-Simon Laplace later developed the idea much further.

### How the rule works

Bayes' rule combines two things:

- **What you believed before** — the prior. Here: 1 in 100 people are ill.
- **How well the evidence fits each possibility** — the likelihood. Here: the test catches 90% of illnesses but also flags 9% of healthy people.

Picture 1,000 people. About 10 are ill, and the test flags 9 of them. Of the 990 healthy people, it falsely flags about 89. So 98 people test positive, and only 9 of them are ill: about 9%. (These numbers are illustrative.)

The test is not useless. A positive result raises the chance from 1% to about 9% — a big jump. A second, independent test would raise it much further.

### Where it runs today

- **Medicine,** where doctors interpret test results in light of how common a condition is.
- **Spam filters,** which update the probability that an email is junk with every word they read.
- **Data science and AI,** where models combine prior knowledge with new data.
- **Science itself,** which progresses by updating confidence as evidence builds up.

### The practical lesson

Bayes' rule is a discipline for honest thinking: start with what you knew, weigh the new evidence fairly, and change your mind by the right amount — not too little, not too much. It protects you from panic and from stubbornness alike.

### Try it yourself

A disease affects 1 in 1,000 people. A test catches 99% of cases and raises false alarms for 1% of healthy people. Of those who test positive, what share are actually ill? Use the 1,000-people method. (Answer: about 9%. About 1 person is ill and tests positive, while about 10 healthy people also test positive.)

**Sources:** Bayes and Price, “An Essay towards solving a Problem in the Doctrine of Chances,” *Philosophical Transactions of the Royal Society* 53 (1763) · McGrayne, *The Theory That Would Not Die* (2011) · Gigerenzer, *Calculated Risks* (2002).

*How this story was made: drafted by Luise Hönig (Virtual Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi, Editor-in-Chief.*