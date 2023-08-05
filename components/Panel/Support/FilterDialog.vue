<template>
  <Dialog
    class="max-w-[500px]"
    :isDialogOpen="value"
    @close="value = false"
    :title="$t('search ticket')"
    :okText="$t('search')"
  >
    <section class="sample-form grid grid-cols-1 gap-8">
      <section class="form-item">
        <label>{{ $t("enter Subject") }}</label>
        <el-input v-model="filter.subject" :placeholder="$t('enter Subject')" />
      </section>
      <section class="form-item">
        <label>{{ $t("enter order id") }}</label>
        <el-input
          v-model="filter.orderId"
          type="number"
          :placeholder="$t('enter order id')"
        />
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
import Dialog from "@/components/Base/Dialog/Base";
const { t } = useI18n();
const props = defineProps({
  modelValue: {
    default: false,
  },
});
const emits = defineEmits();
const value = computed({
  set(value) {
    emits("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  },
});
const filter = reactive({
  subject: "",
  orderId: "",
  status: "",
});
const statusOptions = ref([t("in process"), t("done")]);
</script>

<style scoped></style>
