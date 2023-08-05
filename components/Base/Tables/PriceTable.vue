<template>
  <section class="bg-white rounded-lg">
    <section class="rounded-t-lg bg-Primary py-3">
      <h1 class="text-center text-base md:text-lg text-white">{{ props.title }}</h1>
    </section>
    <section class="py-3">
      <section class="grid grid-cols-3 gap-3">
        <h1 class="text-center text-base font-bold">{{ $t('value') }}</h1>
        <h1 class="text-center text-base font-bold">{{ $t('price') }}</h1>
        <h1 class="text-center text-base font-bold">{{ $t('buy package') }}</h1>
      </section>
      <section class="grid grid-cols-1">
        <template v-for="(item, index) in data">
          <section class="p-3 grid grid-cols-3 gap-3 text-center" :class="[(index + 1) %2 == 0 ? 'bg-Gray-b7 bg-opacity-40' : '']">
          <h2 :class="valueClass">{{ item.quantity }}</h2>
            <Price :value="item.price" :class="valueClass" />
            <el-button class="btn btn-primary w-22 mx-auto">{{ $t('buy package') }}</el-button>
          </section>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>
import Price from '@/components/Base/Text/Price'
const props = defineProps({
  title: {
    defaut: ''
  },
  data: {
    default: []
  }
})
const valueClass = ref('text-base text-Gray-b4 font-medium')
</script>

<style scoped>

</style>