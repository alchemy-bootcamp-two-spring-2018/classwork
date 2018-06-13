<template>
  <div>
    <h3>Neighborhoods Map</h3>
    <p>
      I would display map with 
      {{ neighborhoods.length }}
      markers
    </p>
  </div>
</template>

<script>

export default {
  props: ['neighborhoods']
};

</script>

<style scoped>

</style>
