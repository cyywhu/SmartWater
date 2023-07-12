<template>
	<view>	
		<formInput :initialValue="pictureData.stationName" :isEdit="isEdit" :isNessary="true" input_name="测站名称" @getInputValue="bindStationName" :isRemark="false"></formInput>
	</view>
</template>

<script>
	import formInput from "components/formInput.vue"
	export default {
		name:"pictureBlock",
		components: {
			formInput
		},
		props: {
			pictureDataValue: Object,
			isEdit: Boolean
		},
		data() {
			return {
				pictureData: {},
			}
		},
		methods: {
			bindStationName(data) {
				this.pictureData.stationName = data;
				this.$emit('changePictureData', this.pictureData);
			},
			// changeSelect(item) {
			// 	if (this.isEdit) {
			// 		let pos = this.pictureData.plus.indexOf(item);
			// 		if (pos !== -1) {
			// 			var str = '';
			// 			if (this.pictureData.plus.indexOf(' ' + item) !== -1) {
			// 				str = this.pictureData.plus.split(' ' + item);
			// 			}else {
			// 				if (this.pictureData.plus.indexOf(item + ' ') !== -1) {
			// 					str = this.pictureData.plus.split(item + ' ');
			// 				}else {
			// 					str = this.pictureData.plus.split(item);
			// 				}
			// 			}
			// 			this.pictureData.plus = str.join("");
			// 		}
			// 		else {
			// 			if (this.pictureData.plus === '') {
			// 				this.pictureData.plus += item;
			// 			}else {
			// 				this.pictureData.plus += ' ' + item;
			// 			}
			// 		}
			// 		this.$emit('changePictureData', this.pictureData);
			// 	}
			// }
		},
		created() {
			this.pictureData = this.pictureDataValue;
		},
		watch: {
			pictureDataValue(val, valOld) {
				this.pictureData = this.pictureDataValue;
			}
		}
	}
</script>

<style>
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
	.plusContent{
		display: flex;
		font-size: 35rpx;
		margin-left: 50rpx;
		margin-bottom: 20rpx;
	}
	.plusName{
		width: 285rpx;
	}
	.plusValue{
		margin-left: 80rpx;
		margin-right: 20rpx;
		width: 59%;
		font-size: 30rpx;
	}
	.itemBlock{
		display: flex;
		justify-content: space-between;
		margin-left: 50rpx;
		margin-right: 50rpx;
		margin-bottom: 20rpx;
		font-size: 35rpx;
	}
	.itemStyle1{
		width: 250rpx;
		display: flex;
		justify-content: flex-start;
	}
	.itemStyle2{
		width: 250rpx;
		display: flex;
		justify-content: flex-start;
		color: rgb(71, 134, 206);
	}
</style>