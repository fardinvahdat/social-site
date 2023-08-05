<template>
  <section class="p-3 flex items-center gap-3 flex-wrap justify-center">
    <span class="block px-4 py-2 rounded-lg text-xs md:text-sm" v-for="(tab, index) in tabs"
          :class="[index == activeTab ? 'text-white bg-Primary': 'text-Gray-b2']"
    @click="activeTab = index">
      {{ tab }}
    </span>
  </section>
</template>

<script setup>
const tabs = ref([
  "all",
  "ita",
  "chat",
  "soroush",
  "rubik's",
  "bale",
  "igap",
  "twitter",
  "instagram",
  "telegram",
])
const activeTab = ref(0)
</script>

<style scoped>

</style>