<template>
  <div id="app">
    <header>
      <h1>Pokemon Viewer</h1>
      <p v-html="someHtml"></p>
    </header>
    <main>
      <section class="list">
        <PokemonList 
          v-bind:selected="selected"
          v-on:select="updateSelected"
        />
      </section>
      <section class="viewer">
        <PokemonViewer v-bind:pokemon="selected"/>
      </section>
    </main>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList.vue';
import PokemonViewer from './components/PokemonViewer.vue';

export default {
  data() {
    return {
      selected: null,
      someHtml: '<strong>hello</strong>'
    }
  },
  components: {
    PokemonList,
    PokemonViewer
  },
  methods: {
    updateSelected(pokemon) {
      this.selected = pokemon;
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

.list {
  float: left;
  max-width: 500px;
  background: lightsteelblue;
}

.viewer {
  display: inline-block;
}

</style>
