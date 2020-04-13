<template>
  <div class="todo-contaiiner">
    <h2>自定义事件传值【适合于子组件向父组件回传数据】,这里改造的是 Head </h2>
    <div class="todo-wrap">

      <Head ref="head" />
      <List :todoL="todos" :deleteTodo="deleteTodo" />
      <Foot :todosfoot="todos" :selectedAll="selectedAll" :deltetAll="deltetAll" />
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
