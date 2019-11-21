<template>
	<div>
		<span>{{leftCount}} item left</span>
		<div>
			<label><input type="radio" @click="switchCategory('all')" :checked="showingCategory=='all'" class="radio">all</label>
			<label><input type="radio" @click="switchCategory('active')" :checked="showingCategory=='active'" class="radio">active</label>
			<label><input type="radio" @click="switchCategory('completed')" :checked="showingCategory=='completed'" class="radio">completed</label>     
			<button v-if="showClearButton">Clear Completed</button>
		</div>
	</div>
</template>

<style scoped>
	.radio{
		opacity: 0;
	}
</style>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
	methods:{
		switchCategory(category) {
			this.$store.commit ('switchCategory',category)
		},
		...mapMutations({
			clearCompleted:'clearCompleted',
			
		})
	},
	computed:{
		...mapState({
				showingCategory:state => state.showingCategory
			}),
		...mapGetters([
			'showClearButton',
			'leftCount',
		])
	}
}
</script>

//难点:清除已完成，按钮切换，双击修改
