<script setup>
  useHead({
    title: 'UX/UI Portfolio | Joshua Briley',
    meta: [
      { name: 'description', content: 'Welcome to my portfolio site.' }
    ]
  })
</script>

<template>
  <div class="relative min-h-screen py-4 lg:py-24 bg-gradient-to-b from-blue-50 via-pink-100 to-blue-100">
    <a href="#main-content" class="absolute top-0 left-0 p-6 text-white transition-transform duration-150 origin-top -translate-y-full bg-gray-500 focus:translate-y-0 hover:bg-gray-600 transition-color" tabindex="0">
      Skip Nav
    </a>
    <svg aria-hidden="true" class="fixed top-0 right-0 z-0 text-purple-500 -translate-x-1/2 -translate-y-1/2 lg:block opacity-10 blur-2xl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="150" fill="currentColor" />
    </svg>
    <svg aria-hidden="true" class="fixed bottom-0 left-0 z-0 text-blue-500 translate-x-1/2 translate-y-1/2 lg:block opacity-10 blur-2xl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="150" fill="currentColor" />
    </svg>
    <div class="relative flex flex-col w-full gap-8 px-4 mx-auto max-w-7xl lg:px-0 lg:flex-row">
      <aside class="order-1 basis-80 shrink-0 lg:order-0">
        <IdentityCard />
      </aside>
      <div class="mb-6 space-y-4 grow order-0 lg:order-1 lg:mb-0">
        <div class="overflow-hidden bg-white rounded-xl">
          <AppNav />
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
