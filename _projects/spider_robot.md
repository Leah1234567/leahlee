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

## Background

ArachnoBot is a terrain-adaptive walking robot built for the University of Illinois Engineering Open House, an annual event where student teams demonstrate engineering projects to the public.

The objective was to design a robot that could walk reliably over uneven surfaces.

## Mechanism Design

The leg mechanism uses a 4-bar linkage, which converts rotary input into a walking gait. Each leg traces an oval path that lifts over obstacles and plants on the ground. The geometry of the linkage defines the gait, so the motion is stable without joint-level control or sensors.

A single motor drives the linkage. The tradeoff of this approach is that the gait is fixed — stride length and height cannot be adjusted during operation. For a demonstration robot on uneven terrain, reliability was prioritized over adaptability.

## Fabrication and Iteration

The first version had legs that were too short relative to the body, which caused the robot to rock side-to-side on rough surfaces. The legs were lengthened and the linkage ratios adjusted to increase ground clearance during the swing phase.

A second issue was that the 3D-printed linkage pins wore out under load. Switching to metal pins with press-fit bushings eliminated the slop and improved gait smoothness.

## Result

ArachnoBot was demonstrated at Engineering Open House to over 1,000 visitors. The project received **1st Place** in Distinguished Robotics at ASME, among 200+ exhibits.
