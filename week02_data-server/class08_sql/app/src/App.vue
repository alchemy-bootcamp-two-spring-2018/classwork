<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    </header>

    <main>
      <Neighborhoods/>
    </main>
  </div>
</template>

<script>
import Neighborhoods from './components/Neighborhoods.vue';

export default {
  name: 'app',
  components: {
    Neighborhoods  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header img {
  width: 100px;
}
</style>
