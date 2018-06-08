<template id="restaurant-template">
  <section class="restaurant-form">
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name of Restaurant" required
          v-model="edit.name">
      </label>

      <label>
        Cuisine:
        <input name="cuisine" placeholder="Type of Food" required
          v-model="edit.cuisine">
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

const initRestaurant = () => {
  return {
    name: '',
    cuisine: '',
  };
};

export default {
  props: {
    restaurant: Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  data() {
    return {
      edit: this.restaurant ? Object.assign({}, this.restaurant) : initRestaurant()
    };
  },
  methods: {
    handleSubmit() {
      return this.onEdit(this.edit)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.edit = initRestaurant();
        });
    }
  }
};

</script>

<style>

.restaurant-form {
  width: 300px;
  text-align: left;
}

label {
  display: block;
}
</style>
