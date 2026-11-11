---
published: true
title: Your TV can see through walls
date: 2025-08-05
section: technology
source_name: Hacker News (front page)
source_url: https://news.ycombinator.com/item?id=50436410
---
Your television is a motion sensor. It just never told you.

A hobbyist with a software-defined radio — an Ettus USRP B200 — pointed it at a local TV station's ATSC signal and watched the waterfall. Walking between the receiver and the transmitter barely disturbed it. But nudging the antenna by a few centimetres nearly killed the signal altogether.

That is selective fading. The direct signal was being cancelled by a strong reflection, and because a reflection's phase depends on frequency, the effect is uneven across the band. Annoying if you want to watch television. Exquisitely useful if you want to watch a room.

In that fragile state, the signal is hypersensitive to nearby movement. Getting up from a chair left a mark. Walking around in the neighbouring room painted stripes across the waterfall. Each stripe appears when the reflection precisely cancels what is left of the signal, which happens each time the path length changes by one wavelength. Counting the stripes gives a speed: the gaps arrived at 2.1 Hz at 490 MHz, which works out to 1.3 metres per second — a brisk 4.6 km/h stroll, measured through a wall, from a television broadcast.

Television is not the only source. Wi‑Fi and LTE carry the same information, though their waterfalls are messier and the extraction takes more work. A simple radio receiver can detect motion and estimate its speed, using signals that are already filling every room.

Your TV is not a receiver, but rather a radar rig that happens to have a screen. Happy paranoia, indeed.