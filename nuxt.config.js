import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script:[
      {src:'./node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview.min.js'}
    ],
    link: [{rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css", integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr", crossorigin:"anonymous"}]
    
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    './css/main.css',
    './node_modules/bulma-carousel/dist/css/bulma-carousel.min.css',
    './node_modules/bulma-extensions/dist/css/bulma-extensions.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~plugins/main.js', ssr: false },
    // { src: '~plugins/carousel.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Buefy
    'nuxt-buefy',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
