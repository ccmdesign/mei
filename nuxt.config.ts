import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "CCM DS",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/tsd2tcy.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' },
    ],
  },
  css: [
    '@/assets/css/00-resets/body-structure.css',
    '@/assets/css/00-resets/normalize.css',
    '@/assets/css/00-resets/reset.css',
    '@/assets/css/00-resets/utils.css',
    '@/assets/css/01-tokens/colors-base.css',
    '@/assets/css/01-tokens/scale.css',
    '@/assets/css/01-tokens/wrappers.css',
    '@/assets/css/01-tokens/theme.css',
    '@/assets/css/02-elements/typography.css',
    '@/assets/css/03-objects/grid.css',
    '@/assets/css/03-objects/cover.css',
    '@/assets/css/03-objects/frame.css',
    '@/assets/css/03-objects/switcher.css',
    '@/assets/css/03-objects/polarized.css',
    '@/assets/css/04-components/button-structure.css',
    '@/assets/css/04-components/button-visuals.css',
    '@/assets/css/04-components/button-icons.css',
  ],
  components: {
    global: true,
    dirs: [
      '~/ccm-ds/03-objects/',
      '~/ccm-ds/04-components/',
      '~/ccm-ds/05-modules/',
      '~/ccm-ds/06-sections/'
    ]
  },

  modules: [
    ['@pinia/nuxt',
    {
      autoImports: [
        // automatically imports `usePinia()`
        'defineStore',
        // automatically imports `usePinia()` as `usePiniaStore()`
        ['defineStore', 'definePiniaStore'],
      ],
    }]
  ]
});
