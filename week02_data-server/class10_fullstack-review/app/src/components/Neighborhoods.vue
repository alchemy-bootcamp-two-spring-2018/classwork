<template>
<section>

  <h3 @click="adding = !adding">Add a new neighborhood</h3>
  <NeighborhoodForm 
    v-if="adding"
    label="Add"
    :quadrants="quadrants"
    :on-edit="handleAdd"/>

  <p v-if="!neighborhoods">Loading neighborhoods...</p>
  <ul v-else class="list">
    <Neighborhood
      v-for="neighborhood in neighborhoods"
      :key="neighborhood.name"
      :neighborhood="neighborhood"
      :quadrants="quadrants"
      :selected="neighborhood.id === selectedId"
      :on-remove="handleRemove"
      :on-update="handleUpdate"
      :on-select="handleSelect"
    />
  </ul>

  <Restaurants 
    :key="selectedId"
    :neighborhood-id="selectedId" 
  />

</section>
</template>

<script>
import Neighborhood from './Neighborhood';
import NeighborhoodForm from './NeighborhoodForm.vue';
import Restaurants from './Restaurants';

import { 
  getNeighborhoods, 
  addNeighborhood, 
  updateNeighborhood,
  removeNeighborhood,
  getQuadrants } from '../services/api';

export default {
  data() {
    return { 
      neighborhoods: null,
      quadrants: null,
      adding: false,
      selectedId: null
    };
  },
  created() {
    getNeighborhoods()
      .then(neighborhoods => {
        this.neighborhoods = neighborhoods;
      });

    getQuadrants()
      .then(quadrants => {
        this.quadrants = quadrants;
      });
  },
  components: { 
    Neighborhood,
    NeighborhoodForm,
    Restaurants 
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
    },
    handleSelect(neighborhoodId) {
      this.selectedId = neighborhoodId;
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
