<template>
  <div>
    <article class="pokemon-detail" v-if="pokemon">
      <h3>{{pokemon.pokemon}}</h3>
      <img v-bind:src="pokemon.url_image">
    </article>
    <p v-else>Please select a pokemon</p>
  </div>
</template>

<script>

export default {
  props: ['pokemon']
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pokemon-detail {
  padding: 10px;
  text-align: center;
}

</style>
