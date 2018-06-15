<template>
  <div class="auth">
    <h2>{{ label }}</h2>
    <p>
      <a href="" @click.prevent="type = isSignUp ? 'signIn' : 'signUp'">
        {{
          isSignUp
            ? "Already a user? Click here to sign in"
            : "New? Click here to sign up"
        }}
      </a>
    </p>

    <form @submit.prevent="handleSubmit">
      <FormControl v-if="isSignUp" label="Name">
        <input required v-model="credentials.name">
      </FormControl>

      <FormControl label="Email">
        <input required v-model="credentials.email">
      </FormControl>
      
      <FormControl label="Password">
        <input 
          :type="show ? 'text' : 'password'" 
          v-model="credentials.password"
          required>
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
    <pre class="error" v-show="error">{{ error }}</pre>
  </div>
</template>

<script>
import { signUp, signIn } from '../services/api';
import FormControl from './FormControl';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  components: {
    FormControl
  },
  data() {
    return {
      credentials: {
        email: '',
        password: '',
        name: ''
      },
      show: false,
      type: 'signIn',
      error: null,
    };
  },
  props: ['onUser'],
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
      if(!emailRegex.test(this.credentials.email)) {
        this.error = 'email not valid';
        return;
      }

      this.error = null;
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(user => {
          this.onUser(user);
          this.$router.push('/');
        })
        .catch(err => this.error = err);
    }
  }
};

</script>

<style scoped>

pre.error {
  color: red;
}

.auth {
  width: 300px;
  margin: auto;
}

</style>
