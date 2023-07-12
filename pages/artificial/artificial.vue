<template>
	<view>
		<selfTitle title_name="人工置数" selfUrl="/home/home"></selfTitle>
		<view class="send-message1">
			<view class="send-message-text">发送报文</view>
		</view>
		<view class="send-block">
			<view class="send-block-style">
				<textarea maxlength="-1" class="send-text-style" :placeholder="'示例报文:\nVH\b12344\b\bMA\b123654'" :value="sendText"></textarea>
			</view>
		</view>
		<view class="button-block">
			<view class="button-style">清空报文</view>
			<view class="button-style">发送报文</view>
		</view>
		<view class="send-message2">
			<view class="send-message-text">接收报文</view>
		</view>
		<view class="send-block">
			<view class="send-block-style">
				<textarea maxlength="-1" class="send-text-style" placeholder="暂无接收数据" :value="receiveText"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	export default{
		components: {
			selfTitle,
		},
		data() {
			return {
				sendText: '',
				receiveText: ''
			}
		}
	}
</script>

<style>
	@import url("../../static/css/artificial/artificial.css");
</style>