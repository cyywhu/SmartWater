<template>
	<view class="content">
		<text class="home_title">清源智慧</text>
		<view class="home_imageblock">
			<image class="home_image" src="../../static/image/1.jpg"></image>
		</view>
		<view class="home_body">
			<view class="home_bodycontent">
				<view class="animated" hover-class="flash">
					<view class="body_block1" @click="goToPath('/config/config')">
						<text class="iconfont icon-peizhi-yunweipeizhi" style="font-size: 100rpx;color: rgb(75, 79, 74);"></text>
						<text class="body_text">RTU配置</text>
					</view>
				</view>
				<view class="animated" hover-class="flash">
					<view class="body_block2" @click="goToPath('/query/query')">
						<text class="iconfont icon-yunwei-xitongjiance" style="font-size: 100rpx;color: rgb(75, 79, 74);"></text>
						<text class="body_text">数据查询</text>
					</view>
				</view>
			</view>
			<view class="home_bodycontent">
				<view class="animated" hover-class="flash">
					<view class="body_block2" @click="goToPath('/artificial/artificial')">
						<text class="iconfont icon-1xitongzhuangtai" style="font-size: 100rpx;color: rgb(75, 79, 74);"></text>
						<text class="body_text">人工置数</text>
					</view>
				</view>
				<view class="animated" hover-class="flash">
					<view class="body_block1" @click="goToPath('/tools/tools')">
						<text class="iconfont icon-yonghuguanli-gongnengfenpei" style="font-size: 100rpx;color: rgb(75, 79, 74);"></text>
						<text class="body_text">工具箱</text>
					</view>
				</view>
			</view>
		</view>
		<view class="personal-center">
			<text class="iconfont icon-xiaoyonghu1" style="font-size: 40rpx;color: rgb(75, 79, 74);"></text>
			<text class="footer_font">个人中心</text>
		</view>
	</view>
</template>

<script>
	import queryMessage from '@/pages/js/queryMessage.js'
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			goToPath(pathStr){
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			}
		},
		created() {
			// 查询基础配置报文测试
			const basicFactorCode = ['0120', '0228', '0310', '0400', '0500', '0600', '0700', '0800', '0900', '0a00', '0b00', '0c08', '0f00'];
			queryMessage.queryMessage(basicFactorCode, '41');
			
			// 查询运行配置报文测试
			const runFactorCode = ['2008', '2108', '2208', '2310', '2408', '2509', '2708', '2823', '301b', '3812', '4012', '4112'];
			queryMessage.queryMessage(runFactorCode, '43');
			
			// 查询渗压和渗流报文测试
			queryMessage.queryMessage([], 'f3');
			
			// 查询实时数据报文测试
			queryMessage.queryMessage([], '37');
			
			uni.openBluetoothAdapter({
				success(res) {
					if(getApp().globalData.deviceId == undefined) {
						plus.nativeUI.toast('请进入工具箱连接蓝牙！');
					}
				},
				fail(res) {
					plus.nativeUI.toast('请打开蓝牙!');
				}
			})
		}
	}
</script>

<style>
	@import url("../../static/css/home/home.css");
	@import url("../../static/iconfont.css");
</style>
