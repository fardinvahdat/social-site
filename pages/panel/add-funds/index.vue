<template>
    <section>
      <Header><template #title>{{ $t('add funds') }}</template></Header>
      <Card class="mt-10">
         <Plans />
        <Form class="mt-10" />
      </Card>
    </section>
  </template>
  
  <script setup>
  import Header from "@/components/Panel/Base/Header";
  import Card from "@/components/Panel/Base/Card";
  import Form from "@/components/Panel/AddFund/Form";
  import Plans from "@/components/Panel/AddFund/Plans";
  definePageMeta({
    layout: 'panel'
  })
  </script>
  
  <style scoped>
  
  </style>