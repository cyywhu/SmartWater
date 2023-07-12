<template>
	<view>
		<formInput :initialValue="flowDataValue.cFlow" :isEdit="isEdit" :isNessary="true" input_name="修正参数" @getInputValue="bindCFlow" :isRemark="false"></formInput>
	</view>
</template>

<script>
	import formInput from "components/formInput.vue"
	export default {
		name:"flowBlock",
		components: {
			formInput
		},
		props: {
			flowDataValue: Object,
			isEdit: Boolean
		},
		data() {
			return {
				flowData: {},
			}
		},
		methods: {
			bindCFlow(data){
				this.flowDataValue.cFlow = data;
				this.$emit('changeFlowData', this.flowData);
			}
		},
		created() {
			this.flowData = this.flowDataValue;
		},
		watch: {
			flowDataValue(val, valOld) {
				this.flowData = this.flowDataValue;
			}
		}
	}
</script>

<style>
</style>