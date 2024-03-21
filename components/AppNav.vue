<template>
  <nav aria-label="Site Navigation" class="order-2 pt-6 pr-6 lg:order-1">
    <ul class="flex items-stretch justify-end gap-2 bg-white">
      <li><nuxt-link class="inline-flex px-3 py-2 transition-colors duration-150 border border-transparent rounded-xl hover:bg-slate-100" to="/">Home</nuxt-link></li>
      <li><nuxt-link class="inline-flex px-3 py-2 transition-colors duration-150 border border-transparent rounded-xl hover:bg-slate-100" to="/projects">Recent Projects</nuxt-link></li>
    </ul>
  </nav>
</template>
<style>
.router-link-active {
  @apply border-slate-200;
}
</style>
