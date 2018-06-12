<template>
  <div>
    <h3>Neigborhoods List</h3>
    <ul v-if="neighborhoods">
      <li
        v-for="neighborhood in neighborhoods"
        :key="neighborhood.id"
      >
        <strong>{{ neighborhood.name }}</strong>
        &nbsp;
        {{ neighborhood.description }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['neighborhoods']
};

</script>

<style scoped>

</style>
