<template>
  <div>
    <h2>I am the Quadrants component</h2>
    <pre v-if="error">{{ error }}</pre>
    <ul v-if="quadrants">
      <li
        v-for="quadrant in quadrants"
        :key="quadrant.id"
      >
        <RouterLink :to="`/quadrants/${quadrant.id}`">
          {{ quadrant.direction }} {{ quadrant.name }} 
          ({{ quadrant.neighborhoodCount }} 
          neighborhood{{ quadrant.neighborhoodCount !== 1 ? 's' : '' }})
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { getQuadrants } from '../services/api';

export default {
  data() {
    return {
      quadrants: null,
      error: null
    };
  },
  created() {
    // if this wasn't in created, we'd need to reset error
    // this.error = null;
    getQuadrants()
      .then(quadrants => {
        this.quadrants = quadrants;
      })
      .catch(err => {
        this.error = err;
      });
  }

};

</script>

<style scoped>
pre {
  color: red;
}
</style>
