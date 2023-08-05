<template>
  <section>
    <Show :data="data" :rating="pageProps.rating.value"/>
    <LatestPostsSlider class="mt-10" />
    <Add class="mt-10" />
    <SelectedLink class="mt-10" />
    <LatestProfiles class="mt-10" />
  </section>
</template>

<script setup>
import blog from '@/sampleData/blog_id.json'
import Show from "@/components/Blog/Show";
import LatestPostsSlider from "@/components/HomePage/LatestPostsSlider.vue";
import Add from "@/components/Comment/Add";
import SelectedLink from "@/components/Blog/SelectedLink";
import LatestProfiles from "@/components/HomePage/LatestProfiles";
const data = computed(()=> {
  return blog.props.post
})
const pageProps = computed(()=> {
  return blog.props
})
onMounted(()=> {
  console.log(data.value)
})
</script>

<style scoped>

</style>