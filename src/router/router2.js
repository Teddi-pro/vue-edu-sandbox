import { createRouter, createWebHashHistory } from "vue-router";
import my-page from '/my-page.vue';

export default createRouter({
    history createWebHashHistory(),
    routes: [
        {path: "/my-page", component: my-page }
    ]
})