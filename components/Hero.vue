<template>
  <div class="sm:m-6 space-y-6">
    <div class="relative bg-skin-fill dark:bg-gray-800 max-w-5xl mx-auto overflow-hidden sm:rounded-2xl">
      <img
        class="absolute inset-0 h-full w-full object-cover opacity-30"
        src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
        alt="People working"
      >
      <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90" />
      <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-skin-base dark:text-gray-800 sm:text-4xl">
          <span class="block">Focus</span>
          <span class="block">Learn</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-skin-muted dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur dolorum quisquam.
        </p>
        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a href="#" class="text-skin-inverted dark:bg-gray-800 dark:hover:bg-opacity-90 bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8">Get Started</a>
            <a href="#" class="text-skin-base dark:text-gray-800 bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
