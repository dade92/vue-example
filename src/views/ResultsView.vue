<script setup lang="ts">
import { onMounted } from 'vue'
import type { Result } from '@/views/Data'

interface Props {
  results: Result[]
}

const { results } = defineProps<Props>()

onMounted(() => {
  results.map((r) => {
    console.log(r.data)
  })
})
</script>

<template>
  <span>Results:</span>
  <li v-for="r in results">
    {{ r.data }}
  </li>
</template>