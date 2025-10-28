---
layout: default
title: Library
permalink: /library/
vanta: full
---

# Library

{% assign books = site.data.books %}

{% assign ordered_categories = "theory,languages,methodologies,studying,software" | split: "," %}
{% assign labels = "Theory,Languages,Methodologies,Studying,Software" | split: "," %}

{% assign last = ordered_categories.size | minus: 1 %}
{% for i in (0..last) %}
  {% assign cat = ordered_categories[i] %}
  {% assign label = labels[i] %}
  {% assign row = books | where: "category", cat %}

  {% if row and row.size > 0 %}
  <h2 class="lib-heading">{{ label }}</h2>
  <div class="grid">
    {% for b in row %}
      <a class="card" href="{{ b.link }}" target="_blank" rel="noopener">
        {% if b.cover %}<img src="{{ b.cover }}" alt="{{ b.title }} cover" loading="lazy">{% endif %}
        <div>
          <strong>{{ b.title }}</strong><br>
          <span class="muted">{{ b.author }}</span>
          {% if b.excerpt %}<p class="muted" style="margin:.35rem 0 0">{{ b.excerpt }}</p>{% endif %}
        </div>
      </a>
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}
