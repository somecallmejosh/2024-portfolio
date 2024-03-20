<template>
  <nav aria-label="Site Navigation" class="order-2 pt-6 pr-6 lg:order-1">
    <ul class="flex items-stretch justify-end bg-white">
      <li><nuxt-link class="inline-flex p-6 transition-colors duration-150" to="/">Home</nuxt-link></li>
      <li><nuxt-link class="inline-flex p-6 transition-colors duration-150" to="/projects">Recent Projects</nuxt-link></li>
    </ul>
  </nav>
</template>
<style>
.router-link-active {
  @apply text-purple-600;
}
</style>
