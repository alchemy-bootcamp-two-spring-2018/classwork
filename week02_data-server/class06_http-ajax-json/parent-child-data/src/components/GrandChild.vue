<template>
  <div>
    <h2>Grand Child Component</h2>
    <input :value="search" @input="$emit('update', $event.target.value)">
  </div>
</template>

<script>

export default {
  props: ['search']
};

</script>
