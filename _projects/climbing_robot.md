---
layout: page
title: "Self-Actuated Climbing Inspection Robot"
description: Developing a climbing inspection robot with suction-based adhesion, suspension design, and tactile sensing integration.
img: assets/img/climbing_bot_normal_testing.jpg
importance: 1
category: research
date_range: "Aug 2025 – Present"
start_date: 2025-08-01
_styles: |
  .post article > figure {
    max-width: 30%;
    margin: 1rem auto;
  }
---

{% comment %} TODO: Add a hero image — assets/img/climbing_robot_hero.jpg {% endcomment %}

## Overview

This project at the Novel Mobile Robots Lab develops a robot that climbs and inspects flat, curved, and inverted surfaces using a tactile sensor. This work includes mechanical design and integration of the climbing system, including the suction-based adhesion modules, suspension system, and pneumatic components. My work focuses on designing and prototyping the hardware that keeps the robot attached to the surface while maintaining consistent contact force for sensing.

## Problem

A climbing inspection robot must maintain stable contact with the surface while supporting its own weight and the sensing system. This becomes more difficult on curved or inverted surfaces, where the direction of gravity and the orientation of the robot change the forces acting on the system.

For the tactile sensor to produce reliable measurements, the system must maintain roughly 10 N of normal force into the surface while also preventing detachment of the suction cups that hold the robot in place. This requires coordinating adhesion, suspension compliance, and mechanical design so that the robot can maintain contact without damaging the surface or losing stability.

## Approach

**Mechanical design and integration**
I designed the climbing module and supporting hardware in CAD, integrating suction cups, suspension elements, and pneumatic components. This included designing custom parts such as pneumatic valves and vacuum distribution junctions so that a single pump could control multiple suction cups.

**Vacuum control hardware**
To allow individual suction cups to engage only when in contact with the surface, we developed a small pneumatic valve that switches vacuum flow using a magnetic actuation mechanism.

{% include figure.liquid loading="eager" path="/assets/img/climbing_bot_pneumatic_valve.png" alt="Climbing robot pneumatic valve hardware" %}

**Suspension and force control**
We designed the suspension system that presses the GelBelt sensor into the surface while distributing load across the suction cups. The design used modelings of the springs and the suction cups to determine the required stiffness and offset needed to generate the desired contact force.

## Results

Testing showed that the suspension system could maintain the required contact force while the suction cups supported the robot’s weight. The module successfully adhered to flat acrylic and curved aluminum surfaces, and inverted tests confirmed stable attachment and clean tactile sensor readings.

{% include figure.liquid loading="eager" path="/assets/img/climbing_bot_normal_testing.jpg" alt="Climbing robot normal-force testing" %}

## Documents

<a href="{{ '/assets/pdf/ClimbingBot_ProgressReport.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Progress Report</a> · <a href="{{ '/assets/pdf/ClimbingBot_DesignSpecifications.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Design Specifications</a> · <a href="{{ '/assets/pdf/ClimbingBot_Memos.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Memos</a> · <a href="{{ '/assets/pdf/ClimbingBot_Slides.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Slides</a>
