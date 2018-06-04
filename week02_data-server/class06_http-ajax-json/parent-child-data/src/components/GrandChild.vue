<template>
  <div>
    <h2>Grand Child Component</h2>
    <input :value="search" @input="onSearch($event.target.value)">
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
