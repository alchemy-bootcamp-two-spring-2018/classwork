<template id="neighborhood-template">
  <section class="neighborhood-form">
    <form @submit.prevent="handleSubmit">
      <FormControl label="Name">
        <input type="text" 
          name="name" placeholder="Name" required
          v-model="edit.name">
      </FormControl>

      <FormControl label="Population">
        <input type="number" name="population" placeholder="Population" required
          v-model.number="edit.population">
      </FormControl>

      <FormControl label="Founded">
        <input type="number" name="founded" placeholder="Founded" required
          v-model.number="edit.founded">
      </FormControl>

      <FormControl label="Description">
        <textarea name="body" rows="8" cols="40" required 
          v-model="edit.description"></textarea>
      </FormControl>
      
      <FormControl>
        <button type="submit">{{ label }}</button>
        <button 
          v-if="onCancel"
          @click="onCancel">
          Cancel
        </button>
      </FormControl>
    </form>
    <pre>{{ error }}</pre>
  </section>
</template>

<script>
import FormControl from './FormControl';

const initNeigborhood = () => {
  return {
    name: '',
    quadrantId: '',
    population: '',
    founded: '',
    description: ''
  };
};

export default {
  components: {
    FormControl
  },
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
      error: null,
      edit: this.neighborhood ? Object.assign({}, this.neighborhood) : initNeigborhood()
    };
  },
  methods: {
    handleSubmit() {
      this.error = null;
      return this.onEdit(this.edit)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.edit = initNeigborhood();
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};

</script>

<style>

.neighborhood-form {
  width: 300px;
  text-align: left;
}

label {
  display: block;
}
</style>
