module.exports = {
  head: {
    titleTemplate: '%s - Simon Wuyts'
  },
  build: {
    vendor: ['vue-i18n']
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js']
}
