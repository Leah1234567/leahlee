---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 2
horizontal: true
---

<!-- pages/projects.md -->
<div class="projects">

{% assign sorted_projects = site.projects | sort: "start_date" | reverse %}

{% if page.horizontal %}

<div class="container">
  <div class="row row-cols-1">
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
{% endif %}

</div>
