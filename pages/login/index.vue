<template>
  <form class="sample-form">
    <h2 class="text-Gray-b3 font-bold text-lg">{{ $t('signin/login') }}</h2>
    <p class="mt-4 text-sm text-Gray-b4 font-medium">{{ $t('enter your phone number') }}</p>
    <section class="form-item">
    <el-input v-model="phone" :placeholder="$t('enter your phone number')" class="mt-4" />
    </section>
    <section class="mt-4">
      <nuxt-link to="login/forget-password" class="text-Primary text-sm md:text-base">{{ $t('forget password question') }}</nuxt-link>
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