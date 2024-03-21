<script setup>
  const { path } = useRoute()

  const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })

  useHead({
    title: `${blogPost.title}`,
    meta: [
      { name: 'description', content: blogPost.description }
    ]
  })
</script>

<template>
  <div>
    <div class="max-w-full p-12 py-20 prose prose-p:text-slate-600 lg:p-24">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm">
        <ol class="flex items-center max-w-full gap-2 overflow-x-scroll not-prose whitespace-nowrap">
          <li>
            <nuxt-link to="/projects">Projects</nuxt-link>
          </li>
          <li aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
          </li>
          <li>
            <a href="" aria-current="page" class="text-slate-500">
              {{ blogPost.title }}
            </a>
          </li>
        </ol>
      </nav>
      <h1>{{ blogPost.title }}</h1>
      <div class="py-12 -mx-12 lg:-mx-24" :class="blogPost.color">
        <div class="px-12 mx-auto lg:px-24">
          <div class="aspect-[16/9] rounded-2xl bg-gray-50 shadow-lg">
            <img :src="blogPost.image" class="object-fit not-prose rounded-2xl" alt="Company website">
          </div>
        </div>
      </div>
      <div class="pt-6 pb-12 lg:py-12">
        <ContentDoc />
        <h2>Technologies</h2>
        <ul class="flex items-center max-w-full gap-1 overflow-x-scroll not-prose">
          <li v-for="(technology, index) in blogPost.techUsed" :key="index">
            <p class="px-1 py-0.5 rounded border border-slate-200 text-xs font-medium whitespace-nowrap">{{ technology }}</p>
          </li>
        </ul>
      </div>
      <LinkNewWindow :href="blogPost.url"></LinkNewWindow>
      <PortfolioNav :previousUrl="blogPost.previousUrl" :nextUrl="blogPost.nextUrl" />
    </div>
  </div>
</template>
