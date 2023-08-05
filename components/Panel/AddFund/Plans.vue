<template>
  <section class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <section v-for="plan in plans" class="p-3 rounded-lg shadow-lg">
      <span class="block text-center text-xs md:text-sm text-Error-b2 font-light">{{ $t('special offer') }}</span>
      <section class="mt-4 flex items-center justify-center">
        <section class="w-12 h-12 flex items-center justify-center bg-Primary-w2 bg-opacity-50 grow-0 rounded-lg">
          <i class="isax isax-activity text-2xl text-Primary-b3" />
        </section>
      </section>
      <section class="mt-6 flex items-start gap-2 justify-center">
        <Price :value="plan.price" />
      </section>
      <section class="mt-6 flex items-start gap-2 justify-center">
        <Price class="text-Gray-b4" :value="plan.extra" />
        <span class="text-Gray-b4">{{ $t('fund gift') }}</span>
      </section>
      <section class="mt-2 flex items-start gap-2 justify-center">
        <span class="text-Gray-b4">{{ $t('used in all orders') }}</span>
      </section>
      <section class="mt-6 flex items-start gap-2 justify-between">
        <section class="grid grid-cols-1 gap-3">
          <Price class="text-Gray-b2 font-bold text-base" :value="plan.price" />
          <Price class="mt-2 text-Gray-b4 line-through font-bold text-base" :value="plan.discountPrice" />
        </section>
        <span class="p-1 block bg-Primary text-white text-sm">{{ plan.percent }}%</span>
      </section>
      <el-button class="mt-6 btn btn-primary w-full">{{ $t('confirm')}}</el-button>
    </section>
  </section>
</template>
<script setup>
import Price from "@/components/Base/Text/Price";
const plans = ref([
  {id: 1, price: 3000000, extra: 800000, discountPrice: 3800000, percent: 50},
  {id: 2, price: 500000, extra: 250000, discountPrice: 3800000, percent: 60},
  {id: 3, price: 1000000, extra: 250000, discountPrice: 3800000, percent: 40},
  {id: 4, price: 10000000, extra: 2700000, discountPrice: 3800000, percent: 30},
])
</script>