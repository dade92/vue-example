<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'


import { ref } from 'vue'
import type { Result } from '@/views/Data'
import ResultsView from '@/views/ResultsView.vue'

interface Results {
  data: Result[]
}

const loading = ref<boolean>(false)
const text = ref<string>('')
const resultsRef = ref<Results>({ data: [] })
const error = ref<boolean>(false)

const load = async () => {
  loading.value = true
  await fetch(`/api/search/${text.value}`)
    .then((response) => {
      if (response.status === 200) {
        error.value = false
        response.json().then((r) => {
          resultsRef.value.data = r.results as Result[]
        })
      } else {
        error.value = true
      }
      loading.value = false
    })
}
</script>

<template>
  <div class="wrapper">
    <div class="searchWrapper">
      <span>Search here for products:</span>
      <div class="searchWidget">
        <InputText type="text" class="p-inputtext" v-model="text" />
        <Button label="Search" :loading="loading" @click="load" />
      </div>
      <ResultsView
        v-if="resultsRef.data.length > 0"
        :results="resultsRef.data"
        @onTextClick="(t: string) => console.log(t)"
      />
      <Message v-if="error" severity="error">Error retrieving search results</Message>
    </div>
  </div>
</template>

<style scoped>
.searchWrapper {
  display: flex;
  gap: 16px;
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