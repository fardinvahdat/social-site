<template>
  <section>
    <Ads />
    <Header />
    <section class="container mt-10">
    <slot />
    </section>
    <Footer class="mt-14" />
  </section>
</template>

<script setup>
import Ads from '@/components/HomePage/Ads'
import Footer from '@/components/Base/Footer/Main'
import Header from '@/components/Base/Header/Main'
</script>

<style scoped>

</style>