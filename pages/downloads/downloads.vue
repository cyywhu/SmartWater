<template>
	<view>
		<selfTitle title_name="下载配置方案" selfUrl="/tools/tools"></selfTitle>
		<view class="search_block">
			<view class="search_style">
				<input type="text" confirm-type="search" placeholder="请输入配置方案名称" class="search_input" @confirm="search" :focus="true" :value="searchValue" @input="input"/>
				<!-- <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @input="input" clearButton="auto" cancelButton="none" radius="100" /> -->
			</view>
		</view>
		<view class="scroll_block">
			<scroll-view :scroll-top="scrollTop" @scroll="scroll" scroll-y="true" class="scroll-Y">
				<view v-for="(item, index) in itemList" >
					<view @click="selectScroll(index)" :class="selectedRow == index ? 'scroll_words2' : 'scroll_words1'">{{item}}</view>
				</view>
			</scroll-view>
		</view>
		<l-file ref='lFile'></l-file>
		<view class="add_block">
			<view class="add_button" @click="downloadSelectedFile">确认下载该配置方案</view>
		</view>
		
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue";
	import request from '../js/request.js';
	import fileOperation from '../js/fileOperation.js';
	export default{
		components: {
			selfTitle,
		},
		data() {
			return {
				searchValue: '',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				selectedRow: 0,
				itemList:[],
				orginItemList:[],
				ip:'10.254.18.36',
				port:'47531'
			}
		},
		methods: {
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
			selectScroll(i){
				this.selectedRow = i;
			},
			downloadSelectedFile() {
				var _this = this;
				var obj = new Object();
				obj.fale = false;
				fileOperation.downloadFile(_this,_this.itemList[_this.selectedRow].split('.')[0],obj,uni);
				setTimeout(function(){
					if(obj.fale){
						fileOperation.fileReader(_this.itemList[_this.selectedRow].split('.')[0]);
						// setTimeout(function(){
						// 	_this.selectPz();
						// },500)
						// _this.configDownlCancel();	
					}
				},1000)
			}
		},
		// onBackPress() {
		// 	// #ifdef APP-PLUS
		// 	plus.key.hideSoftKeybord();
		// 	// #endif
		// },
		created() {
			var url = 'http://'+this.ip+':'+this.port+'/selectAllFile';
			// var _this = this;
			// uni.request({
			//     url: url, //仅为示例，并非真实接口地址。
			//     data: null,
			// 	method: "GET",
			//     success: (res) => {
			// 		console.log(res);
			// 		// if(res.data.status == 500){
			// 		// 	plus.nativeUI.toast("查询失败！请检查数据库配置。");
			// 		// 	return 
			// 		// }
			//   //       _this.itemList = res.data.fileNameList;
			//     },
			// 	fail: (res) => {
			// 		console.log(res)
			// 	},
			// 	complete: (res) => {
			// 		console.log(res)
			// 	}
			// });
			request.getRequest(url,null,'itemList','fileNameList',this,uni);
			this.orginItemList = this.itemList;
		}
	}
</script>

<style>
@import url("../../static/css/downloads/downloads.css");
</style>