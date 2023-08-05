<template>
  <section>
    <Header><template #title>{{ $t('submit order') }}</template></Header>
    <Card class="mt-10">
      <Notifications />
      <Form class="mt-10" />
    </Card>
  </section>
</template>

<script setup>
import Header from "@/components/Panel/Base/Header";
import Card from "@/components/Panel/Base/Card";
import Notifications from "@/components/Panel/Orders/Notifications";
import Form from "@/components/Panel/Orders/Form";
definePageMeta({
  layout: 'panel'
})
</script>

<style scoped>

</style>