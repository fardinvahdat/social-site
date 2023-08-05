<template>
  <section class="container max-w-[1274px] mx-auto">
    <section class="py-7 px-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <section v-for="item in items" class="flex items-center gap-5">
        <i class="isax text-[70px] text-Primary" :class="item.icon" />
        <section>
        <h1 class="text-Gray-b4 font-medium text-sm md:text-base">{{ item.title }}</h1>
        <p class="mt-2 text-Gray-b4 font-semibold text-sm lg:text-base">{{ item.description }}</p>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
const {t} = useI18n()
const items = ref([
  {
    icon: 'isax-star-1',
    title: t('number one in sales'),
    description: t('the most reliable supplier of Instagram and Telegram products')
  },
  {
    icon: 'isax-shopping-cart',
    title: t('the cheapest purchase'),
    description: t('we will guarantee the cheapest purchase for you')
  },
  {
    icon: 'isax-message',
    title: t('the companion of all shopping moments'),
    description: t('24-hour support and accompaniment in all stages of purchase')
  }
])
onMounted(()=> {
  console.log(t)
})
</script>

<style scoped>

</style>