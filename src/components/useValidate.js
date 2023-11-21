import { ref, computed } from 'vue';
import * as Vue from 'vue';

const useValidate = () => {

  const errors = ref({});

  
  const validate = (fieldName, value, rules) => {
    
    const fieldErrors = [];

    
    if (rules.required && !value) {
      fieldErrors.push(`Это обязательное поле для заполнения!`);
    }

    if (rules.minLength && value.length < rules.minLength) {
      fieldErrors.push(`Это поле должно содержать не менее ${rules.minLength} символов!`);
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      fieldErrors.push(`Это поле должно содержать не более ${rules.maxLength} символов!`);
    }

    if (rules.email && !isValidEmail(value)) {
      fieldErrors.push(`Email Lолжен быть действительным`);
    }

    if (rules.confirmPassword && value !== rules.passwordValue) {
      fieldErrors.push(`Пароли не совпадают!`);
    }

    if (!errors.value[fieldName]) {
      Vue.set(errors.value, fieldName, fieldErrors);
    } else {
      errors.value[fieldName] = fieldErrors;
    }

    errors.value[fieldName] = fieldErrors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return {
    errors: computed(() => errors.value),
    validate,
  };
};

export default useValidate;