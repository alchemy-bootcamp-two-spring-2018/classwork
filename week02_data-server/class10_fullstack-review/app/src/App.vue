<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <h2>Portland Neighborhoods</h2>
    </header>

    <main>
      <Neighborhoods/>
    </main>
  </div>
</template>

<script>
import Neighborhoods from './components/Neighborhoods.vue';

export default {
  data() {
    return {
      page: 'neighborhoods'
    };
  },
  components: {
    Neighborhoods  
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  text-align: center;
}

header img {
  width: 100px;
}
</style>
