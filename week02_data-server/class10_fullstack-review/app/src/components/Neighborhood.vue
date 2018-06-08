<template id="neighborhood-template">
  <div>
    <article v-if="!editing">
      <h3>
        {{ neighborhood.name }}
        <button v-if="!editing" @click="editing = true">✏️</button>
      </h3>
      <p>Quadrant: {{ quadrant }}</p>
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
      :quadrants="quadrants"
      :on-edit="handleUpdate"
      :on-cancel="() => editing = false"
    />
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
    'quadrants',
    'onRemove',
    'onUpdate'
  ],
  computed: {
    quadrant() {
      if(!this.quadrants) return null;
      const quadrant = this.quadrants.find(q => q.id === this.neighborhood.quadrantId);
      return quadrant ? `${quadrant.name} (${quadrant.direction})` : 'Unknown';
    },
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
        return this.onRemove(this.neighborhood.id);
      }
    },
    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    }
  }
};

</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}

</style>
