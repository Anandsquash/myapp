import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import SelectButton from 'primevue/selectbutton';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
// import vuex from 'vuex'
// import store from "./Vuex.js";
import store from "./store"

import 'primevue/resources/themes/saga-orange/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
// app.use(vuex)
app.use(store)
app.component('Dialog',Dialog)
app.component('InputText',InputText)
app.component('Textarea',Textarea)
app.component('Button',Button)
app.component('Dropdown',Dropdown)
app.component('InputNumber',InputNumber)
app.component('SelectButton',SelectButton)
app.component('Checkbox',Checkbox)

app.mount('#app')

