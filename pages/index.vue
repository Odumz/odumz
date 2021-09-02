<template>
  <div class="flex">
    <div class="hidden lg:block side">
      <sidebar />
    </div>
    <div class="content mb-30 bg-white bg-opacity-5">
      <!-- <nuxt-logo /> -->
      <nav-menu />
      <hero data-aos="fade-up" class="sm:pt-16 pt-6 pb-10" />
      <services data-aos="fade-left" class="sm:pt-16 pt-6 pb-10" />
      <portfolio data-aos="fade-down" class="sm:pt-16 pt-6 pb-10" />
      <testimonials data-aos="fade-right" class="sm:pt-16 pt-6 pb-10" />
      <achievements data-aos="slide-up" class="sm:pt-16 pt-6 pb-10" />
      <blogs data-aos="slide-down" class="sm:pt-16 pt-6 pb-10" />
      <contact data-aos="slide-left" class="sm:pt-16 pt-6 pb-10" />
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
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
        { property: 'og:url', content: 'https://odumz.com/' },
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
  height: calc(100% - 40px);
  overflow: scroll;
}

.content {
  flex: 11;
  height: 300vh;
  overflow: scroll;
}
</style>
