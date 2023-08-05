<template>
  <section
    class="flex my-[60px] py-6 bg-[#4a7cff] px-4 rounded-xl bg-[url('/discounts/stack.png')] bg-repeat-x max-w-[1274px] mx-auto"
  >
    <section class="w-3/4 lg:block hidden">
      <clinet-only>
        <swiper
          :space-between="50"
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="swiperOptions.slidesPerView"
          :auto-play="swiperOptions.autoplay"
          :pagination="swiperOptions.pagination"
          class="mt-5"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }"
          :loop="true"
          :autoplay="{
            delay: 3000,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <div class="swiper-button-next">
            <i class="isax isax-arrow-right-3 text-xl text-black" />
          </div>
          <div class="swiper-button-prev">
            <i class="isax isax-arrow-left-2 text-xl text-black" />
          </div>
          <swiper-slide v-for="item in latestPosts">
            <div
              class="bg-white pt-5 pb-3 px-4 rounded-xl flex flex-col justify-between"
            >
              <section>
                <h3
                  class="lg:text-lg md:text-base text-sm font-semibold text-Gray-b2"
                >
                  {{ item.header }}
                </h3>
                <h5
                  class="mt-[10px] text-[#4b5259] md:text-base sm:text-sm text-xs"
                >
                  {{ item.subject }}
                </h5>
                <p class="text-sm text-[#848484] mt-2 mb-6">
                  {{ item.conditions }}
                </p>
              </section>
              <section>
                <div class="price flex justify-between">
                  <span class="text-sm text-[14px] text-Gray-b2"
                    >{{
                      item.price - (item.price * item.discount) / 100
                    }}
                    $</span
                  >
                  <span class="bg-[#f97f06] text-white text-sm px-2 py-[2px]"
                    >{{ item.discount }} %</span
                  >
                </div>
                <del class="text-sm text-[#848484] block" v-if="item.discount"
                  >{{ item.price }} $</del
                >
                <button
                  class="bg-Primary bg-opacity-70 hover:bg-opacity-100 w-full py-2 rounded-lg text-white mt-3"
                >
                  Buy
                </button>
              </section>
            </div>
          </swiper-slide>
        </swiper>
      </clinet-only>
    </section>
    <section class="w-1/4 items-center justify-center lg:flex hidden">
      <img class="h-[280px] w-[250px]" src="/discounts/basket.png" />
    </section>
    <section class="lg:hidden flex overflow-auto gap-4 flex-row-reverse no-scrollbar">
      <div class="min-w-fit flex items-center justify-center"><img class="h-[280px] w-[250px]" src="/discounts/basket.png" /></div>
      <div
        v-for="item in latestPosts"
        class="bg-white min-w-[250px] pt-5 pb-3 px-4 rounded-xl flex flex-col justify-between"
      >
        <section>
          <h3
            class="lg:text-lg md:text-base text-sm font-semibold text-Gray-b2"
          >
            {{ item.header }}
          </h3>
          <h5 class="mt-[10px] text-[#4b5259] md:text-base sm:text-sm text-xs">
            {{ item.subject }}
          </h5>
          <p class="text-sm text-[#848484] mt-2 mb-6">
            {{ item.conditions }}
          </p>
        </section>
        <section>
          <div class="price flex justify-between">
            <span class="text-sm text-[14px] text-Gray-b2"
              >{{ item.price - (item.price * item.discount) / 100 }} $</span
            >
            <span class="bg-[#f97f06] text-white text-sm px-2 py-[2px]"
              >{{ item.discount }} %</span
            >
          </div>
          <del class="text-sm text-[#848484] block" v-if="item.discount"
            >{{ item.price }} $</del
          >
          <button
            class="bg-Primary bg-opacity-70 hover:bg-opacity-100 w-full py-2 rounded-lg text-white mt-3"
          >
            Buy
          </button>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
const swiperOptions = ref({
  autoplay: {
    delay: 800,
    disableOnInteraction: true,
  },
  slidesPerView: 3.5,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const latestPosts = ref([
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 10,
  },
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 11,
  },
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 7,
  },
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 36,
  },
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 50,
  },
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 15,
  },
  {
    header: "Instagram Follower",
    subject: "Fake Follower",
    conditions:
      "🔹 The page must be public from the beginning to the completion of the order 🔹 ID without @ and link should be entered. Example: mymember 🔹 no drop 🔹 great quality with great speed",
    price: 20,
    discount: 15,
  },
]);
</script>

<style scoped></style>
