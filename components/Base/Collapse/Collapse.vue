<template>
  <section class="py-6 max-w-[989px] mx-auto  mt-0">
    <h2 class="text-xl text-Gray-b1 font-semibold text-center">FAQ</h2>
    <div
      class="base-collapse bg-white cursor-pointer m-auto my-4 md:px-6 md:py-4 py-2 px-3 rounded-[10px]"
      @click="state.isOpen = !state.isOpen"
      v-for="(state, index) in states"
      :key="index"
    >
      <section class="flex justify-between items-center">
        <section class="flex gap-4 items-center">
          <div class="icon">
            <Icon name="question" />
          </div>
          <div class="subject">
            <h2 class="md:text-base text-Gray-b3 font-semibold text-sm">
              {{ state.subject }}
            </h2>
          </div>
        </section>
        <section>
          <div class="collapse-icon">
            <i
              class="isax text-Gray-b3 isax-arrow-down-1 text-xl font-bold"
              v-if="!state.isOpen"
            />
            <i
              class="isax isax-arrow-up-2 bg-Primary bg-opacity-50 rounded-full text-Primary text-xl font-bold"
              v-if="state.isOpen"
            />
          </div>
        </section>
      </section>
      <div class="md:px-16 mt-2" v-if="state.isOpen">
        <h3 class="md:text-sm text-xs font-normal text-Gray-b4">
          {{ state.description }}
        </h3>
      </div>
    </div>
  </section>
</template>
<script setup>
import Icon from "@/components/Base/Icon/Icon.vue";
const props = defineProps({
  states: {
    default: [],
  },
});
const { states } = props;
</script>
