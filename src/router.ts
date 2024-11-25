import { createMemoryHistory, createRouter } from 'vue-router';
import About from './Pages/About.vue';
import p404 from './components/404.vue';
import Main from './Pages/Main.vue';
import CreateLink from './Pages/CreateLink.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/index', component: Main },
  { path: '/about', component: About },
  { path: '/createlink', component: CreateLink },
  { path: '/:pathMatch(.*)*', component: p404},

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
 
export default router