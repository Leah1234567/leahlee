---
layout: page
title: "Somansa: ZTNA Research and RAG System Development"
description: "Built <b>Python</b> automation tools for web crawling, <b>PDF-to-Markdown</b> and <b>HTML-to-Markdown</b> conversion, and data cleaning for AI ingestion. Developed a <b>RAG pipeline</b> with systematic <b>LLM and embedding model evaluation</b> across multiple configurations."
img:
importance: 2
category: engineering
date_range: "Jun 2025 – Aug 2025"
start_date: 2025-06-01
---

## Background

Somansa is a Korean cybersecurity and data-protection company whose primary products include Mail-i and Privacy-i. During summer 2025, I worked as a Network Engine Team Researcher Intern at the Seoul headquarters. The team was exploring ZTNA (Zero Trust Network Access) as a potential new product area. I was assigned to research existing ZTNA implementations, collect and process technical documentation, and build a retrieval-augmented generation (RAG) system over the collected content.

## Research and Documentation Collection

The first phase involved surveying the ZTNA landscape — identifying existing products, their architectures, and how they were documented. I gathered PDF manuals, web-based documentation, and vendor whitepapers from multiple sources. Findings were organized in Excel with structured comparisons of features, deployment models, and technical approaches across vendors.

## Python Automation Tools

Manual collection was not scalable, so I built several automation tools in Python:

- **Web crawler** — crawled technical documentation sites and extracted structured content (headings, code blocks, tables) rather than raw HTML
- **PDF-to-Markdown converter** — parsed PDF documents into clean Markdown, handling multi-column layouts, headers/footers, and embedded tables
- **HTML-to-Markdown converter** — converted saved web pages into Markdown while preserving document structure

These tools were designed to produce output that could be directly ingested by a language model without further manual formatting.

## Data Cleaning for AI Ingestion

The raw converter output was not immediately usable for RAG. PDF extraction in particular introduced artifacts that degraded retrieval and generation quality:

- Repeated headers and footers on every page
- Broken sentences split across page boundaries
- Formatting artifacts from multi-column layouts
- Table structures that did not survive the Markdown conversion cleanly

I wrote post-processing scripts to address these issues — trimming repeated headers, reconnecting sentences split by page breaks, removing layout artifacts, and flagging sections where the structure was too complex for automated cleaning. The goal was a corpus where each document read as continuous text suitable for chunking and embedding.

## RAG System and Model Evaluation

With the cleaned corpus, I built a RAG system to answer questions about ZTNA implementations using the collected documentation as context.

The system was evaluated across several dimensions:

- **LLMs**: Qwen, Gemma, Mistral — tested for response quality given retrieved context
- **Embedding models**: Snowflake-Arctic, BGE, MxBai — tested for retrieval accuracy
- **Chunking strategies**: varied chunk sizes and overlap to measure the effect on retrieval relevance

I designed a set of prompt-based evaluation tests — questions with known answers drawn from the source documents — and scored each configuration on correctness, completeness, and relevance. Results were compiled in Excel to compare performance across all combinations of LLM, embedding model, and chunking parameters.

## Presentation

Final results were presented to company leadership, including the CEO. The presentation covered the research findings, the tooling built, and recommendations for which model and retrieval configurations best suited the company's use case.
