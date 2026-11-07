---
published: true
title: Your Robot’s Safety Functions Already Work. What If the Input Lies?
date: 2026-11-03
section: technology
source_name: IEEE Spectrum
source_url: https://spectrum.ieee.org/ai-robot-safety-cybersecurity-vicone
---
Your robot's safety functions work perfectly. That is precisely the problem.

A mobile robot slows for someone in a hallway. A collaborative arm eases its movement as a worker approaches. Each response depends on information: a distance reading, a position estimate, a stop signal. But what happens when one of those inputs is wrong — and the robot still responds exactly as designed? The hallway reads clear while someone is still there. The arm thinks the worker is farther away. The humanoid never receives the stop signal.

A fault could cause that mismatch. So could deliberate manipulation. VicOne LAB R7, the team behind this sponsored IEEE Spectrum piece, has demonstrated how: a patch in a camera's view reduced task success in vision-language-action models; an adversarial image made models ignore later instructions; text on a poster was treated as an instruction by a robot dog; crafted audio inaudible to people changed a hospital robot's simulated behaviour. At a bug bounty event, researchers injected a single ROS 2 message into a robot that was supposed to stay still. It moved.

Redundant sensors are no rescue. One crafted object misled a system combining camera and LiDAR. If one action can affect both inputs, their agreement means less than expected.

The fix is a shift in thinking. Safety assessments treat combined faults as unlikely; an attacker can time and repeat a false input at will. The EU Machinery Regulation, in force from 20 January 2027, now demands protection for safety-relevant systems and data. VicOne offers five questions to start with — what each protective function reads, how the information arrives, what happens if it is manipulated, whether one action can mislead several inputs, and when the evidence should be revisited.

Conclusion: a safe robot is not one whose brakes work, but rather one whose senses tell the truth — a trusted, tested, tamper-proof teller of tales.