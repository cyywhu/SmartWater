<template>
	<view>
		<selfTitle title_name="数据查询" selfUrl="/home/home"></selfTitle>
		<view class="query-type-block">
			<view :class="queryType ? 'selected-query-type' : 'unselected-query-type'" @click="changeType">查询RTU数据</view>
			<view :class="!queryType ? 'selected-query-type' : 'unselected-query-type'" @click="changeType">查询网关数据</view>
		</view>
		<view v-if="queryType" class="data-type-block">
			<!-- <formPicker :isEdit="true" :isNessary="false" picker_name="选择接收类型" :listArray="list" @getPickerValue='bindDataType'></formPicker> -->
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="false" class="form_picker_plus">*</view>
					<view class="form_picker_name">选择接收类型： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!true" class="form_picker_frame" @change="bindDataType" :value="dataType" :range="list">
						<view class="form_picker_self">{{list[dataType]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view v-if="!queryType" class="data-type-block">
			<!-- <formPicker :isEdit="true" :isNessary="false" picker_name="选择中心网关" :listArray="gateList" @getPickerValue='bindGate'></formPicker> -->
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="false" class="form_picker_plus">*</view>
					<view class="form_picker_name">选择中心网关： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!true" class="form_picker_frame" @change="bindGate" :value="gateValue" :range="gateList">
						<view class="form_picker_self">{{gateList[gateValue]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view v-if="queryType" class="data-body-block">
			<scroll-view :show-scrollbar="true" v-if="dataType == 0" :scroll-top="scrollTop" @scroll="scroll" scroll-y="true" class="scroll-Y">
				<view v-for="item in itemList">
					<view class="data-body">
						<view>
							<!-- <text class="data_plus">*</text> -->
							<text>{{item.name + ':'}}</text>
						</view>
						<view>{{item.value}}</view>
					</view>
				</view>
			</scroll-view>
			<view v-if="dataType == 2">
				<view style="width: 100%;margin-top: 5%;">第一路图片报</view>
				<view style="width: 100%;margin-top: 5%;">
					<image :src="str"></image>
				</view>
				<view style="width: 100%;margin-top: 5%;">第二路图片报</view>
				<view style="width: 100%;margin-top: 5%;">
					<image :src="str1"></image>
				</view>
				<button @click="test">测试</button>
			</view>
		</view>
		<view v-if="!queryType" class="database-title">
			<view class="database-title-block">接收时间</view>
			<view class="database-title-block">数据时间</view>
			<view class="database-title-block">数据类型</view>
			<view class="database-title-block">数据值</view>
		</view>
		<view v-if="databaseData.length == 0 && !queryType" class="data-none">暂无更多数据</view>
		<view v-if="databaseData.length && !queryType" v-for="dataItem in databaseData">
			<view class="database-title">
				<view class="database-title-block">{{dataItem.receiveTime}}</view>
				<view class="database-title-block">{{dataItem.dataTime}}</view>
				<view class="database-title-block">{{dataItem.dataType}}</view>
				<view class="database-title-block">{{dataItem.dataValue}}</view>
			</view>
		</view>
		<view class="edition-block">
			<view class="edition-text">
				<view class="edition">
					<view>遥测站地址：</view>
					<view>{{address}}</view>
				</view>
				<view class="edition">
					<view>RTU版本号：</view>
					<view>{{edition}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import formPicker from "components/formPicker.vue"
	import queryMessage from '@/pages/js/queryMessage.js'
	import pictest from '@/pages/js/test_pic.js'
	import picture from '@/pages/index/picture.js'
	export default{
		components: {
			selfTitle,
			formPicker
		},
		data() {
			return {
				queryType: true,
				list:['实时数据', '接收报文', '实时图片'],
				dataType: 0,
				gateList: ['网关1', '网关2', '网关3'],
				gateValue: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				address: '66666666601',
				edition: 'SW_HEX_V1.0.0',
				itemList: [],
				databaseData: [
					{
						receiveTime: '2022-07-11',
						dataTime: '2022-07-11',
						dataType: 'string',
						dataValue: '222'
					},
					{
						receiveTime: '2092-07-11',
						dataTime: '2022-07-11',
						dataType: 'string',
						dataValue: '222'
					}
				],
				picNum: 0,
				picDataList: Array,
				picData1: '',
				picData2: '',
				str: '',
				str1: ''
			}
		},
		methods: {
			changeType() {
				this.queryType = !this.queryType;
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
			},
			goToPath(pathStr){
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			},
			bindDataType(e){
				this.dataType = e.detail.value;
			},
			bindGate(e) {
				this.gateValue = e.detail.value;
			},
			test(){
				this.chuliOne(pictest.picMessage.reverse());
				this.chuliOne(pictest.pictureData);
			},
			chuliOne(str) {
				var pictureStr = '';
				var gd = 28;
				var bwLength = 3;
				var bwXh = 3;
				var pictureInfo = 53;
				var bwJs = 6;
			
				var gdStr = str[0].substring(0, gd);
				var bwStr = str[0].substring(gd, (gd + bwLength))
				var isOne = str[0].substring(23, 24);
				var temp = this.hexToTwo(isOne).substring(1,2);
				console.log(temp)
				
				pictureStr = str[0].substring((gd + bwLength + pictureInfo), (str[0].length - bwJs))
				if (this.hex2int(bwStr) === str.length) {
					for (var i = 1; i < str.length; i++) {
						pictureStr += str[i].substring(gd + bwLength + bwXh, str[i].length - bwJs);
					}
					pictureStr = picture.hexToBase64(pictureStr);
					if (temp == '1') {
						this.str = "data:image/jpg;base64," + pictureStr;
					}
					else {
						this.str1 = "data:image/jpg;base64," + pictureStr;
					}
				} else {
					plus.nativeUI.toast('报文未获取完整!');
				}
			
			},
			hex2int(hex) {
				var len = hex.length,
					a = new Array(len),
					code;
				for (var i = 0; i < len; i++) {
					code = hex.charCodeAt(i);
					if (48 <= code && code < 58) {
						code -= 48;
					} else {
						code = (code & 0xdf) - 65 + 10;
					}
					a[i] = code;
				}
			
				return a.reduce(function(acc, c) {
					acc = 16 * acc + c;
					return acc;
				}, 0);
			},
			hexToTwo(numMessage) {
				var numM = parseInt(numMessage, 16).toString(2)
				var l = 4 - numM.length;
				for (var i = 0; i < l; i++){
					numM = '0' + numM;
				}
				return numM;
			}
		},
		created() {
			var _this = this;
			queryMessage.queryBack(_this, '7E7E00666000412812343700300201FD210819121033F1F1666000412848F0F02108191145581A0001122019000015272B00000126346033000001234788251A000125261A000012282B0000000022302B0000000033312B0000000014323000000000000135100021361A000321371A001423381002323920000000013A20000222223B20000111113C2000012345442B00000000014610071247100813481A000001491000126828000000001170101234731034210210031203100295061A000123071A000213081A000421091A0005210D1002850E1A0003330F1A0002221010011111100111121001111310011114100111151001111610011117100111181008811908111A1A0001111B1A0001111C1A0001111D1A0001111E1A0001111F1A000222201A000123211A000321221A000321231A000321241A000321054C26');
		}
	}
</script>

<style>
	@import url("../../static/css/query/query.css");
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
</style>