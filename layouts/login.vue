<template>
  <section class="min-w-screen min-h-screen bg-Gray-b8 relative flex items-center justify-center">
    <section class="w-full container">
      <section class="flex justify-end">
        <el-button class="btn border-Gray-400 text-sm md:text-base bg-transparent" @click="back">
          {{ $t('back button') }}
          <i class="isax isax-arrow-right-1"/>
        </el-button>
      </section>
      <section class="mt-6 p-3 rounded-lg bg-white w-11/12 md:w-8/12 mx-auto">
        <img class="w-12 md:w-16 mx-auto" src="/assets/images/logo/logo.png" @click="router.push({ path: '/' })" />
        <slot />
      </section>
    </section>
  </section>
</template>

<script setup>
const router = useRouter()
const {locale} = useI18n()
const back = () => {
  router.go(-1)
}
</script>

<style scoped>

</style>