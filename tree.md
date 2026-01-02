---
layout: default
title: Evolutionary Tree
---

| Clade | Representative species |
|-------|------------------------|
{% for item in site.data.tree %}
| **{{ item.name }}** | {% if item.examples %}{{ item.examples | join: "; " }}{% else %}{{ item.note | default: "—" }}{% endif %} |
{% endfor %}
