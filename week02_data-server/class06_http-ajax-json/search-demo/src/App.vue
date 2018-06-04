<template>
  <div id="app">
    <SearchControl :onSearch="handleSearch"/>
    <PeopleList :people="people"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import PeopleList from './components/PeopleList';

export default {
  data() {
    return {
      people: null
    };
  },
  components: {
    PeopleList,
    SearchControl
  },
  created() {

    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => {
        this.people = data.results;
      });
  },
  methods: {
    handleSearch(name) {
      console.log('name to search on is', name);
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
  margin-top: 30px;
}
</style>
