import { ref, computed } from 'vue';

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
      fieldErrors.push(`Email Должен быть действительным`);
    }

    if (rules.confirmPassword && value !== rules.confirmPassword) {
      fieldErrors.push(`Пароли не совпадают!`);
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