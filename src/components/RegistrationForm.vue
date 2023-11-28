<template>
  <div class="container">
    <div class="image-container">
      <img src="../assets/man.svg" alt="Мужчинка с кофе" class="svg-icon" />
    </div>
    <div class="form-container">
      <div class="form-title">Регистрация</div>
      <form @submit.prevent="submitForm">
        <div>
          <input
            v-model="username"
            type="text"
            id="username"
            name="username"
            placeholder="Логин:"
            required
            maxlength="20"
            minlength="3"
            autocomplete="new-login"
            @input="validateUsername"
          />
        </div>
        <div v-if="usernameErrors && usernameErrors.length" class="error-messages">
          <div v-for="error in usernameErrors" :key="error" class="error-message">
          <img src="@/assets/Error.svg" alt="Иконка ошибки" class="Error-img" />
          {{ error }}
          </div>
        </div>

        <div>
          <input v-model="email" type="email" placeholder="Email:" id="email" required autocomplete="email" />
        </div>
        <div v-if="emailErrors && emailErrors.length" class="error-messages">
          <div v-for="error in emailErrors" :key="error" class="error-message">
            <img src="@/assets/Error.svg" alt="Иконка ошибки" class="Error-img" />
          {{ error }}
          </div>
        </div>

        <div class="password-input-container">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            name="password"
            placeholder="Пароль:"
            required
            maxlength="20"
            minlength="3"
            autocomplete="new-password"
          />
          <button class="password-toggle-button" @click.prevent="togglePasswordVisibility">
            <img :src="showPassword ? 'src/assets/Eye2.svg' : 'src/assets/Eye1.svg'" alt="Toggle Password" />
          </button>
        </div>
        <div v-if="passwordErrors && passwordErrors.length" class="error-messages">
          <div v-for="error in passwordErrors" :key="error" class="error-message">
            <img src="@/assets/Error.svg" alt="Иконка ошибки" class="Error-img" />
          {{ error }}
          </div>
        </div>

        <div class="password-input-container">
          <input
            v-model="confirmPassword"
            :type="showPassword ? 'text' : 'password'"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Подтвердите пароль:"
            required
            maxlength="20"
            minlength="3"
            autocomplete="new-password"
          />
          <button class="password-toggle-button" @click.prevent="togglePasswordVisibility">
            <img :src="showPassword ? 'src/assets/Eye2.svg' : 'src/assets/Eye1.svg'" alt="Toggle Password" />
          </button>
        </div>
        <div v-if="confirmPasswordErrors && confirmPasswordErrors.length" class="error-messages">
          <div v-for="error in confirmPasswordErrors" :key="error" class="error-message">
            <img src="@/assets/Error.svg" alt="Иконка ошибки" class="Error-img" />
          {{ error }}
          </div>
        </div>

        <button :disabled="isFormInvalid" type="submit" class="registration-button">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from './useValidate';
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { errors, validate } = useValidate();
    const router = useRouter();

    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const showPassword = ref(false);

    const validateUsername = () => {
      validate('username', username.value, { required: true, minLength: 3, maxLength: 20 });
    };

    const validateEmail = () => {
      validate('email', email.value, { required: true, email: true });
    };

    const validatePassword = () => {
      validate('password', password.value, { required: true, minLength: 3, maxLength: 20 });
    };

    const validateConfirmPassword = () => {
      const confirmPasswordValue = confirmPassword.value;
      const passwordValue = password.value;

      if (confirmPasswordValue !== passwordValue) {

    validate('confirmPassword', confirmPassword.value, {
      required: true,
      minLength: 3,
      maxLength: 20,
      confirmPassword: password.value,
    });
} else {
  errors.value.confirmPassword = [];
}
    return;
};

    watch(username, () => {
      validateUsername();
    });

    watch(email, () => {
      validateEmail();
    });

    watch(password, () => {
      validatePassword();
    });

    watch(confirmPassword, () => {
      validateConfirmPassword();
    });

    const usernameErrors = computed(() => errors.value.username);
    const emailErrors = computed(() => errors.value.email);
    const passwordErrors = computed(() => errors.value.password);
    const confirmPasswordErrors = computed(() => errors.value.confirmPassword);

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const submitForm = () => {
      if (!isFormInvalid.value) {
      console.log('Форма отправлена');
      router.push('/success');
    }
  };
  const isFormInvalid = computed(() => {
  const errorsValue = errors.value;
  return (
    !!errorsValue &&
    (!!errorsValue.username?.length ||
      !!errorsValue.email?.length ||
      !!errorsValue.password?.length ||
      !!errorsValue.confirmPassword?.length)
  );
});
    return {
      username,
      email,
      password,
      confirmPassword,
      showPassword,
      usernameErrors,
      emailErrors,
      passwordErrors,
      confirmPasswordErrors,
      togglePasswordVisibility,
      submitForm,
      isFormInvalid,
    };
  },
}
</script>