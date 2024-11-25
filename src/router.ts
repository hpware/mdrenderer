import { createMemoryHistory, createRouter } from 'vue-router';
import p404 from './components/404.vue';
import Main from './Pages/Main.vue';
import CreateLink from './Pages/CreateLink.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/index', component: Main },
  { path: '/about', redirect: '/?u=https://mdviewer.yuanhau.com/mds/about.md' },
  { path: '/createlink', component: CreateLink },
  { path: '/:pathMatch(.*)*', component: p404},

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
 
export default router