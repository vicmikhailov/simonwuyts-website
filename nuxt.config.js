module.exports = {
  head: {
    titleTemplate: '%s - Simon Wuyts'
  },
  css: [
    {
      src: '~/css/reset.scss',
      lang: 'scss'
    },
    {
      src: '~/css/global.scss',
      lang: 'scss'
    }
  ],
  build: {
    vendor: ['vue-i18n']
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js']
}
