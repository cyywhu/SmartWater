<template>
	<view>
		<selfTitle title_name="查看扩展参数" selfUrl="/newConfig/runConfig" :backConfirm="backConfirm"></selfTitle>
		<formTitle title_name="扩展要素列表"></formTitle>
		<view class="form_body1">
			<formMultiList :isEdit="isEdit" :changeSelectedList="selectedfactors" :items="factors" @changeSelected="bindSelectedFactors" @emitData="bindNowFactor"></formMultiList>
			<view class="add_button_block">
				<view v-if="isEdit" class="add_button" @click="addNewChannel">新增扩展要素信息</view>
			</view>	
		</view>
		<view v-if="showDetailFactor">
			<formTitle title_name="选中要素详细信息"></formTitle>
			<!-- <view v-show="nowFactor.name == '模拟量（端子接入）'">
				<moniBlock :isEdit="isEdit" :moniDataValue="editNowFactor" @changeMoniData="EditNowFactor"></moniBlock>
			</view>
			<view v-show="nowFactor.name == '485通讯MODBUS浮点数'">
				<float485Block :isEdit="isEdit" :float485DataValue="editNowFactor" @changeFloat485Data="EditNowFactor"></float485Block>
			</view>
			<view v-show="nowFactor.name == '485通讯MODBUS整数形'">
				<int485Block :isEdit="isEdit" :int485DataValue="editNowFactor" @changeInt485Data="EditNowFactor"></int485Block>
			</view>
			<view v-show="nowFactor.name == '雨量'">
				<rainBlock :isEdit="isEdit" :rainDataValue="editNowFactor" @changeRainData="EditNowFactor"></rainBlock>
			</view> -->
			<view v-if="nowFactor.name == '图片'">
				<pictureBlock :isEdit="isEdit" :pictureDataValue="editNowFactor" @changePictureData="EditNowFactor"></pictureBlock>
			</view>
			<view v-if="nowFactor.name == '大坝渗压修正值'">
				<pressureBlock :isEdit="isEdit" :pressureDataValue="editNowFactor" @changePressureData="EditNowFactor"></pressureBlock>
			</view>
			<view v-if="nowFactor.name == '大坝渗流修正值'">
				<flowBlock :isEdit="isEdit" :flowDataValue="editNowFactor" @changeFlowData="EditNowFactor"></flowBlock>
			</view>
			<view class="add_button_block">
				<view v-if="isEdit" class="add_button" @click="ConfirmEditFactor">确认更改该扩展要素</view>
				<view v-if="!isEdit" class="add_button" @click="ConfirmEditFactor2">收起该扩展要素</view>
			</view>	
		</view>
		<view v-if="isAddNew">
			<formTitle title_name="新增要素详细信息"></formTitle>
			<view class="form_body1">
				<!-- <formPicker :changeValue="list.indexOf(factorStyle)" :isEdit="true" :isNessary="true" picker_name="接入方式" :listArray="list" @getPickerValue='bindfactorStyle'></formPicker> -->
				<view class="form_picker_block">
					<view class="form_picker_style">
						<view v-if="true" class="form_picker_plus">*</view>
						<view class="form_picker_name">接入方式： </view>
					</view>
					<view class="form_picker_frame_block">
						<picker :disabled="!true" class="form_picker_frame" @change="bindfactorStyle" :value="factorStyle" :range="list">
							<view class="form_picker_self">{{list[factorStyle]}}</view>
							<view class="bottom_icon_style">
								<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
							</view>
						</picker>
					</view>
				</view>
				<!-- <view v-show="factorStyle == 0">
					<moniBlock :isEdit="isEdit" :moniDataValue="moniData" @changeMoniData="bindMoniData"></moniBlock>
				</view>
				<view v-show="factorStyle == 1">
					<float485Block :isEdit="isEdit" :float485DataValue="float485Data" @changeFloat485Data="bindFloat485Data"></float485Block>
				</view>
				<view v-show="factorStyle == 2">
					<int485Block :isEdit="isEdit" :int485DataValue="int485Data" @changeInt485Data="bindInt485Data"></int485Block>
				</view>
				<view v-show="factorStyle == 3">
					<rainBlock :isEdit="isEdit" :rainDataValue="rainData" @changeRainData="bindRainData"></rainBlock>
				</view> -->
				<view v-show="factorStyle == 0">
					<pictureBlock :isEdit="isEdit" :pictureDataValue="pictureData" @changeRainData="bindPictureData"></pictureBlock>
				</view>
				<view v-show="factorStyle == 1">
					<pressureBlock :isEdit="isEdit" :pressureDataValue="pressureData" @changeRainData="bindPressureData"></pressureBlock>
				</view>
				<view v-show="factorStyle == 2">
					<flowBlock :isEdit="isEdit" :flowDataValue="flowData" @changeRainData="bindFlowData"></flowBlock>
				</view>
				<view class="add_button_block">
					<view class="add_button" @click="ConfirmNewChannel">确认新增扩展要素</view>
				</view>	
			</view>
		</view>
		<view class="nextBlock">
			<view class="nextStep" @click="preStep">上一步</view>
			<text>3&nbsp/&nbsp3</text>
			<view class="nextStep" @click="nextPage">配置RTU</view>
		</view>
		<view class="bottom_button_block1">
			<view v-if="!isRead" class="bottom_super_style" @click="readConfig">读取基本配置</view>
			<view v-if="isRead" class="bottom_super_style" @click="backConfig">还原上次保存的配置</view>
		</view>
		<!-- <uni-popup ref="nextPage" type="center"> -->
		<view v-if="isInsert" class="popup_content" >
			<view class="popBlock">
				<view class="popup_view_tilte" style="line-height: 2;">
					<text>填写配置方案名称</text>
				</view>
				<view class="nameBlock">
					<view>名称：</view>
					<view class="inputBlock"><input v-model="tempName"/></view>
				</view>
				<view class="nameBlock">
					<view class="buttonStyle1" @click="isInsert=false">取消</view>
					<view class="buttonStyle2" @click="bindProjectName">确定</view>
				</view>
			</view>
		</view>
		<view class="popup_overlay" v-if="isInsert"></view>
		<!-- </uni-popup> -->
		<view v-if="isSend" class="popup_content" >
			<view class="articleSteps_view">
				<steps :titleList="optionsSend" :activePage="optionsSendNub.toString()"></steps>
				<view class="sendMessageStyle" v-if="!optionsSendFale">{{optionsSendNub === 0 ? '基本配置' : optionsSendNub === 1 ? '运行配置' : '扩展配置'}}发送中...</view>
				<view class="sendMessageStyleS" v-if="optionsSendFale && loadStatus === 0">全部配置发送成功</view>
				<view class="sendMessageStyleF" v-if="optionsSendFale && loadStatus === 2">{{optionsSendNub === 0 ? '基本配置' : optionsSendNub === 1 ? '运行配置' : '扩展配置'}}发送失败</view>
				<button class="loadTopClass" v-if="optionsSendFale" @click="backtoHome" size="mini" type="primary">确定</button>
			</view>
		</view>
		<view class="popup_overlay" v-if="isSend"></view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import formTitle from "components/formTitle.vue"
	import formMultiList from "components/formMultiList.vue"
	import formPicker from "components/formPicker.vue"
	import formInput from "components/formInput.vue"
	import utils from '@/pages/index/utils.js';
	import moniBlock from '@/components/factor/moniFactor.vue'
	import float485Block from '@/components/factor/float485Factor.vue'
	import int485Block from '@/components/factor/int485Factor.vue'
	import rainBlock from '@/components/factor/rainFactor.vue'
	import pictureBlock from '@/components/factor/pictureFactor.vue'
	import transformFormat from '@/pages/js/transformFormat.js'
	import aMessage from '@/pages/js/aMessage.js'
	import codingElements from '@/pages/index/codingElements.js';
	import usteps from '@/uni_modules/uni-steps/components/uni-steps/uni-steps.vue'
	import steps from "components/steps.vue"
	import pressureBlock from '@/components/factor/pressureFactor.vue'
	import flowBlock from '@/components/factor/flowFactor.vue'
	import queryMessage from '@/pages/js/queryMessage.js'
	export default {
		components: {
			steps,
			selfTitle,
			formTitle,
			formMultiList,
			formPicker,
			formInput,
			moniBlock,
			float485Block,
			int485Block,
			rainBlock,
			pictureBlock,
			pressureBlock,
			flowBlock
		},
		data() {
			return {
				isInsert: false,
				isSend: false,
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
				plusFale: false,
				showDetailFactor: false,
				isEdit: true,
				returnUrl: '',
				project: {
					id: String,
					name: "temp"
				},
				tempName: '',
				factors: [],
				selectedfactors: [],
				nowFactor: {},
				editNowFactor: {},
				isAddNew: false,
				list: ['图片', '大坝渗压修正值', '大坝渗流修正值'],
				factorStyle: 0,
				listSymbol:['断面面积', '瞬时气温', '瞬时水温', '时间步长码 g', '时段长、引排水、抽水历时', '日蒸发量', '当前蒸发', '气压', '闸坝、水库闸门开启高度', '输水设备、闸门(组)编号', '输水设备类别', '水库、闸坝闸门开启孔数', '地温', '地下水瞬时埋深', '波浪高度', '10厘米处土壤含水量', '20厘米处土壤含水量', '30厘米处土壤含水量', '40厘米处土壤含水量', '50厘米处土壤含水量', '60厘米处土壤含水量', '80厘米处土壤含水量', '100厘米处土壤含水量', '湿度', '开机台数', '1 小时时段降水量', '2小时时段降水量', '3小时时段降水量', '6小时时段降水量', '12小时时段降水量', '日降水量', '当前降水量', '1分钟时段降水量', '5分钟时段降水量', '10分钟时段降水量', '30分钟时段降水量', '暴雨量', '降水量累计值', '瞬时流量、抽水流量', '取(排）水口流量 1', '取(排）水口流量 2', '取(排）水口流量 3', '取(排）水口流量 4', '取(排）水口流量 5', '取(排）水口流量 6', 
				'取(排)水口流量7', '取(排)水口流量8', '总水库流量、过闸总流量', '输水设备流量、过闸(组)流量', '输沙量', '风向', '风力(级)', '风速', '断面平均流速', '当前瞬时流速', '电源电压', '瞬时河道水位、潮位', '库(闸、站)下水位', '库(闸、站)上水位', '取(排)水口水位1', '取(排)水口水位2', '取(排)水口水位3', '取(排)水口水位4', '取(排)水口水位5', '取(排)水口水位6',
				 '取(排)水口水位7', '取(排)水口水位8', '含沙量', 'pH值', '溶解氧', '电导率', '浊度', '高猛酸盐指数', '氧化还原电位', '氨氮', '总磷', '总氮', '总有机碳', '铜', '锌', '硒', '砷', '总汞', '镉', '铅', '叶绿素a', '水压1', '水压2', '水压3', '水压4', '水压5', '水压6', '水压7', '水压8', '水表1剩余水量', '水表2剩余水量', '水表3剩余水量', '水表4剩余水量', '水表5剩余水量', '水表6剩余水量', '水表7剩余水量', '水表8剩余水量', '水表1每小时水量', '水表2每小时水量', '水表3每小时水量', '水表4每小时水量', '水表5每小时水量', '水表6每小时水量', '水表7每小时水量', '水表8每小时水量', '交流A相电压', '交流B相电压', '交流C相电压', '交流A相电流', '交流B相电流', '交流C相电流', '太阳能电池板电压—广西', '信号强度-广西', '信号强度1-湖南', '信号强度2-湖南', '图片信息', '1小时内每5分钟雨量', '1小时内每5分钟相对水位1', '1小时内每5分钟相对水位2', '1小时内每5分钟相对水位3', '信号强度', '误码率'
				],
				moniData: {
					factorSymbol: 0,
					channel: 0,
					range: '0',
					ratio: '0',
					offset: '0',
					basic: '0',
					inputRange: 0
				},
				float485Data: {
					factorSymbol: 0,
					channel: 0,
					rule: 0,
					check: 0,
					address: '01', 
					functionCode: 0,
					rgHigh: '0',
					rgLow: '0',
					checkType: 0,
					checkTypeValue: 0,
					checkTypeValue2: '0',
					receiveDelay: '30',
					receiveRate: 0,
					receiveOrder: 1,
					receiveCheckOrder: 0
				},
				int485Data: {
					factorSymbol: 0,
					channel: 0,
					rule: 0,
					check: 0,
					address: '01', 
					functionCode: 0,
					rgHigh: '0',
					rgLow: '0',
					readNumber: 0,
					checkType: 0,
					checkTypeValue: 0,
					checkTypeValue2: '0',
					receiveDelay: '30',
					receiveRate: 0,
					receiveOrder: 1,
					receiveCheckOrder: 0
				},
				rainData: {
					factorSymbol: 37,
					rainInitial: '0',
					rainRate: 0
				},
				pictureData: {
					stationName: ''
				},
				pressureData: {
					cPressure: '0.0'
				},
				flowData: {
					cFlow: '0.0'
				},
				isRead: false,
			}
		},
		created() {
			utils.importPlusConfig(this, uni, "temp");
		},
		methods: {
			readConfig(){
				this.isRead = !this.isRead
				// 解析上行基础配置报文
				var _this = this;
				queryMessage.queryBack(_this, '7E7E0066666666011234F38020020000191126151933FF142B0000012340FF152B0000000000FF162B0000000000FF202B0000000022052898')
			},
			backConfig(){
				this.isRead = !this.isRead
				this.factors = [];
				this.selectedfactors = [];
				utils.importPlusConfig(this, uni, "temp");
			},
			preStep(){
				this.comfirmBasicConfig();
				this.goToPath('/newConfig/runConfig')
			},
			bindPressureData(data){
				this.pressureData = data;
			},
			bindFlowData(data){
				this.flowData = data;
			},
			backConfirm(){
				this.comfirmBasicConfig();
			},
			backtoHome(){
				this.isSend=false;
				this.isInsert=false;
				this.goToPath('/home/home');
			},
			bindProjectName(){
				var _this = this;
				const value = uni.getStorageSync(this.tempName);
				console.log(value)
				if(this.tempName == ''){
					plus.nativeUI.toast('配置方案名称不能为空！');
				}
				else if (value) {
					uni.showModal({
						title: '提示',
						content: '配置方案名已存在，是否要覆盖它？',
						showCancel:true,
						success: function (res) {
							if (res.confirm) {
								_this.project.name = _this.tempName;
								_this.comfirmBasicConfig(_this.project.name);
								// _this.$refs.nextPage.close();
								this.isInsert = false;
								_this.sendConfig1();
							} else if (res.cancel) {
								_this.tempName = '';
							}
						}
					});
				}
				else {
					_this.project.name = _this.tempName;
					_this.comfirmBasicConfig(_this.project.name);
					// _this.$refs.nextPage.close();
					_this.isInsert = false;
					_this.sendConfig1();
					// this.goToPath('/home/home');
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
						if (underNub >= 3 || underFale) {
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
						console.log("hhhhhhh"+_this.runFale)
						if (!_this.runFale) {
							runNub++;
							codingElements.sendData(rvalue.str, _this, uni);
						} else {
							runFale = true;
							_this.optionsSendNub = 4;
						}
						if (runNub >= 3 || runFale) {
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
						console.log("hhhhhhh"+_this.plusFale)
						if (!_this.plusFale) {
							plusNub++;
							codingElements.sendData(pvalue.str, _this, uni);
						} else {
							plusFale = true;
							_this.optionsSendNub = 4;
						}
						if (plusNub >= 3 || plusFale) {
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
			goToPath(pathStr){
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			},
			nextPage(){
				if (this.project.name === "temp") {
					// console.log(this.$refs.nextPage);
					// this.$refs.nextPage.open('center')
					this.isInsert = true;
				}
				else {
					console.log('error')
				}
			},
			bindNowFactor(data) {
				this.nowFactor = data;	
				this.editNowFactor = data;
				this.showDetailFactor = true;
				console.log(this.editNowFactor)
			},
			EditNowFactor(data) {
				this.editNowFactor = data;		
			},
			ConfirmEditFactor() {
				let oi = this.factors.indexOf(this.nowFactor);
				let si = this.selectedfactors.indexOf(this.nowFactor);
				this.factors[oi] = this.editNowFactor;
				if (si !== -1) {
					this.selectedfactors[si] = this.editNowFactor;
				}
				this.showDetailFactor = false;
				// console.log(this.selectedfactors);
			},
			ConfirmEditFactor2() {
				this.showDetailFactor = false;
				// console.log(this.selectedfactors);
			},
			bindMoniData(data) {
				this.moniData = data;
			},
			bindFloat485Data(data) {
				this.float485Data = data;
			},
			bindInt485Data(data) {
				this.int485Data = data;
			},
			bindRainData(data) {
				this.rainData = data;
			},
			bindPictureData(data) {
				this.pictureData = data;
			},
			bindPulseData(data) {
				this.pulseData = data;
			},
			changeEdit(){
				this.isEdit = true;
			},
			comfirmBasicConfig(name) {
				var _this = this;
				this.isEdit = false;
				var temp = transformFormat.plusConfigTransform(_this);
				transformFormat.savePz(temp, uni, 'elemen_temp', plus, false);
				uni.setStorage({
					key: name,
					data: ["under_"+name, "param_"+name, "elemen_"+name],
				}); 
				const uvalue = uni.getStorageSync("under_temp");
				const pvalue = uni.getStorageSync("param_temp");

				transformFormat.savePz(uvalue, uni, 'under_'+name, plus, false);
				transformFormat.savePz(pvalue, uni, 'param_'+name, plus, false);
				transformFormat.savePz(temp, uni, 'elemen_'+name, plus, true);
			},
			addNewChannel(){
				this.isAddNew = true;
			},
			bindfactorStyle(e) {
				this.factorStyle = e.detail.value;
			},
			bindSelectedFactors(data) {
				this.selectedfactors = data;
			},
			ConfirmNewChannel() {
				// console.log(this.factorStyle);
				switch(this.factorStyle) {
					// case 0:
					// 	let item1 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.moniData};
					// 	this.factors.push(item1);
					// 	this.selectedfactors.push(item1);
					// 	this.isAddNew = false;
					// 	this.moniData = {
					// 		factorSymbol: 0,
					// 		channel: 0,
					// 		range: '',
					// 		ratio: '',
					// 		offset: '',
					// 		basic: '',
					// 		inputRange: 0
					// 	};
					// 	break;
					// case 1:
					// 	let item2 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.float485Data};
					// 	this.factors.push(item2);
					// 	this.selectedfactors.push(item2);
					// 	this.isAddNew = false;
					// 	this.float485Data = {
					// 		factorSymbol: 0,
					// 		channel: 0,
					// 		rule: 0,
					// 		check: 0,
					// 		address: '01', 
					// 		functionCode: 0,
					// 		rgHigh: '0',
					// 		rgLow: '0',
					// 		checkType: 0,
					// 		checkTypeValue: 0,
					// 		checkTypeValue2: '0',
					// 		receiveDelay: '30',
					// 		receiveRate: 0,
					// 		receiveOrder: 1,
					// 		receiveCheckOrder: 0
					// 	};
					// 	break;
					// case 2:
					// 	let item3 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.int485Data};
					// 	this.factors.push(item3);
					// 	this.selectedfactors.push(item3);
					// 	this.isAddNew = false;
					// 	this.int485Data = {
					// 		factorSymbol: 0,
					// 		channel: 0,
					// 		rule: 0,
					// 		check: 0,
					// 		address: '01', 
					// 		functionCode: 0,
					// 		rgHigh: '0',
					// 		rgLow: '0',
					// 		readNumber: 0,
					// 		checkType: 0,
					// 		checkTypeValue: 0,
					// 		checkTypeValue2: '0',
					// 		receiveDelay: '30',
					// 		receiveRate: 0,
					// 		receiveOrder: 1,
					// 		receiveCheckOrder: 0
					// 	};
					// 	break;
					// case 3:
					// 	let item4 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.rainData};
					// 	this.factors.push(item4);
					// 	this.selectedfactors.push(item4);
					// 	this.isAddNew = false;
					// 	this.rainData = {
					// 		factorSymbol: 37,
					// 		rainInitial: '0',
					// 		rainRate: 0
					// 	};
					// 	break;
					case 0:
						var picNum = 0;
						for(let i in this.selectedfactors){
							if(this.selectedfactors[i].name == '图片'){
								picNum++;
							}
						}
						if(picNum < 2){
							let item5 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.pictureData};
							this.factors.push(item5);
							this.selectedfactors.push(item5);
							this.isAddNew = false;
							this.pictureData = {
								stationName: '',
							};
						}
						else{
							plus.nativeUI.toast('可供配置的图片个数已达到上限！');
						}
						break;
					case 1:
						var pressureNum = 0;
						for(let i in this.selectedfactors){
							if(this.selectedfactors[i].name == '大坝渗压修正值'){
								pressureNum++;
							}
						}
						if (pressureNum < 12) {
							let item6 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.pressureData};
							this.factors.push(item6);
							this.selectedfactors.push(item6);
							this.isAddNew = false;
							this.pressureData = {
								cPressure: '0.0'
							};
						}
						else{
							plus.nativeUI.toast('可供配置的大坝渗压修正值个数已达到上限！');
						}
						break;
					case 2:
						var flowNum = 0;
						for(let i in this.selectedfactors){
							if(this.selectedfactors[i].name == '大坝渗流修正值'){
								flowNum++;
							}
						}
						if(flowNum < 2){
							let item7 = {isShow: true, name: this.list[this.factorStyle], isClicked: true, ...this.flowData};
							this.factors.push(item7);
							this.selectedfactors.push(item7);
							this.isAddNew = false;
							this.flowData = {
								cFlow: '0.0'
							};
						}
						else{
							plus.nativeUI.toast('可供配置的大坝渗流修正值个数已达到上限！');
						}
						break;
					 default: 
					    console.log('hhh');
					    break;
				}
			}
		}
	}
</script>

<style>
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
	@import url("../../static/iconfont.css");
.nextBlock{
	margin-top: 30rpx;
	/* margin-bottom: 50rpx; */
	display: flex;
	/* height: 100rpx; */
	width: 100%;
	font-size: 35rpx;
	letter-spacing: 2px;
	justify-content: space-around;
}
.nextStep{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 190rpx;
	height: 50rpx;
	border: 1.5px solid rgb(71, 134, 206);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	color: rgb(71, 134, 206);
}
.form_body1{
	margin-top: 20rpx;
	width: 100%;
}
.add_button_block{
	display: flex;
	align-items: center;
	justify-content: center;
}
.add_button{
	border: 1px solid rgb(150, 150, 150);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	width: 85%;
	height: 60rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 35rpx;
	line-height: 30px;
	letter-spacing: 2px;
	margin-top: 10rpx;
}
.bottom_button_block{
	display: flex;
	width: 100%;
	justify-content: center;
	/* margin-top: 60rpx; */
}
.bottom_super_style{
	color: rgb(71, 134, 206);
	font-size: 35rpx;
	line-height: 30px;
	border: 1px solid rgb(71, 134, 206);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	height: 50rpx;
	width: 88%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20rpx;
}
.bottom_button{
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.bottom_button_style{
	color: rgb(71, 134, 206);
	font-size: 35rpx;
	line-height: 30px;
	border: 1px solid rgb(71, 134, 206);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	height: 50rpx;
	width: 300rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.zhan{
	height: 50rpx;
}
.bottom_button_style2{
	color: rgb(150, 150, 150);;
	font-size: 35rpx;
	line-height: 30px;
	border: 1px solid rgb(150, 150, 150);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	height: 50rpx;
	width: 300rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bottom_button_block1{
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-bottom: 60rpx;
	flex-direction: column;
}
.popBlock{
	width: 100%;
	height: 18vh;
	background-color: #ffffff;
	border-radius: 12rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.popup_view_tilte {
	width: 100%;
	text-align: center;
	padding-top: 3%;
	font-size: 2vh;
	color: #ffffff;
	height: 25%;
	background-color: rgb(71, 134, 206);
	border-top-left-radius: 12rpx;
	border-top-right-radius: 12rpx;
}
.nameBlock{
	display: flex;
	margin-left: 30rpx; 
	margin-top: 30rpx;
	margin-right: 30rpx; 
	justify-content: space-between;
	width: 75%;
}
.inputBlock{
	width: 75%;
	border: 1px solid rgb(150, 150, 150);
	border-radius: 3px; 
}
.buttonStyle1{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150rpx;
	height: 40rpx;
	border: 1.5px solid rgb(150, 150, 150);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px; 
	margin-right: 30rpx;
}
.buttonStyle2{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150rpx;
	height: 40rpx;
	border: 1.5px solid rgb(150, 150, 150);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px; 
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
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.articleSteps_view{
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
	}
	.sendMessageStyle{
		display: flex;
		justify-content: center;
		font-size: 35rpx;
		line-height: 27px;
		letter-spacing: 2px;
		color: rgb(71, 134, 206);
		margin-top: 5%;
	}
	.sendMessageStyleS{
		display: flex;
		justify-content: center;
		color: rgb(56, 173, 21);
		font-size: 35rpx;
		line-height: 27px;
		letter-spacing: 2px;
		margin-top: 5%;
	}
	.sendMessageStyleF{
		display: flex;
		justify-content: center;
		color: rgb(221, 56, 18);
		font-size: 35rpx;
		line-height: 27px;
		letter-spacing: 2px;
		margin-top: 5%;
	}
	.loadTopClass {
		margin-top: 5%;
	}
</style>