<template name="steps">
	<view class="all">
		<view class="title_style">
			<view v-for="(item, index) in titleList">
				<text @click="goToPath(item.url)" :class="parseInt(activePage) == index ? 'all_words' : ''">{{item.title}}</text>
			</view>
		</view>
		<view class="dot_block">
			<view  v-for="(item, index) in titleList">
				<view class="dot_line">
					
					<view @click="goToPath(item.url)" :class="parseInt(activePage) == index ? 'dot1' : 'dot2'"></view>
					<view v-if="index != titleList.length-1" class="line"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"steps",
		data() {
			return {
				nums: Number = this.titleList.length
			};
		},
		props: {
		    activePage: {
			 type: String,
			 required: false,
		   },
			titleList:{
			 type: Array,
			 required: false,
		   },
		},
		methods: {
			goToPath(pathStr){
				uni.redirectTo({
					url: '/pages' + pathStr,
				})
			}
			
		}
	}
</script>

<style>
.dot_block{
	display: flex;
	margin-top: 15rpx;
}
.title_style{
	width: 90%;
	display: flex;
	justify-content: space-around;
}
.all_words{
	color: rgb(71, 134, 206);
}
.all{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 28rpx;
	line-height: 27px;
	letter-spacing: 2px;
	color: rgb(88, 88, 88);
}
.dot1{
	width: 20rpx;
	height: 20rpx;
	border-radius: 90%;
	background: rgb(71, 134, 206);
}
.dot2{
	width: 20rpx;
	height: 20rpx;
	border-radius: 90%;
	background: rgb(150, 150, 150);
}
.dot_line{
	display: flex;
	justify-content: center;
	align-items: center;
}
.line{
	width: 200rpx;
	height: 0; 
	border: 0.5px solid black;
	margin-right: 20rpx;
	margin-left: 20rpx;
}
</style>