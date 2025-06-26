---
aside: false
outline: false
title: Console API
---

<script setup>
import { useRoute } from 'vitepress'
import spec from '../openapi/console-api.json' with { type: 'json' }

const route = useRoute()

const operationId = route.data.params.operationId
</script>

<OAOperation :spec="spec" :operationId="operationId" hide-branding />