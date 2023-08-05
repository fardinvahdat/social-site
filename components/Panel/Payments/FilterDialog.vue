<template>
    <Dialog class="max-w-[500px]" :isDialogOpen="value" @close="value= false" :title="$t('search transaction')" :okText="$t('search')">
    <section class="sample-form grid grid-cols-1 gap-8">
      <section class="form-item">
        <label>{{ $t('enter order id') }}</label>
        <el-input v-model="filter.orderId" type="number" :placeholder="$t('enter order id')" />
      </section>
      <section class="form-item">
        <label>{{ $t('enter price') }}</label>
        <el-input v-model="filter.price" type="number" :placeholder="$t('enter price')" />
      </section>
      <section class="form-item">
        <label>{{ $t('Enter the tracking code') }}</label>
        <el-input v-model="filter.trackingCode" type="number" :placeholder="$t('Enter the tracking code')" />
      </section>
      <section class="form-item">
        <label>{{ $t('choose payment method') }}</label>
        <el-select v-model="filter.paymentMethod" :placeholder="$t('choose payment method')" >
          <el-option v-for="item in paymentMethodOptions" :value="item" :label="item" />
        </el-select>
      </section>
      <section class="form-item">
        <label>{{ $t("enter status") }}</label>
        <el-select v-model="filter.status" :placeholder="$t('enter status')">
          <el-option
            v-for="item in statusOptions"
            :value="item"
            :label="item"
          />
        </el-select>
      </section>
    </section>
  </Dialog>
  
</template>

<script setup>
import Dialog from '@/components/Base/Dialog/Base'
const {t} = useI18n()
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
const filter = reactive({
  orderId: '',
  price: '',
  trackingCode: '',
  paymentMethod:'',
  status: ''
})
const paymentMethodOptions = ref([
    t('Paypal'),
])
const statusOptions = ref([t("in process"), t("done")]);
</script>

<style scoped>

</style>