<template>
  <div id="app">
    Search is {{ search }}
    <!-- <input :value="search.term" @input="search.term = $event.target.value"> -->
    <Child :search="search" :onSearch="updateSearch"/>
    <PremadeSearch :search="search" :onSearch="updateSearch"/>
  </div>
</template>

<script>
import Child from './components/Child.vue';
import PremadeSearch from './components/PremadeSearch.vue';

export default {
  data() {
    return {
      search: 'cats'
    };
  },
  components: {
    Child,
    PremadeSearch
  },
  methods: {
    updateSearch(term) {
      this.search = term;
    }
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
