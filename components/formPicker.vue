<template>
	<view>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="isNessary" class="form_picker_plus">*</view>
				<view class="form_picker_name">{{picker_name + ':'}}</view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindPickerChange" :value="changeValue" :range="listArray">
					<view class="form_picker_self">{{listArray[changeValue]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"formPicker",
		// data() {
		// 	return {
		// 		index: 0,
		// 	};
		// },
		props: {
			picker_name: {
			 type: String,
			 required: false,
		   },
			isNessary: {
				type: Boolean,
				required: false
			},
			listArray: {
			 type: Array,
			 required: false,
			 default: []
		   },
			isEdit: {
			 type: Boolean,
			 required: false,
		   },
			changeValue: {
			 type: Number,
			 required: false,
			 default: 0
		   },
		},
		methods:{
			 bindPickerChange: function(e) {
			    this.index = e.detail.value;
				this.$emit('getPickerValue', e.detail.value);
			},
		},
		// created() {
		// 	console.log(this.listArray)
		// 	this.index = this.changeValue;
		// },
		// watch:{
		// 	changeValue(val, valOld){ //深度监听，可监听到对象、数组的变化
		// 	    this.index = val;
		// 		},
		// },
	}
</script>

<style>
	@import url("../static/iconfont.css");
.form_picker_block{
	display: flex;
	margin-bottom: 20rpx;
	width: 88%;
	justify-content: space-between;
	margin-left: 50rpx;
	height: 55rpx;
	font-size: 35rpx;
}
.form_picker_style{
	display: flex;
	align-items: center;
}
.form_picker_plus{
	color: red;
}
.form_picker_name{
	font-size: 30rpx;
	line-height: 30px;
}
.form_picker_frame_block{
	width: 62%;
	border: 1px solid rgb(150, 150, 150);
	border-radius: 3px; 
}
.form_picker_frame{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.form_picker_self{
	height: 100%;
	margin-left: 20rpx;
	font-size: 30rpx;
}
.bottom_icon_style{
	margin-right: 10rpx;
}
</style>