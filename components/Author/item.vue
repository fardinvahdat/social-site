<template>
  <section class="flex items-center gap-2">
    <img :src="data.avatar" class="w-10 h-10 rounded-full"/>
    <h2 class="text-xs md:text-sm font-medium text-Gray-b5">{{ data.name }}</h2>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    default: ''
  }
})
</script>

<style scoped>

</style>