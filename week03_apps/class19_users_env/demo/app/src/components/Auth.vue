<template>
  <div>
    <h2>{{ label }}</h2>
    <button @click="type = isSignUp ? 'signIn' : 'signUp'">
      {{
        isSignUp
          ? "Already a user? Click here to sign in"
          : "New? Click here to sign up"
      }}
    </button>
    <form @submit.prevent="handleSubmit">
      <FormControl label="email">
        <input v-model="credentials.email">
      </FormControl>
      <FormControl label="password">
        <input 
          :type="show ? 'text' : 'password'" 
          v-model="credentials.password">
        <button 
          @click="show = !show"
          type="button"
        >
          {{ show ? 'Hide' : 'Show' }}
        </button>
      </FormControl>
      <FormControl>
        <button type="submit">
          {{ label }}
        </button>
      </FormControl>
    </form>
  </div>
</template>

<script>
import { signUp, signIn } from '../services/api';
import FormControl from './FormControl';

export default {
  components: {
    FormControl
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      show: false,
      type: 'signUp'
    };
  },
  computed: {
    isSignUp() {
      return this.type === 'signUp';
    },
    label() {
      return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
  },
  methods: {
    handleSubmit() {
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
  }
};

</script>

<style scoped>

</style>
