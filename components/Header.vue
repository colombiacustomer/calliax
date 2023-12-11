<script setup
        lang="ts">

import { onMounted } from "#imports";

const showNavTop = ref(false)
const lastScrollPos = ref(0)
const openMenu = ref(false)
const links = [
  { 'title': '¿Quiénes somos?', 'a': '#about-us', 'icon': 'fluent:fingerprint-48-regular' },
  { 'title': '¿Qué hacemos?', 'a': '#what-do-we-do', 'icon': 'fluent:molecule-48-regular' },
  { 'title': 'Contacto', 'a': '#contact-us', 'icon': 'fluent:chat-multiple-32-regular' }
]

function handleScroll() {
  const currentScrollPos = window.scrollY || document.documentElement.scrollTop
  showNavTop.value = lastScrollPos.value > currentScrollPos
  lastScrollPos.value = currentScrollPos
}

onMounted(() => {
  lastScrollPos.value = window.scrollY || document.documentElement.scrollTop
  window.addEventListener('scroll', handleScroll)
})


</script>

<template>
  <div class="w-full h-20 z-50 bg-secondary fixed top-0 shadow transition ease-in"
       :class="[showNavTop ? 'opacity-100' : 'opacity-0']">
    <nav class="flex flex-row max-w-screen-xl h-full items-center justify-between text-slate-200 m-auto px-4 sm:px-0 z.50">
      <span class="text-3xl flex items-center font-bold font-sans text-primary">calliax</span>
      <!--      <span>{{ isScrolling }}</span>-->
      <div class="flex flex-row items-center space-x-2">
        <div class="block sm:hidden">
          <language-switcher/>
        </div>
        <!--        <button @click="openMenu = !openMenu"-->
        <!--                class="rounded-md bg-slate-900 p-2 text-sm font-medium text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 block sm:hidden"-->
        <!--                :class="[openMenu ? 'outline-red-400' : 'outline-gray-400']">-->
        <!--          <Icon v-show="!openMenu"-->
        <!--                name="material-symbols:menu-rounded"-->
        <!--                size="24px"/>-->
        <!--          <Icon v-show="openMenu"-->
        <!--                class="text-red-500"-->
        <!--                name="material-symbols:close-rounded"-->
        <!--                size="24px"/>-->
        <!--        </button>-->
      </div>

      <div class="hidden sm:flex flex-row items-center">
        <a :href="link.a"
           class="mx-2 py-2 px-4 rounded-md text-lg group relative transition-all ease-linear duration-200 hover:text-slate-50"
           v-for="(link, index) in links"
           :key="index">
          <div
              class="absolute hidden group-hover:block -inset-3 w-full h-full -z-10 text-primary">
            <Icon :name="link.icon"
                  class=""
                  size="56px"/>
          </div>
          {{ link.title }}</a>
        <div class="mx-2">
          <language-switcher/>
        </div>
      </div>
    </nav>

  </div>
</template>

<style scoped>

</style>