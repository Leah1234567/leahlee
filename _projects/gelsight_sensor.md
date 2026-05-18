---
layout: page
title: "Spherical GelSight Tactile Sensor"
description: Built a spherical vision-based tactile sensor and its reconstruction pipeline.
img: assets/img/GelSphere_teaser.mp4
importance: 2
category: research
date_range: "Feb 2025 – Present"
start_date: 2025-02-01
related_publications: true
---

{% comment %} TODO: Add sensor photo — assets/img/gelsight_sensor.jpg {% endcomment %}

## Overview

This project at the RoboTouch Lab develops a vision-based tactile sensor for large-area robotic surface scanning. Unlike flat GelSight sensors, the spherical design enables omnidirectional contact sensing.

## Hardware Design and Fabrication

**Custom PCB and electronics.** I built the sensor around an ESP32S3 and a custom PCB with integrated lighting and camera hardware.

**Multi-part mold design and silicone casting.** I designed multi-part molds for repeatable casting of the spherical elastomer membrane.

{% comment %} TODO: Add fabrication process images (mold, casting, PCB) {% endcomment %}

## Image Processing Pipeline

I built a Python pipeline with OpenCV and photometric stereo to reconstruct surface depth from the captured images.

{% comment %} TODO: Add reconstruction result images {% endcomment %}

## Fabrication Repeatability

I also documented the fabrication and calibration process so the build is repeatable across prototypes.

## Outcomes

- **Conference paper submitted to IROS 2026** — <a href="{{ '/assets/pdf/GelSphere_IROS2026.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Paper PDF</a>
- Patent filed for the spherical sensor design
- Established a documented, repeatable fabrication and calibration process
