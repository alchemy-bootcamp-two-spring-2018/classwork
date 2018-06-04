<template>
  <div id="app">
    <Loading :loading="loading"/>
    <SearchControl :onSearch="handleSearch"/>
    <PeopleList :people="people"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import PeopleList from './components/PeopleList';
import Loading from './components/Loading';
import { getPeople } from './services/api';

export default {
  data() {
    return {
      people: null,
      loading: false
    };
  },
  components: {
    PeopleList,
    SearchControl,
    Loading
  },
  methods: {
    handleSearch(name) {
      this.loading = true;

      getPeople(name).then(data => {
        this.people = data.results;
        this.loading = false;
      });
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
  position: relative;
}
</style>
