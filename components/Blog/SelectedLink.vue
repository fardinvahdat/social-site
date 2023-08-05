<template>
  <section>
    <h2 class="text-xl text-Gray-b1 font-semibold section-header pl-1 relative">
      {{ ' ' + $t('selected link') }}
    </h2>
    <section class="flex flex-wrap gap-x-2 gap-y-4 md:gap-5 mt-4">
      <span class="px-5 py-2 bg-white hover:bg-Primary rounded-2xl bg-white shadow-sm block border border-Gray-b7 text-sm"
            v-for="link in links">{{ $t(link) }}</span>
    </section>
  </section>
</template>

<script setup>
const links = ref([
  'buy comment',
  'telegram premium account',
  'bale advertise',
  'buy fake number',
  'buy whatsapp fake number',
  'buy telegram fake number',
  'instagram advertise',
  'buy twitter like',
  'buy telegram channel',
  'advertising in rubika',
  'buy cheap followers',
  'buy a proxy member',
  'buy iranian followers',
  'buy instagram view',
  'buy instagram likes',
  'hide followers',
])
</script>

<style scoped>

</style>