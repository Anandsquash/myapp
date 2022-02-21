// import Vue from 'vue';
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import PrimeVue from "primevue/config"
import "primeflex/primeflex.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "primevue/resources/themes/saga-blue/theme.css"

// Common componets
import TextField from './components/common/TextField.vue';
import Buttons from "./components/common/Button.vue"
import Dropdown from "./components/common/Dropdown.vue"
import TextArea from "./components/common/TextArea.vue"


const app = createApp(App)

// In vue 3 production tip is false in default
// Vue.config.productionTip = false;

app.use(PrimeVue)
app.use(store)
// Common components
app.component("TextField", TextField);
app.component("Button", Buttons);
app.component("Dropdown", Dropdown)
app.component("TextArea", TextArea)

app.use(router).mount("#app")
