<template>
  <a-watermark content="Amiro">
    <a-layout style="height: 400px">
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
          <a-form-item field="name" tooltip="Please enter username" label="Username">
            <a-input v-model="form.name" placeholder="please enter your username..." />
          </a-form-item>
          <a-form-item field="post" label="Post">
            <a-input v-model="form.password" placeholder="please enter your post..." />
          </a-form-item>
          <a-form-item field="isRead">
            <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
        {{ form }}
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-watermark>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { LoginFormProps } from './const'

const form = ref<LoginFormProps>({
  name: '',
  password: '',
  isRead: false
})
const handleSubmit = (form: LoginFormProps) => {
  console.log(form)
}

onMounted(() => {
  console.log('onMounted')
})
</script>

<style scoped></style>
