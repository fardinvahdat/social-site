<template>
  <section class="grid grid-cols-1 md:flex gap-5 items-start">
    <section class="max-h-[510px] overflow-y-auto overflow-x-hidden p-3 rounded-lg bg-white grid grid-cols-1 gap-5">
      <el-button class="btn w-full m-0 justify-start" :class="[index == activeCategory ? 'bg-Gray-b7' : '']" text
                 v-for="(category, index) in categories" @click="activeCategory = index">
        {{ $t(category) }}
      </el-button>

    </section>
    <section class="grow grid grid-cols-2 gap-5 md:grid-cols-3">
      <Page v-for="result in results" :data="result" />
    </section>
  </section>
</template>

<script setup>
import data from '@/sampleData/ads_result.json'
import Page from './Page'
const categories = ref([
  'all',
  'ita',
  'chat',
  'soroush',
  'rubik',
  'bale',
  'igap',
  'twitter',
  'instagram',
  'telegram',
  "a shop",
  "tourism",
  "religious",
  "historical",
  "linkedIn",
  "clip",
  "ladies",
  "sports",
  "stock exchange and digital currency",
  "humorous and funny",
  "educational",
  "health",
  "movies and series",
  "music",
  "play",
  "technology",
  "beauty",
  "news",
  "entertainment",
])
const activeCategory = ref(0)
const results = computed(()=> {
  return data.data
})
</script>

<style scoped>

</style>