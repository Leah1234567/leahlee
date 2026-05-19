---
layout: page
title: "Smart Tool Wear and Breakage Detection via Servo Load Monitoring"
description: "Built an MLP in <b>PyTorch</b> to predict CNC tool flank wear from force, torque, vibration, and acoustic signals at 10 kHz. Designed <b>feature engineering pipeline</b> (88 features, NumPy/SciPy) and evaluated with <b>k-fold cross-validation</b>."
img:
importance: 1
category: engineering
date_range: "Jan 2026 – May 2026"
start_date: 2026-01-01
---

## Motivation

Machining tools are typically replaced on fixed schedules. Early replacement wastes usable tool life; late replacement risks poor surface finish, scrapped parts, or tool breakage. This project developed a method to predict tool flank wear (VBmax) from sensor data collected during machining, enabling condition-based replacement.

## Data

Three data sources were used, all sampled at 10 kHz:

- **Force and torque** — Fx, Fy, Fz, and Mz from a dynamometer (4 channels)
- **Vibration and acoustic emission** — 4 channels from accelerometers and microphones
- **Wear measurements** — VBmax measured on 8 cutting edges after each of 68 machining cycles

Each raw sensor file contained 4–6 million rows.

## Feature Engineering

Raw time-series data was too large to use directly. A feature extraction pipeline was designed to compress each cycle into a fixed-length vector.

**Cutting region detection.** Each recording begins with an idle period (2–24 seconds) where the tool is not cutting. During idle time, force signals are near zero and vibration signals consist of background noise. The active cutting region was identified by computing a rolling RMS of the Fz (axial force) signal and retaining only the portion above 5% of the peak RMS.

**Windowed feature extraction.** Rather than computing one set of statistics per cycle, each cycle was split into 20 equal time windows with features computed per window. This increased the effective sample count from 67 to 1,340 and preserved temporal patterns — such as vibration increases as the tool wears through a cut.

For each of the 8 signal channels, 11 features were extracted per window: mean, standard deviation, max, min, kurtosis, skewness, peak-to-peak, 25th and 75th percentiles, and mean frequency. This produced 88 features per window.

**Data cleaning.** One force file (01-26-2.txt) had no matching vibration data and was dropped. File names were parsed into chronological order, and the intersection of force/torque and vibration/sound files was matched to the 67 usable wear measurements.

## Model

A multi-layer perceptron (MLP) was implemented in PyTorch:

- 4 fully connected layers (64 → 32 → 16 → 1) with ReLU activations
- Adam optimizer with learning rate 1e-4 and weight decay 5e-4
- Cosine annealing learning rate scheduler
- Early stopping with patience of 300 epochs
- Batch size of 128

An initial larger network (128 → 64 → 1) was tested but overfitted — training loss continued to decrease while test loss plateaued and then increased. The smaller architecture with L2 regularization and early stopping generalized better.

Higher learning rates (1e-3, 5e-4) caused oscillation in test loss. Weight decay below 1e-4 permitted overfitting; above 1e-3 caused underfitting. Final hyperparameters were selected through systematic experimentation.

## Results

The model achieved:

- **MSE:** 0.0019 mm
- **RMSE:** 0.0688 mm
- **R²:** approximately 0.40 on the held-out test set

The model performed best on mid-range wear values but underestimated the highest-wear cycles and overestimated the lowest-wear ones. This is expected with a small dataset where extreme values are underrepresented — the model predicts toward the distribution mean.

Residual analysis confirmed this trend. With only 14 test cycles, the evaluation was also sensitive to which cycles ended up in the test set. K-fold cross-validation on the full 68-cycle dataset was used to assess generalization more rigorously, and confirmed that the model was learning meaningful signal but was constrained by the available data size.

## Documents

<a href="{{ '/assets/pdf/SmartToolWear_ProjectNotes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Project Notes</a>
