import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '../components/RegistrationForm.vue';
import SuccessPage from '../components/SuccessPage.vue';
import LastForm from '../components/LastForm.vue';

const routes = [
  { path: '/', component: RegistrationForm },
  { path: '/success', component: SuccessPage },
  {path: '/LastForm',
   name: 'LastForm',
  component: LastForm,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
