<template>
  <div>
    <!-- component -->
    <div class="min-h-screen flex items-center justify-center py-6 fixed top-72 left-3">
      <div class="flex max-w-xs p-4 bg-red-100 dark:bg-gray-700">
        <ul class="flex flex-col w-full">
          <li class="my-px">
            <a href="#" class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
              <span class="flex items-center justify-center text-lg text-red-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </span>
              <span class="ml-3 dark:text-gray-300">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
