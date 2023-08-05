<template>
  <section class="base-tab py-6 max-w-[989px] mx-auto mt-[75px]">
    <h1 class="text-2xl text-Gray-b2 text-center font-bold">our services</h1>
    <ul
      class="header flex md:gap-4 px-2 my-4 mx-auto bg-white py-2 w-fit rounded-lg max-w-full overflow-x-auto no-scrollbar"
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
    <section
      class="content grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items mx-auto gap-4"
    >
      <NuxtLink
        class="rounded-md border-[1.5px] pt-10 px-5 min-h-[50px] hover:bg-Primary hover:pt-5 hover:pb-5"
        v-for="(item, index) in selectedTabOptions"
        :key="index"
      >
        <img :src="item.img" class="mr-auto rounded-lg" />
        <h3 class="mt-2 mb-0 text-base">{{ item.subject }}</h3>
        <p class="text-xs mt-4">{{ item.description }}</p>
        <p class="text-Gray-b9 text-xs pt-8 package-count">
          {{ item.packageCount }} Packages
        </p>
      </NuxtLink>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

//state

const selectedTab = ref({
  index: 1,
  text: "Telegram",
});
const headers = [
  {
    index: 1,
    text: "Telegram",
  },
  {
    index: 2,
    text: "Instagram",
  },
  {
    index: 3,
    text: "virtual number",
  },
];

const telegramOptions = [
  {
    img: "/services/telegram1.png",
    subject: "Buy fake group member",
    description:
      "If you have a group and you want to increase the number of members in your group so that people can be stimulated to chat in your Telegram group, order a group cam member fic right now.",
    packageCount: 17,
  },
  {
    img: "/services/telegram2.png",
    subject: "Buy telegram pop-up member",
    description:
      "We separate the active members and make them channel members! They are completely real and Iranian, order pop-up member right now!",
    packageCount: 16,
  },
  {
    img: "/services/telegram3.jpg",
    subject: "Buy member fake Telegram",
    description:
      "Don't trust Tagramt channel? Right now, buy a few fake telegram members so that they trust your channel and start buying.",
    packageCount: 10,
  },
  {
    img: "/services/telegram4.png",
    subject: "Buy group member",
    description:
      "Do you have a group? Do you want to chat as a member? Be real and chat in your group? Order a real member of the group right now",
    packageCount: 23,
  },
];
const instagramOptions = [
  {
    img: "/services/instagram1.png",
    subject: "Buy real Instagram followers",
    description:
      "Buying Instagram followers is great, but if you experience buying real followers and buying Iranian followers for your Instagram page, you will never leave My Member site again!",
    packageCount: 11,
  },
  {
    img: "/services/instagram2.png",
    subject: "Foreign follower",
    description:
      "If you own an international business, our suggestion is to buy foreign followers and grow your page!",
    packageCount: 16,
  },
  {
    img: "/services/instagram3.png",
    subject: "Pop up Followers",
    description:
      "Attracting followers based on the pop-up method, sending for 50,000 tomans, only 400,000 tomans",
    packageCount: 34,
  },
  {
    img: "/services/instagram4.png",
    subject: "Cheap fake followers",
    description:
      "People trust the number that they see your page first. So increase this trust with fake followers.",
    packageCount: 23,
  },
];
const virtualNumbersOptions = [
  {
    img: "/services/virtual1.png",
    subject: "Telegram virtual number",
    description:
      "Buy the Telegram virtual number permanently, that is, without jumping and without reporting, right now from My Member!",
    packageCount: 11,
  },
  {
    img: "/services/virtual2.png",
    subject: "Instagram virtual number",
    description:
      "Buying a virtual Instagram number ◀ its tips and benefits in 2022",
    packageCount: 16,
  },
  {
    img: "/services/virtual3.png",
    subject: "WhatsApp virtual number",
    description:
      "Buy a virtual WhatsApp number without any restrictions and internationally",
    packageCount: 34,
  },
  {
    img: "/services/virtual4.png",
    subject: "Twitter virtual number",
    description:
      "Buy a virtual Twitter number instantly and without jumping and reports",
    packageCount: 23,
  },
];
const selectedTabOptions = ref(telegramOptions);

//methods

const selectTab = (item) => {
  selectedTab.value = item;
  if (item.index == 1) {
    selectedTabOptions.value = telegramOptions;
  } else if (item.index == 2) {
    selectedTabOptions.value = instagramOptions;
  } else if (item.index == 3) {
    selectedTabOptions.value = virtualNumbersOptions;
  }
};
</script>
