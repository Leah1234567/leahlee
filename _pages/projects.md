---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 2
description: Selected projects, leadership, and industry experience.
_styles: |
  .experience-list {
    display: grid;
    gap: 2.5rem;
  }

  .experience-item {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .experience-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
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

  .experience-media {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
    margin-top: 1rem;
  }

  .experience-media figure {
    margin: 0;
  }

  .experience-media img,
  .experience-media video {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 8px;
    display: block;
  }

  @media (max-width: 768px) {
    .experience-media {
      grid-template-columns: 1fr;
    }
  }
---

<div class="experience-list">
  <section class="experience-item">
    <h2>Illini Solar Car</h2>
    <div class="role">Composite Structures and Vehicle Integration</div>
    <p>I design and build composite fairing tooling and support vehicle integration for the solar race car team.</p>
    <p>My work includes mold design, composite layup, finishing, and assembly fit checks.</p>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="Illini Solar Car project image" %}
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="Illini Solar Car project image" %}
    </div>
  </section>

  <section class="experience-item">
    <h2>Assistive Technology Devices</h2>
    <div class="role">ASME and Illinois Assistive Technology Program</div>
    <p>I designed one-handed assistive devices including a vegetable slicer, ziplock bag closer, and iPad holder.</p>
    <p>The designs were constrained by safety, accessibility, and single-print manufacturability.</p>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="Assistive technology project image" %}
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="Assistive technology project image" %}
    </div>
  </section>

  <section class="experience-item">
    <h2>ArachnoBot</h2>
    <div class="role">ASME Engineering Open House</div>
    <p>I designed and built a terrain-adaptive walking robot that uses 4-bar linkage legs.</p>
    <p>The project won 1st Place and the Distinguished Robotics award at Engineering Open House.</p>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="ArachnoBot project image" %}
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="ArachnoBot project image" %}
    </div>
  </section>

  <section class="experience-item">
    <h2>Somansa</h2>
    <div class="role">Industry Experience</div>
    <p>I worked at Somansa and gained exposure to engineering work in a professional setting.</p>
    <p>This experience strengthened my interest in practical, build-oriented engineering work.</p>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="Somansa experience image" %}
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="Somansa experience image" %}
    </div>
  </section>

  <section class="experience-item">
    <h2>URSA Vice President</h2>
    <div class="role">Leadership</div>
    <p>As Vice President, I help organize events, support members, and coordinate club activities.</p>
    <p>The role has strengthened my communication, planning, and team leadership skills.</p>
    <div class="experience-media">
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="URSA leadership image" %}
      {% include figure.liquid loading="eager" path="/assets/img/placeholder_project.jpg" alt="URSA leadership image" %}
    </div>
  </section>
</div>
