<template>
  <div class="min-h-screen py-24 relative scroll-smooth bg-gradient-to-b from-blue-50 via-pink-100 to-blue-100">
    <a href="#main-content" class="absolute top-0 left-0 -translate-y-full bg-gray-500 focus:translate-y-0 transition-transform origin-top p-6 text-white hover:bg-gray-600 transition-color duration-150" tabindex="0">
      Skip Nav
    </a>
    <!-- Create an SVG circle -->
    <svg role="image" class="lg:block fixed top-0 right-0 z-0 -translate-x-1/2 -translate-y-1/2 opacity-10 text-purple-500 blur-2xl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="150" fill="currentColor" />
    </svg>
    <svg role="image" class="lg:block fixed bottom-0 left-0 z-0 translate-x-1/2 translate-y-1/2 opacity-10 text-blue-500 blur-2xl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="150" fill="currentColor" />
    </svg>
    <div class="w-full max-w-7xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row gap-8 relative">
      <aside class="basis-80 shrink-0">
        <IdentityCard />
      </aside>
      <div class="space-y-4 grow">
        <div class="bg-white rounded-xl overflow-hidden">
          <AppNav />
          <main id="main-content">
            <NuxtPage/>
          </main>
        </div>
        <footer class="text-center pb-6 text-gray-600">
          <p>&copy;{{ new Date().getFullYear() }} Joshua Briley</p>
        </footer>
      </div>
    </div>
  </div>
</template>
