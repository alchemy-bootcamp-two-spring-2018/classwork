<template>
  <div id="app">
    Search is {{ search }}
    <!-- <input :value="search.term" @input="search.term = $event.target.value"> -->
    <Child :search="search" @update="updateSearch"/>
    <PremadeSearch :search="search" @update="updateSearch"/>
  </div>
</template>

<script>
import Child from './components/Child.vue';
import PremadeSearch from './components/PremadeSearch.vue';
import bus from './eventBus';

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
  created() {
    bus.$on('update', term => {
      console.log('event bus fired with', term);
      this.search = term;
    });
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
