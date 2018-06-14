<template>
  <RouterLink v-bind="$attrs">
    <span class="nav-link">
      <slot/>
    </span>
  </RouterLink>
</template>

<style scoped>
.nav-link {
  height: 25px;
  background: steelblue;
  color: white;
  padding: 7px;
  text-decoration: none;
}

.router-link-active .nav-link {
  background: lightsteelblue;
}
</style>