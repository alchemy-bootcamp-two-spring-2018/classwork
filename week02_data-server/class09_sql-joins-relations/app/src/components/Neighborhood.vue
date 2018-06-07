<template id="neighborhood-template">
  <div>
    <article v-if="!editing">
      <h3>{{ neighborhood.name }}</h3>
      <p>Quadrant: {{ neighborhood.quadrantName }}</p>
      <p>Founded: {{ neighborhood.founded }}</p>
      <p class="population">
        Current population: 
        <strong>{{ population }}</strong> 
      </p>
      <p class="population">
        <span class="size">(a <em>{{ size }}</em> neighborhood)</span>
      </p>
      <p>
        <button @click="handleClick">remove this neighborhood</button>
      </p>
    </article>
    <NeighborhoodForm 
      v-else 
      label="Update"
      :neighborhood="neighborhood" 
      :on-edit="onUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
  </div>
</template>

<script>
import NeighborhoodForm from './NeighborhoodForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    NeighborhoodForm
  },
  props: [
    'neighborhood',
    'onRemove',
    'onUpdate'
  ],
  computed: {
    population() {
      return this.neighborhood.population.toLocaleString();
    },
    size() {
      return this.neighborhood.population > 20000 ? 'big' : 'small';
    }
  },
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to remove ${this.neighborhood.name}?`)) {
        this.onRemove(this.neighborhood.id);
      }
    }
  }
};

</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}

</style>
