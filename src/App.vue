<template>
  <div id="app">
    <counterGroup></counterGroup>
  </div>
</template>
<script>
import counterGroup from "./components/CounterGroup.vue";
export default {
  name: "app",
  data: function() {
    return {};
  },
  methods: {},
  components: {
    counterGroup
  }
};
</script>
