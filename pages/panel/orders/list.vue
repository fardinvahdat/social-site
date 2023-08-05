<template>
  <section>
    <Header>
      <template #title>{{ $t('orders') }}</template>
      <template #actions>
        <button
            class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm text-sm py-5 text-Gray-b3 flex gap-2 items-center border-Gray-b6 border-[1px] hover:bg-Gray-b8"
            @click="filterDialog = true"
        >
          Filter <i class="isax isax-filter text-Gray-b3" />
        </button>
        <NuxtLink
            to="/panel/support/new-ticket"
            class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5 bg-Primary text-white flex items-center justify-center"
        >
          New ticket
        </NuxtLink>
      </template>
    </Header>
    <FilterDialog v-model="filterDialog" />
    <Table class="mt-6" />
  </section>
</template>

<script setup>
import Header from "@/components/Panel/Base/Header";
import Card from "@/components/Panel/Base/Card";
import Table from "@/components/Panel/Orders/Table";
import FilterDialog from "@/components/Panel/Orders/FilterDialog";
definePageMeta({
  layout: 'panel'
})
const filterDialog = ref(false)
</script>

<style scoped>

</style>