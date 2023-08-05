<template>
  <section>
    <Card>
    <Table :table-data="tableData">
      <template #items>
      <el-table-column :label="$t('id')" prop="id" width="80"/>
      <el-table-column :label="$t('details')" prop="details">
        <template #default="scope">
          <section class="grid grid-cols-1 gap-3 text-left">
            <template v-for="item in scope.row.details">
              <p class="text-sm md:text-base text-Gray-b3">{{ item.name }}:
                <template v-if="item.name == 'link'">
                <a :href="item.value" target="_blank" class="text-Primary block">{{ item.value }}</a>
                </template>
                <template v-else>
                  <span class="text-xs">{{ item.value }}</span>
                </template>
              </p>
            </template>
          </section>
        </template>
      </el-table-column>
      <el-table-column :label="$t('status')" prop="status">
        <template #default="scope">
          <p class="text-sm md:text-base text-Gray-b3">{{ scope.row.status }}</p>
        </template>
      </el-table-column>
      <el-table-column :label="$t('operation')" prop="operation" width="250">
        <template #default="scope">
          <section class="flex items-center gap-2">
            <el-button class="btn text-sm btn-primary">{{ $t('send ticket') }}</el-button>
            <el-button class="btn text-sm ml-0 border-Secondary-w2" @click="showTransaction = true">{{ $t('show transactions') }}</el-button>
          </section>
        </template>
      </el-table-column>
      </template>
    </Table>
    <template v-if="tableData.length == 0">
      <NoData />
    </template>
      <TransactionDialog v-model="showTransaction" />
    </Card>
  </section>
</template>

<script setup>
import Table from '@/components/Base/Tables/Sample'
import Card from '@/components/Panel/Base/Card'
import NoData from "@/components/Profile/Base/NoData";
import TransactionDialog from "./TransactionDialog";
const tableData = ref([
  {id: 119246, status: 'in-process', details: [
      {name: "service", value: "Fake Telegram view"},
      {name: "value", value: "100"},
      {name: "remind", value: "100"},
      {name: "link", value: "https://t.me/mashhad_smartcity/3748"},
      {name: "registed time", value: new Date().toDateString()},
      {name: "amount", value: '20'},
    ]}
])
const showTransaction = ref(false)
</script>

<style scoped>

</style>