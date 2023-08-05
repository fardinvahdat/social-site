<template>
  <section class="sample-form grid grid-cols-1 gap-10 md:w-6/12 mx-auto">
    <section class="form-item">
      <label>{{ $t('enter amount') }} </label>
      <el-input v-model="addFund.amount" />
    </section>
    <section class="form-item">
      <label>{{ $t('select payment type') }} <span class="ml-1 star">*</span> </label>
      <el-select v-model="addFund.type">
        <el-option v-for="item in paymentOptions" :value="item" :key="item" :label="item" />
      </el-select>
    </section>
    <section class="form-item">
      <el-button class="btn btn-primary px-8 border border-Gray-b4" :class="[ addFund.amount == '' || addFund.type == '' ? 'border-solid' : '']" :disabled="addFund.amount == '' || addFund.type == ''">
        {{ $t('confirm') }}
      </el-button>
    </section>
  </section>
</template>

<script setup>
const addFund = reactive({
  type: '',
  amount: '',
})
const paymentOptions = ref(['PayPal', 'ZarinPal'])
</script>

<style scoped>

</style>