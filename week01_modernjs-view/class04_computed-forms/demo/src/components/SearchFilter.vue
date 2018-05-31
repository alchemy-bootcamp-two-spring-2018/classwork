<template>
  <section @change="emitChange">
    <h2>I am Filter</h2>
    <input v-model="type">
    <input v-model="name">
  </section>
</template>

<script>

export default {
  data() {
    return {
      type: '',
      name: ''
    };
  },
  methods: {
    emitChange() {
      this.$emit('filter', { 
        type: this.type, 
        name: this.name 
      });
    }
  }
};

</script>