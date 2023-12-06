<script setup
        lang="ts">

import TriangleDiagram from "~/components/images/TriangleDiagram.vue";
import CircleDiagram from "~/components/images/CircleDiagram.vue";
</script>

<template>
  <div class="flex flex-col space-y-8 relative p-4 bg-slate-50 rounded-lg">
<!--    <triangle-diagram class="absolute w-20 h-20 z-10 -left-6 -top-7 rotate-45"/>-->
    <triangle-diagram class="absolute w-24 h-24 z-10 rotate-45"/>
    <h1 class="text-5xl text-secondary font-bold relative z-40">
      <slot name="title"></slot>
    </h1>
    <p class="text-xl text-secondary/80 leading-relaxed px-6">
      <slot name="description"></slot>
    </p>
<!--    <circle-diagram class="absolute w-32 h-32 -bottom-24 -right-20"/>-->
    <circle-diagram class="absolute w-32 h-32 -bottom-20 -right-10 -z-10"/>
  </div>
</template>

<style scoped>

</style>