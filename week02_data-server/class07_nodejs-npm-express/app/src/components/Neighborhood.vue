<template id="neighborhood-template">
  <article>
    <h3>{{ neighborhood.name }}</h3>
    <p>Part of: {{ neighborhood.city }}</p>
    <p>Founded: {{ neighborhood.founded }}</p>
    <p class="population">
      Current population: 
      <strong>{{ population }}</strong> 
    </p>
    <p class="population">
      <span class="size">(a <em>{{ size }}</em> neighborhood)</span>
    </p>
  </article>
</template>

<script>

export default {
  props: ['neighborhood'],
  computed: {
    population() {
      return this.neighborhood.population.toLocaleString();
    },
    size() {
      return this.neighborhood.population > 20000 ? 'big' : 'small';
    }
  }
};

</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}

</style>
