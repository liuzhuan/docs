---
author: Liu Zhuan
---

[robots](/docs/robots.txt)

Author: {{ $frontmatter.author }}

<span v-for="i in 3">&lt;{{ i }}&gt;</span>

<script setup>
  import { useData, useRoute } from 'vitepress'

  const { page, theme } = useData()
  const { path, data } = useRoute()
</script>

<pre>page: {{ page }}</pre>

theme: {{ theme }}

path: {{ path }}. data: {{ data }}
