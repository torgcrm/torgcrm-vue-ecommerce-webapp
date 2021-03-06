module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'torgcrm-vue-ecommerce-webapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TorgCRM Vue ECommerce web application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/main.scss',
  ],
  modules: [
    '@nuxtjs/axios',
  ],

  plugins: [
    { src: '~/plugins/nuxt-client-init.js', ssr: false },
    { src: '~/plugins/axios.js'},
    { src: '~/plugins/buefy.js'}
  ],

  axios: {
    baseURL: 'http://localhost:8080/torgcrm-ecommerce-web/',

  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
