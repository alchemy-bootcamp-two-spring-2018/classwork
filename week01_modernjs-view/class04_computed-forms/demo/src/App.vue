<template>
  <main>
    <h1>Counter Demo</h1>
    <section class="controls">
      <CounterButtons :numbers="decrements" @change="changeCount"/>
      <span class="count">{{ count }}</span>
      <CounterButtons :numbers="increments" prefix="+" @change="changeCount"/>
    </section>
    <section>
      <input type="number" v-model.number="newNumber">
      <button @click="addIncrement">Add Number to Increments</button>
    </section>
    <SearchFilter @filter="applyFilter"/>
  </main>
</template>

<script>
import CounterButtons from './components/CounterButtons';
import SearchFilter from './components/SearchFilter';

export default {
  data() {
    return { 
      count: 0,
      numbers: [1, 10, 100, 500, 1000, 10000],
      newNumber: ''
    };
  },
  computed: {
    increments() {
      return this.numbers
        .slice()
        .sort((a, b) => a - b);
    },
    decrements() {
      if(!this.increments) return [];
      return this.increments
        .map(i => -i)
        .reverse();
    }
  },
  components: {
    CounterButtons,
    SearchFilter
  },
  methods: {
    increment() {
      this.changeCount(1);
    },
    decrement() {
      this.changeCount(-1);
    },
    changeCount(amount) {
      this.count += amount;
    },
    addIncrement() {
      this.numbers.push(this.newNumber);
    },
    applyFilter(filter) {
      console.log('filter is', filter);
    }
  }
};

</script>

<style>

.controls {
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #aaa;
  padding: 10px;
}

.count {
  display: inline-block;
  width: 70px;
  text-align: center;
}

</style>
