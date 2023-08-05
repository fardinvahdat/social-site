<template>
  <Dialog :isDialogOpen="value" @close="value= false" :title="$t('transaction history')">
    <section class="shadow-lg p-3 rounded-lg">
      <section class="flex items-center justify-between gap-3">
        <Price class="font-bold text-Gray-b1 text-base" value="2" />
        <span class="p-1 bg-Primary bg-opacity-30 rounded-xl text-sm font-bold text-Primary block px-3">{{ $t('paid') }}</span>
      </section>
      <el-divider border-style="dashed" />
      <section class="grid grid-cols-1 gap-5">
        <section v-for="(item, index) in items" class="flex items-center justify-between">
          <h2 class="text-sm text-Gray-b2 font-medium">{{ index }}:</h2>
          <h2 class="text-sm text-Gray-b2 font-medium">{{  item }}</h2>

        </section>
      </section>
    </section>
  </Dialog>
</template>

<script setup>
import Dialog from '@/components/Base/Dialog/Base'
import Price from "@/components/Base/Text/Price";
const props = defineProps({
  modelValue: {
    default: false
  }
})
const emits = defineEmits()
const value = computed({
  set(value) {
    emits('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})
const items = ref({
  "Payment gateway": 'Wallet',
  "Tracking Code": '115870',
  "Pay time": new Date().toDateString(),
  "Description": 'Payment of order number 119246',
})
</script>

<style scoped>

</style>