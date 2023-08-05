<template>
  <section
    class="quick-order max-w-[900px] mx-auto bg-white rounded-xl px-4 pt-3 pb-8 my-6 relative z-50"
  >
    <h2
      class="text-xl text-Gray-b1 font-semibold section-header pl-1 relative pb-5"
    >
      Quick Order
    </h2>
    <section class="flex gap-4 lg:flex-nowrap flex-wrap">
      <div class="lg:w-1/3 w-full flex flex-col relative">
        <label class="md:text-[14px] text-sm text-[#595959] font-normal mb-0 md:mb-2"
          >Select Category</label
        >
        <div
          class="rounded-lg border-[1.5px] w-full h-[46px] flex items-center px-2 justify-center"
        >
          <input
            @blur="categoryBlueHandler"
            @focus="isCategoryFocused = true"
            v-model="category"
            placeholder="select your category"
            class="outline-0 w-full h-[80%] text-[14px] text-Gray-b2"
          />
        </div>
        <ul
          v-if="isCategoryFocused"
          class="list rounded-md max-h-[271px] overflow-y-auto absolute top-[80px] z-50 bg-[#f5f5f9] w-full py-[13px] px-[17px] flex flex-col gap-3"
        >
          <li
            v-for="(item, index) in categoryOptions"
            :key="index"
            class="py-[17px] px-[27px] rounded-xl hover:bg-Gray-b6 cursor-pointer hover:text-white"
            :class="
              item.text == category
                ? 'bg-Primary text-white'
                : 'text-Gray-b2 bg-white'
            "
            @click="category = item.text"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="lg:w-1/3 w-full flex flex-col relative">
        <label class="md:text-[14px] text-sm text-[#595959] font-normal mb-0 md:mb-2"
          >Select Service</label
        >
        <div
          class="rounded-lg border-[1.5px] w-full h-[46px] flex items-center px-2 justify-center"
        >
          <input
            @blur="serviceBlueHandler"
            @focus="isServiceFocused = true"
            v-model="service"
            placeholder="select your service"
            class="outline-0 w-full h-[80%] text-[14px] text-Gray-b2"
          />
        </div>
        <ul
          v-if="isServiceFocused"
          class="list rounded-md max-h-[271px] overflow-y-auto absolute top-[80px] z-50 bg-[#f5f5f9] w-full py-[13px] px-[17px] flex flex-col gap-3"
        >
          <li
            v-for="(item, index) in serviceOptions"
            :key="index"
            class="py-[17px] px-[27px] rounded-xl hover:bg-Gray-b6 cursor-pointer hover:text-white"
            :class="
              item.text == service
                ? 'bg-Primary text-white'
                : 'text-Gray-b2 bg-white'
            "
            @click="service = item.text"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="lg:w-1/3 w-full flex flex-col relative">
        <label class="md:text-[14px] text-sm text-[#595959] font-normal mb-0 md:mb-2"
          >Enter the desired value</label
        >
        <div
          class="rounded-lg border-[1.5px] w-full h-[46px] flex items-center px-2 justify-center"
        >
          <input
            type="number"
            v-model="count"
            placeholder="Enter the desired value"
            class="outline-0 w-full h-[80%] text-[14px] text-Gray-b2"
          />
        </div>
      </div>
    </section>
    <section class="flex gap-4 lg:flex-nowrap flex-wrap mt-4">
      <div class="lg:w-1/3 w-full flex flex-col justify-center h-[46px]">
        <label class="mb-0 text-[14px] text-[#595959] font-normal">{{
          price
        }}</label>
      </div>
      <div class="lg:w-1/3 w-full flex flex-col relative">
        <button
          class="max-w-[150px] text-[14px] font-semibold border-[1.5px] rounded-lg h-[46px]"
          :disabled="isBuyBtnDisabled"
          :class="isBuyBtnDisabled?'text-[#929292]':'text-Gray-b2'"
        >
          Order
        </button>
      </div>
      <div class="lg:w-1/3 w-full flex flex-col relative"></div>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

const isCategoryFocused = ref(false);
const category = ref("");
const isServiceFocused = ref(false);
const service = ref("");
const count = ref(null);
const categoryOptions = ref([
  {
    text: "Instagram Like",
  },
  {
    text: "Instagram Follower",
  },
  {
    text: "Instagram View",
  },
  {
    text: "Instagram Comment",
  },
]);
const serviceOptions = ref([
  {
    text: "Option 1",
  },
  {
    text: "Option 2",
  },
]);

//methods

const categoryBlueHandler = () => {
  setTimeout(() => {
    isCategoryFocused.value = false;
  }, 200);
};
const serviceBlueHandler = () => {
  setTimeout(() => {
    isServiceFocused.value = false;
  }, 200);
};

//computed

const price = computed(() => {
  if (!category.value || !service.value || !count.value) {
    return "The amount will be displayed here";
  } else {
    return Math.round(count.value * 1.1) + " $";
  }
});
const isBuyBtnDisabled = computed(() => {
  if (!category.value || !service.value || !count.value) {
    return true;
  } else {
    return false;
  }
});
</script>
