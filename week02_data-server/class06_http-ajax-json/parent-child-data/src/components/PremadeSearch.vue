<template>
  <div>
    <h2>Premade search</h2>
    <button :disabled="search === 'cats'" @click="$emit('update', 'cats')">cats</button>
    <button :disabled="search === 'dogs'" @click="$emit('update', 'dogs')">dogs</button>
  </div>
</template>

<script>

export default {
  props: ['search']
};

</script>

<style>
</style>
