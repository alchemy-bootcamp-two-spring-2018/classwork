<template>
  <div v-if="quadrant !== null">
    <h2>{{ quadrant.name }}</h2>
    <h3>{{ quadrant.direction }}</h3>
    <nav>
      <router-link :to="`/quadrants/${quadrant.id}/list`">list</router-link>
      &nbsp;
      <router-link :to="`/quadrants/${quadrant.id}/map`">map</router-link>
      &nbsp;
      <router-link :to="`/quadrants/${quadrant.id}/new`">add a new neighborhood</router-link>
    </nav>

    <router-view 
      :neighborhoods="quadrant.neighborhoods"
      :quadrantId="quadrant.id"
    ></router-view>
  
  </div>
</template>

<script>
import { getQuadrant } from '../services/api';

export default {
  data() {
    return {
      quadrant: null
    };
  },
  created() {
    getQuadrant(this.$route.params.id)
      .then(quadrant => {
        this.quadrant = quadrant;
      });
  }

};

</script>

<style scoped>
pre {
  text-align: left;
}
</style>
