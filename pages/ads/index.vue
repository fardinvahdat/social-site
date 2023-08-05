<template>
  <section>
    <section class="flex items-center justify-center p-5 md:p-7 bg-Primary-b2 rounded-lg gap-16">
      <img src="/ads/instagram-growing.png" class="rouneded-lg md:w-80 lg:w-96" />
      <section class="hidden md:block flex-shrink-0 w-1 grow">
        <h1 class="text-white text-2xl font-bold">{{ $t('leave your free advertising to us') }}</h1>
        <p class="mt-10 text-white text-base font-medium">{{ $t('ads header text') }}</p>
        <el-button class="mt-10 btn text-white text-base bg-transparent font-medium">{{ $t('page and channel registration') }}</el-button>
      </section>
    </section>
    <TrustedPage class="mt-10" />
    <Body class="mt-10" />
    <SelectedLink class="mt-10" />

  </section>
</template>

<script setup>
import SelectedLink from "@/components/Blog/SelectedLink";
import Body from "@/components/Blog/Body";
import TrustedPage from "@/components/Ads/TrustedPage";
</script>

<style scoped>

</style>