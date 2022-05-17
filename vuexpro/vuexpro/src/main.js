import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';

import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';

// import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-orange/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'   

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(PrimeVue);
// App.component('InputText',InputText)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.component('InputMask',InputMask)
app.component('InputText',InputText)
app.component('InputNumber',InputNumber)

app.mount('#app')
