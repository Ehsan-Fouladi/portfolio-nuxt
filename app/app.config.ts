export default defineAppConfig({
  global: {
    picture: {
      dark: '/profile.jpg',
      light: '/profile.jpg',
      alt: 'احسان فولادی'
    },
    meetingLink: 'https://t.me/ehsanfouladiprogrammer',
    email: 'mailto:fooehan3@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: 'ساخته شده با عشق توسط احسان فولادی',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Ehsan-Fouladi',
      'target': '_blank',
      'aria-label': 'GitHub احسان فولادی'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/ehsan-fouladi-a0144a237',
      'target': '_blank',
      'aria-label': 'LinkedIn احسان فولادی'
    }, {
      'icon': 'i-simple-icons-gmail',
      'to': 'mailto:fooehan3@gmail.com',
      'target': '_blank',
      'aria-label': 'ایمیل احسان فولادی'
    }, {
      'icon': 'i-simple-icons-telegram',
      'to': 'https://t.me/ehsanfouladiprogrammer',
      'target': '_blank',
      'aria-label': 'تلگرام احسان فولادی'
    }]
  }
})
