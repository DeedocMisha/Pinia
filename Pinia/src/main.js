import './assets/main.css'
import App from './components/App.vue';
import router from '@/router'
import { createApp } from 'vue'
import "./style.css"; // Подключение стилей ко всем файлам
import { createPinia } from 'pinia'; // Импорт Pinia

const app = createApp(App)
app.use(router)
app.use(createPinia()); // Подключение Pinia к приложению
app.mount('#app');