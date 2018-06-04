<template>
  <div>
    <input @keypress.enter="onSearch($event.target.value)"/>
  </div>
</template>

<script>

export default {
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  }
};

</script>