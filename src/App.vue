<template>
  <div id="app">
    <h1>TODOS</h1>
    <TodoInput/>
    <TodoList/>
    <TodoStatus/>
  </div>
</template>
<style scoped>
  h1 {
    color:#FFBF00;
    font-size: 100px;
    box-shadow: 5px 5px 10px #0B2161;
  }
</style>
<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoStatus from './components/TodoStatus.vue'

export default {
  name: 'app',
  components: {
    TodoInput,
    TodoList,
    TodoStatus,
  },
  data() {
    return {
      blink : 'aqua',
      font: 100
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  
}
</style>
