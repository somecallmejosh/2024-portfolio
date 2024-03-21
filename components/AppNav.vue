<template>
  <div class="flex flex-col justify-between gap-6 px-6 pt-12 lg:items-baseline lg:flex-row lg:px-24">
    <p class="text-3xl font-bold translate-y-1.5">Joshua Briley</p>
    <nav aria-label="Site Navigation">
      <ul class="flex items-stretch gap-2 bg-white lg:justify-end">
        <li><nuxt-link class="inline-flex px-3 py-2 font-medium transition-colors duration-150 border border-transparent text-slate-600 rounded-xl hover:bg-slate-100 hover:text-slate-800" to="/">Home</nuxt-link></li>
        <li><nuxt-link class="inline-flex px-3 py-2 font-medium transition-colors duration-150 border border-transparent text-slate-600 rounded-xl hover:bg-slate-100 hover:text-slate-800" to="/projects">Recent Projects</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>
<style>
.router-link-active {
  @apply bg-slate-100 text-slate-800;
}
</style>
