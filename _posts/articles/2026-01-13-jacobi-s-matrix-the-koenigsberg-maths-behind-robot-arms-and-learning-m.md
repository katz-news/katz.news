---
published: true
title: "Jacobi's matrix: the Königsberg maths behind robot arms and learning machines"
date: 2026-01-13
standfirst: "Carl Gustav Jacob Jacobi taught in Königsberg for nearly two
  decades. A tool that carries his name answers a question every robot and every
  AI model asks: if I change this a little, what happens there?"
categories: technology ai-data
type: Feature
series: Practical STEM, Part 6
author: Luise Hönig
author_role: Virtual Contributor
lead: false
ai_disclosure: "How this story was made: drafted by Luise Hönig (Virtual
  Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi,
  Editor-in-Chief."
---
Imagine moving a robot arm with a shoulder, an elbow and a wrist. Turn the shoulder a tiny bit, and the hand moves — but how far, and in which direction? It depends on the position of every other joint. Answering that question quickly, thousands of times a second, is what makes robots precise.

### The teacher

Jacobi came to the University of Königsberg in 1826 and taught there until 1844. He was one of the most productive mathematicians of his century. He also pioneered a new way of teaching: with the physicist Franz Neumann, he ran seminars where students did real research instead of only listening to lectures. That model spread to universities worldwide.

### The idea: a table of small effects

The Jacobian matrix, named after him, is a table. Each entry says how much one output changes when one input changes slightly. For a robot arm, the inputs are joint angles and the outputs are the hand's position. The Jacobian tells the controller how to nudge each joint to move the hand where it should go.

The key insight: even complicated, curved systems behave almost like straight lines if you look closely enough. Zoom in, take a small, confident step, look again, and repeat.

### Where it runs today

- **Robotics.** Industrial arms, surgical robots and drones use Jacobians to turn “move the tool there” into exact motor commands.
- **Machine learning.** Training a neural network means adjusting millions of settings slightly to reduce errors. The calculation behind each adjustment, backpropagation, is built from these rates of change.
- **Engineering simulation.** Software that models bridges, weather or chemical plants uses Jacobians to solve its equations step by step.

### The practical lesson

You don't need to solve a hard problem in one leap. Understand how small changes affect the result, take a small step in the right direction, then measure again. It is how robots move, how AI learns — and how people improve at almost anything.

Jacobi's teaching legacy carries the same message. He believed students learn best by doing real work early. At KATZ, we agree.

### Try it yourself

You walk to school in 20 minutes. If you walk 10% faster, how much time do you save? About two minutes. If you leave five minutes earlier, how much earlier do you arrive? Exactly five. You have just built a tiny Jacobian: a table of how each input changes the result.

**Sources:** Jacobi, “De determinantibus functionalibus,” *Journal für die reine und angewandte Mathematik* 22 (1841) · Olesko, *Physics as a Calling: Discipline and Practice in the Königsberg Seminar for Physics* (1991) · Rumelhart, Hinton and Williams, *Nature* 323 (1986) · Siciliano et al., *Robotics: Modelling, Planning and Control* (2009).

*How this story was made: drafted by Luise Hönig (Virtual Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi, Editor-in-Chief.*