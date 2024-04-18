<template>
  <div class="sticky top-0 z-20 flex items-center justify-between h-20 gap-10 px-6 bg-white shadow lg:h-32 rounded-xl lg:px-24 bg-opacity-60 backdrop-blur-xl">
    <nuxt-link to="/" class="">
      <Logo class="w-auto h-14" />
    </nuxt-link>
    <nav aria-label="Site Navigation">
      <ul class="flex items-stretch gap-2 lg:justify-end rounded-xl">
        <li><nuxt-link class="inline-flex px-3 py-2 font-medium transition-colors duration-150 border border-transparent text-slate-600 rounded-xl hover:bg-white hover:text-slate-800" to="/">Home</nuxt-link></li>
        <li><nuxt-link exact-active-class="sup" class="inline-flex px-3 py-2 font-medium transition-colors duration-150 border border-transparent text-slate-600 rounded-xl hover:bg-white hover:text-slate-800" to="/projects">Projects</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>
<style>
li .router-link-active {
  @apply bg-white text-slate-800;
}
</style>
