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
</script>