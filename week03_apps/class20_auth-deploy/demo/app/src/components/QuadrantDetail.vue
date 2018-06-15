<template>
  <div v-if="quadrant !== null">
    <h2>{{ quadrant.name }} {{ quadrant.direction }}</h2>
    <nav>
      <RouterLink :to="`/quadrants/${quadrant.id}/list`">list</RouterLink>
      &nbsp;
      <RouterLink :to="`/quadrants/${quadrant.id}/map`">map</RouterLink>
      &nbsp;
      <RouterLink :to="`/quadrants/${quadrant.id}/new`">add</RouterLink>
    </nav>

    <RouterView 
      :neighborhoods="quadrant.neighborhoods"
      :quadrantId="quadrant.id"
      :on-add="handleAdd"
    ></RouterView>
  
  </div>
</template>

<script>
import { getQuadrant, addNeighborhood } from '../services/api';

export default {
  data() {
    return {
      quadrant: null
    };
  },
  created() {
    getQuadrant(this.$route.params.id)
      .then(quadrant => {
        this.quadrant = quadrant;
      });
  },
  methods: {
    handleAdd(neighborhood) {
      neighborhood.quadrantId = this.quadrant.id;
      return addNeighborhood(neighborhood)
        .then(saved => {
          this.quadrant.neighborhoods.push(saved);
          this.$router.push(`/quadrants/${this.quadrantId}`);
        });
    }
  }

};

</script>

<style scoped>
pre {
  text-align: left;
}
</style>
