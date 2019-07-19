<template>
<div id="counter">
    <p>{{count}}</p>
    <button v-on:click="add">add</button>
    <button v-on:click="del">del</button>
</div>
</template>
<script>
export default {
  name: 'counter',
  data:function(){
    return{
      count:0
    };
  },
   methods:{
     add:function(){
       this.count++
     },
     del:function(){
       this.count--
     } 
   }
}
</script>


