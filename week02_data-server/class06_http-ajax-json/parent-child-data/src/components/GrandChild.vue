<template>
  <div>
    <h2>Grand Child Component</h2>
    <input :value="search" @input="callBus">
  </div>
</template>

<script>
import bus from '../eventBus';

export default {
  props: ['search'],
  methods: {
    callBus(event) {
      bus.$emit('update', event.target.value);
    }
  }
};

</script>
