<template>
  <UApp :locale="fa_ir">
    <AppHeader :links="navLinks" />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch :files="files" shortcut="meta_k" :navigation="navigation" :links="navLinks"
        :fuse="{ resultLimit: 42 }" />
    </ClientOnly>
  </UApp>
</template>
<script setup lang="ts">
import type { NuxtError } from "#app";
import { fa_ir } from "@nuxt/ui/locale";

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useSeoMeta({
  title: 'صفحه پیدا نشد',
  description: 'متأسفانه این صفحه قابل یافتن نیست.'
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