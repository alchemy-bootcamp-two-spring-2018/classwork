<template>
  <div>
    <h2>People</h2>
    <ul>
      <Person
        v-for="person in people"
        :key="person.url"
        :person="person"
      />
    </ul>
  </div>
</template>

<script>
import Person from './Person';

export default {
  props: ['people'],
  components: {
    Person
  }
};

</script>
