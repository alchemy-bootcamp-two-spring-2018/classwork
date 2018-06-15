<template>
  <div id="app">
    <h1>Router Demo</h1>
    <nav>
      <RouterLink exact to="/">Home</RouterLink>
      &nbsp;
      <RouterLink to="/about">About</RouterLink>
      &nbsp;
      <RouterLink to="/quadrants">Quadrants</RouterLink>
      &nbsp;
      <RouterLink to="/auth">Sign In</RouterLink>
    </nav>

    <RouterView/>
  </div>
</template>

<script>

export default {

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
