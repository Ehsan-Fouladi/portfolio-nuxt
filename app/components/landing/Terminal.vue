<template>
  <UPageSection>
    <div class="relative group">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      <div
        class="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-xl border border-white/30 dark:border-white/10 overflow-hidden font-mono text-sm shadow-xl"
        dir="ltr">
        <div
          class="flex items-center gap-2 px-4 py-3 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-b border-white/20 dark:border-white/10">
          <div class="size-3 rounded-full bg-red-500" />
          <div class="size-3 rounded-full bg-yellow-500" />
          <div class="size-3 rounded-full bg-green-500" />
          <span class="text-neutral-500 text-xs ml-4">terminal</span>
        </div>
        <div class="p-4 min-h-[280px] max-h-[320px] overflow-y-auto">
          <div v-for="(line, index) in lines" :key="index" class="leading-relaxed">
            <span v-if="terminalLines[index]?.type === 'command'" class="text-green-500 dark:text-green-400">
              {{ line }}
            </span>
            <span v-else class="text-neutral-600 dark:text-neutral-300">{{ line }}</span>
            <span v-if="index === lines.length - 1 && terminalLines[index]?.type === 'command'"
              class="text-green-500 dark:text-green-400"
              :class="{ 'opacity-100': showCursor, 'opacity-0': !showCursor }">
              &#9612;
            </span>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
<script setup lang="ts">
const lines = ref<string[]>([])
const showCursor = ref(true)

const terminalLines = [
  { type: 'command', text: '$ whoami' },
  { type: 'output', text: 'Ehsan Fouladi - Frontend Developer' },
  { type: 'command', text: '$ skills --list --verbose' },
  { type: 'output', text: '[frontend] React, Vue, Nuxt, Tailwind CSS, GSAP, Motion' },
  { type: 'output', text: '[backend]  Node.js, Express, NestJS, MySQL, PostgreSQL, GraphQL' },
  { type: 'output', text: '[devops]  Docker, CI/CD, Git, GitHub, Linux' },
  { type: 'output', text: '[tools]   VS Code, Vite, Supabase, Vercel, Figma' },
  { type: 'command', text: '$ experience --current' },
  { type: 'output', text: 'Frontend Developer @ DeltaGroup (1404-1405)' },
  { type: 'command', text: '$ status' },
  { type: 'output', text: 'Available for new projects' },
]

const typeLine = (lineIndex: number) => {
  if (lineIndex >= terminalLines.length) return

  const line = terminalLines[lineIndex]!
  const text = line.text

  if (line.type === 'command') {
    let charIndex = 0
    const typeChar = () => {
      if (charIndex <= text.length) {
        lines.value[lineIndex] = text.slice(0, charIndex)
        charIndex++
        setTimeout(typeChar, 30 + Math.random() * 20)
      } else {
        setTimeout(() => typeLine(lineIndex + 1), 300)
      }
    }
    lines.value[lineIndex] = ''
    typeChar()
  } else {
    lines.value[lineIndex] = text
    setTimeout(() => typeLine(lineIndex + 1), 100)
  }
}

onMounted(() => {
  typeLine(0)

  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})
</script>
