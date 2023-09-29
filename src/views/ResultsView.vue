<script setup lang="ts">
import type { Result } from '@/views/Data'
import Listbox from 'primevue/listbox'
import { ref, watch } from "vue";

interface Props {
  results: Result[]
}

const { results } = defineProps<Props>()

const selected = ref()

const emit = defineEmits<{
  (e: 'onTextClick', text: string): void
}>()

const onTextClicked = (text: string): void => {
  emit('onTextClick', text)
}

watch(selected, () =>  onTextClicked(selected.value))

</script>

<template>
  <span>Results:</span>
  <Listbox :options="results" optionLabel="data" class="w-full md:w-14rem" v-model="selected">
    <template #option="slotProps">
      <span>{{ slotProps.option.data }}</span>
    </template>
  </Listbox>
</template>