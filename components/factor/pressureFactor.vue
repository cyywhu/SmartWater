<template>
	<view>
		<formInput :initialValue="pressureDataValue.cPressure" :isEdit="isEdit" :isNessary="true" input_name="修正参数" @getInputValue="bindCPressure" :isRemark="false"></formInput>
	</view>
</template>

<script>
	import formInput from "components/formInput.vue"
	export default {
		name:"pressureBlock",
		components: {
			formInput
		},
		props: {
			pressureDataValue: Object,
			isEdit: Boolean
		},
		data() {
			return {
				pressureData: {},
			}
		},
		methods: {
			bindCPressure(data){
				this.pressureDataValue.cPressure = data;
				this.$emit('changePressureData', this.pressureData);
			}
		},
		created() {
			this.pressureData = this.pressureDataValue;
		},
		watch: {
			pressureDataValue(val, valOld) {
				this.pressureData = this.pressureDataValue;
			}
		}
	}
</script>

<style>
</style>