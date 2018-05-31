<template>
  <section>
    <h2>I am Filter</h2>
    <input v-model="filter.type">
    <input v-model="filter.name">
    filter done
  </section>
</template>

<script>

export default {
  props: ['filter'],
};

</script>