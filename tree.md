---
layout: default
title: Evolutionary Tree
---

| Clade | Representative species |
|-------|------------------------|
{% for item in site.data.tree.items %}
| **{{ item.name }}** | {% if item.examples %}{{ item.examples | join: "; " }}{% elsif item.note %}{{ item.note }}{% else %}—{% endif %} |
{% endfor %}
---
