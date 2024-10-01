<template>
  <div class="container">
    <div class="left-panel">
      <h1>Chào mừng bạn</h1>
      <p>Bảng Newsfeed.</p>
      <button @click="handleLogout" class="logout">Đăng xuất</button>
    </div>

    <div class="right-side">
      <div class="right-panel">
        <section>
          <h2>News Feed</h2>
          <p>Posts</p>
        </section>

        <hr />

        <section>
          <h2>Gợi ý kết bạn</h2>
          <p>Gợi ý</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleLogout = () => {
  // Xóa token khi đăng xuất
  localStorage.removeItem('authToken')
  localStorage.removeItem('tokenExpiry')
  window.location.hash = '#/login'
}
</script>
