<template>
  <section class="sample-form grid grid-cols-1 gap-5">
    <section class="form-item">
      <label>{{ $t('select a category') }} <span class="ml-1 star">*</span> </label>
      <el-select v-model="order.category">
        <el-option v-for="item in categoryOptions" :value="item" :key="item" :label="item" />
      </el-select>
    </section>
    <section class="form-item">
      <label>{{ $t('enter discount code') }} </label>
      <el-input v-model="order.discount" />
    </section>
    <section class="form-item">
      <el-button class="btn btn-primary px-8 border border-Gray-b4" :class="[ order.discount == '' || order.category == '' ? 'border-solid' : '']" :disabled="order.discount == '' || order.category == ''">
        {{ $t('pay') }}
      </el-button>
    </section>
  </section>
</template>

<script setup>
const order = reactive({
  category: '',
  discount: '',
})
const categoryOptions = ref(['Instagram follower','Instagram like','Instagram view','Instagram comment','Telegram member','Instagram view',])
</script>

<style scoped>

</style>