<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  if (email.value && password.value) {
    const token = 'example-token'
    localStorage.setItem('authToken', token)
    localStorage.setItem('tokenExpiry', new Date().getTime().toString())

    window.location.hash = '#/home'
  } else {
    alert('Vui lòng nhập thông tin đăng nhập!')
  }
}
</script>

<template>
  <div class="container">
    <div class="left-panel">
      <h1>facebook</h1>
      <p>
        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
      </p>
    </div>

    <div class="right-side">
      <div class="right-panel">
        <form @submit.prevent="handleLogin">
          <input v-model="email" type="email" placeholder="Email hoặc số điện thoại" />
          <input v-model="password" type="password" placeholder="Mật khẩu" />
          <button type="submit" class="login">Đăng nhập</button>

          <div class="forgot">
            <a href="#">Quên mật khẩu?</a>
          </div>

          <hr />

          <div class="button">
            <a href="#">Tạo tài khoản mới</a>
          </div>
        </form>
      </div>
      <div class="create-page">
        <a href="#">Tạo Trang</a> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
      </div>
    </div>
  </div>
</template>
