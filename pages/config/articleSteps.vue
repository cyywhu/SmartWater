<template>
	<view>
		<uni-popup ref="articleSteps" type="center" :mask-click="false">
			<view class="articleSteps_view">
				<uni-steps style="padding-top: 10%;" :options="optionsSend" :active="optionsSendNub"></uni-steps>
				<uni-load-more class="loadTopClass" :iconSize='35'
					:contentText='{contentdown: "发送成功！",contentrefresh: "发送中...",contentnomore: "发送失败！"}'
					iconType="snow" :status="loadStatus === 1 ? 'loading' : loadStatus === 0 ? 'more' : 'noMore'">
				</uni-load-more>
				<button class="loadTopClass" v-if="optionsSendFale" @click="$refs.articleSteps.close()" size="mini"
					type="primary">确定</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		props: {
			optionsSend: Array,
			optionsSendNub: Number,
			loadStatus: Number,
			optionsSendFale: Boolean
		},
		methods: {
			openLoad() {
				this.$refs.articleSteps.open('center');
			}
		}
	}
</script>

<style>
	.articleSteps_view {
		width: 44vh;
		height: 25vh;
		background-color: #ffffff;
		border-radius: 12rpx;
		text-align: center;
	}

	.loadTopClass {
		margin-top: 3%;
	}
</style>