<template>
<div id="counterGroup">
     <div v-for="item in countitem" v-bind:key="item">
         <div>
            <counter></counter>        
          </div>
    </div>
</div>
</template>

<script>
import counter from './Counter.vue'
export default {
  name: 'counterGroup',
  data:function(){
    return{
      count:0
    };
  },
  props:{
      countitem:0
  },
  components: {
    counter
  }
}
</script>


