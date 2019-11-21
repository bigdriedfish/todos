<template>
  <li :class="todo.done ? 'completed' : 'active'">
    <input type="checkbox" :checked="todo.done" @click="toggleTodoStatus(todo)" >
    <span v-if="!isEditing" @dblclick="editTodo(idx)">{{todo.content}}</span>
    <input v-else type="text" :value="todo.content" @keyup.enter="changeTodoContent({todo, content:$event.target.value});editTodo(-1)" @blur="changeTodoContent({todo, content:$event.target.value});editTodo(-1)" v-focus>
    <button @click="delTodo(todo)" >&times;</button>
  </li>
</template>
<style scoped>
  li {
     list-style: none;
     padding: 0px;
     margin:0px;
     text-align: center;
  }
</style>>
  

<script>
import { mapMutations } from 'vuex'
export default {
  props: ["todo",'isEditing',"idx"],
  methods: {
    // toggleTodoStatus(e) {
    //   console.log(e);
    //   this.$store.commit("setTodoStatus", {
    //     todo: this.todo,
    //     status: e.target.checked
    //   })
    // },
    
    ...mapMutations({
      editTodo:'editTodo',
			changeTodoContent:'changeTodoContent',
			delTodo:'delTodo',
			toggleTodoStatus:'toggleTodoStatus',
    })
    
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
};
</script>

