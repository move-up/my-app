<template>
  <!-- todo item !--> 
  <li class="item" :style="{fontSize: liSize + 'px'}">
    <label>
      <input type="checkbox" name="check1" v-model="checked">
      <slot name="item" v-bind="{checked}">{{item}}</slot>
    </label>
    <!-- todo: 数据双向绑定1,还有问题未解决 -->
    <!-- <input type="text" v-model="inputValue1">  {{inputValue1}} -->
    <!-- todo: 数据双向绑定2 -->
    <input type="text" :value="inputValue2" @input="deliverValue2"> {{inputValue2}}
    <button @click="addFontSize">字号放大</button>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: false
    },
    liSize: {
      type: Number,
      required: false
    },
    // value: {
    //   type: String,
    //   required: false
    // },
    inputValue2: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      checked: false
    }
  },
  computed: {
    // inputValue1: {
    //   get () {
    //     console.log(1+this.value)
    //     return this.value
    //   },
    //   set (val) {
    //     console.log(2+val)
    //     this.$emit('input', val)
    //   }
    // }
  },
  methods: {
    changeState () {
      this.checked = !this.checked
    },
    addFontSize () {
      this.$emit('addSize', 1)
    },
    deliverValue2 (e) {
      this.$emit('deliverValue2', e.target.value)
    }
  }
};
</script>

<style scoped>
.item {
  text-align: left;
  list-style: none;
  color: #f90;
}
</style>