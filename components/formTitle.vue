<template>
	<view>
		<view class="form_title_style">{{title_name}}</view>
		<view class="form_title_line"></view>
	</view>
</template>

<script>
	export default {
		name:"formTitle",
		// data() {
		// 	return {
				
		// 	};
		// },
		props: {
			title_name: {
			 type: String,
			 required: false,
		   },
		}
	}
</script>

<style>
.form_title_style{
	font-size: 40rpx;
	line-height: 30px;
	margin-left: 25rpx;
	margin-top: 40rpx;
}
.form_title_line{
	width: 100%;
	margin-top: 20rpx;
	border: 1.2px solid rgb(196, 196, 196);
	margin-bottom: 10rpx;
}
</style>