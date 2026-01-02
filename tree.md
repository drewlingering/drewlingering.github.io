---
layout: default
title: Evolutionary Tree
---

| Clade | Representative species |
|-------|------------------------|
{% for key in site.data.tree %}
| **{{ site.data.tree[key].name }}** | {% if site.data.tree[key].examples %}{{ site.data.tree[key].examples | join: "; " }}{% else %}{{ site.data.tree[key].note | default: "—" }}{% endif %} |
{% endfor %}
