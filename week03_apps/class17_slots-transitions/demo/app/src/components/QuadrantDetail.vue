<template>
  <div v-if="quadrant !== null">
    <h2>{{ quadrant.name }} {{ quadrant.direction }}</h2>
    <nav>
      <NavLink :to="`/quadrants/${quadrant.id}/list`">list</NavLink>
      &nbsp;
      <NavLink :to="`/quadrants/${quadrant.id}/map`">map</NavLink>
      &nbsp;
      <NavLink :to="`/quadrants/${quadrant.id}/new`">add</NavLink>
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
import NavLink from './NavLink';

export default {
  components: {
    NavLink
  },
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
