import HomeView from "@/Shared/Presentation/home-view.page.vue";
import ArticleView from "@/News/Presentation/article-view.page.vue";
import NotFound from "@/Shared/Presentation/not-found.component.vue";
import ArticleItemCreateEdit from "@/News/Presentation/article-item-create-edit.component.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: HomeView},
    {path: '/article', component: ArticleView ,exact: true},
    {path: '/article/create', component: ArticleItemCreateEdit ,exact: true},
    {path: '/article/update/:id', component: ArticleItemCreateEdit, name: "updateArticle"},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;