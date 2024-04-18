<script setup>
  useHead({
    title: 'UX/UI Portfolio | Joshua Briley',
    meta: [
      { name: 'description', content: 'Welcome to my portfolio site.' }
    ]
  })
</script>

<template>
  <div class="relative min-h-screen py-4 lg:py-12 bg-slate-100">
    <a href="#main-content" class="absolute top-0 left-0 p-6 text-white transition-transform duration-150 origin-top -translate-y-full bg-slate-500 focus:translate-y-0 hover:bg-slate-600 transition-color" tabindex="0">
      Skip Nav
    </a>
    <svg aria-hidden="true" class="fixed top-0 right-0 z-0 text-purple-100 -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-20 lg:block blur-2xl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="150" fill="currentColor" />
    </svg>
    <svg aria-hidden="true" class="fixed bottom-0 left-0 z-0 text-purple-200 translate-x-1/2 translate-y-1/2 opacity-30 lg:block blur-2xl animate-pulse" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="150" fill="currentColor" />
    </svg>
    <svg class="fixed top-0 left-0 z-0 h-full text-indigo-100 rotate-180 top-left blur-3xl animate-pulse" aria-hidden="true" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 185.343 185.343" xml:space="preserve">
      <path fill="currentColor" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
    </svg>
    <svg class="fixed top-0 right-0 z-0 h-full text-indigo-100 top-left blur-3xl animate-pulse" aria-hidden="true" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 185.343 185.343" xml:space="preserve">
      <path fill="currentColor" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
        l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
        c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
    </svg>
    <div class="max-w-[1300px] relative flex flex-col w-full gap-8 px-4 mx-auto lg:px-0 lg:flex-row">
      <aside class="order-1 basis-1/3 shrink-0 lg:order-0">
        <IdentityCard />
      </aside>
      <div class="mb-6 space-y-6 grow order-0 lg:order-1 lg:mb-0">
        <AppNav />
        <div class="overflow-hidden bg-white shadow bg-opacity-60 rounded-xl backdrop-blur-sm">
          <main id="main-content">
            <NuxtPage/>
          </main>
        </div>
        <footer class="pb-6 text-sm text-center text-slate-800">
          <p class="font-medium">&copy;{{ new Date().getFullYear() }} Joshua Briley. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>
