<template>
  <section class="restaurants">
    <h2>Restaurants</h2>
    <p v-if="!neighborhoodId">Please select a neighborhood to view restaurants</p>
    <div v-else>
      <ul>
        <li
          v-for="restaurant in restaurants"
          :key="restaurant.id"
        >
          {{restaurant.name}} {{restaurant.cuisine}}
        </li>
      </ul>
      <h4>New Restaurant</h4>
      <RestaurantForm 
        label="Add"
        :on-edit="handleAdd"/>
    </div>
  </section>
</template>

<script>
import RestaurantForm from './RestaurantForm';
import { getRestaurants, addRestaurant } from '../services/api';

export default {
  props: ['neighborhoodId'],
  data() {
    return {
      restaurants: null
    };
  },
  components: {
    RestaurantForm
  },
  created() {
    if(!this.neighborhoodId) return;
    getRestaurants(this.neighborhoodId)
      .then(restaurants => {
        this.restaurants = restaurants;
      });
  },
  methods: {
    handleAdd(restaurant) {
      restaurant.neighborhoodId = this.neighborhoodId;
      return addRestaurant(restaurant)
        .then(saved => {
          this.restaurants.push(saved);
        });
    },
  }
};

</script>

<style>

.restaurants {
  margin-top: 15px;
}
</style>