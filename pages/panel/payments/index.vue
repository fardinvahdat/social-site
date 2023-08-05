<template>
  <section class="transactions">
    <Header>
      <template #title>Transactions</template>
      <template #actions>
        <button
          class="px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm text-sm py-5 text-Gray-b3 flex gap-2 items-center border-Gray-b6 border-[1px] hover:bg-Gray-b8"
          @click="filterDialog = true"
        >
          Filter <i class="isax isax-filter text-Gray-b3" />
        </button>
      </template>
    </Header>
    <div
      class="w-full bg-white p-3 mt-6 rounded-xl lg:min-h-[calc(100vh-100px)] min-h-[calc(100vh-185px)] flex flex-col gap-6 pt-10 items-center"
    >
      <table class="w-full">
        <thead>
          <tr class="border-b-[1px]">
            <th v-for="(item, index) in columns" :key="index">
              {{ item.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in dataList"
            :key="index"
            :class="index % 2 !== 0 ? 'bg-Gray-b8' : ''"
          >
            <td data-label="Amount">{{ item.amount }}</td>
            <td data-label="Payment Method">{{ item.paymentMethod }}</td>
            <td data-label="Pay time">{{ item.date }}</td>
            <td data-label="Status">
              {{
                item.status == 1
                  ? "Paid"
                  : item.status == 2
                  ? "Awaiting payment"
                  : item.status == 3
                  ? "Canceled"
                  : ""
              }}
            </td>
            <td data-label="Operation">
              <button
                class="block px-5 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm bg-opacity-90 hover:bg-opacity-100 text-sm py-5 bg-Primary text-white flex items-center justify-center"
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <FilterDialog v-model="filterDialog" />
  </section>
</template>
<script setup>
import Header from "@/components/Panel/Base/Header.vue";
import FilterDialog from "@/components/Panel/Payments/FilterDialog.vue";
import { ref } from "vue";
definePageMeta({
  layout: "panel",
});

//state

const filterDialog = ref(false);
const columns = [
  {
    text: "Amount",
  },
  {
    text: "Payment Method",
  },
  {
    text: "Pay time",
  },
  {
    text: "Status",
  },
  {
    text: "Operation",
  },
];
const dataList = ref([
  {
    amount: "250$",
    paymentMethod: "Paypal",
    date: "6/28/2023",
    status: 1,
  },
  {
    amount: "150$",
    paymentMethod: "Paypal",
    date: "6/25/2023",
    status: 2,
  },
  {
    amount: "319$",
    paymentMethod: "Paypal",
    date: "5/15/2023",
    status: 3,
  },
]);
</script>
