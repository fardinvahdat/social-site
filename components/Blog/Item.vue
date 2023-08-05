<template>
  <section>
    <img class="rounded-lg" :src="props.data.image" />
    <section class="flex mt-2 justify-between">
      <span class="text-sm text-Gray-b4 font-medium flex items-center gap-2 grow-0">
        <i class="isax isax-calendar text-xl" />
        {{ dateTime(props.data.created_at) }}
      </span>
      <span class="text-sm text-Gray-b4 font-medium flex items-center gap-2 grow-0">
        <i class="isax isax-clock text-xl" />
        {{ hourTime(props.data.created_at) }}
      </span>
<!--      <span class="text-sm text-Gray-b4 font-medium">{{ (props.data.created_at).format('YY') }}</span>-->
<!--      <span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span>-->
    </section>
    <h1 class="font-bold text-base md:text-lg text-Gray-b2">{{ props.data.name }}</h1>
  </section>
</template>

<script setup>
import moment from 'moment';

const props = defineProps({
  data: {
    default: ''
  }
})
const dateTime = (value) => {
  return moment(value).format('YYYY-MM-DD');
}
const hourTime = (value) => {
  return moment(value).format('HH:mm');
}

</script>

<style scoped>

</style>