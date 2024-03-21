<script setup>
import { defineProps } from 'vue';

// Define component props with type and required options
const props = defineProps({
  previousUrl: {
    type: String,
    required: true
  },
  nextUrl: {
    type: String,
    required: true
  },
});
</script>

<template>
  <nav aria-label="Portfolio" class="px-12 py-6 mt-12 -mx-12 -mb-12 bg-slate-50 lg:-mx-24 lg:px-24 lg:-mb-18">
    <ul class="flex items-center justify-between w-full list-none not-prose">
      <li>
        <nuxt-link :to="previousUrl" class="flex items-center gap-1 group">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          <span class="group-hover:underline">Previous</span> <span class="sr-only">Portfolio Item</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="nextUrl" class="flex items-center gap-1 group">
          <span class="group-hover:underline">Next</span> <span class="sr-only">Portfolio Item</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
