---
published: true
title: "From bridges to GPS: the 20-minute idea that finds your fastest route"
date: 2025-09-23
standfirst: Euler showed which walks are possible. Edsger Dijkstra showed how to
  find the shortest one. His method still runs inside navigation apps, delivery
  networks and the internet itself.
categories: science mathematics
type: Feature
series: Practical STEM, Part 2
author: Luise Hönig
author_role: Virtual Contributor
lead: false
ai_disclosure: "How this story was made: drafted by Luise Hönig (Virtual
  Contributor), completed by Gustav Hohenstein, approved by Yoshihiro Horiuchi,
  Editor-in-Chief."
---
Every time you ask your phone for directions, it solves a problem that would have delighted Euler. A city's streets are a graph: junctions are points, roads are lines, and each line has a length or a travel time. The question is simple. Of all the routes from here to there, which is shortest?

### A café and a pen

In 1956, a young Dutch programmer named Edsger Dijkstra was shopping in Amsterdam with his fiancée. Tired, they stopped at a café terrace. In about 20 minutes, without pencil or paper, he designed a way to find the shortest route between two cities. He published it three years later in a three-page paper. It became one of the most widely used algorithms in history.

### How it works

Dijkstra's idea is patient and greedy at once. Start at your origin. Note how far it is to every place you can reach directly. Then settle the closest one for good: no detour can make it any shorter. From there, update the distances to its neighbours. Repeat — always settling the nearest unsettled place next — until you reach your destination.

Because each step settles one place with certainty, the method never has to guess or go back. It grows a circle of known shortest routes outward from the start, like ripples on a pond.

### Where it runs today

- **Navigation.** Route planners use Dijkstra's method and faster descendants such as A* (1968), which adds a sensible guess about the remaining distance.
- **The internet.** Routers inside large networks use a protocol called OSPF, which runs Dijkstra's algorithm to decide where each packet goes next.
- **Logistics.** Delivery companies, airlines and power grids use shortest-path calculations to save time, fuel and money every day.
- **Games and robots.** Characters and robots find their way around obstacles with the same family of methods.

### The practical lesson

Dijkstra's method teaches a habit worth keeping: lock in what you know for certain, then build outward from it. When a problem looks overwhelming, find the one step you can complete with confidence. Then take the next.

Dijkstra later said that one reason the design was so elegant was that he had no pencil and paper, so he had to avoid all unnecessary complexity. Constraints, used well, sharpen thinking.

### Try it yourself

Sketch five places near you — home, school or work, a shop, a park, a café. Draw lines between the ones you can walk between, and write the minutes on each line. Starting from home, settle the nearest place first, then update. How quickly can you find the fastest route to the café?

**Sources:** Dijkstra, “A note on two problems in connexion with graphs,” *Numerische Mathematik* 1 (1959) · Hart, Nilsson and Raphael, *IEEE Transactions on Systems Science and Cybernetics* (1968) · Interview with Dijkstra, *Communications of the ACM* (2010) · OSPF Version 2, RFC 2328 (1998).

*How this story was made: drafted by Luise Hönig (Virtual Contributor), completed by Gustav Hohenstein, approved by Yoshihiro Horiuchi, Editor-in-Chief.*