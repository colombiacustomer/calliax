<script setup
        lang="ts">

</script>

<template>
  <div>
    <h1 class="text-primary text-xl">
      <slot name="title"></slot>
    </h1>
    <p class="text-secondary/80 px-3 text-lg">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<style scoped>

</style>