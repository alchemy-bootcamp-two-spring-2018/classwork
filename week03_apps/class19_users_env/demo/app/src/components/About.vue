<template>
  <div>
    <h2>I am the About component</h2>
    <h3>I have cool tabs</h3>
    <Tabs>
      <Tab name="Tab 1">
        <h4>Header for a tab</h4>
        <p>some content on this tab</p>
      </Tab>
      <Tab name="Tab 2">
        <h4>Header for second tab</h4>
        <p>some content on this tab</p>
      </Tab>
      <Tab name="Tab 3">
        <h4>Header for third tab</h4>
        <p>some content on this tab</p>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vue-tabs-component';

export default {
  components: {
    Tabs,
    Tab
  }
};

</script>

<style scoped>

</style>
