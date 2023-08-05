<template>
  <section class="py-6 max-w-[989px] mx-auto">
    <h2 class="text-xl text-Gray-b1 font-semibold section-header pl-1 relative">
      Latest Posts
    </h2>
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
          992: {
            slidesPerView: 3.5,
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
          <div>
            <img
              :src="item.image"
              class="rounded-xl h-[170px] object-cover w-full"
            />
            <div class="flex justify-between mt-4">
              <div class="flex gap-1 items-center text-Gray-b2 text-sm">
                <i class="isax isax-calendar" />{{ item.date }}
              </div>
              <div class="flex gap-1 items-center text-Gray-b2 text-sm">
                <i class="isax isax-clock" />{{ item.time }}
              </div>
            </div>
            <h3
              class="mt-5 lg:text-lg md:text-base text-sm font-semibold text-Gray-b2"
            >
              {{ item.header }}
            </h3>
          </div>
        </swiper-slide>
      </swiper>
    </clinet-only>
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
    image: "/latest-posts/4.png",
    header: "SMS authentication",
    time: "12:07",
    date: "Sun May 11,2023",
  },
  {
    image: "/latest-posts/3.webp",
    header: "Introducing the best Android games",
    time: "09:18",
    date: "Sun May 12,2023",
  },
  {
    image: "/latest-posts/2.jpg",
    header: "The best group games for Eid holidays",
    time: "10:22",
    date: "Sun May 11,2023",
  },
  {
    image: "/latest-posts/1.jpg",
    header: "The best games",
    time: "10:56",
    date: "Sun May 12,2023",
  },
]);
</script>

<style scoped></style>
