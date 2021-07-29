import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import {
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol
} from 'element-plus'

const app = createApp(App)

app.component(ElCol.name, ElCol)
app.component(ElRow.name, ElRow)
app.component(ElMain.name, ElMain)
app.component(ElHeader.name, ElHeader)
app.component(ElContainer.name, ElContainer)

app.use(router)

app.mount('#app')
