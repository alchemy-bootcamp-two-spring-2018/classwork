<template>
  <section>
    <NeighborhoodForm 
      label="Add"
      :on-edit="handleAdd"/>
  </section>
</template>

<script>
import NeighborhoodForm from './NeighborhoodForm.vue';
import { addNeighborhood } from '../services/api';

export default {
  props: ['neighborhoods', 'quadrantId'],
  components: { 
    NeighborhoodForm
  },
  methods: {
    handleAdd(neighborhood) {
      neighborhood.quadrantId = this.quadrantId;
      return addNeighborhood(neighborhood)
        .then(saved => {
          this.neighborhoods.push(saved);
          this.$router.push(`/quadrants/${this.quadrantId}`);
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
