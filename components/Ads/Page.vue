<template>
  <section class="p-3 bg-white rounded-lg">
    <img :src="data.image" class="w-16 h-16 rounded-full mx-auto" />
    <h1 class="mt-4 text-base font-semibold text-Gray-b1 text-center h-12">{{ data.name }}</h1>
    <section class="flex items-center mt-4">
      <span></span>
      <span class="text-xs text-Gray-b4">{{ data.seen }} {{ $t('seen') }}</span>
    </section>
    <el-button class="btn border-Primary text-Primary hover:bg-Primary hover:text-white w-full mt-6 text-sm">{{ $t('show') }}</el-button>

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