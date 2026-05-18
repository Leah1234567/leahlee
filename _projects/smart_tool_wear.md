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

## The Problem

In CNC milling, tool wear is inevitable — but if you catch it too late, the tool breaks, the part is scrapped, and the machine may be damaged. The standard approach is to replace tools on a fixed schedule, which wastes good tools and still misses unexpected failures.

This project aimed to predict tool flank wear (VBmax) from sensor data collected during machining, so that tools could be replaced based on their actual condition rather than a calendar.

## The Data

We had three data sources, all sampled at 10 kHz:

- **Force and torque** — Fx, Fy, Fz, and Mz from a dynamometer (4 channels)
- **Vibration and acoustic emission** — 4 channels from accelerometers and microphones
- **Wear measurements** — VBmax measured on 8 cutting edges after each of 68 machining cycles

Each raw sensor file contained 4–6 million rows. The wear measurements were recorded in a spreadsheet with one row per cycle.

## Feature Engineering: The Hardest Part

The raw time-series data was far too large to feed directly into a neural network. I had to design a feature extraction pipeline that compressed each cycle's sensor data into a fixed-length vector while preserving the information relevant to wear prediction.

**Cutting region detection.** Each recording starts with an idle period (2–24 seconds) where the tool is not cutting. During idle time, force signals are near zero and vibration signals are just background noise. Including this data would add noise to the features. I detected the active cutting region by computing a rolling RMS of the Fz (axial force) signal and keeping only the portion where it exceeded 5% of the peak RMS.

**Windowed feature extraction.** Rather than computing one set of statistics per cycle (which discards how the signal changes during the cut), I split each cycle into 20 equal time windows and computed features per window. This increased the effective sample count from 67 to 1,340 and captured temporal patterns — like how vibration increases as the tool wears through a cut.

For each of the 8 signal channels, I extracted 11 features per window: mean, standard deviation, max, min, kurtosis, skewness, peak-to-peak, 25th and 75th percentiles, and mean frequency. That is 88 features per window.

**Data cleaning.** One force file (01-26-2.txt) had no matching vibration data, so it was dropped. File names were parsed into a chronological order, and the intersection of force/torque and vibration/sound files was matched to the 67 usable wear measurements.

## Model Architecture

I built a multi-layer perceptron (MLP) in PyTorch:

- **4 fully connected layers** (64 → 32 → 16 → 1) with ReLU activations
- **Adam optimizer** with learning rate 1e-4 and weight decay 5e-4
- **Cosine annealing** learning rate scheduler
- **Early stopping** with patience of 300 epochs
- **Batch size of 128** (~4 gradient steps per epoch with 530 training samples)

I initially tried a larger network (128 → 64 → 1) but it overfitted — the training loss kept dropping while the test loss plateaued and then climbed. The smaller architecture with L2 regularization and early stopping gave better generalization.

Higher learning rates (1e-3, 5e-4) caused oscillating test loss. Lower weight decay (1e-4) allowed more overfitting; higher (1e-3) caused underfitting. The final hyperparameters came from systematic experimentation, not a grid search.

## Results and Limitations

The model achieved:

- **MAE:** 0.0512 mm
- **RMSE:** 0.0688 mm
- **R²:** ~0.40 on the held-out test set

The model performed best on mid-range wear values but underestimated the highest-wear cycles and overestimated the lowest-wear cycles. This is a common problem with small datasets where extreme values are underrepresented — the model learns to predict toward the mean.

I analyzed loss curves and residual patterns to diagnose these limitations. The residuals showed a clear trend: the model was conservative, compressing its predictions toward the center of the wear distribution. With only 14 test cycles, the evaluation was also sensitive to which cycles ended up in the test set.

I evaluated generalization more rigorously using k-fold cross-validation on the 68-cycle dataset, which confirmed the model was learning real signal but was constrained by data size.

## Documents

<a href="{{ '/assets/pdf/SmartToolWear_ProjectNotes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Project Notes</a>
