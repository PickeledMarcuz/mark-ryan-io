import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import Contact from '@/views/Contact.vue';
import Login from '@/views/Login.vue';
import Services from '@/views/Services.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
  { path: '/services', name: 'Services', component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
