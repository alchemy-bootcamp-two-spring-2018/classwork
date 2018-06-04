<template>
  <div>
    <h2>Premade search</h2>
    <button :disabled="search === 'cats'" @click="onSearch('cats')">cats</button>
    <button :disabled="search === 'dogs'" @click="onSearch('dogs')">dogs</button>
  </div>
</template>

<script>

export default {
  props: {
    search: String, 
    onSearch: {
      type: Function,
      required: true
    }
  }
};

</script>

<style>
</style>
