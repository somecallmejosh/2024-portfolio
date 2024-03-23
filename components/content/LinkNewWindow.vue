<script setup>
import { defineProps } from 'vue';

// Define component props with type and required options
const props = defineProps({
  href: {
    type: String,
    required: true
  },
});
</script>
<template>
  <p>
    <a :href="href" target="_blank" rel="noreferrer" class="inline-flex items-center max-w-full gap-1 text-sm font-medium transition-colors duration-150 rounded not-prose group text-slate-600">
      <span class="overflow-x-scroll grow whitespace-nowrap group-hover:underline">Visit {{ href }}</span>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-4 shrink-0" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
    </a>
  </p>
</template>
