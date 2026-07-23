<template>
  <UContainer class="sm:border-x border-default pt-10">
    <CustomCursor/>
    <AppHeader :links="navLinks" />
    <slot />
    <AppFooter />
  </UContainer>
</template>
