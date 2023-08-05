<template>
  <form class="sample-form">
    <h2 class="text-Gray-b3 font-bold text-lg">{{ $t('confirm otp') }}</h2>
    <p class="mt-4 text-sm text-Gray-b4 font-medium">{{ $t('otp send message') }}</p>
    <section class="form-item">
      <el-input v-model="phone" :placeholder="$t('enter your otp')" class="mt-4" />
    </section>
    <section class="mt-4">
      <nuxt-link to="login/forget-password" class="text-Primary text-sm md:text-base">{{ $t('wrong number question') }}</nuxt-link>
    </section>
    <section class="mt-4">
      <el-button class="btn w-full py-4 btn-primary" @click="next">{{ $t('confirm') }}</el-button>
    </section>
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
const phone = ref('')
const router = useRouter()
const next = () => {
  router.push({ path: '/login/password' })
}
</script>

<style scoped>

</style>