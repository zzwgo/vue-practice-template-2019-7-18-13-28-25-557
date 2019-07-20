<template>
<div id="counter">
    <p>{{count}}</p>
    <button @click="add">add</button>
    <button @click="del">del</button>
</div>
</template>
<script>
export default {
  name: 'counter',
  data:function(){
    return{
      count:0,
      aaaaaaaaaaaaaaaaaaaaaa:1
    };
  },
   methods:{
     add:function(){
       this.count++
       this.$emit('changeTotal', 1)
     },
     del:function(){
       this.count--
         this.$emit('changeTotal', -1)
     } 
   }
}
</script>


