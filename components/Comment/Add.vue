<template>
  <section class="sample-form">
    <h1 class="text-lg md:text-xl font-bold text-Gray-b2">{{ $t('your comment') }}</h1>
    <section class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-4">
      <section class="grid grid-cols-1 gap-5">
        <section class="form-item">
          <label>{{ $t('enter your name') }}</label>
          <el-input v-model="newComment.name" :placeholder="$t('enter your name')" />
        </section>
        <section class="form-item">
          <label>{{ $t('enter your email') }}</label>
          <el-input v-model="newComment.email" :placeholder="$t('enter your email')" />
        </section>
        <el-button class="btn btn-primary" disabled>{{ $t('confirm comment') }}</el-button>
      </section>
      <section class="form-item">
        <label>{{ $t('enter your comment') }}</label>
        <el-input type="textarea" rows="4" v-model="newComment.comment" :placeholder="$t('enter your comment')" />
      </section>
    </section>
  </section>
</template>

<script setup>
const newComment = reactive({
  name: '',
  comment: '',
  email: ''
})
</script>

<style scoped>

</style>