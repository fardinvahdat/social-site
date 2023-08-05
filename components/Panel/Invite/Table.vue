<template>
  <section>
    <Table :table-data="tableData">
      <template #items>
        <el-table-column :label="$t('amount')" prop="amount" width="80"/>
        <el-table-column :label="$t('status')" prop="status" />
        <el-table-column :label="$t('account owner')" prop="owner" />
        <el-table-column :label="$t('destination number')" prop="number" />
        <el-table-column :label="$t('application time')" prop="time" />
      </template>
    </Table>
    <template v-if="tableData.length == 0">
      <NoData />
    </template>
  </section>
</template>

<script setup>
import NoData from "@/components/Profile/Base/NoData";
import Table from '@/components/Base/Tables/Sample'

const tableData = ref([])
</script>

<style scoped>

</style>