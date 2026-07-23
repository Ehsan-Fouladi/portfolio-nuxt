<template>
  <motion.div :variants="variants" :animate="cursorVariant"
    class="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:flex justify-center items-center">
    <div
      class="w-full h-full rounded-full border-[1.5px] dark:border-white/80 border-black/80 transition-colors duration-300" />
    <div class="absolute w-2 h-2 rounded-full dark:bg-white bg-black transition-colors duration-200" />
  </motion.div>
</template>
<script setup lang="ts">
import { motion } from "motion-v";

const mousePosition = ref({ x: 0, y: 0 });
const cursorVariant = ref("default");

const mouseMove = (e: MouseEvent) => {
  mousePosition.value = {
    x: e.clientX,
    y: e.clientY
  };
};

onMounted(() => {
  window.addEventListener("mousemove", mouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", mouseMove);
});


const variants = computed(() => ({
  default: {
    x: mousePosition.value.x - 22,
    y: mousePosition.value.y - 22,
    height: 45,
    width: 45,
    mixBlendMode: "normal"
  }
}));
</script>