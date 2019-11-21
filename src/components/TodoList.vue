<template>
	<ul :style="ulStyle">
		<TodoItem :key="idx" v-for="(todo, idx) of todos" :isEditing="idx == editingIndex" :idx="idx" :todo="todo" />
	</ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
import { mapState,mapGetters } from 'vuex'
export default {
	
	computed:{
		...mapGetters({
				todos: 'showingTodos',
			}),
		...mapState({
			editingIndex: 'editingIndex',
			showingCategory:'showingCategory',
		}),
	},
	components:{
		TodoItem,
	}
}
</script>

