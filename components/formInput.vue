<template>
	<view>
		<view class="form_input_block">
			<view class="form_input_style">
				<view v-if="isNessary" class="form_input_plus">*</view>
				<view class="form_input_name">{{input_name + ':'}}</view>
			</view>
			<view class="form_input_frame">
				<input :password="flag" :type='type' :value="initialValue" :disabled="!isEdit" class="form_input_self" @input="onKeyInput" @blur="emitBlur"/>
				<text v-if="isPassWord" @click="changeFlag" :class="flag ? 'iconfont icon-yanjing_yincang' : 'iconfont icon-yanjing_xianshi'" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
			</view>
		</view>
		<view class="remarkStyle" v-if="isRemark">{{remarks}}</view>
	</view>
</template>

<script>
	export default {
		name:"formInput",
		data() {
			return {
				type: '',
				flag: false
			};
		},
		props: {
			input_name:{
			 type: String,
			 required: false,
		   },
			isNessary: {
			 type: Boolean,
			 required: false,
		   },
			isEdit: {
			 type: Boolean,
			 required: false,
		   },
			isRemark:{
			 type: Boolean,
			 required: false,
		   },
			remarks: {
			 type: String,
			 required: false,
		   },
			initialValue: {
			 type: String,
			 required: false,
			 default: ''
		   },
		   isPassWord:{
			   type: Boolean,
			   required: false,
			   default: false
		   }
		},
		created() {
			this.type = this.isPassWord ? 'safe-password' : 'text';
			if (this.isPassWord) {
				this.flag = true;
			}
		},
		methods: {
			onKeyInput(event){
				this.$emit('getInputValue',event.target.value);
			},
			emitBlur(){
				this.$emit('emitBlur');
			},
			changeFlag(){
				if(this.isPassWord){
					this.flag = !this.flag;
				}
			},
		},
		// mounted() {
		// 	this.inputValue = this.initialValue;
		// },
		// watch: {
		// 	initialValue(val, valOld){
		// 		   this.inputValue = val;
		// 	}
		// }
	}
</script>

<style>
.form_input_block{
	display: flex;
	margin-bottom: 20rpx;
	width: 88%;
	justify-content: space-between;
	margin-left: 50rpx;
	font-size: 35rpx;
	height: 55rpx;
}
.form_input_style{
	display: flex;
	align-items: center;
}
.form_input_plus{
	color: red;
}
.form_input_name{
	font-size: 35rpx;
	line-height: 30px;
/* 	display: -webkit-box;
	-webkit-box-orient: vertical; 
	-webkit-line-clamp: 1; 
	overflow: hidden; */
}
.form_input_frame{
	width: 50%;
	border: 1px solid rgb(150, 150, 150);
	border-radius: 3px; 
	display: flex;
	justify-content: center;
}
.form_input_self{
	height: 100%;
	margin-left: 10rpx;
}
.remarkStyle{
	/* margin-bottom: 20rpx; */
	margin-left: 50rpx;
	height: 55rpx;
	color: #4786CE;
	font-size: 30rpx;
}
</style>