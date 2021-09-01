<template>
  <div>
    <div class="title relative">
      <div class="flex justify-center mx-auto">
        <h2 class="md:text-6xl text-4xl text-skin-base-tertiary sm:justify-center uppercase pb-12 tracking-new-widest opacity-5">
          portfolio
        </h2>
        <p class="absolute uppercase items-center text-skin-base md:py-5 py-2 text-xl opacity-100">
          Works I've completed
        </p>
      </div>
    </div>
    <div class="md:flex mx-auto justify-center theServices">
      <div
        class="bg-gray-100 m-auto w-96 h-64 cursor-pointer"
        style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;"
        @mouseover="doSomething"
        @mouseleave="doSomething"
      >
        <div v-if="gethover" class="flex flex-row items-end h-full w-full">
          <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
            <h3 class="text-base font-bold leading-5 uppercase">
              Project title
            </h3>
            <div class="inline-flex items-center">
              <span class="capitalize font-base text-xs my-1 mr-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate saepe dolores non unde debitis similique...</span>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="w-max inline-flex space-x-2 text-skin-base items-center">
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    vuejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    nodejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    swagger
                  </p>
                </div>
              </div>
            <!-- <div class="w-max">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-100 m-auto w-96 h-64 cursor-pointer"
        style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;"
        @mouseover="doSomething"
        @mouseleave="doSomething"
      >
        <div v-if="gethover" class="flex flex-row items-end h-full w-full">
          <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
            <h3 class="text-base font-bold leading-5 uppercase">
              Project title
            </h3>
            <div class="inline-flex items-center">
              <span class="capitalize font-base text-xs my-1 mr-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate saepe dolores non unde debitis similique...</span>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="w-max inline-flex space-x-2 text-skin-base items-center">
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    vuejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    nodejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    swagger
                  </p>
                </div>
              </div>
            <!-- <div class="w-max">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-100 m-auto w-96 h-64 cursor-pointer"
        style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;"
        @mouseover="doSomething"
        @mouseleave="doSomething"
      >
        <div v-if="gethover" class="flex flex-row items-end h-full w-full">
          <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
            <h3 class="text-base font-bold leading-5 uppercase">
              Project title
            </h3>
            <div class="inline-flex items-center">
              <span class="capitalize font-base text-xs my-1 mr-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate saepe dolores non unde debitis similique...</span>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="w-max inline-flex space-x-2 text-skin-base items-center">
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    vuejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    nodejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    swagger
                  </p>
                </div>
              </div>
            <!-- <div class="w-max">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-100 m-auto w-96 h-64 cursor-pointer"
        style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;"
        @mouseover="doSomething"
        @mouseleave="doSomething"
      >
        <div v-if="gethover" class="flex flex-row items-end h-full w-full">
          <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
            <h3 class="text-base font-bold leading-5 uppercase">
              Project title
            </h3>
            <div class="inline-flex items-center">
              <span class="capitalize font-base text-xs my-1 mr-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate saepe dolores non unde debitis similique...</span>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="w-max inline-flex space-x-2 text-skin-base items-center">
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    vuejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    nodejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    swagger
                  </p>
                </div>
              </div>
            <!-- <div class="w-max">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-100 m-auto w-96 h-64 cursor-pointer"
        style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;"
        @mouseover="doSomething"
        @mouseleave="doSomething"
      >
        <div v-if="gethover" class="flex flex-row items-end h-full w-full">
          <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
            <h3 class="text-base font-bold leading-5 uppercase">
              Project title
            </h3>
            <div class="inline-flex items-center">
              <span class="capitalize font-base text-xs my-1 mr-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate saepe dolores non unde debitis similique...</span>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="w-max inline-flex space-x-2 text-skin-base items-center">
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    vuejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    nodejs
                  </p>
                  <p class="bg-skin-fill-tertiary rounded-sm px-3">
                    swagger
                  </p>
                </div>
              </div>
            <!-- <div class="w-max">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  },
  computed: {
    gethover () {
      return this.hover
    }
  },
  methods: {
    doSomething () {
      this.hover = !this.hover
    }
  }
}
</script>

<style scoped>
  .tracking-new-widest {
    letter-spacing: 0.5em;
  }

  /* @media screen and (max-width: 895px) {
    .theServices {
      display: grid;
    }
  } */
</style>
