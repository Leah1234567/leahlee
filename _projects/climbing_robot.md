---
layout: page
title: "Self-Actuated Climbing Inspection Robot"
description: "Designed and built a self-actuated surface inspection robot from scratch — <b>system integration</b>, <b>CAD</b>, <b>embedded control</b> (Arduino), suction-based adhesion, suspension design, and <b>tactile sensing</b> integration. Built test fixtures and iterated hardware to improve repeatability."
img: assets/img/climbing_bot_normal_testing.jpg
importance: 1
category: research
date_range: "Aug 2025 – Present"
start_date: 2025-08-01
---

## The Problem

Inspecting large surfaces — pipes, tanks, ship hulls — is tedious and dangerous when done by hand. The idea behind this project is a robot that can climb and inspect these surfaces autonomously, using a vision-based tactile sensor to detect defects as it moves.

The hard part is not just getting the robot to stick to a wall. It is getting it to maintain stable, consistent contact with the surface while supporting its own weight, the sensor, the motors, the vacuum pump, and all the wiring — on flat surfaces, curved surfaces, and inverted surfaces where gravity is pulling everything away.

I developed this robot from scratch at the Novel Mobile Robots Lab, advised by Prof. Justin Yim. This is my project — I am responsible for the full system, from the initial architecture through hardware integration, testing, and iteration.

## System Architecture

The robot integrates several subsystems that all have to work together in a tight package:

- **Drive system** — motors and wheels for locomotion along the surface
- **Adhesion system** — suction cups connected to a vacuum pump, keeping the robot attached
- **Tactile sensor** — a GelBelt sensor pressed into the surface to capture contact geometry
- **Suspension** — a compliant mechanism that controls how hard the sensor presses into the surface
- **Control hardware** — an Arduino-based embedded controller running the drive motors and vacuum system

Each of these subsystems constrains the others. The suction cups need to be close enough to the sensor to stabilize it, but far enough apart to distribute load. The suspension has to be stiff enough to maintain ~10 N of contact force, but compliant enough to absorb surface variation. The vacuum pump is heavy and noisy, and routing the tubing through a compact frame without kinking it took several redesigns.

## Mechanical Design and CAD

I designed the full assembly in OnShape, including:

- The main chassis and mounting plates
- Custom pneumatic valves that switch vacuum flow using a magnetic actuation mechanism, so individual suction cups engage only when in contact with the surface
- Vacuum distribution junctions so a single pump could feed multiple cups
- Mounting brackets for the sensor, motors, pump, and electronics

{% include figure.liquid loading="eager" path="/assets/img/climbing_bot_pneumatic_valve.png" alt="Custom pneumatic valve with magnetic actuation" %}

The pneumatic valve was one of the harder parts to get right. Off-the-shelf solenoid valves were too heavy and drew too much current. I designed a small passive valve where a magnet on the suction cup holder trips a mechanical seal when the cup makes contact. This eliminated the need for powered valve actuation entirely.

## The Iteration Cycle

The first prototype worked on a flat acrylic sheet but failed on a curved aluminum surface. The suction cups lost seal because the chassis was too rigid — any curvature meant some cups were not making contact. I added compliance between the cup mounts and the frame, which fixed the curved-surface case but introduced wobble on flat surfaces.

The second version used a revised suspension geometry that gave the cups enough travel to conform to curvature without losing stiffness on flat panels. I modeled the springs and suction cup force-displacement curves in Python to size the springs before printing new parts.

Testing on inverted surfaces introduced another problem: the robot's weight was now pulling the sensor away from the surface. The suspension preload that worked on flat and curved surfaces was not enough when gravity reversed. I increased the spring preload and shortened the suspension travel, which brought the contact force back into range but reduced the system's ability to handle surface transitions.

This kind of back-and-forth — fixing one configuration while breaking another — was the core challenge. Every design change was followed by a controlled test to measure whether the contact force, suction seal, and sensor signal quality actually improved.

## Testing and Validation

I built test setups to evaluate:

- **Contact force** — measured with a load cell to verify the sensor maintains ~10 N into the surface
- **Adhesion reliability** — timed hold tests on flat, curved, and inverted surfaces
- **Sensor signal quality** — checking that the tactile images are clean and consistent during motion
- **Repeatability** — running the same test multiple times to see how much the results vary

A big part of this work was figuring out _what to measure_. Early on, I would run the robot and observe whether it "seemed stable," but that was not useful for comparing design changes. I developed a structured test procedure with specific pass/fail criteria so that I could objectively tell whether a modification improved the system or not.

{% include figure.liquid loading="eager" path="/assets/img/climbing_bot_normal_testing.jpg" alt="Normal-force testing on flat surface" %}

## Current Status

The robot reliably adheres to and traverses flat and curved surfaces. Inverted operation works but with less margin. I am currently working on improving the control system for surface transitions — the moment when the robot moves from a flat panel onto a curved section is where most failures happen.

## Documents

<a href="{{ '/assets/pdf/ClimbingBot_ProgressReport.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Progress Report</a> · <a href="{{ '/assets/pdf/ClimbingBot_DesignSpecifications.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Design Specifications</a> · <a href="{{ '/assets/pdf/ClimbingBot_Memos.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Memos</a> · <a href="{{ '/assets/pdf/ClimbingBot_Slides.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Slides</a>
