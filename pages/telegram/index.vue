<template>
  <section>
    <PriceTable :title="pageData.name" :data="pageData.packages" />
    <Show :data="pageData" class="mt-4" />
    <List class="mt-4" :data="propsData.suggestions" />
    <Rate :value="propsData.rating.value" class="mt-6" />
  </section>
</template>

<script setup>
import telegramJson from '@/sampleData/telegram.json'
import PriceTable from '@/components/Base/Tables/PriceTable'
import Show from '@/components/Base/Video/Show'
import List from "@/components/Suggestions/List";
import Rate from "@/components/Rate/Page";
const  pageData = computed(()=> {
  return telegramJson.props.page
})
const  propsData = computed(()=> {
  return telegramJson.props
})
const json = ref('')
onMounted(()=> {
  console.log(telegramJson)
})
</script>

<style scoped>

</style>