<template>
  <UPageSection :title="page.skills.title" :description="page.skills.description" :ui="{
    container: 'px-0 pt-0! py-0 sm:py-0 md:py-0 lg:py-0 xl:py-0 gap-4 sm:gap-4',
    title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium',
    description: 'text-right mt-2 text-sm sm:text-md lg:text-sm text-muted'
  }">
    <Motion v-for="(category, index) in page.skills.categories" :key="category.title" :initial="{ opacity: 0, y: 8 }"
      :while-in-view="{ opacity: 1, y: 0 }" :transition="{ duration: 0.3, delay: 0.1 * index }"
      :in-view-options="{ once: true }" class="flex flex-col gap-3">
      <h3 class="text-base font-medium text-highlighted">
        {{ category.title }}
      </h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in category.items" :key="skill"
          class="px-3 py-1.5 text-sm rounded-lg bg-elevated/60 text-muted hover:bg-elevated hover:text-highlighted transition-colors duration-200 cursor-hover">
          {{ skill }}
        </span>
      </div>
    </Motion>
  </UPageSection>
</template>
<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>