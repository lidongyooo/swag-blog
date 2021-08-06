import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import {
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
} from 'element-plus'

const app = createApp(App)

app.component(ElContainer.name, ElContainer)
app.component(ElCol.name, ElCol)
app.component(ElRow.name, ElRow)
app.component(ElMain.name, ElMain)
app.component(ElHeader.name, ElHeader)
app.component(ElForm.name, ElForm)
app.component(ElFormItem.name, ElFormItem)
app.component(ElInput.name, ElInput)
app.component(ElButton.name, ElButton)

app.use(router)

app.mount('#app')
