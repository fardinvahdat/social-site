<template>
  <section class="grid grid-cols-1 gap-5 md:grid-cols-2 items-end">
    <template v-for="item in props.data">
      <img :alt="item.alternative_text" :src="`https://mymember.shop/${item.image_url}`">
    </template>
  </section>
</template>

<script setup>
const props = defineProps({
  data: ''
})
</script>

<style scoped>

</style>