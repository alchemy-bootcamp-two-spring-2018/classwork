<template>
  <div id="app">
    <h1>Router Demo</h1>
    <nav>
      <router-link to="/">Go to Home</router-link>
      &nbsp;
      <router-link to="/about">Go to About</router-link>
      &nbsp;
      <router-link to="/quadrants">Go to Quadrants</router-link>
    </nav>

    <router-view></router-view>

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
</style>
