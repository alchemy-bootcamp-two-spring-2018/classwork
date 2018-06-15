<template>
  <div id="app">
    <h1>Router Demo</h1>
    <nav>
      <RouterLink exact to="/">Home</RouterLink>
      &nbsp;
      <RouterLink to="/about">About</RouterLink>
      &nbsp;
      <RouterLink v-if="user" to="/quadrants">Quadrants</RouterLink>
      &nbsp;
      <RouterLink v-if="!user" to="/auth">Sign In</RouterLink>
      <a v-else @click.prevent="handleLogout">Logout</a>
    </nav>
    <pre>{{ user }}</pre>
    <RouterView :on-user="handleUser" :user="user"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    const raw = localStorage.user;
    if(raw) {
      try {
        this.user = JSON.parse(raw);
      }
      catch(err) {
        localStorage.removeItem('user');
      }
    }
  },
  methods: {
    handleUser(user) {
      this.user = user;
      localStorage.user = JSON.stringify(user);
    },
    handleLogout() {
      localStorage.removeItem('user');
      this.user = null;
    }
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, nav {
  text-align: center;
}

nav a {
  padding: 5px 10px;
  color: steelblue;
  pointer: cursor;
}

nav a:hover {
  color: white;
  background: lightsteelblue;
}

.router-link-active, .router-link-active:hover {
  background: steelblue;
  color: white;
}
</style>
