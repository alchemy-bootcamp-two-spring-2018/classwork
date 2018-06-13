<template id="neighborhood-template">
  <div class="form-control">
    <label>
      {{ label }}
    </label>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    label: String,
  }
};

</script>

<style scoped>

.form-control {
  width: 300px;
  text-align: left;
}

label {
  display: block;
  font-weight: bolder;
  margin-top: 10px;
}

</style>
