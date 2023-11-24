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

    watch(() => props.value, () => {
      showErrors.value = false;
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