<template>
  <div id="counterGroup">
    <input  @input="updateCounterNum" />
    <div v-for="item in getCounterNum" :key="item">
      <counter ref="son" @changeTotal="updateTotal($event)"></counter>
    </div>
    <div>
      <span>Total:{{getTotal}}</span>
    </div>
  </div>
</template>
<script>
import counter from "./Counter.vue";
// import axios from "axios";
export default {
  name: "counterGroup",
  data: function() {
    return {
      counterNum: 0,
      total: 0
    };
  },
  mounted() {
    // const self=this
    // axios
    //   .get("http://localhost:8088/hello")
    //   .then(function(res){
    //     self.info=res.data
    //   });
  },
  computed:{
    getTotal(){
      return this.$store.getters.getTotal
    },
    getCounterNum(){
      return  this.$store.getters.getCounterNum
    }
  },
  components: {
    counter
  },
  methods: {
    updateCounterNum(e) {
      this.$store.commit("updateCounterNum", parseInt(e.target.value));
       this.$nextTick(() => {
          this.$refs.son.forEach(i => (i.count = 0));
        });
    },
    updateTotal(val) {
      this.total = this.total + val;
    },
  
  }
};
</script>


