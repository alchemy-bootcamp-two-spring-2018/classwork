<template>
  <button @click="$emit('change', amount)">{{ label }}</button>
</template>

<script>

export default {
  props: {
    amount: Number
  },
  computed: {
    label(){
      return this.amount > 0 ? '+' + this.amount : this.amount;
    }
  }
};

</script>