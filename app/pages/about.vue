<template>
  <UPage v-if="page">
    <UPageHero :title="page.title" :description="page.description" orientation="horizontal" :ui="{
      container: 'lg:flex sm:flex-row items-center',
      title: 'mx-0! text-right',
      description: 'mx-0! text-right',
      links: 'justify-end'
    }">
      <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.6, delay: 0.2 }">
        <UColorModeAvatar loading="lazy" draggable="false"
          class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
          :light="global.picture?.light!" :dark="global.picture?.dark!" :alt="global.picture?.alt!" />
      </Motion>
    </UPageHero>
    <UPageSection :ui="{ container: 'pt-0!' }">
      <MDC :value="page.content" unwrap="p" />
      <Motion :initial="{ opacity: 0, y: 10 }" :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3, delay: 0.2 }" :in-view-options="{ once: true }">
        <div class="flex justify-center items-center py-5 -space-x-8">
          <PolaroidItem v-for="(image, index) in page.images" :key="index" :image="image" :index />
        </div>
      </Motion>
    </UPageSection>
  </UPage>
</template>
<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'صفحه پیدا نشد',
    fatal: true
  })
}

const { global } = useAppConfig()

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Portfolio', { title, description })
</script>