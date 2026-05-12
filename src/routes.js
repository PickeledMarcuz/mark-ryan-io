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
    title: 'Mark Ryan | Cybersecurity Expert, Senior Software Engineer, Management Consultant',
    description: 'Independent advisory at the intersection of cybersecurity, senior software engineering, and management consulting.',
  },
  {
    path: '/about',
    label: 'Profile',
    component: About,
    title: 'Profile | Mark Ryan',
    description: 'Technical credibility with executive-level judgment across cybersecurity, engineering, and transformation.',
  },
  {
    path: '/services',
    label: 'Advisory',
    component: Services,
    title: 'Advisory Services | Mark Ryan',
    description: 'Cybersecurity advisory, engineering leadership, and management consulting for high-stakes technology decisions.',
  },
  {
    path: '/blog',
    label: 'Insights',
    component: Blog,
    title: 'Insights | Mark Ryan',
    description: 'Perspective on cyber risk, engineering strategy, and transformation.',
  },
  {
    path: '/contact',
    label: 'Contact',
    component: Contact,
    title: 'Contact | Mark Ryan',
    description: 'Start a conversation about cyber risk, engineering leadership, architecture, or transformation support.',
  },
];

export const routeMap = routes.reduce((map, route) => {
  map[route.path] = route;
  return map;
}, {});
