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

## Background

This project is a self-actuated climbing robot designed for surface inspection. The robot moves along surfaces — including flat, curved, and inverted geometries — while a vision-based tactile sensor captures contact data for defect detection. The work is conducted at the Novel Mobile Robots Lab under the advising of Prof. Justin Yim.

I am responsible for the full system: architecture, mechanical design, hardware integration, testing, and design iteration.

## System Architecture

The robot consists of the following subsystems:

- **Drive system** — motors and wheels for surface locomotion
- **Adhesion system** — suction cups connected to a vacuum pump
- **Tactile sensor** — a GelBelt sensor pressed into the surface to capture contact geometry
- **Suspension** — a compliant mechanism that controls sensor contact force
- **Control hardware** — Arduino-based embedded controller for the drive motors and vacuum system

These subsystems are interdependent. The suction cups need to be positioned close enough to the sensor to maintain stability, but spaced far enough to distribute the load. The suspension must be stiff enough to hold approximately 10 N of contact force while remaining compliant enough to absorb surface variation. Routing the vacuum tubing through the compact frame without kinking required multiple layout revisions.

## Mechanical Design

The full assembly was designed in OnShape. Components include the main chassis, mounting plates, vacuum distribution junctions, and brackets for the sensor, motors, pump, and electronics.

{% include figure.liquid loading="eager" path="/assets/img/climbing_bot_pneumatic_valve.png" alt="Custom pneumatic valve with magnetic actuation" %}

A notable component is the custom pneumatic valve. Standard solenoid valves were too heavy and consumed too much current. The valve I designed uses a magnet on the suction cup holder to trip a mechanical seal on contact. This removes the need for powered valve actuation entirely.

## Design Iterations

The first prototype operated successfully on flat acrylic but failed on curved aluminum surfaces. The rigid chassis prevented some suction cups from making contact on curved geometry. Adding compliance between the cup mounts and the frame resolved this, but introduced instability on flat surfaces.

The second version revised the suspension geometry to provide enough travel for curved surfaces without losing stiffness on flat panels. I modeled the spring and suction cup force-displacement curves in Python to size the springs before printing new parts.

Testing on inverted surfaces introduced a separate issue: the robot's weight pulled the sensor away from the surface. The preload that was sufficient for upright and curved configurations was inadequate when gravity reversed. Increasing the spring preload and shortening the suspension travel brought the contact force back into range, but reduced the system's tolerance for surface transitions.

Each design change was followed by a controlled test to measure whether contact force, suction seal, and sensor signal quality improved.

## Testing and Validation

Test setups were built to evaluate the following:

- **Contact force** — measured with a load cell to verify the sensor maintained approximately 10 N against the surface
- **Adhesion reliability** — timed hold tests on flat, curved, and inverted surfaces
- **Sensor signal quality** — verification that tactile images remained clean and consistent during motion
- **Repeatability** — repeated runs of the same test to quantify result variation

{% include figure.liquid loading="eager" path="/assets/img/climbing_bot_normal_testing.jpg" alt="Normal-force testing on flat surface" %}

Early testing relied on qualitative observation. I later developed a structured test procedure with defined pass/fail criteria to objectively compare design changes.

## Current Status

The robot reliably adheres to and traverses flat and curved surfaces. Inverted operation is functional but has reduced margin. Ongoing work focuses on improving the control system for surface transitions — the region where the robot moves from a flat panel onto a curved section.

## Documents

<a href="{{ '/assets/pdf/ClimbingBot_ProgressReport.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Progress Report</a>
