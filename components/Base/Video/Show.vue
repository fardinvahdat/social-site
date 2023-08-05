<template>
  <section>
    <video>
      <source :src="props.data.video">
    </video>
    <h2 class="mt-4 md:mt-10 text-base md:text-lg font-bold text-center">{{ props.data.video_heading}}</h2>
    <p class="mt-4 text-sm md:text-base text-Gray-b4 font-medium">
      {{ props.data.video_description }}
    </p>
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