<template>
  <div id="counterGroup">
    <input  v-model.number="counterNumber" @input="updateCounter" placeholder="edit me"  >
    <div v-for="item in counterNumber" :key="item">
      <counter ref="son" @changeTotal="updateTotal($event)"></counter>
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
      counterNumber:0,
      total: 0,
    };
  },
  components: {
    counter
  },
  methods: {
    updateTotal(val) {
        this.total=this.total+val
    },
    updateCounter(){
      this.total=0,
       this.$nextTick(() => {this.$refs.son.forEach(i=>i.count=0)})
    }
  }
};
</script>


