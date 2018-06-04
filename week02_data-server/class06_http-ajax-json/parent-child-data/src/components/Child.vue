<template>
  <div class="hello">
    <h1>Child Component</h1>
    <GrandChild :search="search" @update="$emit('update', $event)"/>
  </div>
</template>

<script>
import GrandChild from './GrandChild';

export default {
  components: {
    GrandChild
  },
  props: ['search']
};

</script>
