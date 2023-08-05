<template>
  <section>
    <List :data="pageProps.suggestions" />
    <Collapse :states="collapseItems" class="mt-10" />
  </section>
</template>

<script setup>
import List from '@/components/Suggestions/List'
import Collapse from "@/components/Base/Collapse/Collapse.vue";
import blog from '@/sampleData/ads.json'
import {ref} from "vue";
const {t} = useI18n()
const pageProps = computed(()=> {
  return blog.props
})
const collapseItems = ref([
  {
    subject: t('ads faq1 title'),
    description: t('ads faq1 description'),
    isOpen: false,
  },
]);
onMounted(()=> {
  console.log(pageProps.value)
})
</script>

<style scoped>

</style>