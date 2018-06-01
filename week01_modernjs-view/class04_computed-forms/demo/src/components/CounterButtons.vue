<template>
  <div>
    <span class="buttons">
      <CounterButton
          v-for="number in numbers"
          :key="number"
          :amount="number"
          @change="$emit('change', $event)"
      />
    </span>
    <!-- <div v-for="n in numbers" :key="n">
        {{ label(n) }}
    </div> -->
  </div>
</template>

<script>
import CounterButton from './CounterButton';

export default {
  props: {
    numbers: Array
  },
  methods: {
    label(n) {
      const prefix = n < 0 ? '' : '+';
      return prefix + n;
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