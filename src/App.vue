<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button';

import { ref } from 'vue';

const loading = ref<boolean>(false);
const text = ref<string>('');

const load = () => {
  loading.value = true;
  console.log(text.value);
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="wrapper">
    <div class="searchWrapper">
      <span>Search widget here</span>
      <div class="searchWidget">
        <InputText type="text" class="p-inputtext" v-model="text"/>
        <Button label="Search" :loading="loading" @click="load" />
      </div>
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