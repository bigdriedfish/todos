import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingIndex:-1,
    showingCategory: 'all',
    todos: [{
      content:'eat',
      done:false,
      },{
      content:'drink',
      done:false,
      },{
      content:'sleep',
      done:false,
    }],
    
  },
  getters:{
    showingTodos:state => {
      if (state.showingCategory == 'all'){
        return state.todos
      } else if (state.showingCategory == 'active') {
        return state.todos.filter(todo => !todo.done)
      } else if (state.showingCategory == 'completed') {
        return state.todos.filter(todo => todo.done)
      }
    },
    isAllCompleted:state => state.todos.every(it => it.done),
		showClearButton: state => state.todos.some(it => it.done),
		leftCount:state => state.todos.filter(it => !it.done).length,
  },
  mutations: {
    addTodo(state, content) {
      state.todos.push({
        content,
        done:false,
      })
    },
    setAllDone(state) {
      state.todos.forEach(it => {
        it.done = true
      })
    },
    setAllActive(state) {
      state.todos.forEach(it => {
        it.done = false
      })
    },
    toggleTodoStatus(state, todo) {
      todo.done = !todo.done
    },
    switchCategory(state, category) {
      state.showingCategory = category
    },
    editTodo(state, idx) {
      state.editingIndex = idx
    },
    changeTodoContent(state, {todo, content}) {
      todo.content = content
    },
    delTodo(state,todo) {
      state.todos = state.todos.filter(it => it != todo)
    },
    clearCompleted(state){
      state.todos = state.todos.filter(it => !it.done)
    }
  },
  actions: {
  },
  modules: {
  },
})
