<template>
  <UPage v-if="page">
    <UPageHero :title="page.title" :description="page.description" :links="page.links"
      :ui="{ title: 'mx-0! text-right md:leading-14', description: 'mx-0! text-right leading-snug' }">
      <!-- <template #links>
        <Motion :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }">
          <div v-if="page.links" class="flex items-center gap-2">
            <UButton :label="page.links[0]?.label" :to="global.meetingLink" v-bind="page.links[0]" />
            <UButton :to="`mailto:${global.email}`" v-bind="page.links[1]" />
          </div>
        </Motion>
      </template> -->
    </UPageHero>
    <UPageSection :ui="{ container: 'pt-0!' }">
      <Motion v-for="(project, index) in projects" :key="project.title" :initial="{ opacity: 0, y: 10 }"
        :while-in-view="{ opacity: 1, y: 0 }" :transition="{ delay: 0.1 * index, duration: 0.3 }"
        :in-view-options="{ once: true }">
        <UPageCard :title="project.title" :description="project.description" orientation="horizontal" variant="naked"
          :reverse="index % 2 === 1" class="group" :ui="{ wrapper: 'max-sm:order-last' }">
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <div class="flex items-center gap-2">
              <UButton v-if="project.github" :to="project.github" target="_blank" variant="ghost" color="neutral"
                icon="i-simple-icons-github" label="گیت هاب" class="group/btn" data-cursor="code" :ui="{
                  leadingIcon: 'transition-transform duration-300 group-hover/btn:rotate-12'
                }" />
              <UButton v-if="project.demo" :to="project.demo" target="_blank" variant="ghost" color="primary"
                icon="i-lucide-external-link" label="سایت" class="group/btn" data-cursor="demo" :ui="{
                  leadingIcon: 'transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5'
                }" />
            </div>
          </template>
          <NuxtImg format="webp" loading="lazy" draggable="false" :src="project.image" :alt="project.title"
            class="object-cover w-full h-48 rounded-lg" />
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'صفحه پیدا نشد',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

// const { global } = useAppConfig()

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
