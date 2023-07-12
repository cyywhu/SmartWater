<template>
	<view>
		<selfTitle title_name="查看配置方案" selfUrl="/config/importConfig"></selfTitle>
		<view v-show="isShow">
			<view class="step_style">
				<steps :titleList="titleList" activePage='2'></steps>
			</view>
			<view class="project_title">
				<text>{{project.name}}</text>
			</view>
			<view class="body">
				<view class="body_block">
					<view class="body_button1" @click="goToPath('/checkConfig/basicConfig' + '?id=' + project.id + '&name=' + project.name)">查看基本参数</view>
					<view style="height: 45rpx;"></view>
					<view class="body_button2" @click="goToPath('/checkConfig/runConfig' + '?id=' + project.id + '&name=' + project.name)">查看运行参数</view>
					<view style="height: 45rpx;"></view>
					<view class="body_button1" @click="goToPath('/checkConfig/plusConfig' + '?id=' + project.id + '&name=' + project.name)">查看扩展参数</view>
				</view>
			</view>
			<view class="button-block">
				<view class="button" @click="sendConfig1" >配置RTU</view>
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
		<view v-if="!isShow" class="alert_block">
			<view class="alert_style">
				<view class="warn_style">警告</view>
				<text>您尚未选择配置方案，</text>
				<text>请返回上一页选择配置方案</text>
			</view>
		</view>
		<view v-if="isSend" class="popup_content" >
			<view class="articleSteps_view">
				<steps :titleList="optionsSend" :activePage="optionsSendNub.toString()"></steps>
				<view class="sendMessageStyle" v-if="!optionsSendFale">{{optionsSendNub === 0 ? '基本配置' : optionsSendNub === 1 ? '运行配置' : '扩展配置'}}发送中...</view>
				<view class="sendMessageStyleS" v-if="optionsSendFale && loadStatus === 0">全部配置发送成功</view>
				<view class="sendMessageStyleF" v-if="optionsSendFale && loadStatus === 2">{{optionsSendNub === 0 ? '基本配置' : optionsSendNub === 1 ? '运行配置' : '扩展配置'}}发送失败</view>
				<button class="loadTopClass" v-if="optionsSendFale" @click="isSend=false;" size="mini" type="primary">确定</button>
			</view>
		</view>
		<view class="popup_overlay" v-if="isSend"></view>
	</view>
</template>

<script>
	import steps from "components/steps.vue"
	import selfTitle from "components/selfTitle.vue"
	import aMessage from '@/pages/js/aMessage.js'
	import codingElements from '@/pages/index/codingElements.js';
	import usteps from '@/uni_modules/uni-steps/components/uni-steps/uni-steps.vue'
	export default {
	    components: {
			steps,
			selfTitle,
			usteps
		},
	    data() {
	      return {
			isShow: false,
			selectedRow: 1,
			isSend: false,
	        titleList: [
				{
					title: '选择配置方式',
					url: '/config/config'
				},
				{
					title: '导入配置方案',
					url: '/config/importConfig'
				},
				{
					title: '查看配置文件',
					url: '/config/checkConfig'
				},
			],
			project: {
				id: '1',
				name: 'null'
			},
			optionsSend: [
				{
					title: '基本配置'
				},
				{
					title: '运行配置'
				},
				{
					title: '扩展配置'
				}
			],
			optionsSendNub: 0,
			optionsSendFale: false,
			loadStatus: 1,
			underFale: false,
			runFale: false,
			plusFale: false
		}
	},
	methods: {
		goToPath(pathStr){
			uni.navigateTo({
				url: '/pages' + pathStr,
			});
		},
		sendConfig3() {
			var _this  = this;
			this.isSend = true;
			const kvalue = uni.getStorageSync(this.project.name);
			const pvalue = uni.getStorageSync(kvalue[2]);

			var plusNub = 0;
			var plusFale = false;
			if (pvalue) {
				codingElements.monitor01(_this, 1, uni, "plusFale");
				plusNub++;
				codingElements.sendData(pvalue.str, _this, uni);
				var plusInter = setInterval(function() {
					if (!_this.plusFale) {
						plusNub++;
						codingElements.sendData(pvalue.str, _this, uni);
					} else {
						plusFale = true;
						_this.optionsSendNub = 4;
					}
					if (plusNub >= 10 || plusFale) {
						clearInterval(plusInter);
						if (!_this.plusFale) {
							_this.optionsSendFale = true;
							_this.loadStatus = 2;
							aMessage.fun04Error(_this, uni);
						} else {
							_this.optionsSendFale = true;
							_this.loadStatus = 0;
							aMessage.fun04Success(_this, uni);
						}
					}
					console.log("发送第" + plusNub + "次");
				}, 3000)
			}
		},
		sendConfig2() {
			var _this  = this;
			this.isSend = true;
			const kvalue = uni.getStorageSync(this.project.name);
			const rvalue = uni.getStorageSync(kvalue[1]);
			
			var runNub = 0;
			var runFale = false;
			if (rvalue) {
				codingElements.monitor01(_this, 1, uni, "runFale");
				runNub++;
				codingElements.sendData(rvalue.str, _this, uni);
				var runInter = setInterval(function() {
					if (!_this.runFale) {
						runNub++;
						codingElements.sendData(rvalue.str, _this, uni);
					} else {
						runFale = true;
						_this.optionsSendNub = 4;
					}
					if (runNub >= 10 || runFale) {
						clearInterval(runInter);
						if (!_this.runFale) {
							_this.optionsSendFale = true;
							_this.loadStatus = 2;
							aMessage.fun02Error(_this, uni);
						} else {
							_this.optionsSendNub = 2;
							_this.sendConfig3();
						}
					}
					console.log("发送第" + runNub + "次");
				}, 3000)
			}
		},
		sendConfig1() {
			var _this  = this;
			this.isSend = true;
			const kvalue = uni.getStorageSync(this.project.name);
			const dvalue = uni.getStorageSync(kvalue[0]);
			
			var underNub = 0;
			var underFale = false;
			
			if (dvalue) {
				codingElements.monitor01(_this, 1, uni, "underFale");
				underNub++;
				codingElements.sendData(dvalue.str, _this, uni);
				var underInter = setInterval(function() {
					if (!_this.underFale) {
						underNub++;
						codingElements.sendData(dvalue.str, _this, uni);
					} else {
						underFale = true;
						_this.optionsSendNub = 4;
					}
					if (underNub >= 10 || underFale) {
						clearInterval(underInter);
						if (!_this.underFale) {
							_this.optionsSendFale = true;
							_this.loadStatus = 2;
							aMessage.fun01Error(_this, uni);
						} else {
							// _this.optionsSendFale = true;
							// _this.loadStatus = 0;
							// aMessage.fun04Success(_this, uni);
							_this.optionsSendNub = 1;
							_this.sendConfig2();
						}
					}
					console.log("发送第" + underNub + "次");
				}, 3000)
			}
		},
		
	},
	onLoad: function (option) {
		this.project = option;
		if (option.id) {
			this.isShow = true;
		}
		// console.log(getApp().globalData.text)
	}
}
</script>

<style>
	@import url("../../static/css/config/checkConfig.css");
	.articleSteps_view {
		width: 44vh;
		height: 25vh;
		background-color: #ffffff;
		border-radius: 12rpx;
		text-align: center;
	}
	
	.loadTopClass {
		margin-top: 5%;
	}
	.popup_overlay {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: .80;
		filter: alpha(opacity=88);
	}
	.popup_content {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 680rpx;
		height: 340rpx;
		margin-left: -365rpx;
		margin-top: -270rpx;
		border: 10px solid white;
		background-color: white;
		z-index: 1002;
		overflow: auto;
		border-radius: 20rpx;
	}
	.articleSteps_view{
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
	}
	.sendMessageStyle{
		font-size: 35rpx;
		line-height: 27px;
		letter-spacing: 2px;
		color: rgb(71, 134, 206);
		margin-top: 5%;
	}
	.sendMessageStyleS{
		color: rgb(56, 173, 21);
		font-size: 35rpx;
		line-height: 27px;
		letter-spacing: 2px;
		margin-top: 5%;
	}
	.sendMessageStyleF{
		color: rgb(221, 56, 18);
		font-size: 35rpx;
		line-height: 27px;
		letter-spacing: 2px;
		margin-top: 5%;
	}
</style>