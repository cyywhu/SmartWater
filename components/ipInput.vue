<template>
	<view>
		<view class="form_ip_frame">
			<view class="form_ip_style">
				<view class="form_ip_plus">*</view>
				<view class="form_ip_name">{{input_name + ':'}}</view>
			</view>
			<view class="form_ip_input">
				<input :class="{'u-m-l-10': index==3}" class="form_input_self" type="number" maxlength="3" v-model="ipdata[index]"
					 v-for="(item,index) in ipdata" :key="index" :id="index" :focus="focus_index == index"
					 autocomplete="off" autocapitalize="off" autocorrect="off"  @input="funInputPhoneNum" @focus="funFocusInput">
				</input>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"ipInput",
		props:{
			input_name:{
				type: String,
				required: false,
			},
			initialValue: {
				type: String,
				required: false,
				default: ''
			},
			isEdit: {
						 type: Boolean,
						 required: false,
			},
		},
		data() {
			return {
				data1: String,
				data2: String,
				data3: String,
				data4: String,
				ipData: String,
				ipdata: {0:'', 1:'', 2:'', 3:''},
				focus_index: -1,
			};
		},
		created() {
			var d = this.initialValue.split(".");
			this.ipdata[0] = d.length >= 1 ? d[0] : '';
			this.ipdata[1] = d.length >= 2 ? d[1] : '';
			this.ipdata[2] = d.length >= 3 ? d[2] : '';
			this.ipdata[3] = d.length >= 4 ? d[3] : '';
		},
		methods: {
			funInputPhoneNum(e) {
				var index = e.target.id;
				var value = e.detail.value;
				if (index != 4 && value.length == 3) {
					this.focus_index = parseInt(index) + 1
				}
				var result = (this.ipdata[0] ? this.ipdata[0] : '')+'.'+(this.ipdata[1] ? this.ipdata[1] : '')+'.'+(this.ipdata[2] ? this.ipdata[2] : '')+'.'+(this.ipdata[3] ? this.ipdata[3] : '')
				this.$emit('getInputValue',result);
				console.log(result)
			},
			funFocusInput(e){
				// var index = (e.target.id).replace('input-', '');
			},
		},
		watch:{
		    initialValue(newVal,oldVal){
		        this.initialValue = newVal
				var d = this.initialValue.split(".");
				this.ipdata[0] = d.length >= 1 ? d[0] : '';
				this.ipdata[1] = d.length >= 2 ? d[1] : '';
				this.ipdata[2] = d.length >= 3 ? d[2] : '';
				this.ipdata[3] = d.length >= 4 ? d[3] : '';
		    }
		}
	}
</script>

<style>
.form_ip_frame{
	display: flex;
	margin-bottom: 20rpx;
	width: 88%;
	justify-content: space-between;
	margin-left: 50rpx;
	font-size: 35rpx;
	height: 55rpx;
}
.form_ip_style{
	display: flex;
	align-items: center;
}
.form_ip_plus{
	color: red;
}
.form_ip_input{
	display: flex;
	width: 51%;
	border: 1px solid rgb(150, 150, 150);
	border-radius: 3px;
	/* justify-content: space-around; */
	/* margin-left: 20rpx; */
}
.form_input_self{
	height: 100%;
	width: 100%; 
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 10rpx;
}
.form_input_self::after {
    content: '.';
    left: 0;
    top: 50%;
    height: 16px;
	margin-right: 5rpx;
}
.u-m-l-10{
	height: 100%;
	width: 100%; 
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 10rpx;
}
.u-m-l-10::after{
	content: '';
}
.dot_style{
	margin-left: 10rpx;
	margin-right: 10rpx;
}
</style>