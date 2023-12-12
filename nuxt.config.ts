// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        [
            '@nuxtjs/i18n',
            { vueI18n: './i18n.config.ts' }
        ],
        'nuxt-icon',
        'nuxt-swiper',
        ['nuxt-vuefire', {
            config: {
                apiKey: "AIzaSyBEaTdhfnRDo0cO_A-7y-wf8tRu_XniK0c",
                authDomain: "calliax.firebaseapp.com",
                projectId: "calliax",
                storageBucket: "calliax.appspot.com",
                messagingSenderId: "86444480365",
                appId: "1:86444480365:web:5dbdc0605a898d6463ec64",
                measurementId: "G-RMWK3Q5XX4"
                // there could be other properties depending on the project
            },
            appCheck: {
                debug: '383906C6-49B9-4F95-BEF5-5083D96AF232',
                isTokenAutoRefreshEnabled: true,
                provider: 'ReCaptchaV3',
                key: '6LcjoB4pAAAAAKL-UiVWH3zySDsz92HvEsUOsArq',
            }
        }]
    ],
    tailwindcss: {
        cssPath: "~/assets/css/main.css",
        config: {
            plugins: [tailwindTypography(), tailwindForms()],
            // content: [
            //     './pages/**/*.{html,js,vue}',
            //     './pages/*.{html,js,vue}',
            //     './components/**/*.{html,js,vue}',
            //     './components/*.{html,js,vue}',
            // ],
            // plugins: [tailwindTypography],
            theme: {
                extend: {
                    colors: {
                        primary: 'hsl(var(--color-primary) / <alpha-value>)',
                        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
                    },
                },
                fontFamily: {
                    'sans': ['Sen Regular', 'sans-serif', 'Roboto'],
                    'serif': ['Sura Regular', 'serif'],
                }
            },

        }
    },
    swiper: {
        styleLang: 'css',
        modules: [
            'autoplay',
            'effect-cards',
            'effect-coverflow',
            'effect-fade',
            'effect-flip',
            'effect-slide',
            'scrollbar',
            'navigation',
            'pagination',
        ]
    },
    // imports: {
    //     presets: {
    //         from: 'headlessui'
    //     }
    // }
})