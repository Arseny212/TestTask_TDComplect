<template>
  <h1>Регистрация</h1>
    <form @submit.prevent="submitForm">
      <input type="text" id="username" name="username" placeholder="Логин:" required>

      <input v-model="email" type="email" id="email" placeholder="Email:" required>
  
      <input v-model="password" type="password" id="password" placeholder="Пароль:" required>
  
      <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Подтвердите пароль:" required>
  
      <button type="submit" class="registration-button">Зарегистрироваться</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      submitForm() {
        console.log('Форма отправлена');
        this.$router.push('/success');
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  // Ваши стили здесь
  </style>