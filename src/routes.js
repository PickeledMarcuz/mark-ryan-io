import Home from './views/Home.vue';
import About from './views/About.vue';
import Services from './views/Services.vue';
import Blog from './views/Blog.vue';
import Contact from './views/Contact.vue';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home,
  },
  {
    path: '/about',
    label: 'Profile',
    component: About,
  },
  {
    path: '/services',
    label: 'Advisory',
    component: Services,
  },
  {
    path: '/blog',
    label: 'Insights',
    component: Blog,
  },
  {
    path: '/contact',
    label: 'Contact',
    component: Contact,
  },
];

export const routeMap = routes.reduce((map, route) => {
  map[route.path] = route;
  return map;
}, {});
