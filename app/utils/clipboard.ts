export function copyToClipboard(toCopy: string, message: string = 'در کلیپ‌بورد کپی شد') {
  const toast = useToast()
  navigator.clipboard.writeText(toCopy).then(() => {
    toast.add({ title: message, color: 'success', icon: 'i-lucide-check-circle' })
  })
}
