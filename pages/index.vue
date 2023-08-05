<template>
  <section>
    <BuyInstagramService />
    <Header />
    <QuickOrder />
    <ServiceTab />
    <img
      src="/banners/support.jpg"
      class="w-full md:h-[87px] h-[70px] mt-[75px] max-w-[989px] mx-auto rounded-lg"
    />
    <InfoTab />
    <DiscountSlider />
    <div class="flex gap-4 max-w-[989px] m-auto">
      <img
        src="/banners/ads.jpg"
        class="w-full md:h-[200px] h-[70px] my-[50px] max-w-[989px] mx-auto rounded-lg"
      />
      <img
        src="/banners/ads2.jpg"
        class="w-full md:h-[200px] h-[70px] my-[50px] max-w-[989px] mx-auto rounded-lg"
      />
    </div>
    <Collapse :states="collapseItems" />
    <img
      src="/banners/support.jpg"
      class="w-full md:h-[87px] h-[70px] max-w-[989px] mx-auto rounded-lg"
    />
    <Wrapper />
    <LatestPostsSlider />
    <LatestProfiles />
  </section>
</template>

<script setup>
import Collapse from "@/components/Base/Collapse/Collapse.vue";
import InfoTab from "@/components/HomePage/InfoTab.vue";
import ServiceTab from "@/components/HomePage/ServiceTab.vue";
import LatestPostsSlider from "@/components/HomePage/LatestPostsSlider.vue";
import LatestProfiles from "@/components/HomePage/LatestProfiles.vue";
import DiscountSlider from "@/components/HomePage/DiscountSlider.vue";
import QuickOrder from "@/components/HomePage/QuickOrder.vue";
import Wrapper from "@/components/HomePage/Wrapper.vue";
import Header from "@/components/HomePage/Header.vue";
import BuyInstagramService from "@/components/HomePage/BuyInstagramService.vue";

import { ref } from "vue";

//multi lang
const { locale } = useI18n();

//state

const collapseItems = ref([
  {
    subject: "What are the features of the best site to buy Telegram members?",
    description:
      "There are many sites that provide Telegram and Instagram services. But reputable sites like My Member have reasonable and affordable tariffs. The reliable My Member site provides high-quality Telegram members and followers and does not use bots to increase people, which will cause problems for your page.",
    isOpen: false,
  },
  {
    subject: "Why should the follower I buy be free of loss?",
    description:
      "A follower that has a drop has not only wasted your time and money, but it also makes your real followers realize that you have used a fake follower, and this causes your followers to lose their trust in your page. MyMember is the only group that can provide fake followers without dropping due to having a dedicated supply infrastructure.",
    isOpen: false,
  },
]);
</script>

<style scoped></style>
