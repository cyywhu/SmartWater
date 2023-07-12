<template>
	<view>
		<selfTitle title_name="导入配置方案" selfUrl="/config/config"></selfTitle>
		<view class="step_style">
			<steps :titleList="titleList" activePage='1'></steps>
		</view>
		<view class="search_block">
			<view class="search_style">
				<input type="text" confirm-type="search" placeholder="请输入配置方案名称" class="search_input" @confirm="search" :focus="true" :value="searchValue" @input="input"/>
			</view>
		</view>
		<!-- <text class="search-result-text">当前输入为：{{ searchValue }}</text> -->
		<view class="scroll_block">
			<scroll-view :scroll-top="scrollTop" @scroll="scroll" scroll-y="true" class="scroll-Y">
				<view v-for="(item, index) in itemList" >
					<view @longpress="showDelete(item, itemList)" @click="selectScroll(index, item)" :class="selectedRow == index ? 'scroll_words2' : 'scroll_words1'">{{item}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import steps from "components/steps.vue";
	import selfTitle from "components/selfTitle.vue";
	import utils from '@/pages/index/utils.js';
	export default {
	    components: {
			steps,
			selfTitle
		},
	    data() {
	      return {
			  selectedRow: 0,
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
				}],
				searchValue: '',
				// searchValue:{
				// 	type: String,
				// 	default: '',
				// },
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				itemList:[],
				orginItemList:[],
				ip:'10.254.18.22',
				port:'47531'
	      };
	    },
		methods: {
			goToPath(pathStr){
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			},
			search(res) {
				console.log(res.target.value);
				this.itemList = this.orginItemList;
				var temp = [];
				for(var i = 0; i < this.itemList.length; i++) {
					if(this.itemList[i].indexOf(res.target.value) !== -1){
						temp.push(this.itemList[i]);
					}
				}
				this.itemList = temp;
				console.log(temp)
			},
			input(res) {
				// console.log('----input:', res)
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			selectScroll(i, name){
				this.selectedRow = i;
				uni.navigateTo({
				    url: '/pages/config/checkConfig' + '?id=' + i + '&name=' + name,
				});
			},
			showDelete(item, itemList){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '确认删除本行吗？',
					showCancel:true,
					success: function (res) {
						if (res.confirm) {
							uni.removeStorage({
								key: item,
								success: function (res) {
									console.log('success delete 1');
								}
							});
							uni.removeStorage({
								key: 'under_'+item,
								success: function (res) {
									console.log('success delete under_item');
								}
							});
							uni.removeStorage({
								key: 'param_'+item,
								success: function (res) {
									console.log('success delete param_item');
								}
							});
							uni.removeStorage({
								key: 'elemen_'+item,
								success: function (res) {
									console.log('success delete elemen_item');
								}
							});
							itemList.splice(itemList.indexOf(item), 1);
							_this.orginItemList = itemList;
						} else if (res.cancel) {
						}
					}
				});
			}
		},
		// onBackPress() {
		// 	// #ifdef APP-PLUS
		// 	plus.key.hideSoftKeybord();
		// 	// #endif
		// },
		created() {
			// var url = 'http://'+this.ip+':'+this.port+'/selectAllFile';
			utils.getconfigfiles(this, uni);
			this.orginItemList = this.itemList;
			// request.getRequest(url,null,'itemList','fileNameList',this,uni);
		}
	  };
</script>

<style>
	@import url("../../static/css/config/importConfig.css");
</style>