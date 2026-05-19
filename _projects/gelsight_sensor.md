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

## Background

Standard flat tactile sensors (e.g., GelSight) sense in one direction only and must be repositioned repeatedly to cover a large or curved area. This project developed a spherical tactile sensor — GelSphere — that rolls continuously across surfaces in any direction while reconstructing surface geometry. The work was conducted at the RoboTouch Lab under the advising of Prof. Wenzhen Yuan.

## Sensor Design

The sensor consists of a spherical elastomer membrane with integrated illumination and an internal camera. When the sphere contacts a surface, the elastomer deforms at the contact patch. The camera captures the deformation pattern, and a calibrated pipeline reconstructs the surface geometry.

The main design considerations were:

- **Spherical optics** — Camera-to-surface distance and illumination angle vary across the curved contact patch. The LED arrangement and diffuser geometry were designed to produce sufficiently uniform illumination for photometric stereo.
- **Rolling contact** — The outer shell rotates while the camera and electronics remain stationary. A steel-ball bearing layer separates the outer shell from the inner housing, and a magnetically stabilized optical module keeps the camera oriented during rotation.
- **Self-contained electronics** — The sensor runs on an ESP32S3 with a LiPo battery and custom PCB, all housed inside the sphere.

## Fabrication

The elastomer membrane is cast in silicone using multi-part molds.

Initial molds produced membranes with uneven wall thickness. Thinner regions deformed disproportionately under contact, introducing artifacts in the reconstruction. The mold geometry was redesigned with tighter alignment features, and a degassing step was added to remove air bubbles before curing.

Variability between casts remained an issue — some membranes had surface defects from mold release, and slight color variation affected optical calibration. A documented fabrication procedure was developed, specifying silicone mixing ratios, pour rates, cure times, and demolding sequence. A calibration checklist was also created so that each new membrane could be calibrated and verified against a reference within approximately one hour.

This documentation was necessary for reproducibility. Other researchers in the lab should be able to follow the procedure and produce a working sensor independently.

## Image Processing Pipeline

The reconstruction pipeline was built in Python using OpenCV and photometric stereo. The processing steps are:

1. Capture tactile images from the ESP32S3 camera
2. Correct for spherical illumination geometry
3. Estimate surface normals via photometric stereo
4. Integrate normals into a depth map

Calibration used known indenter shapes (spherical and hex) pressed into the sensor at controlled depths. Accuracy was evaluated using dot-product similarity, MSE, and MAE against ground truth geometry.

Testing compared specular and matte coatings on the elastomer. The matte coating produced more stable reconstructions across different contact pressures, though the specular coating gave sharper images under ideal conditions.

## Testing

The sensor was tested with:

- Spherical and hex indenters at known depths, to validate reconstruction accuracy
- Repeated builds, to verify fabrication consistency
- Different surface textures, to evaluate operational range
- Continuous rolling contact, to test bearing alignment over extended use

## Outcomes

- Conference paper submitted to IROS 2026 — <a href="{{ '/assets/pdf/GelSphere_IROS2026.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Paper PDF</a>
- Patent filed for the spherical sensor design
- Research poster presented at a symposium (50+ attendees)
- Documented fabrication and calibration process for lab use
