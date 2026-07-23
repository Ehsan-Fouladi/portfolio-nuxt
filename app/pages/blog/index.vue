<template>
  <UPage v-if="page">
    <UPageHero :title="page.title" :description="page.description" :links="page.links" :ui="{
      title: 'mx-0! text-right',
      description: 'mx-0! text-right text-pretty',
    }" />
    <UPageSection :ui="{ container: 'pt-0!' }">
      <UBlogPosts orientation="vertical">
        <Motion v-for="(post, index) in posts" :key="index" :initial="{ opacity: 0, y: 10 }"
          :while-in-view="{ opacity: 1, y: 0 }" :transition="{ delay: 0.1 * index, duration: 0.3 }"
          :in-view-options="{ once: true }">
          <UBlogPost variant="naked" orientation="horizontal" :to="post.path" v-bind="post" :ui="{
            root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
            image:
              'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
            header:
              index % 2 === 0
                ? 'sm:-rotate-2 overflow-visible'
                : 'sm:rotate-2 overflow-visible'
          }" />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
<script setup lang="ts">
const { data: page } = await useAsyncData('blog-page', () => {
  return queryCollection('pages').path('/blog').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'صفحه پیدا نشد',
    fatal: true
  })
}

const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'مقالات وبلاگ پیدا نشد',
    fatal: true
  })
}

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