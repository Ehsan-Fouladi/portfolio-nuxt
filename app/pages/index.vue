<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection :ui="{
      container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
    }">
      <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4, delay: 0.1 }" :in-view-options="{ once: true }">
        <LandingAbout :page />
      </Motion>
      <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4, delay: 0.2 }" :in-view-options="{ once: true }">
        <LandingWorkExperience :page />
      </Motion>
    </UPageSection>
    <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 }" :in-view-options="{ once: true }">
      <LandingSkills :page />
    </Motion>
    <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 }" :in-view-options="{ once: true }">
      <LandingTerminal />
    </Motion>
    <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 }" :in-view-options="{ once: true }">
      <LandingBlog :page />
    </Motion>
    <!-- <Motion
      :initial="{ opacity: 0, y: 10 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 }"
      :in-view-options="{ once: true }"
    >
      <LandingTestimonials :page />
    </Motion> -->
    <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 }" :in-view-options="{ once: true }">
      <LandingFAQ :page />
    </Motion>
  </UPage>
</template>
<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'صفحه پیدا نشد',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png'
})
</script>