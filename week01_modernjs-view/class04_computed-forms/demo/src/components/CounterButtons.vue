<template>
  <span class="buttons">
    <CounterButton
        v-for="number in numbers"
        :key="number"
        :amount="number"
        :label="prefix + number"
        @change="$emit('change', $event)"
    />
  </span>
</template>

<script>
import CounterButton from './CounterButton';

export default {
  props: {
    numbers: Array,
    prefix: {
      type: String,
      default: ''
    }
  },
  components: {
    CounterButton
  }
};

</script>

<style>
.buttons {
  display: inline-block;
}
</style>