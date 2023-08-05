<template>
  <section class="base-tab py-6 max-w-[989px] mx-auto mt-[75px]">
    <ul
      class="header flex md:gap-4 px-2 my-4 w-fit mx-auto bg-white p-2 rounded-lg max-w-full overflow-x-auto no-scrollbar"
    >
      <li
        v-for="(item, index) in headers"
        :key="index"
        class="px-4 sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center sm:text-base text-sm py-3"
        :class="selectedTab?.index == item.index ? 'bg-Primary text-white' : ''"
        @click="selectTab(item)"
      >
        {{ item.text }}
      </li>
    </ul>
    <section class="content items mx-auto gap-4 mt-[35px]">
      <h1 class="text-2xl text-Gray-b2 font-bold mb-3">
        {{ selectedTabOptions.header }}
      </h1>
      <p class="md:text-base text-sm leading-8 text-[#595959]">
        {{ selectedTabOptions.description }}
      </p>
      <div class="actions flex gap-2 mt-3">
        <template v-if="selectedTabOptions.type == 1">
          <button
            class="border-[1px] border-[#d6d6d6] text-sm px-4 py-[5px] rounded-lg transition delay-50 cursor-pointer text-[#595959]"
          >
            Contact Support
          </button>
          <button
            class="bg-Primary border-[1.5px] text-sm bg-opacity-90 hover:bg-opacity-100 border-Primary px-4 py-[5px] rounded-lg transition delay-50 cursor-pointer text-white"
          >
            +44 986 241 1111
          </button>
        </template>
        <template v-else-if="selectedTabOptions.type == 2">
          <button
            class="bg-Primary border-[1.5px] text-sm bg-opacity-90 hover:bg-opacity-100 border-Primary px-4 py-[5px] rounded-lg transition delay-50 cursor-pointer text-white"
          >
            Contact Support
          </button>
        </template>
        <template v-else-if="selectedTabOptions.type == 3">
          <button
            class="bg-Primary border-[1.5px] text-sm bg-opacity-90 hover:bg-opacity-100 border-Primary px-4 py-[5px] rounded-lg transition delay-50 cursor-pointer text-white"
          >
            Buy Member
          </button>
        </template>
      </div>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

//state

const selectedTab = ref({
  index: 1,
  text: "free consultation",
});
const headers = [
  {
    index: 1,
    text: "free consultation",
  },
  {
    index: 2,
    text: "Buy view Automatically",
  },
  {
    index: 3,
    text: "Buy Real member",
  },
];

const buyRealMemberOptions = {
  type: 3,
  header: "Compulsory real member purchase",
  description:
    "Increasing real members is one of the first and most important concerns for businesses that have recently entered the online space such as Telegram. But how can you increase your real members in a short period of time and at the lowest cost? There is a very simple solution to achieve this goal, which will turn you into a popular Telegram channel in a short period of time.",
};
const buyViewAutomaticallyOptions = {
  type: 2,
  header: "Automatic view purchase with Telegram bot",
  description:
    "Having a Telegram channel or group has become one of the inseparable components for businesses today; But what can bring your channel to high popularity and as a result to more sales?! A high number of members can be one of the factors of the popularity of your business in Telegram, but the most important thing is the high number of views. Of course, the more views your posts have, the more popular you will be in the eyes of your audience, and this is the first step to gain the trust of new audiences who intend to enter your channel.",
};
const freeConsultationOptions = {
  type: 1,
  header: "Free advice on buying a Telegram member",
  description:
    "If you are now on the My Member site and you intend to buy a Telegram member, you are definitely the owner of a Telegram channel or the administrator of several Telegram channels, and one of your most important concerns is the issue of increasing Telegram members. You had a bitter and sweet experience. They added a real member for you once and a fake Telegram member once! So you have come to the conclusion that you should buy a Telegram member from a reliable place. After registering your first order on the My Member site, our experts will contact you and inform you of the latest status of your order.",
};
const selectedTabOptions = ref(freeConsultationOptions);

//methods

const selectTab = (item) => {
  selectedTab.value = item;
  if (item.index == 1) {
    selectedTabOptions.value = freeConsultationOptions;
  } else if (item.index == 2) {
    selectedTabOptions.value = buyViewAutomaticallyOptions;
  } else if (item.index == 3) {
    selectedTabOptions.value = buyRealMemberOptions;
  }
};
</script>
