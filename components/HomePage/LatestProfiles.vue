<template>
  <section class="py-6 max-w-[989px] mx-auto">
    <h2 class="text-xl text-Gray-b1 font-semibold section-header pl-1 relative">
      Latest Profiles
    </h2>
    <section
      class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
    >
      <section
        class="social-network-profile-preview bg-white text-center rounded-lg p-[19px] pt-[16px] flex flex-col justify-between"
        v-for="(item, index) in profilesState"
        :key="index"
      >
        <section>
          <img
            :src="item.image"
            class="w-[73px] h-[73px] mx-auto rounded-full object-cover"
          />
          <b
            class="mt-4 lg:text-lg md:text-base text-sm font-semibold text-Gray-b2"
            >{{ item.header }}</b
          >
          <ul class="py-5 flex gap-2 flex-wrap">
            <li
              v-for="(tag, i) in item.tags"
              class="rounded-full border-[1.5px] max-w-fit py-1 px-3 text-Gray-b4 text-sm"
            >
              {{ tag.text }}
            </li>
          </ul>
        </section>
        <section>
          <div class="flex justify-between w-full mb-[10px]">
            <div class="flex gap-2 items-center">
              <i
                :class="'text-Gray-b2 text-sm isax isax-' + item.platform"
              /><span class="value text-Gray-b2 text-sm">{{
                item.platform
              }}</span>
            </div>
            <p class="text-Gray-b2 text-sm">{{ item.views }} view</p>
          </div>
          <button
            type="button"
            class="transition text-Primary border-Primary w-full border-[1.5px] rounded-lg h-10 text-sm hover:text-white hover:bg-Primary font-semibold"
          >
            View
          </button>
        </section>
      </section>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

const profilesState = ref([
  {
    image: "/latest-profiles/footbal.jpg",
    header: "Football News instagram page",
    tags: [
      {
        text: "sport",
      },
    ],
    platform: "instagram",
    views: 24,
  },
  {
    image: "/latest-profiles/life-style.jpg",
    header: "Life Style instagram page",
    tags: [
      {
        text: "life style",
      },
      {
        text: "life",
      },
      {
        text: "happiness",
      },
    ],
    platform: "instagram",
    views: 34,
  },
  {
    image: "/latest-profiles/fashion.jpeg",
    header: "Fashion instagram page",
    tags: [
      {
        text: "fashion",
      },
      {
        text: "life style",
      },
    ],
    platform: "instagram",
    views: 26,
  },
  {
    image: "/latest-profiles/food.jpg",
    header: "Food Blogger instagram page",
    tags: [
      {
        text: "food",
      },
    ],
    platform: "instagram",
    views: 11,
  },
]);
</script>
