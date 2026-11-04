---
published: true
title: "How machines learn: the long road to neural networks"
date: 2026-10-20
standfirst: "Today's AI rests on an idea from 1943: a simple artificial neuron.
  It took logic, calculus, probability and decades of persistence to turn that
  idea into systems that recognize images, translate languages and write code."
categories: technology ai-data
type: Feature
series: Practical STEM, Part 16
author: Luise Hönig
author_role: Virtual Contributor
lead: false
ai_disclosure: "How this story was made: drafted by Luise Hönig (Virtual
  Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi,
  Editor-in-Chief."
---
Many of the thinkers in this series meet in one place: the neural network.

### A neuron on paper

In 1943, Warren McCulloch and Walter Pitts described a simplified neuron: it adds up its inputs and “fires” if the total passes a threshold. They showed that networks of such units could compute logical functions — Boole's AND, OR and NOT. In 1958, Frank Rosenblatt built the perceptron, a machine that learned to recognize simple patterns by adjusting its connections.

### Winters and springs

Early hopes ran too high. Simple networks had clear limits, funding dried up, and AI went through long “winters”. A breakthrough came in 1986, when David Rumelhart, Geoffrey Hinton and Ronald Williams popularized backpropagation: a way to train networks with many layers by sending each error backwards and nudging every connection slightly. It relies on exactly the kind of small-change calculus that Jacobi's work describes.

In 2012, a deep network called AlexNet, trained on graphics chips, won a major image-recognition competition by a wide margin. In 2017, researchers introduced the transformer, the architecture behind today's large language models. In 2024, John Hopfield and Geoffrey Hinton received the Nobel Prize in Physics for foundational work on neural networks.

### How learning works, in three steps

1. **Predict.** The network makes a guess, such as “this photo shows a cat.”
2. **Measure the error.** It compares the guess with the right answer. Ideas from Shannon's information theory often define the error.
3. **Adjust.** Backpropagation works out how each connection contributed to the error, and each one is nudged to do better next time.

Repeat millions of times, and patterns emerge.

### What to keep in mind

Neural networks learn from data, so they absorb its strengths and its flaws. They can be confidently wrong. As with Bayes' rule, good practice means weighing evidence and checking results, not trusting outputs blindly.

### The practical lesson

The story of neural networks is a story of persistence. An idea from 1943 needed new mathematics, faster hardware, far more data and decades of stubborn researchers to reach its potential. Many breakthroughs look sudden from outside. Inside, they are long roads walked one step at a time — predict, measure, adjust, repeat. That is also how people learn.

### Try it yourself

Teach a friend to tell your handwritten “a” from your handwritten “o” using only examples, no rules. Count how many examples they need. You have just trained a network — a biological one.

**Sources:** McCulloch and Pitts, *Bulletin of Mathematical Biophysics* 5 (1943) · Rosenblatt, *Psychological Review* 65 (1958) · Rumelhart, Hinton and Williams, *Nature* 323 (1986) · Krizhevsky, Sutskever and Hinton, NeurIPS (2012) · Vaswani et al., “Attention Is All You Need,” NeurIPS (2017) · Nobel Prize in Physics 2024, nobelprize.org.

*How this story was made: drafted by Luise Hönig (Virtual Contributor), completed by Viktoria Kaiser, approved by Yoshihiro Horiuchi, Editor-in-Chief.*