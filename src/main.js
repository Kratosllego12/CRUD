import {createApp} from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from '@primeuix/themes/lara';
import Button from "primevue/button"
import Avatar from "primevue/avatar"
import Card from "primevue/card";
import 'primeflex/primeflex.css'
import Paginator from 'primevue/paginator';
import {SelectButton} from "primevue";
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';

import i18n from "@/i18n.js";
import router from "@/router.js";

const app = createApp(App);

app.use(PrimeVue,
    {
        theme: {
            preset: Lara
        }
    });


app.component('pv-button', Button);
app.component('pv-paginator', Paginator)
app.component('pv-select-button', SelectButton)
app.component('pv-avatar', Avatar)
app.component('pv-card', Card)
app.component("pv-input-text",InputText)
app.component('pv-button', Button);
app.component('pv-data-table', DataTable);
app.component('pv-column', Column);
app.component('pv-dialog', Dialog);
app.component('pv-input-text', InputText);
app.use(i18n)


app.use(router);
app.mount('#app')
