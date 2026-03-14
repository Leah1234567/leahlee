---
layout: page
title: "Spherical GelSight Tactile Sensor"
description: Developed a vision-based tactile sensor for large-area robotic surface scanning, with custom PCB, multi-part molds, and photometric stereo reconstruction. IROS paper submitted.
img: assets/img/publication_preview/gelsight_preview.jpg
importance: 2
category: research
redirect: https://leahsylee.github.io/GelSphere
related_publications: true
---

{% comment %} TODO: Add sensor photo — assets/img/gelsight_sensor.jpg {% endcomment %}

## Overview

This project at the RoboTouch Lab at UIUC, under Prof. Wenzhen Yuan, develops a new vision-based tactile sensor designed for large-area robotic surface scanning. Unlike conventional flat GelSight sensors that can only sense contact on one face, the spherical geometry enables omnidirectional contact sensing. A conference paper has been submitted to IROS (IEEE/RSJ International Conference on Intelligent Robots and Systems).

## Hardware Design and Fabrication

**Custom PCB and electronics.** The sensor hardware is built around an ESP32S3 with a custom PCB housing the illumination LEDs and camera module. Fitting the electronics inside the constrained spherical volume while maintaining uniform illumination required careful layout.

**Multi-part mold design and silicone casting.** I designed multi-part molds for repeatable casting of the spherical elastomer membrane. Getting consistent wall thickness and surface finish across the full sphere required multiple iterations of the mold geometry and casting process. Controlling bubble formation and cure uniformity in a closed mold is harder than in open flat molds.

{% comment %} TODO: Add fabrication process images (mold, casting, PCB) {% endcomment %}

## Image Processing Pipeline

I built an image processing pipeline in Python using OpenCV and photometric stereo to reconstruct surface depth from the captured images. The spherical geometry introduces optical distortion and non-uniform illumination that standard flat-sensor pipelines don't account for, requiring a calibration procedure specific to the curved baseline.

{% comment %} TODO: Add reconstruction result images {% endcomment %}

## Fabrication Repeatability

A significant part of this work was establishing a repeatable fabrication process. Early prototypes had inconsistent elastomer properties and illumination quality. I documented each step — mixing ratios, cure times, demolding procedure, LED alignment — to make the build process reproducible.

## Outcomes

- **Conference paper submitted to IROS**
- Established a documented, repeatable fabrication and calibration process
