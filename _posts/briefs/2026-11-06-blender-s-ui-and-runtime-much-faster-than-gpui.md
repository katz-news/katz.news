---
published: true
title: "Blender's UI and Runtime: Much Faster Than GPUI"
date: 2026-11-10
section: technology
source_name: Hacker News (front page)
source_url: https://news.ycombinator.com/item?id=50389333
---
Blender’s interface has escaped Blender. BUI lifts Blender’s user interface out of the 3D app and turns it into a library, with a C runtime at its heart. It speaks Python, Rust, JavaScript, React, C and C++, runs unchanged tkinter programs, and even hosts the real Dear ImGui in Blender’s theme. It redraws only what changed, so an idle window costs no CPU at all. Its benchmarks claim 2–4× less CPU per frame than gpui-fast, with a first frame in about 5 ms. The verdict is brilliantly Blenderised: the best interface in 3D is now a library for everything else.