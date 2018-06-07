<template>
<section>
  <h2>Portland Neighborhoods</h2>
  <p v-if="!neighborhoods">Loading neighborhoods...</p>
  <ul v-else class="list">
    <Neighborhood
      v-for="neighborhood in neighborhoods"
      :key="neighborhood.name"
      :neighborhood="neighborhood"
      :on-remove="handleRemove"
      :on-update="handleUpdate"
    />
  </ul>

  <h3>Add a new neighborhood</h3>
  <NeighborhoodForm 
    label="Add"
    :on-edit="handleAdd"/>
</section>
</template>

<script>
import Neighborhood from './Neighborhood';
import NeighborhoodForm from './NeighborhoodForm.vue';
import { 
  getNeighborhoods, 
  addNeighborhood, 
  updateNeighborhood,
  removeNeighborhood } from '../services/api';

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
    NeighborhoodForm 
  },
  methods: {
    handleAdd(neighborhood) {
      return addNeighborhood(neighborhood)
        .then(saved => {
          this.neighborhoods.push(saved);
        });
    },
    handleRemove(id) {
      return removeNeighborhood(id)
        .then(() => {
          const index = this.neighborhoods.findIndex(neighborhood => neighborhood.id === id);
          if(index === -1) return;
          this.neighborhoods.splice(index, 1);
        });
    },
    handleUpdate(toUpdate) {
      return updateNeighborhood(toUpdate)
        .then(updated => {
          this.neighborhoods = this.neighborhoods.map(neighborhood => {
            return neighborhood.id === updated.id ? updated : neighborhood;
          });
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
