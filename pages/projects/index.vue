<script setup>
const {data} = useAsyncData('projectsList', () => {
  return queryContent().find()
  // .where({ _type: '/projects' })
})
</script>
<template>
  <div>
    <div class="max-w-full p-6 py-12 prose lg:py-20 prose-p:text-slate-600 lg:p-24">
      <h1>Recent UX/UI Projects</h1>
      <p class="text-slate-600">I'm Joshua Briley, and I specialize in UI design and front-end development. Over the years, I've focused on creating clear, user-friendly, and accessible digital products. My role has often bridged the gap between design and development, working directly with both stakeholders and technical teams to ensure that the final product meets everyone's needs. Here, you'll find a selection of projects that showcase my approach to design and development, highlighting my commitment to practical, effective solutions.</p>
      <h2>Recent Projects</h2>
      <ul class="grid gap-6 p-0 m-0 list-none lg:grid-cols-2">
        <li v-for="(project, index) in data" :key="index"
          class="relative p-4 rounded-lg group bg-slate-50">
          <div class="aspect-[16/9] not-prose rounded-lg overflow-hidden">
            <img :src="project.image" :alt="project.title" class="transition-transform duration-300 group-hover:scale-110" loading="lazy">
          </div>
          <div>
            <h3 class="text-sm font-medium">{{ project.title }}</h3>
          </div>
          <nuxt-link :to="project._path" class="absolute inset-0 z-10 block -bottom-6"></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
