<template>
  <section>
    <section class="flex items-center gap-5">
      <h1 class="font-bold text-lg md:text-xl text-Gray-b1">{{ props.title }}</h1>
      <section class="flex grow-0 items-center gap-4">
        <el-button class="w-14 h-14 btn bg-white">
          <i class="isax isax-home-1" />
        </el-button>
        <slot name="header_items" />
      </section>
    </section>
    <slot name="body"/>
  </section>
</template>

<script setup>
const props = defineProps({
  title: '',

})
</script>

<style scoped>

</style>