<template>
	<view>
		<view>{{resInfo}}</view>
		<button @click="fileReader('config.txt')">0</button>
		<button @click="fileWriter('config',arr)">1</button>
		<l-file ref="lFile" :logo="logo" @up-success="onSuccess" style="margin-top: 20%;"></l-file>

		<view class="padding text-center">
			<view class="padding">
				<button @tap="onDown('config.txt')">下载到本地</button>
				<view class="text-center padding-sm" >{{localPath}}</view>
			</view>
			<view class="padding">
				<button @tap="uploadFile('config.txt')">上传</button>
			</view>
			<view class="padding" style="font-size: 26rpx;text-align: center;">
				<text decode>{{tip}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import aMessage from '../js/aMessage.js';
	import fileOperation from '../js/fileOperation.js';
	export default {
		data() {
			this.api = '';
			return { 
				resInfo: '',
				title: '',
				path: '',
				logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040',
				localPath: '_doc/',
				tip: `
					希望能帮到你\n
					不喜勿喷，不要期待更新，我很懒\n
					`,

				arr: [{
						"under_01": {
							"resInfo": "under_01",
							"title": "",
							"path": "",
							"logo": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040",
							"localPath": "_doc/",
							"tip": "希望能帮到你不喜勿喷，不要期待更新，我很懒"
						}
					},
					{
						"param_01": {
							"resInfo": "param_01",
							"title": "",
							"path": "",
							"logo": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040",
							"localPath": "_doc/",
							"tip": "希望能帮到你不喜勿喷，不要期待更新，我很懒"
						}
					},
					{
						"eleme_01": {
							"resInfo": "eleme_01",
							"title": "",
							"path": "",
							"logo": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040",
							"localPath": "_doc/",
							"tip": "希望能帮到你不喜勿喷，不要期待更新，我很懒"
						}
					}
				]
			}


		},
		onLoad() {
			
		},
		methods: {
			fileReader(fileName){
				fileOperation.fileReader(fileName);
			},
			fileWriter(fileName,arr){
				fileOperation.fileWriter(fileName,arr);
			},
			onDown(fileName){
				fileOperation.downloadFile(this,fileName);
			},
			uploadFile(fileName){
				fileOperation.uploadFile(fileName)
			},
			onSuccess(res){
				console.log(res)
			}
		},
	}
</script>

<style>
</style>
