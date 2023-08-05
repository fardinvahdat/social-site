<template>
  <section class="tickets">
    <Header>
      <template #title>Ticket List</template>
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
    <div
      class="w-full bg-white p-3 mt-6 rounded-xl lg:min-h-[calc(100vh-100px)] min-h-[calc(100vh-185px)] flex flex-col gap-6 pt-10 items-center"
    >
      <template v-if="list.length">
        <Ticket v-for="(item, index) in list" :key="index" :state="item" />
      </template>
      <template v-if="!list.length">
        <div class="flex-col flex w-full">
          <a href="https://storyset.com/data"></a>
          <img
            src="/no-data/no-data.svg"
            class="max-w-full mx-auto max-h-[500px]"
          />
          <h2 class="text-xl text-center text-Gray-b2">Nothing to show!</h2>
        </div>
      </template>
    </div>
    <FilterDialog v-model="filterDialog"/>
  </section>
</template>
<script setup>
import Header from "@/components/Panel/Base/Header.vue";
import Ticket from "@/components/Panel/Support/Ticket.vue";
import FilterDialog from "@/components/Panel/Support/FilterDialog.vue";
import { ref } from "vue";
import { useTicketListStore } from "@/store/tickets";
definePageMeta({
  layout: "panel",
});

//state

const ticket = useTicketListStore();
const { list } = ticket;
const filterDialog = ref(false);
</script>
