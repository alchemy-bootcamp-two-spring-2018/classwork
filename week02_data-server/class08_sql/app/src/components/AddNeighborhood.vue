<template id="neighborhood-template">
  <section class="add-neighborhood">
    <h1>New Neighborhood</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="neighborhood.name">
      </label>

      <label>
        City:
        <input type="text" name="city" placeholder="City" required
          v-model="neighborhood.city">
      </label>

      <label>
        Population:
        <input type="text" name="population" placeholder="Population" required
          v-model="neighborhood.population">
      </label>

      <label>
        Founded:
        <input type="text" name="founded" placeholder="Founded" required
          v-model="neighborhood.founded">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="neighborhood.description"></textarea>
      </label>
      
      <label>
        <button type="submit">Add</button>
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
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      neighborhood: initNeigborhood()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.neighborhood)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.neighborhood = initNeigborhood();
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
