<template>
  <button @click="$emit('change', amount)">{{ label }}</button>
</template>

<script>

export default {
  props: {
    label: String,
    amount: Number
  }
};

</script>