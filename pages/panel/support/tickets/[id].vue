<template>
  <div class="new-ticket">
    <Header>
      <template #title>Ticket number {{ route.params.id }}</template>
      <template #actions>
        <button
          @click="
            ticket && ticket.status == 1
              ? (ticket.status = 2)
              : (ticket.status = 1)
          "
          class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm text-sm py-5 text-Gray-b3 flex gap-2 items-center border-Gray-b6 border-[1px] hover:bg-Gray-b8"
        >
          {{ ticket && ticket.status == 1 ? "Open Ticket" : "Close Ticket" }}
        </button>
        <button
          @click="router.go(-1)"
          class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5 bg-Primary text-white flex items-center justify-center"
        >
          Previus Page
        </button>
      </template>
    </Header>
    <div
      class="w-full bg-white p-3 mt-6 rounded-xl lg:min-h-[calc(100vh-100px)] min-h-[calc(100vh-185px)] flex flex-col gap-6 pt-10 items-center justify-between"
    >
      <div class="w-full flex flex-col gap-2">
        <div
          class="messages w-full"
          v-for="(item, index) in myMessages"
          :key="index"
        >
          <section
            class="message max-w-[50%] min-w-[180px] bg-Primary bg-opacity-40 rounded-xl px-4 py-3 w-fit rounded-bl-none"
          >
            <p class="text-base text-Primary font-semibold">You</p>
            <p class="text-[15px] mt-1 p-1 text-Gray-b2">{{ item.message }}</p>
            <p class="text-sm text-Gray-b2 font-normal">{{ item.time }}</p>
          </section>
        </div>
      </div>
      <div class="w-full" v-if="ticket && ticket.status !== 1">
        <div class="flex flex-col w-full">
          <label class="text-[14px] text-Gray-b4 font-medium p-2"
            >Write your message</label
          >
          <el-input
            class="text-area"
            type="textarea"
            v-model="state.message"
            placeholder="Write your message here"
            clearable
          />
        </div>
        <button
          class="px-5 mt-3 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5flex items-center justify-center"
          :class="
            state.message
              ? ' bg-Primary text-white '
              : ' bg-Gray-b7 text-Gray-b4 cursor-not-allowed'
          "
          :disabled="!state.message"
          @click="addMessageHandler"
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
import { useRouter, useRoute } from "vue-router";
definePageMeta({
  layout: "panel",
});

//state

const state = ref({
  message: "",
});
const ticket = ref(null);
const router = useRouter();
const route = useRoute();
const tickets = useTicketListStore();
const { list } = tickets;

//mounted

onMounted(() => {
  ticket.value = list.filter((item) => item.id == route.params.id)[0];
  console.log(ticket.value);
});

//computed

const myMessages = computed(() => {
  return ticket.value?.messageList.filter((item) => item.author == 1);
});

//methods

const addMessageHandler = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  const message = {
    author: 1,
    message: state.value.message,
    time: time,
  };
  ticket.value.messageList.push(message);
  state.value.message = "";
};
</script>
