import { createApp } from 'vue'
import App from './App.vue'

import { ElButton, ElMessage  } from 'element-plus'


const app = createApp(App);

app.use(ElButton)
app.use(ElMessage)
app.mount('#app')
