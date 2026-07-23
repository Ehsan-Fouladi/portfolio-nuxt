<template>
  <UPageSection :title="page.faq.title" :description="page.faq.description" :ui="{
    container: 'px-0 pt-0! gap-4 sm:gap-4',
    title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium',
    description: 'text-right mt-2 text-sm sm:text-md lg:text-sm text-muted'
  }">
    <UTabs :items :ui="{
      root: 'flex flex-col gap-4 w-full',
      list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0 w-full',
      indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
      trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted whitespace-nowrap',
      label: 'truncate'
    }">
      <template #content="{ item }">
        <UAccordion leading-icon="lucide:plus" :items="item.questions" :unmount-on-hide="false" :ui="{
          item: 'border-none',
          trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-base flex justify-between',
          leadingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted transition-transform duration-200'
        }">
          <template #body="{ item: _item }">
            <p class="px-4 text-muted leading-relaxed whitespace-pre-line">
              {{ _item.content }}
            </p>
          </template>
        </UAccordion>
      </template>
    </UTabs>
  </UPageSection>
</template>
<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions.map(q => ({
        ...q,
        content: q.content.trim()
      }))
    }
  })
})
</script>