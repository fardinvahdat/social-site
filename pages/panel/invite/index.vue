<template>
    <section>
      <Header><template #title>{{ $t('cooperation in sales') }}</template></Header>
      <Card class="mt-10">
        <Body />
      </Card>
    </section>
  </template>
  
  <script setup>
  import Header from "@/components/Panel/Base/Header";
  import Card from "@/components/Panel/Base/Card";
  import Body from "@/components/Panel/Invite/Body";
  definePageMeta({
    layout: 'panel'
  })
  </script>
  
  <style scoped>
  
  </style>