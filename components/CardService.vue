<script setup
        lang="ts">

import TriangleDiagram from "~/components/images/TriangleDiagram.vue";
import CircleDiagram from "~/components/images/CircleDiagram.vue";
</script>

<template>
  <div class="grid grid-rows-6 rounded-lg pt-4 bg-slate-50 rounded-lg relative">
    <!--    <circle-diagram class="absolute -z-10 -bottom-6 -right-8 rotate-45 w-16 h-16"/>-->
    <div class="row-span-3 w-full relative">
      <triangle-diagram class="absolute -z-10 -top-10 -left-6 rotate-45 w-16 h-16"/>
      <slot name="image"></slot>
    </div>
    <div class="row-span-3 p-4">
      <div class="flex flex-col">
        <h1 class="text-primary text-2xl font-semibold line-clamp-2 my-4">
          <slot name="title"></slot>
        </h1>
        <p class="text-secondary/80 text-xl">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>