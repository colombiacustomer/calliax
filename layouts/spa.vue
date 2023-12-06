<script setup
        lang="ts">

useHead({
  bodyAttrs: {
    class: 'bg-slate-50 relative antialiased overflow-y-auto overflow-x-hidden cstm-scroll'
  }
})

</script>

<template>
  <div>
    <Header/>
    <!--    <nuxt-page>-->
    <div class="">
      <slot></slot>
    </div>
    <!--    </nuxt-page>-->
  </div>

</template>

<style scoped>

</style>