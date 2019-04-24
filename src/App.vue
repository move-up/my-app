<template>
  <div id="app">
    {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="handlerClick">添加</button>
    </div>
    <ul>
      <!-- todo item  -->
      <todo-item  
      v-for="(item,index) in list" :key="index" 
      :liSize="FontSize" @addSize="addSize" 
      :inputValue2="inputValue2" @deliverValue2="getValue2">
      <!-- :inputValue1="inputValue1" @input="getValue1"  -->
        <template v-slot:item="itemProps">
          <span :style="{color: itemProps.checked ? '#f90' : '#ccc'}">{{item}}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "hello world!",
      info: "",
      list: [],
      FontSize: 14,
      inputValue1: '默认值1',
      inputValue2: '默认值2',
    };
  },
  components: {
    TodoItem
  },
  methods: {
    handlerClick() {
      this.list.push(this.info);
      this.info = "";
    },
    addSize (val) {
      this.FontSize += val
    },
    getValue1 (val) {
      this.inputValue1 = val
    },
    getValue2 (val) {
      this.inputValue2 = val
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
