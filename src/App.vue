<template>
  <div id="app">
    <input placeholder="edit me" v-model.number="countitem">
    <counter-group :countitem="countitem"></counter-group>
  </div>
</template>
<script>

import counterGroup from './components/CounterGroup.vue'
export default {
  name: 'app',
  data:function(){
    return{
      countitem:0,
    };
  },
   methods:{
   },
   components: {
    counterGroup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
