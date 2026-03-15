---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 2
_styles: |
  .experience-list {
    display: grid;
    gap: 2.5rem;
  }

  .experience-item {
    display: grid;
    grid-template-columns: minmax(0, 1.7fr) minmax(260px, 0.9fr);
    gap: 1.5rem;
    align-items: start;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .experience-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .experience-item.no-media {
    grid-template-columns: 1fr;
  }

  .experience-item h2 {
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
  }

  .experience-item .role {
    margin-bottom: 0.85rem;
    color: var(--global-text-color-light);
    font-size: 0.95rem;
  }

  .experience-item p {
    margin-bottom: 0.9rem;
  }

  .experience-text {
    min-width: 0;
  }

  .experience-media {
    margin-top: 0.2rem;
    max-width: 320px;
  }

  .experience-media figure {
    margin: 0;
  }

  .experience-media img,
  .experience-media video {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    display: block;
  }

  @media (max-width: 768px) {
    .experience-item {
      grid-template-columns: 1fr;
    }

    .experience-media {
      max-width: 320px;
    }
  }
---

<div class="experience-list">
  <section class="experience-item no-media">
    <div class="experience-text">
      <h2>Illini Solar Car</h2>
      <div class="role">Composite Structures and Vehicle Integration</div>
      <p>I work on the Illini Solar Car team, specifically on composite fabrication and vehicle subsystem integration. I lead the design and fabrication of fairing door molds using 3D-printed tooling and carbon fiber/fiberglass composite layups. The work involves sanding, trimming, vacuum bagging, and surface finishing to produce parts that meet structural and aerodynamic requirements. I collaborate closely with structures, aerodynamics, and electrical teams to resolve packaging and fitment constraints during vehicle assembly. Much of the work involves translating CAD geometry into manufacturable composite parts and adjusting interfaces so components install reliably within small vehicle tolerances.</p>
    </div>
  </section>

  <section class="experience-item">
    <div class="experience-text">
      <h2>ArachnoBot</h2>
      <div class="role">ASME Engineering Open House</div>
      <p>ArachnoBot is a terrain-adaptive robot developed for the UIUC Engineering Open House. I designed and built the robot’s leg system, including a 4-bar linkage mechanism to improve stability while moving through uneven surfaces. The project involved mechanism design, rapid prototyping, and iterative testing to achieve reliable motion across different terrain conditions. I also demonstrated the robot to more than 1,000 visitors and explained the design principles behind its locomotion system. The project received 1st Place in Distinguished Robotics among more than 200 exhibits.</p>
    </div>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/Archnobot.png" alt="ArachnoBot project image" %}
    </div>
  </section>

  <section class="experience-item">
    <div class="experience-text">
      <h2>Assistive Technology Devices</h2>
      <div class="role">ASME and Illinois Assistive Technology Program</div>
      <p>This project involved designing assistive devices for individuals who must perform everyday tasks using only one hand. Working with the Illinois Assistive Technology Program and ASME, I designed and prototyped devices such as a one-hand vegetable slicer, Ziplock bag closer, iPad holder, and bowl holder. Designs prioritized one-hand usability, lightweight structure, minimal assembly, and short 3D-printing time. I iterated prototypes to satisfy accessibility constraints while ensuring the devices could be produced with simple single-print fabrication.</p>
    </div>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/Assistive.png" alt="Assistive technology project image" %}
    </div>
  </section>

  <section class="experience-item no-media">
    <div class="experience-text">
      <h2>Somansa</h2>
      <div class="role">Network Engine Team Researcher Intern</div>
      <p>During my internship at Somansa, I researched Zero Trust Network Access (ZTNA) systems to support internal product development. I built Python tools to crawl technical documentation, convert HTML and PDF manuals into Markdown, and process the data for use in AI pipelines. These scripts handled issues such as page breaks, inconsistent formatting, and fragmented sentences that occur when converting manuals into machine-readable text. I then developed a Retrieval-Augmented Generation (RAG) system and evaluated different combinations of LLMs, embedding models, and chunking strategies for technical question answering. The results were presented to company leadership and used to guide internal research on future ZTNA products.</p>
    </div>
  </section>

</div>
