<template>
    <div>
      <img src="@/assets/loginButton.svg" alt="Картинка с галочкой" />
      <h1>Вы успешно прошли регистрацию!</h1>
    </div>
  </template>
  <script>

  export default {
    mounted() {
      setTimeout(() => {
        this.$router.push({ name: 'LastForm' });
      }, 1000);
    },
  };
  </script>