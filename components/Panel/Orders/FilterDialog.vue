<template>
  <Dialog :isDialogOpen="value" @close="value= false" :title="$t('search order')" :okText="$t('search')">
    <section class="sample-form grid grid-cols-1 gap-8">
      <section class="form-item">
        <label>{{ $t('enter order id') }}</label>
        <el-input v-model="filter.id" :placeholder="$t('enter order id')" />
      </section>
      <section class="form-item">
        <label>{{ $t('enter link') }}</label>
        <el-input v-model="filter.link" :placeholder="$t('enter link')" />
      </section>
      <section class="form-item">
        <label>{{ $t('enter the discount code used in the order') }}</label>
        <el-input v-model="filter.discount" :placeholder="$t('enter the discount code used in the order')" />
      </section>
      <section class="form-item">
        <label>{{ $t('enter status') }}</label>
        <el-select v-model="filter.status" :placeholder="$t('enter status')" >
          <el-option v-for="item in statusOptions" :value="item" :label="item" />
        </el-select>
      </section>
    </section>
  </Dialog>
</template>

<script setup>
import Dialog from '@/components/Base/Dialog/Base'
import Price from "@/components/Base/Text/Price";
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
  id: '',
  link: '',
  discount: '',
  status: ''
})
const statusOptions = ref([
    t('in process'),
    t('done'),
])
</script>

<style scoped>

</style>