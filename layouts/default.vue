<template>
  <div class="bg-skin-fill min-h-screen relative ">
    <Nuxt />
  </div>
</template>

<style>
html {
  /* background: #240C04; */
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* width */
::-webkit-scrollbar {
  width: 4px;
}
/* Track */
/* ::-webkit-scrollbar-track {
  background: #240C04;
} */
/* Handle */
::-webkit-scrollbar-thumb {
  /* background: #240C04; */
  border-radius: 10px;
}
/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #240C04;
} */
</style>
