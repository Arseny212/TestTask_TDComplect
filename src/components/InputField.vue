<template>
    <div>
      <input :id="id" :name="name" :placeholder="placeholder" :value="value" @input="handleInput" />
      <div v-if="showErrors" class="error-messages">
        <div v-for="error in errors" :key="error">{{ error }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    props: {
      id: String,
      name: String,
      placeholder: String,
      value: String,
      errors: Array,
    },
    setup(props, { emit }) {
      const showErrors = ref(false);
  
      watch(() => props.errors, () => {
        showErrors.value = props.errors.length > 0;
      });
  
      const handleInput = (event) => {
        emit('input', event.target.value);
      };
  
      return {
        showErrors,
        handleInput,
      };
    },
  };
  </script>
  
  <style>
  .error-messages {
    color: red;
    margin-top: 5px;
  }
  </style>