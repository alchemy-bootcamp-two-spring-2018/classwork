<template>
  <div>
    <h2>I am the Quadrants component</h2>
    <ul v-if="quadrants">
      <li
        v-for="quadrant in quadrants"
        :key="quadrant.id"
      >
        <router-link :to="`/quadrants/${quadrant.id}`">
          {{ quadrant.name }} ({{ quadrant.direction }})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getQuadrants } from '../services/api';

export default {
  data() {
    return {
      quadrants: null
    };
  },
  created() {
    getQuadrants()
      .then(quadrants => {
        this.quadrants = quadrants;
      });
  }

};

</script>

<style scoped>

</style>
