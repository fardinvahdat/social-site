<template>
  <section class="my-[50px] py-6 max-w-[989px] mx-auto">
    <img
      src="/banners/home-banner.jpg"
      class="rounded-lg my-6 mx-auto max-w-[800px] w-full h-max"
    />
    <h1 class="md:text-2xl sm:text-lg text-base text-Gray-b2 font-bold mb-3">
      {{ state.header1 }}
    </h1>
    <p class="md:text-base text-sm leading-8 text-[#595959]">
      {{ state.description1 }}
    </p>
    <h1 class="md:text-2xl sm:text-lg text-base text-Gray-b2 font-bold mb-3 mt-8">
      {{ state.header2 }}
    </h1>
    <p class="md:text-base text-sm leading-8 text-[#595959]">
      {{ state.description2 }}
    </p>
    <div class="text-center mt-5">
      <button
        class="bg-Primary border-[1.5px] text-sm bg-opacity-90 hover:bg-opacity-100 border-Primary px-4 py-[5px] mx-auto rounded-lg transition delay-50 cursor-pointer text-white"
      >
        See More
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

//state

const state = ref({
  header1: "Five myths about immediate purchase of Telegram members",
  description1:
    "Have you ever had the experience of using one of the Telegram member purchase services? If you are a businessman who cares about your Telegram business, check how to buy a Telegram member. You should know that buying Telegram members is not only a low-cost way to increase members, but also helps you become a global and well-known business. In the text below, you will learn more facts about the benefits of buying a Telegram member (which you did not know before).",
  header2:
    "The importance of using Telegram for the growth of digital marketing",
  description2:
    "Today, earning money from different social networks, especially Telegram, has become very common, and businesses are thinking about how to expand their Telegram digital marketing.If you are familiar with Telegram, you can use this social network as a suitable platform for business development. Although many users are still not familiar with the business environment of this network, today millions of diverse businesses operate in it.",
});
</script>
