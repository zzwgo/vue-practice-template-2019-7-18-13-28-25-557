<template>
  <div id="app">
     <p id="myId" ref="myId">{{count}}</p>
  <button v-on:click="add">点我+</button>
  <button v-on:click="del">点我-</button>
  <button v-on:click="test">文本</button>
  </div>
</template>

<script>

export default {
  name: 'app',
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
     } ,
     test:function(){
        this.$refs.myId.innerText ="hello";
     }
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
