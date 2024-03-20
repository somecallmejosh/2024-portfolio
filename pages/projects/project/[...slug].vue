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
    <div class="max-w-full p-12 py-20 prose lg:p-24">
      <h1>{{ blogPost.title }}</h1>
      <div class="py-12 -mx-12 lg:-mx-24" :class="blogPost.color">
        <div class="px-12 mx-auto lg:px-24">
          <div class="aspect-[16/9] rounded-2xl bg-gray-50 shadow-lg">
            <img :src="blogPost.image" class="object-fit not-prose rounded-2xl" alt="America's Test Kitchen Website">
          </div>
        </div>
      </div>
      <div class="pt-6 pb-12">
        <ContentDoc />
        <h2>Technologies</h2>
        <ul class="flex items-center gap-1 not-prose">
          <li v-for="(technology, index) in blogPost.techUsed" :key="index">
            <p class="px-1 py-0.5 rounded border border-purple-200 text-purple-800 text-xs font-medium">{{ technology }}</p>
          </li>
        </ul>
      </div>
      <LinkNewWindow :href="blogPost.url"></LinkNewWindow>
      <PortfolioNav :previousUrl="blogPost.previousUrl" :nextUrl="blogPost.nextUrl" />
    </div>
  </div>
</template>
