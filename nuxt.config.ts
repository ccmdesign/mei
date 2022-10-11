import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Middle East Initiative",
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
    '@ccmdesign/ccm-ds/assets/css/00-resets/body-structure.css',
    '@ccmdesign/ccm-ds/assets/css/00-resets/normalize.css',
    '@ccmdesign/ccm-ds/assets/css/00-resets/reset.css',
    '@ccmdesign/ccm-ds/assets/css/00-resets/utils.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/colors-base.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/scale.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/wrappers.css',
    '@ccmdesign/ccm-ds/assets/css/01-tokens/theme.css',

    '@/assets/css/theme.css',

    '@ccmdesign/ccm-ds/assets/css/02-elements/typography.css',

    '@/assets/css/typography.css',

    '@ccmdesign/ccm-ds/assets/css/03-objects/grid.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/cover.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/frame.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/switcher.css',
    '@ccmdesign/ccm-ds/assets/css/03-objects/polarized.css',
    '@ccmdesign/ccm-ds/assets/css/04-components/button-structure.css',
    '@ccmdesign/ccm-ds/assets/css/04-components/button-visuals.css',
    '@ccmdesign/ccm-ds/assets/css/04-components/button-icons.css',
  ],
  components: {
    "dirs": [
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/03-objects'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/04-components'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/05-modules'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/06-sections'),
        "global": true
      },
      "~/components"
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
