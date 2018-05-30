<template>
  <div>
    <h1>List of Pokemon ({{list.length}})</h1>
    <ul>
      <li 
        v-for="pokemon in list"
        v-bind:key="pokemon.id"
        v-on:click="$emit('select', pokemon)"
      >
        <article v-bind:class="['pokemon', { selected: pokemon === selected }]">
          <img v-bind:src="pokemon.url_image">
          <span v-bind:style="{ color: pokemon.color_1 }">
            {{pokemon.pokemon}}
          </span>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import pokemon from '../pokemon.js';

export default {
  data() {
    return { 
      list: pokemon 
    }
  },
  props: ['selected']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.pokemon {
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
}

.pokemon.selected {
  background: antiquewhite;
}

.pokemon.selected:hover {
  background: wheat;
}

.pokemon:hover {
  background: steelblue;
}

.pokemon img {
  width: 75px;
  margin-right: 5px;
}
</style>
