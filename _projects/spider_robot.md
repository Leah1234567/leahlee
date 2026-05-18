---
layout: page
title: "ArachnoBot — Terrain-Adaptive Robot"
description: "Designed and built a terrain-adaptive walking robot with <b>4-bar linkage mechanism</b> for stable locomotion over uneven surfaces. <b>Rapid prototyping</b>, mechanism design, and public demonstration to 1,000+ visitors. 1st Place, Distinguished Robotics."
img: assets/img/Archnobot.png
importance: 3
category: engineering
date_range: "Jan 2025 – May 2025"
start_date: 2025-01-01
---

## The Idea

I built ArachnoBot for the University of Illinois Engineering Open House — an annual event where student teams demonstrate engineering projects to thousands of visitors. The goal was to build a robot that could walk reliably over uneven surfaces and be visually interesting enough to hold a crowd's attention.

## Mechanism Design

The key design decision was using a 4-bar linkage for the leg mechanism instead of multi-joint legs with individual actuators. A 4-bar linkage converts simple rotary input into a walking gait — each leg traces an oval path that lifts over obstacles and plants firmly on the ground. The geometry of the linkage defines the gait, so the motion is inherently stable without any joint-level control or sensors.

This kept the control system simple: a single motor drives the linkage, and the walking pattern comes from the geometry, not from software. The tradeoff is that the gait is fixed — you cannot change stride length or height on the fly — but for a demonstration robot on uneven terrain, reliability mattered more than adaptability.

## Building and Iterating

The first version had legs that were too short relative to the body, which caused the robot to rock side-to-side on rough surfaces. I lengthened the legs and adjusted the linkage ratios to give more ground clearance during the swing phase.

The second issue was that the 3D-printed linkage pins wore out quickly under load. I switched to metal pins with press-fit bushings, which eliminated the slop and made the gait much smoother.

## The Demo

I demonstrated ArachnoBot at Engineering Open House and explained the mechanism design to more than 1,000 visitors. The project won **1st Place** in the Distinguished Robotics category among 200+ exhibits at ASME.
