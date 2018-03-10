module.exports = {
  loading: false,
  head: {
    titleTemplate: '%s - Simon Wuyts',
    meta: [
      {
        name: 'theme-color',
        content: '#0076FF'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/xee3qdi.css'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-64.png',
        sizes: '64x64'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-120.png',
        sizes: '120x120'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-156.png',
        sizes: '156x156'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-167.png',
        sizes: '167x167'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicons/favicon-180.png',
        sizes: '180x180'
      },
      {
        rel: 'apple-touch-icon',
        href: '/images/favicons/favicon-120.png'
      },
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
