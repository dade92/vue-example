<script setup lang="ts">
import { onMounted } from 'vue'
import type { Result } from '@/views/Data'

interface Props {
  results: Result[]
}

const { results } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'onTextClick', text: string): void
}>()

const onTextClicked = (text: string): void => {
  emit('onTextClick', text)
}

onMounted(() => {
  results.map((r) => {
    console.log(r.data)
  })
})
</script>

<template>
  <span>Results:</span>
  <li v-for="r in results" :key="r">
    <span @click="onTextClicked(r.data)">{{ r.data }}</span>
  </li>
</template>