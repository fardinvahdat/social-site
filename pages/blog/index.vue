<template>
  <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
    <Item :data="item" v-for="item in data" @click="openBlog(item)"/>
  </section>
</template>

<script setup>
import blog from '@/sampleData/blog_en.json'
import Item from '@/components/Blog/Item'
const router = useRouter()
const data = computed(()=> {
  return blog.props.posts.data
})
const openBlog = (e) => {
  router.push({ path: `/blog/${e.id}` })
}
</script>

<style scoped>

</style>