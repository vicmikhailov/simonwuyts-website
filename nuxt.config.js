module.exports = {
  loading: false,
  head: {
    titleTemplate: '%s - Simon Wuyts',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/xee3qdi.css'
      }
    ]
  },
  css: [
    {
      src: '~/css/reset.scss',
      lang: 'scss'
    }
  ],
  build: {
    vendor: ['vue-i18n']
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-portal.js'
  ]
}
