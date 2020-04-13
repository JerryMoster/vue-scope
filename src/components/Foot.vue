<template>
  <div class="app">
    <div class="todo-footer">
      <label for="">
        <input type="checkbox" v-model="isCheck">
      </label>
      <span>
        <span>已完成{{finsihedCount}}件</span>/ 总计{{todosfoot.length}}件
      </span>
      <button class="btn btn-waring" @click="deltetAll">清除已完成的任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    todosfoot: Array,
    selectedAll: Function,
    deltetAll: Function
  },
  data () {
    return {

    }
  },
  computed: {
    finsihedCount () {
      return this.todosfoot.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0)
    },
    // 是否选中
    isCheck: {
      get () {
        return this.finsihedCount === this.todosfoot.length && this.todosfoot.length > 0
      },
      set (value) {
        this.selectedAll(value)
      }
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="app" scoped>
</style>
