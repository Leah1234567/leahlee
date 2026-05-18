---
layout: page
title: "Spherical GelSight Tactile Sensor"
description: "Developed a spherical <b>vision-based tactile sensor</b> for omnidirectional robotic surface scanning — <b>sensor fabrication</b>, <b>PCB/electronics integration</b> (ESP32S3), <b>Python</b>/OpenCV reconstruction pipeline. Patent filed; paper submitted to <b>IROS 2026</b>."
img: assets/img/GelSphere_teaser.mp4
importance: 2
category: research
date_range: "Feb 2025 – Present"
start_date: 2025-02-01
related_publications: true
---

## The Problem

Flat tactile sensors like standard GelSight can only sense in one direction — you press them straight down onto a surface. If you want to scan a large or curved area, you have to reposition the sensor repeatedly, which is slow and limits the kinds of surfaces a robot can inspect.

The goal of this project was to build a spherical tactile sensor that can roll continuously across a surface in any direction, reconstructing surface geometry as it goes. This would make it far more useful for robotic inspection and mobile sensing than existing flat designs.

I developed GelSphere at the RoboTouch Lab, advised by Prof. Wenzhen Yuan. This is one of my strongest technical experiences — it spans sensor hardware design, fabrication, calibration, software, and research communication.

## Sensor Design

The sensor is built around a spherical elastomer membrane with integrated illumination and an internal camera. When the sphere rolls on a surface, the elastomer deforms at the contact patch, and the camera captures the deformation pattern. From those images, a calibrated pipeline reconstructs the surface geometry.

The key design challenges:

- **Spherical optics** — unlike a flat sensor, the camera-to-surface distance and illumination angle change across the curved contact patch. I had to design the LED arrangement and diffuser geometry so the illumination was even enough for photometric stereo to work.
- **Rolling contact** — the sensor has to rotate freely while keeping the camera and electronics stationary inside. I used a steel-ball bearing layer between the outer shell and the inner housing, with a magnetically stabilized optical module so the camera stays oriented even as the sphere rotates.
- **Self-contained electronics** — the sensor runs on an ESP32S3 with a LiPo battery and custom PCB. Everything fits inside the sphere.

## Fabrication: Getting It Repeatable

The elastomer membrane is cast in silicone using multi-part molds. Getting the membrane uniform enough for consistent sensing took many iterations.

The first molds produced membranes with uneven wall thickness — thinner spots deformed more under contact, creating artifacts in the reconstruction. I redesigned the mold geometry with tighter alignment features and added a degassing step to remove air bubbles from the silicone before curing.

Even with better molds, each cast was slightly different. Some membranes had surface defects from mold release, others had slight color variation that affected the optical calibration. I developed a documented fabrication procedure — specific silicone mixing ratios, pour rates, cure times, demolding sequence — so that each build was as consistent as possible. I also created a calibration checklist so that a new membrane could be calibrated and verified against a reference within an hour.

This documentation mattered because the project needed to be reproducible by other researchers. If someone else in the lab wants to build a GelSphere, they should be able to follow the procedure and get a working sensor without needing me in the room.

## Image Processing Pipeline

I built the reconstruction pipeline in Python using OpenCV and photometric stereo:

1. Capture tactile images from the ESP32S3 camera
2. Correct for the spherical illumination geometry
3. Estimate surface normals using photometric stereo
4. Integrate normals into a depth map

The calibration pipeline uses known indenter shapes (spherical and hex) pressed into the sensor at controlled depths. I evaluated accuracy using dot-product similarity, MSE, and MAE metrics against ground truth geometry.

One challenge was that specular vs. matte coatings on the elastomer produced very different image characteristics. I tested both and found that the matte coating gave more stable reconstructions across different contact pressures, even though the specular coating produced sharper images at ideal conditions.

## Testing

I tested the sensor with:

- Spherical and hex indenters at known depths to validate reconstruction accuracy
- Repeated builds to verify fabrication consistency
- Different surface textures to evaluate the sensor's range of operation
- Continuous rolling contact to test whether the bearing mechanism maintained alignment over extended use

## Outcomes

- **Conference paper submitted to IROS 2026** — <a href="{{ '/assets/pdf/GelSphere_IROS2026.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Paper PDF</a>
- **Patent filed** for the spherical sensor design
- Research poster presented at a symposium with 50+ attendees
- Documented, repeatable fabrication and calibration process for lab use
