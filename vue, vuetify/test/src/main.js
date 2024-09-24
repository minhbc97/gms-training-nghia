import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');

const element = document.getElementById('my-dynamic-id');

if (element) {
  console.log('Phần tử có id "my-dynamic-id" tồn tại.');
} else {
  console.log('Phần tử không tồn tại.');
}
