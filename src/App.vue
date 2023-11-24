<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import RegistrationForm from './components/RegistrationForm.vue';
import './styles/main.scss';

export default {
  components: {
    RegistrationForm,
  },
};
</script>