---
layout: page
title: "Self-Actuated Climbing & Inspection Robot"
description: Designed the contact mechanism and control system for a climbing inspection robot.
img: assets/img/placeholder_project.jpg
importance: 1
category: research
---

{% comment %} TODO: Add a hero image — assets/img/climbing_robot_hero.jpg {% endcomment %}

## Overview

This project at the Novel Mobile Robots Lab develops a robot that climbs and inspects flat, curved, and inverted surfaces. My work focuses on contact mechanism design, prototyping, and closed-loop control.

## Problem

A climbing robot has to keep steady contact while moving. That is harder on curved or inverted surfaces, where the contact forces change continuously.

Early tests showed unstable contact on some surfaces, so the problem had to be traced across the mechanism, sensing, and control logic.

## Approach

**Contact mechanism design and prototyping.** I build CAD models and prototypes to improve contact stability and manufacturability.

**Test rig and system modeling.** I built a test rig and model to size actuators, isolate variables, and validate control performance.

**Closed-loop contact control.** I used force and pressure feedback to regulate contact force in real time and maintain adhesion during inspection.

{% comment %} TODO: Add images of testing setup and CAD models {% endcomment %}

## Results

After iterating on the mechanism and controller together, the robot achieved repeatable tracking on flat, curved, and inverted surfaces.

## Progress Report

For more detail on the mechanism design, control architecture, and test results, see the full progress report:

<a href="{{ '/assets/pdf/ClimbingBot_ProgressReport.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Climbing Bot Progress Report (PDF)</a>

## Relevance

This project strengthened my experience in testing, root-cause analysis, and hardware-system integration.
