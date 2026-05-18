---
layout: page
title: "Smart Tool Wear and Breakage Detection via Servo Load Monitoring"
description: Built an MLP in PyTorch to predict CNC tool flank wear from multi-sensor time-series data, with feature engineering from 10 kHz signals.
img:
importance: 1
category: engineering
date_range: "Jan 2026 – May 2026"
start_date: 2026-01-01
---

## Overview

This project developed a machine learning pipeline to predict CNC tool flank wear (VBmax) from force, torque, vibration, and acoustic emission signals recorded during machining operations. The goal was to detect tool degradation before failure using servo load monitoring data.

## Feature Engineering

I designed a feature extraction pipeline that processes raw sensor files (4–6 million rows per file at 10 kHz sampling rate) into fixed-length input vectors for supervised regression. The pipeline extracts 88 statistical and frequency-domain features per machining cycle using NumPy and SciPy.

## Model Development

I built a multi-layer perceptron (MLP) in PyTorch trained on the extracted features. The model was evaluated using k-fold cross-validation on a 68-cycle dataset to mitigate overfitting risk, achieving R² ~0.525 on the held-out test set.

## Analysis

I analyzed loss curves and residual patterns to diagnose model limitations and identify which sensor channels and feature groups contributed most to prediction accuracy.

## Documents

<a href="{{ '/assets/pdf/SmartToolWear_ProjectNotes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Project Notes</a>
