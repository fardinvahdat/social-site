<template>
  <section>
    <h1 class="text-center text-lg md:text-xl font-bold text-Gray-b1">{{ $t('pages that have trusted us') }}</h1>
    <Tabs class="mt-6 bg-white rounded-lg w-fit mx-auto" />
    <Result class="mt-6 rounded-lg mx-auto" />
  </section>
</template>

<script setup>
import Tabs from './Tabs'
import Result from './Result'
</script>

<style scoped>

</style>