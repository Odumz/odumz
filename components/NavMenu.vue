<template>
  <nav class="bg-gray-100">
    <div class="max-w-7xl mx-auto border border-red-400 fixed inset-0 left-8">
      <div class="flex justify-around py-4">
        <div class="flex items-center space-x-4">
          <nuxt-link
            to="/"
            class="as-logo-gradient rounded-full  px-2 font-body text-lg text-gray-800 font-black"
          >
            OO
          </nuxt-link>
          <a
            v-scroll-to="'#services'"
            class="text-gray-600 ml-6 hover:text-blue-500 cursor-pointer"
          >Services</a>
          <a
            v-scroll-to="'#works'"
            class="text-gray-600 ml-4 hover:text-blue-500 cursor-pointer"
          >Portfolio</a>
          <a
            v-scroll-to="'#testimonials'"
            class="text-gray-600 ml-4 hover:text-blue-500 cursor-pointer"
          >Testimonials</a>
          <a
            v-scroll-to="'#achievement'"
            class="text-gray-600 ml-4 hover:text-blue-500 cursor-pointer"
          >Achievements</a>
          <a
            v-scroll-to="'#blog'"
            class="text-gray-600 ml-4 hover:text-blue-500 cursor-pointer"
          >Blog</a>
          <a
            v-scroll-to="'#collaborate'"
            class="text-gray-600 ml-4 hover:text-blue-500 cursor-pointer"
          >Contact Me</a>
        <!-- <a
          class="text-gray-600 flex ml-4 py-2 px-4 rounded-full bg-green-200 hover:text-blue-500 "
          style="background:#ffffff0d"
          href="mailto:hi@afaraseun.com"
          >Contact <span class="ml-1 hidden lg:block">Me</span></a
        > -->
        </div>
        <div>secondary nav</div>
      </div>
    </div>
  </nav>
</template>
