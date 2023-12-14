import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage,
    },
    // ... other routes
  ],
});

export default router;
