<template>
  <span class="text-base">{{ parseInt(props.value).toLocaleString() }} {{ $t('price currency')}}</span>
</template>

<script setup>
const props = defineProps({
  value: ''
})
</script>

<style scoped>

</style>