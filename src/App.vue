<template>
  <div id="app">
    {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="handlerClick">添加</button>
    </div>
    <ul>
      <todo-item  v-for="(item,index) in list" :key="index">
        <template v-slot:item="itemProps">
          <span :style="{fontSize: '20px',color: itemProps.checked ? '#f90' : '#ccc'}">{{item}}</span>
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
      list: []
    };
  },
  components: {
    TodoItem
  },
  methods: {
    handlerClick() {
      this.list.push(this.info);
      this.info = "";
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
