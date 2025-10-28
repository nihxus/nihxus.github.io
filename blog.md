---
layout: default
title: Blog
permalink: /blog/
vanta: full
---

# Blog
<p class="blog-tagline">Notes, experiments, and thoughts from my dev journey.</p>

<ul class="post-list">
  {% assign sorted = site.posts | sort: 'date' | reverse %}
  {% for post in sorted %}
    <li class="post-card">
      <a href="{{ post.url | relative_url }}">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="meta">
          {{ post.date | date: "%b %e, %Y" }}
          {% if post.tags %} · {{ post.tags | join: ', ' }}{% endif %}
        </p>
        {% if post.excerpt %}
          <p class="excerpt">{{ post.excerpt | strip_html }}</p>
        {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
