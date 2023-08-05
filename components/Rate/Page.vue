<template>
  <section class="flex items-center gap-3">
    <h2 class="text-base font-medium text-Gray-b4">
      {{ $t('score this page') }}
    </h2>
    <el-rate v-model="props.value" size="large" />
  </section>
</template>

<script setup>
const props = defineProps({
  value: {
    default: 0
  }
})
</script>

<style scoped>

</style>