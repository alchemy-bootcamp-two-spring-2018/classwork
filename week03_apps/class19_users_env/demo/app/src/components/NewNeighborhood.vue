<template>
  <section>
    <NeighborhoodForm 
      label="Add"
      :on-edit="onAdd"/>
  </section>
</template>

<script>
import NeighborhoodForm from './NeighborhoodForm.vue';

export default {
  props: ['onAdd'],
  components: { 
    NeighborhoodForm
  }
};

</script>

<style>

pre {
  color: red;
}

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>
