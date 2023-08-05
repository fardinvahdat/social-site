<template>
  <div class="new-ticket">
    <Header>
      <template #title>New Ticket</template>
      <template #actions>
        <button
          @click="router.go(-1)"
          class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5 bg-Primary text-white flex items-center justify-center"
        >
          Previus Page
        </button>
      </template>
    </Header>
    <div
      class="w-full bg-white p-3 mt-6 rounded-xl lg:min-h-[calc(100vh-100px)] min-h-[calc(100vh-185px)] flex flex-col gap-6 pt-10 items-center"
    >
      <section class="w-full flex gap-4 items-center md:flex-row flex-col">
        <div class="flex flex-col gap-2 w-full">
          <label class="text-[14px] text-Gray-b3 font-medium"
            >Insert your subject</label
          >
          <el-input
            type="text"
            v-model="state.subject"
            placeholder="Insert your subject"
            clearable
          />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <label class="text-[14px] text-Gray-b3 font-medium"
            >Insert order number (optional)</label
          >
          <el-input
            type="number"
            v-model="state.orderNumber"
            placeholder="Insert order number"
            clearable
          />
        </div>
      </section>
      <div class="flex flex-col gap-2 w-full">
        <label class="text-[14px] text-Gray-b3 font-medium">Description</label>
        <el-input
          class="text-area"
          type="textarea"
          v-model="state.description"
          placeholder="Description"
          clearable
        />
      </div>
      <div class="w-full">
        <button
          class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5flex items-center justify-center"
          :class="
            isSubmitValid
              ? ' bg-Primary text-white '
              : ' bg-Gray-b7 text-Gray-b4 cursor-not-allowed'
          "
          :disabled="!isSubmitValid"
          @click="addTicketHandler"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "@/components/Panel/Base/Header.vue";
import { useTicketListStore } from "@/store/tickets";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "panel",
});

//state

const state = ref({
  subject: "",
  orderNumber: "",
  description: "",
});
const router = useRouter();
const ticket = useTicketListStore();
const { list } = ticket;

//computed

const isSubmitValid = computed(() => {
  if (!state.value.subject || !state.value.description) return false;
  return true;
});

//methods

const addTicketHandler = () => {
  let id;
  if (!list.length) {
    id = 1;
  } else {
    id = list[list.length - 1].id + 1;
  }
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  const date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  const message = {
    author: 1,
    message: state.value.description,
    time: time,
  };
  let messageList = [message];
  list.push({
    id: id,
    time: time,
    date: date,
    status: 2,
    subject: state.value.subject,
    orderNumber: state.value.orderNumber,
    messageList: messageList,
  });
  router.push(`/panel/support/tickets/${id}`);
};
</script>
