import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'خانه',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'پروژه‌ها',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'وبلاگ',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'درباره من',
  icon: 'i-lucide-user',
  to: '/about'
}]
