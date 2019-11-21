<template>
	<div>
		<input type="checkbox" :checked="isAllDone" @click="toggleAllDone">
		<input type="text" v-model.trim="inputText" @keyup.enter="addTodo" placeholder="请输入待办事项">
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			inputText: ''
		}
	},
	computed: mapState({
		isAllDone: state => state.todos.every(it => it.done)
	}),
	// computed:{
	// 	isAllDone() {
	// 		return this.$store.state.every(it => it.done)
	// 	}
	// },
	methods: {
		toggleAllDone(e) {
			if (e.target.checked) {
				this.$store.commit('setAllDone')
			}	else {
				this.$store.commit('setAllActive')
			}
		},
		addTodo() {
			if(this.inputText){
				this.$store.commit('addTodo', this.inputText)
				this.inputText = ''
			}
		},
	}
}
</script>
