<template>
  <UApp :locale="fa_ir">
    <UContainer class="sm:border-x border-default pt-10">
      <AppHeader :links="navLinks" />
      <CustomCursor />
      <UMain class="relative">
        <NuxtLoadingIndicator />
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </UMain>
      <ClientOnly>
        <LazyUContentSearch :files="files" :navigation="navigation" shortcut="meta_k" :links="navLinks"
          :fuse="{ resultLimit: 42 }" />
      </ClientOnly>
      <AppFooter />
    </UContainer>
  </UApp>
</template>
<script setup lang="ts">
import { fa_ir } from "@nuxt/ui/locale";
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
})

useSeoMeta({
  titleTemplate: '%s',
  twitterCard: 'summary_large_image'
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])
</script>