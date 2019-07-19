<template>
  <div id="counterGroup">
    <div v-for="item in countitem" v-bind:key="item">
      <counter @change="updateCounter($event)"></counter>
    </div>
    <div>
    <span>Total:{{total}}</span>
    </div>

  </div>
</template>
<script>
import counter from "./Counter.vue";
export default {
  name: "counterGroup",
  data: function() {
    return {
      count: 0,
      total:0 
    };
  },
  props: {
    countitem: {
      default:0
    }
  },
  components: {
    counter
  },
  methods: {
    updateCounter(val) {
        this.total=this.total+val
    }
  }
};
</script>


