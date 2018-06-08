<template id="neighborhood-template">
  <li>
    <article 
      v-if="!editing"
      @click="handleSelect">
        <strong>{{ neighborhood.name }}</strong>
        &nbsp;
        <span class="size">a <em>{{ size }}</em> neighborhood</span> in {{ quadrant }} 
        <button v-if="!editing" @click="editing = true">✏️</button>
        <button @click="handleClick">🗑</button>
    </article>
    <NeighborhoodForm 
      v-else 
      label="Update"
      :neighborhood="neighborhood" 
      :quadrants="quadrants"
      :on-edit="handleUpdate"
      :on-cancel="() => editing = false"
    />
  </li>
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
    'onUpdate',
    'onSelect'
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
    },
    handleSelect() {
      this.onSelect(this.neighborhood.id);
    }
  }
};

</script>

<style scoped>

li {
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 0;
}

li:hover {
  background: #aaa;
}

h3 {
  margin: 40px 0 0;
}

</style>
