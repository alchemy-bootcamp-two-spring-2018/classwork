<template>
  <div>
    <h2>Child Component</h2>
    <GrandChild :search="search" :onSearch="onSearch"/>
  </div>
</template>

<script>
import GrandChild from './GrandChild';

export default {
  components: {
    GrandChild
  },
  props: ['search', 'onSearch']
};

</script>
