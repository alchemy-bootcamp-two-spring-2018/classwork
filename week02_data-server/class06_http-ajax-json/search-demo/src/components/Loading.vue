<template>
  <div 
    class="loading"
    v-if="loading">
    Loading...
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
};
</script>

<style>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #aaa;
  opacity: .5;
  text-align: center;
}
</style>
