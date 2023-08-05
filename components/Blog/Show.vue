<template>
  <section>
    <img :src="data.image" class="rounded-lg" />
    <section class="flex items-center justify-between mt-4">
      <Author :data="data.author" />
      <el-button
        class="btn border border-dashed text-sm bg-transparent border-Gray-b5"
        >{{ $t("coppy link") }}</el-button
      >
    </section>
    <section class="flex items-center justify-between mt-4">
      <h2 class="flex items-center gap-1 text-sm text-Gray-b5">
        <i class="isax isax-clock text-lg" />
        {{ $t("time required for study") }}: 8 {{ $t("app time minute") }}
      </h2>
      <section class="flex items-center gap-3 grow-0">
        <h2 class="flex items-center gap-1 text-sm text-Gray-b5">
          <i class="isax isax-calendar-1 text-lg" />
          {{ moment(data.created_at).format("YYYY-MM-DD") }}
        </h2>
        <h2 class="flex items-center gap-1 text-sm text-Gray-b5">
          <i class="isax isax-clock text-lg" />
          {{ moment(data.created_at).format("HH:MM") }}
        </h2>
      </section>
    </section>
    <section class="mt-6">
      <h1 class="text-lg md:text-xl font-bold text-Gray-b1">{{ data.name }}</h1>
      <section class="mt-4" v-html="data.content" />
    </section>
    <section class="mt-6">
      <Rate :value="rating" />
    </section>
  </section>
</template>

<script setup>
import moment from "moment";
import Rate from "@/components/Rate/Page";
import Author from "@/components/Author/item.vue";
const props = defineProps({
  data: {
    default: "",
  },
  rating: {
    default: 0,
  },
});
</script>

<style scoped></style>
