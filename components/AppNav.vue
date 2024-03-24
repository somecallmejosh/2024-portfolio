<template>
  <div class="flex flex-col justify-between gap-10 px-6 pt-12 lg:items-center lg:flex-row lg:px-24">
    <nuxt-link to="/" class="">
      <Logo class="w-auto h-14" />
    </nuxt-link>
    <nav aria-label="Site Navigation">
      <ul class="flex items-stretch gap-2 bg-white lg:justify-end">
        <li><nuxt-link class="inline-flex px-3 py-2 font-medium transition-colors duration-150 border border-transparent text-slate-600 rounded-xl hover:bg-slate-100 hover:text-slate-800" to="/">Home</nuxt-link></li>
        <li><nuxt-link exact-active-class="sup" class="inline-flex px-3 py-2 font-medium transition-colors duration-150 border border-transparent text-slate-600 rounded-xl hover:bg-slate-100 hover:text-slate-800" to="/projects">Projects</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>
<style>
li .router-link-active {
  @apply bg-slate-100 text-slate-800;
}
</style>
