<template>
  <div class="ticket-card w-full flex border-[1.5px] p-3 rounded-lg">
    <div class="flex items-center p-3 flex-col gap-2 border-r-2">
      <span class="text-Primary text-base font-semibold">{{ state.time }}</span>
      <span class="text-sm text-Gray-b2 font-normal">{{ state.date }}</span>
    </div>
    <section class="w-full pl-3 flex flex-col justify-between">
      <div class="flex w-full justify-between items-start">
        <span
          class="px-4 py-1 rounded-[50px] text-xs font-semibold"
          :class="
            state.status == 1
              ? 'bg-Gray-b6 text-Gray-b3'
              : state.status == 2
              ? 'bg-orange-600 text-white'
              : state.status == 2
              ? 'bg-green-700 text-white'
              : ''
          "
        >
          {{
            state.status == 1
              ? "Closed"
              : state.status == 2
              ? "Wait for response"
              : state.status == 2
              ? "answered"
              : ""
          }}
        </span>

        <NuxtLink
          :to="'/panel/support/tickets/' + state.id"
          class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5 bg-Primary text-white flex items-center gap-2"
        >
          View <i class="text-lg isax isax-export-3" />
        </NuxtLink>
      </div>
      <h3 class="text-Gray-b2 text-base font-semibold">
        {{ state.subject }}
      </h3>
    </section>
  </div>
</template>
<script setup>
const props = defineProps({
  state: {
    default: {
      time: "",
      date: "",
      status: 0,
      subject: "",
    },
  },
});
const { state } = props;
</script>
