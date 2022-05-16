import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from "./store/store";

// createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(Store);
app.use(router);
app.mount('#app');
// App.use(store);
