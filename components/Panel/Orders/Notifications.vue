<template>
  <section class="grid grid-cols-1 gap-4">
    <section v-for="notification in notifications" class="py-2 md:py-3 px-4 md:px-6 flex justify-between items-center rounded-lg"
    :class="calculateNotificationClass(notification.type)">
      <h2 class="text-white text-base fonr-medium">{{ notification.title }}</h2>
      <template v-if="notification.link">
        <el-button class="btn bg-Gray-b2 hover:bg-Gray-b1 text-white border-none">
          {{ $t('show') }}
        </el-button>
      </template>
    </section>
  </section>
</template>

<script setup>
const notifications = ref([
  { id: 1, title: 'Instagram visit service is active.', link: false, type: 'success' },
  { id: 2, title: 'Automatic robot to increase views, likes, votes and reactions of channel posts', link: true, type: 'secondary' },
  { id: 3, title: 'From 40,000 to 12 million tomans free credit using special offer packages in the credit increase section', link: true, type: 'secondary' },
])
const calculateNotificationClass = (class_name) => {
  switch (class_name) {
    case "success": {
      return "bg-Success-b3"
    }
    case "secondary": {
      return "bg-Gray-b4"
    }
  }
}
</script>

<style scoped>

</style>