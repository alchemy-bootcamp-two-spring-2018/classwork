<template>
<section>
  <h2>Portland Neighborhoods</h2>
  <p v-if="!neighborhoods">Loading neighborhoods...</p>
  <ul v-else class="list">
    <Neighborhood
      v-for="neighborhood in neighborhoods"
      :key="neighborhood.name"
      :neighborhood="neighborhood"
    />
  </ul>
  <AddNeighborhood :on-add="handleAdd"/>
</section>
</template>

<script>
import Neighborhood from './Neighborhood';
import AddNeighborhood from './AddNeighborhood.vue';
import { getNeighborhoods, addNeighborhood } from '../services/api';

export default {
  data() {
    return { 
      neighborhoods: null
    };
  },
  created() {
    getNeighborhoods()
      .then(neighborhoods => {
        this.neighborhoods = neighborhoods;
      });
  },
  components: { 
    Neighborhood,
    AddNeighborhood 
  },
  methods: {
    handleAdd(neighborhood) {
      return addNeighborhood(neighborhood)
        .then(saved => {
          this.neighborhoods.push(saved);
        });
    }
  }
};

</script>

<style>

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>
