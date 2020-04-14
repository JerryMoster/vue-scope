<template>
  <div class="todo-contaiiner">
    <h2>作用域插槽,这里改造的是 Foot </h2>
    <div class="todo-wrap">

      <Head ref="head" />
      <List :todoL="todos" :deleteTodo="deleteTodo" />
      <Foot>
        <input slot="isCheck" type="checkbox" v-model="isCheck">
        <span slot="finish">已完成{{finsihedCount}}件/ 总计{{todos.length}}件</span>
        <button slot="delete" class="btn btn-waring" @click="deltetAll">清除已完成的任务</button>
      </Foot>
    </div>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import List from './components/List.vue'
import Foot from './components/Foot.vue'

// 引入工具类
import localStorageUtils from './utils/localStorageUtils.js'

export default {
  name: 'App',
  data () {
    return {
      todos: localStorageUtils.readTodos()
    }
  },
  computed: {
    finsihedCount () {
      return this.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0)
    },
    // 是否选中
    isCheck: {
      get () {
        return this.finsihedCount === this.todos.length && this.todos.length > 0
      },
      set (value) {
        this.selectedAll(value)
      }
    }
  },
  components: {
    Head,
    List,
    Foot
  },
  mounted () {
    // 绑定自定义事件的监听
    this.$refs.head.$on('addTodo', this.addTodo)
  },
  methods: {
    // 根据索引删除这条纪律
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 插入一条新的数据
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    selectedAll (isCheck) {
      this.todos.forEach(function (todo) {
        todo.finished = isCheck
      })
    },
    // 删除选中的项目
    deltetAll () {
      this.todos = this.todos.filter(todo => !todo.finished)
    }
  },
  watch: {
    // 深度监事
    todos: {
      handler: localStorageUtils.saveTodos,
      deep: true, // 深层次的监视
      immediate: true // 已经来就触发回调函数 handler
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
