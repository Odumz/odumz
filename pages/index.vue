<template>
  <div class="flex theme-swiss">
    <div class="hidden lg:block side ">
      <sidebar />
    </div>
    <div class="content">
      <menu />
      <hero />
      <testimonials />
      <menu />
      <portfolio />
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Software Engineer',
      titleTemplate: '%s | Odumosu Oluwashina',
      meta: [
        {
          name: 'description',
          content:
            "A software engineer helping businesses get more clients with their web or mobile applications. If you're interested in helping your clients live happier by using your platform, I'd love to help you grow your business. Odumosu Oluwashina"
        },
        { property: 'og:site_name', content: 'Odumosu Oluwashina' },
        {
          property: 'og:description',
          content:
            "A software engineer helping businesses get more clients with their web or mobile applications. If you're interested in helping your clients live happier by using your platform, I'd love to help you grow your business. Odumosu Oluwashina"
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://afaraseun.com/' },
        {
          name: 'keywords',
          content:
            'Odumosu Oluwashina, Odumosu Oluwashina Biodun, About Odumosu Oluwashina, Who is Odumosu Oluwashina, Software engineer Odumosu Oluwashina, Frontend developer Odumosu Oluwashina'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .side {
  flex: 3;
  height: 100vh;
  color: white;
  background-color: black;
  overflow: scroll;
  line-height: 300px;
}

.content {
  flex: 10;
  height: 100vh;
  background-color: pink;
  overflow: scroll;
  line-height: 300px;
}
</style>
