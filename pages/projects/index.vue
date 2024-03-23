<script setup>
const {data} = useAsyncData('projectsList', () => {
  return queryContent().find()
  // .where({ _type: '/projects' })
})
</script>
<template>
  <div>
    <section-wrapper>
      <h1 class="max-w-[20ch]">My Journey in UX/UI Design and Front-End Development</h1>
      <p class="text-slate-600">I'm Joshua Briley, where my passion lies in bridging the gap between design and technical implementation, particularly in the realm of web applications. My work is characterized by a commitment to creating interfaces that are not just user-friendly and accessible, but are also crafted with the intricacies of front-end development in mind. Below are projects that epitomize my approach to marrying design with functionality in web application development.</p>
      <h2>Featured Projects</h2>
      <ul class="grid gap-6 p-0 m-0 list-none lg:grid-cols-2">
        <li v-for="(project, index) in data" :key="index"
          class="relative p-4 m-0 rounded-lg group bg-slate-50">
          <div class="aspect-[16/9] not-prose rounded-lg overflow-hidden">
            <img :src="project.image" :alt="project.title" class="transition-transform duration-300 group-hover:scale-110" loading="lazy">
          </div>
          <div>
            <h3 :id="`link-${index}`">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
          <nuxt-link :aria-labelledby="`link-${index}`" :to="project._path" class="absolute inset-0 z-10 block -bottom-6"></nuxt-link>
        </li>
      </ul>
    </section-wrapper>
  </div>
</template>
