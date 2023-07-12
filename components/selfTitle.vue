<template>
	<view>
		<view class="title_block">
			<image src="../static/image/leftArrow.png" class="image" @click="goToPath(selfUrl)"></image>
			<view class="title_font">{{title_name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"selfTitle",
		data() {
			return {
				
			};
		},
		props: {
			title_name: {
			 type: String,
			 required: false,
		   },
			selfUrl: {
			 type: String,
			 required: false,
		   },
		   backConfirm: {
				type: Function,
				required: false,
		        default: () => {
		           return Function;
		        },
		    },
		},
		methods: {
			goToPath(pathStr){
				this.backConfirm();
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			},
		}
	}
</script>

<style>
.image{
	height: 35rpx;
	width: 35rpx;
	margin-top: 78rpx;
	margin-left: 30rpx;
/* 	position: fixed;
	left: 30rpx; */
}
.title_block{
	display: flex;
	justify-content: space-between;
	background: rgb(239, 239, 239);
	width: 100%;
	height: 150rpx;
}
.title_font{
	font-size: 35rpx;
	line-height: 30px;
	letter-spacing: 2px;
	margin-top: 70rpx;
	font-weight: 600;
	width: 250rpx;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	margin-right:  calc(59% - 200rpx);;
}
</style>