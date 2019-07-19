<template>
  <div id="counterGroup">
    <div v-for="(item, index) in countitem" v-bind:key="item">
      <counter @change="(val) => {updateCounter(index, val)}"></counter>
    </div>
  </div>
</template>

<script>
import counter from "./Counter.vue";
export default {
  name: "counterGroup",
  data: function() {
    return {
      count: 0
    };
  },
  props: {
    countitem: 0
  },
  components: {
    counter
  },
  methods: {
    updateCounter(index, val) {
        console.log(index, val)
    }
  }
};
</script>


