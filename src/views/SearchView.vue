<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import { onMounted, ref } from 'vue'
import type { Result } from '@/views/Data'
import ResultsView from '@/views/ResultsView.vue'

interface Results {
  data: Result[]
}

const loading = ref<boolean>(false)
const text = ref<string>('')
const results = ref<Results>({data: []})

const load = async () => {
  loading.value = true
  await fetch(`/api/search/${text.value}`)
    .then((response) => {
      if (response.status === 200) {
        response.json().then(r => {
          results.value.data = r.results as Result[]
        })
      }
      loading.value = false
    })
    .catch((e) => {})
}
</script>

<template>
  <div class="wrapper">
    <div class="searchWrapper">
      <span>Search widget here</span>
      <div class="searchWidget">
        <InputText type="text" class="p-inputtext" v-model="text" />
        <Button label="Search" :loading="loading" @click="load" />
      </div>
      <ResultsView v-if="results.data.length > 0" :results="results.data" />
    </div>
  </div>
</template>

<style scoped>
.searchWrapper {
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: min-content;
}

.searchWidget {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>