<template>
  <section>
    <h2>I am Filter</h2>
    <input v-model="filter.type">
    <input v-model="filter.name">
    filter done
    <h3>{{ name }}</h3>
  </section>
</template>

<script>

export default {
  props: ['filter', 'name'],
};

</script>