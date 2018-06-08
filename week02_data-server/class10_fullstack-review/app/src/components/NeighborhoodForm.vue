<template id="neighborhood-template">
  <section class="add-neighborhood">
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label>
        Quadrant:
        <select v-model.number="edit.quadrantId" required>
          <option disabled value="">Please select a quadrant</option>
          <option
            v-for="quadrant in quadrants"
            :key="quadrant.id"
            :value="quadrant.id">
            {{quadrant.name}} ({{quadrant.direction}})
          </option>
        </select>
      </label>

      <label>
        Population:
        <input type="number" name="population" placeholder="Population" required
          v-model.number="edit.population">
      </label>

      <label>
        Founded:
        <input type="number" name="founded" placeholder="Founded" required
          v-model.number="edit.founded">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="edit.description"></textarea>
      </label>
      
      <label>
        <button type="submit">{{ label }}</button>
        <button 
          v-if="onCancel"
          @click="onCancel">
          Cancel
        </button>
      </label>
    </form>
  </section>
</template>

<script>

const initNeigborhood = () => {
  return {
    name: '',
    city: 'Portland',
    population: '',
    founded: '',
    description: ''
  };
};

export default {
  props: {
    neighborhood: Object,
    quadrants: Array,
    label: String,
    onEdit: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  data() {
    return {
      edit: this.neighborhood ? Object.assign({}, this.neighborhood) : initNeigborhood()
    };
  },
  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.edit = initNeigborhood();
        });
    }
  }
};

</script>

<style>

.add-neighborhood {
  width: 300px;
  text-align: left;
  margin: auto;
}

label {
  display: block;
}
</style>
