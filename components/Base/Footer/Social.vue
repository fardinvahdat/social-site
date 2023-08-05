<template>
  <section class="container max-w-[1274px] mx-auto">
    <section class="grid grid-cols-1 gap-5 md:flex items-center justify-between py-5">
      <a :href="`tel:${$t('app phone')}`" class="md:text-base text-sm font-medium text-Gray-b3">{{ $t('phone') }} : {{ $t('app phone') }}</a>
      <span class="md:text-base text-sm font-medium text-Gray-b3">{{ $t('address') }} : {{ $t('app address') }}</span>
      <h2 class="md:text-base text-sm font-medium text-Gray-b3 flex items-center gap-2">{{ $t('my member in social') }} :
        <section class="flex items-center gap-3">
          <img src="/assets/images/logo/telegram.png" class="w-7" />
          <img src="/assets/images/logo/whatsapp.png" class="w-7" />
          <img src="/assets/images/logo/instagram.png" class="w-7"  />
        </section>
      </h2>
    </section>
  </section>
</template>

<script setup>
</script>

<style scoped>

</style>