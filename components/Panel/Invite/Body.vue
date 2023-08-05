<template>
  <section>

    <h1 class="font-bold text-lg lg:text-xl text-Gray-b1">{{ $t('user invite title') }}</h1>
    <p class="mt-4 text-sm text-Gray-b4 whitespace-pre-line">{{ $t('user invite body') }}</p>
    <section class="mt-6">
      <h3 class="text-base text-Gray-b3 font-medium">{{ $t('your exclusive earning link') }}:</h3>
      <section class="flex items-center gap-4 mt-2">
        <p class="block grow px-4 py-2 border border-Gray-b4 rounded-lg">
          https://mymember.shop?inviter=61141
        </p>
        <el-button class="btn btn-primary">
          {{ $t('copy the earning link') }}
        </el-button>
      </section>
    </section>
    <section class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <section class="border border-Gray-b6 rounded-lg p-4" v-for="item in items">
        <span class="block text-Gray-b4 font-medium text-sm">{{ item.name }}:</span>
        <p class="mt-3 text-Gray-b1 text-base font-bold">{{ item.value }}</p>
      </section>
    </section>
    <Table class="mt-6" />
  </section>
</template>

<script setup>
import Table from './Table'
const {t} = useI18n()
const items = ref([
  { name: t("subsets of you"), value: t('0 people')},
  { name: t("your profit amount"), value: t('3% of the online payment amount')},
  { name: t("earnings so far"), value: 0},
  { name: t("withdrawal balance"), value: 0},
])
</script>

<style scoped>

</style>