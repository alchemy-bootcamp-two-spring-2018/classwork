<template>
  <div class="hello">
    <h1>Grand Child Component</h1>
    <input :value="search" @input="$emit('update', $event.target.value)">
  </div>
</template>

<script>

export default {
  props: ['search']
};

</script>
