export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  //target: 'static',
//   router: {
//     base: '/WebARDist/'
//   },

  head: {
    title: 'Walk With Me',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: { fallback: true },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	//{ src: '~/plugins/ymapPlugin.js',  mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/mixins.scss',
      '~/assets/scss/variables.scss',
      '~/assets/scss/main.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
	['vue-yandex-maps/nuxt', 
	{
		apiKey: 'f10a9d37-e020-414b-ac91-cbae21b0c600', // Индивидуальный ключ API
		lang: 'ru_RU', // Используемый язык
		coordorder: 'latlong', // Порядок задания географических координат
		debug: false, // Режим отладки
		version: '2.1', // Версия Я.Карт
	}
]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "three"
    ]
  },
}
