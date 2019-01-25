import todo from './pages/todo/todo.vue';
import VueRouter from 'vue-router';

const routes = [
    { path: '/', redirect: '/todo' },
    { path: '/todo', component: todo },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;
