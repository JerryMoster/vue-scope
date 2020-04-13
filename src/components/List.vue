<template>
  <div>
    <ul class="todo-main">
      <Item v-for="(item,index) in todoL" :key="index" :index="index" :todo="item" :deleteT="deleteTodo" />
    </ul>
  </div>
</template>

<script>
import Item from './Item'

export default {
  props: {
    todoL: Array,
    deleteTodo: Function
  },
  data () {
    return {

    }
  },
  computed: {

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
    Item
  }
}
</script>

<style lang="scss" scoped>
</style>
