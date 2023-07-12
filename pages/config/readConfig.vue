<template>
	<view>
		<selfTitle title_name="查看配置文件" selfUrl="/config/config"></selfTitle>
		<view class="step_style">
			<steps :titleList="titleList" activePage=1></steps>
		</view>
		<view class="project_title">
			<text>查看RTU配置文件</text>
		</view>
		<view class="body">
			<view class="body_block">
				<view class="body_button1" @click="goToPath('/checkConfig/basicConfig' + '?id=' + 'RTU' + '&name=' + '查看RTU配置文件')">查看基本参数</view>
				<view style="height: 45rpx;"></view>
				<view class="body_button2" @click="goToPath('/checkConfig/runConfig' + '?id=' + 'RTU' + '&name=' + '查看RTU配置文件')">查看运行参数</view>
				<view style="height: 45rpx;"></view>
				<view class="body_button1" @click="goToPath('/checkConfig/plusConfig' + '?id=' + 'RTU' + '&name=' + '查看RTU配置文件')">查看扩展参数</view>
			</view>
		</view>
		<view class="button-block">
			<!-- <view class="button" @click="goToPath('/home/home')">配置RTU</view> -->
			<view class="button" @click="sendConfig">配置RTU</view>
		</view>
		<view class="title-split">
		    <view class="line1"></view>
		    <text>提示</text>
		    <view class="line2"></view>
		</view>
		<view class="remind">
			<view class="remind1">
				<text class="plus">*</text>
				<text>可以任意顺序查看、修改并确认配置文件，或者直接使用已有方案配置RTU</text>
			</view>
		</view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import steps from "components/steps.vue"
	export default {
		components: {
			selfTitle,
			steps
		},
		data() {
		  return {
			  titleList: [
			  	{
			  		id: 1,
			  		title: '选择配置方式',
			  		url: '/config/config'
			  	},
			  	{
			  		id: 2,
			  		title: '查看配置文件',
			  		url: '/config/readConfig'
			  	}]
		  }
		},
		methods: {
			goToPath(pathStr){
				uni.navigateTo({
					url: '/pages' + pathStr,
				});
			},
			sendConfig() {
				console.log('tes')
				// const value = uni.getStorageSync("under_"+);
			// 	var _this = this;
			// 	_this.$refs.articleSteps.openLoad();
			// 	_this.underFale = false;
			// 	aMessage.dataG0(_this);
			
			// 	var underFale = false;
			// 	var underNub = 0;
			// 	var str = aMessage.getUnderMessage(_this);
			// 	_this.str = str;
			// 	codingElements.monitor01(_this, 1, uni, "underFale");
			// 	underNub++;
				// codingElements.sendData(str, _this, uni);
				// var underInter = setInterval(function() {
				// 	if (!_this.underFale) {
				// 		underNub++;
				// 		codingElements.sendData(str, _this, uni);
				// 	} else {
				// 		underFale = true;
				// 		_this.optionsSendNub = 4;
				// 	}
				// 	console.log(underNub, underFale);
				// 	if (underNub >= 3 || underFale) {
				// 		clearInterval(underInter);
				// 		if (!underFale) {
				// 			aMessage.fun01Error(_this, uni);
				// 		} else {
				// 			aMessage.fun04Success(_this, uni);
				// 		}
				// 	}
				// 	console.log("发送第" + underNub + "次");
				// }, 3000)
			
			}
		}
	}
</script>

<style>
.step_style{
	margin-top: 40rpx;
}
.body{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 505rpx;
	margin-top: 50rpx;
}
.body_block{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 100%;
	background: rgb(255, 255, 255);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
}
.body_button1{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 3px;
	width: 88%;
	height: 105rpx;
	background: rgb(198, 218, 192);
	border-radius: 10px;
}
.body_button2{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 3px;
	width: 88%;
	height: 105rpx;
	background: rgb(192, 209, 223);
	border-radius: 10px;
}
.project_title{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 3px;
	margin-top: 50rpx;
}
.button-block{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 85rpx;
	margin-top: 45rpx;
}
.button{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 80%;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 2px;
	border: 0.5px solid rgb(150, 150, 150);
}
.title-split {
    margin: 48rpx 0 28rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
	color: #585858;
    font-weight: 500;
    font-size: 30rpx;
	letter-spacing: 2px;
	width: 100%;
	margin-top: 65rpx;
	margin-bottom: 15rpx;
}
.line1{
	width: 250rpx;
	height: 4rpx;
	border-radius: 3rpx;
	margin-right: 20rpx;
	background: linear-gradient(90deg, rgba(98, 98, 98, 0) 0%, #333333 100%); 
}
.line2{
	width: 250rpx;
	height: 4rpx;
	border-radius: 3rpx;
	margin-left: 20rpx;
	background: linear-gradient(90deg, #333333 0%, rgba(98, 98, 98, 0) 100%); 
}
.remind{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #585858;
	/* margin-top: 5rpx; */
}
.remind1{
	display: flex;
	width: 83%;
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 2px;
	text-align: center;
	margin-bottom: 25rpx;
}
.remind2{
	display: flex;
	width: 83%;
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 2px;
	text-align: center;
}
.plus{
	color: red;
}
</style>