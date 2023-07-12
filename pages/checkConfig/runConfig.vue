<template>
	<view>
		<selfTitle title_name="查看运行参数" :selfUrl="returnUrl"></selfTitle>
		<formTitle title_name="报文间隔配置配置"></formTitle>
		<view class="form_body1">
			<!-- <formPicker :changeValue="formData1.sendTime" :isEdit="isEdit" :isNessary="true" picker_name="定时报发送间隔" :listArray="timeList" @getPickerValue="bindSendTime"></formPicker> -->
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="true" class="form_picker_plus">*</view>
					<view class="form_picker_name">定时报发送间隔： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindSendTime" :value="formData1.sendTime" :range="timeList">
						<view class="form_picker_self">{{timeList[formData1.sendTime]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
			<!-- <formPicker :changeValue="formData1.sampleTime" :isEdit="isEdit" :isNessary="true" picker_name="采样时间间隔" :listArray="timeList" @getPickerValue="bindSampleTime"></formPicker> -->
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="true" class="form_picker_plus">*</view>
					<view class="form_picker_name">采样时间间隔： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindSampleTime" :value="formData1.sampleTime" :range="timeList">
						<view class="form_picker_self">{{timeList[formData1.sampleTime]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
			<!-- <formPicker :changeValue="formData1.saveTime" :isEdit="isEdit" :isNessary="true" picker_name="数据存储间隔" :listArray="timeList" @getPickerValue="bindSaveTime"></formPicker> -->
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="true" class="form_picker_plus">*</view>
					<view class="form_picker_name">数据存储间隔： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindSaveTime" :value="formData1.saveTime" :range="timeList">
						<view class="form_picker_self">{{timeList[formData1.saveTime]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
		</view>
		
		<formTitle title_name="降水相关配置"></formTitle>
		<view class="form_body1">
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="true" class="form_picker_plus">*</view>
					<view class="form_picker_name">降水量日起始时间： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindStartTime" :value="startTime" :range="startTimeList">
						<view class="form_picker_self">{{startTimeList[startTime]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="true" class="form_picker_plus">*</view>
					<view class="form_picker_name">雨量计分辨率： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindRate" :value="rate" :range="rateList">
						<view class="form_picker_self">{{rateList[rate]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
			<formInput :initialValue="height1" :isEdit="isEdit" :isNessary="true" input_name="水位高程" @getInputValue="bindHeight1"></formInput>
			<!-- <formInput :initialValue="height2" :isEdit="isEdit" :isNessary="true" input_name="水位高程2" @getInputValue="bindHeight2"></formInput> -->
			<formInput :initialValue="fixHeight1" :isEdit="isEdit" :isNessary="true" input_name="水位修正值" @getInputValue="bindFixHeight1"></formInput>
			<!-- <formInput :initialValue="fixHeight2" :isEdit="isEdit" :isNessary="true" input_name="水位修正值2" @getInputValue="bindFixHeight2"></formInput> -->
		</view>
		<view v-if="isSuper">
			<formTitle title_name="高级配置"></formTitle>
			<view class="form_body1">
				<view class="code_style">
					<view class="form_multi_name1">
						<formInput remarks="说明:范围00-59min,00代表关闭,01代表1分钟" :isRemark="true" :initialValue="plusMessage" :isEdit="isEdit" :isNessary="false" input_name="加报时间间隔" @getInputValue="bindPlusMessage"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickIsPlusMessage">
						<view :class="{'gou': isPlusMessage}"></view>
					</view>
				</view>
				<view class="code_style">
					<view class="form_multi_name1">
						<formInput remarks="说明:范围01-99mm,00代表关闭,01代表1mm" :isRemark="true" :initialValue="formData1.rainWarn" :isEdit="isEdit" :isNessary="false" input_name="雨量报警阈值" @getInputValue="bindRainWarn"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickIsRainWarn">
						<view :class="{'gou': isRainWarn}"></view>
					</view>
				</view>
				<view class="code_style">
					<view class="form_multi_name1">
						<formInput :initialValue="addHeight1" :isEdit="isEdit" :isNessary="false" input_name="加报水位" @getInputValue="bindAddHeight1"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickAddHeight1">
						<view :class="{'gou': isAddHeight1}"></view>
					</view>
				</view>
				<!-- <view class="code_style">
					<view class="form_multi_name1">
						<formInput :initialValue="addHeight2" :isEdit="isEdit" :isNessary="false" input_name="加报水位2" @getInputValue="bindAddHeight2"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickAddHeight2">
						<view :class="{'gou': isAddHeight2}"></view>
					</view>
				</view> -->
				<view class="code_style">
					<view class="form_multi_name1">
						<formInput :initialValue="formData1.waterWarn" :isEdit="isEdit" :isNessary="false" input_name="加报水位以上阈值" @getInputValue="bindWaterWarn"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickWaterWarn">
						<view :class="{'gou': isWaterWarn}"></view>
					</view>
				</view>
				<view class="code_style">
					<view class="form_multi_name1">
						<formInput :initialValue="waterWarn1" :isEdit="isEdit" :isNessary="false" input_name="加报水位以下阈值" @getInputValue="bindWaterWarn1"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickWaterWarn1">
						<view :class="{'gou': isWaterWarn1}"></view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bottom_button_block">
			<view class="bottom_button">
				<view :class="isEdit ? 'bottom_button_style2' : 'bottom_button_style'" @click="changeEdit">修改基本参数</view>
				<view class="bottom_button_style" @click="comfirmBasicConfig">确认基本参数</view>
			</view>
			<view v-if="!isSuper" class="bottom_super_style" @click="showSuper">展开高级参数</view>
			<view v-if="isSuper" class="bottom_super_style" @click="hideSuper">收起高级参数</view>
		</view>
		<view class="zhan"></view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import formTitle from "components/formTitle.vue"
	import formPicker from "components/formPicker.vue"
	import formInput from "components/formInput.vue"
	import utils from '@/pages/index/utils.js'
	import transformFormat from '@/pages/js/transformFormat.js'
	export default {
		components: {
			selfTitle,
			formTitle,
			formPicker,
			formInput
		},
		data() {
			return {
				isEdit: false,
				isShow: false,
				project: {
					id: String,
					name: String
				},
				returnUrl:  {
				  type:String,
				  default:''
				},
				timeList: ['5分钟', '10分钟', '20分钟', '30分钟', '1小时', '2小时', '3小时', '6小时', '12小时', '1天', '2天', '3天', '5天', '10天', '15天', '1个月'],
				formData1: {
					sendTime: 4,
					sampleTime: 0,
					saveTime: 0,
					waterWarn: '99.99',
					rainWarn: '99'
				},
				startTimeList:['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时'],
				startTime: 8,
				rateList:['1mm','0.5mm','0.2mm','0.1mm'],
				rate: 1,
				height1: '0',
				// height2: '0',
				fixHeight1: '0',
				// fixHeight2: '0',
				plusMessage: '0',
				addHeight1: '99.99',
				// addHeight2: '99.99',
				waterWarn1: '0',
				isPlusMessage: false,
				isRainWarn: false,
				isAddHeight1: false,
				// isAddHeight2: false,
				isWaterWarn: false,
				isWaterWarn1: false,
				isSuper: false
			}
		},
		onLoad: function (option) {
			this.project = option;
			if (option.id == 'RTU') {
				this.returnUrl = '/config/readConfig' + '?id=' + option.id + '&name=' + option.name;
			}
			else {
				this.returnUrl = '/config/checkConfig' + '?id=' + option.id + '&name=' + option.name;
			}
		},
		created() {
			utils.importRunConfig(this, uni, this.project.name);
		},
		methods: {
			hideSuper(){
				this.isSuper = false;
			},
			showSuper(){
				this.isSuper = true;
			},
			clickWaterWarn1(){
				if(this.isEdit){
					this.isWaterWarn1 = !this.isWaterWarn1;
				}
			},
			clickWaterWarn(){
				if(this.isEdit){
					this.isWaterWarn = !this.isWaterWarn;
				}
			},
			clickAddHeight1(){
				if(this.isEdit){
					this.isAddHeight1 = !this.isAddHeight1;
				}
			},
			// clickAddHeight2(){
			// 	if(this.isEdit){
			// 		this.isAddHeight2 = !this.isAddHeight2;
			// 	}
			// },
			clickIsRainWarn(){
				if(this.isEdit){
					this.isRainWarn = !this.isRainWarn;
				}
			},
			clickIsPlusMessage(){
				if(this.isEdit){
					this.isPlusMessage = !this.isPlusMessage;
				}
			},
			bindWaterWarn1(data){
				this.waterWarn1 = data;
			},
			bindAddHeight1(data){
				this.addHeight1 = data;
			},
			// bindAddHeight2(data){
			// 	this.addHeight2 = data;
			// },
			bindPlusMessage(data){
				this.plusMessage = data;
			},
			// bindFixHeight2(data){
			// 	this.fixHeight2= data;
			// },
			bindFixHeight1(data){
				this.fixHeight1= data;
			},
			// bindHeight2(data){
			// 	this.height2 = data;
			// },
			bindHeight1(data){
				this.height1 = data;
			},
			bindRate(e){
				this.rate = e.detail.value;
			},
			bindStartTime(e){
				this.startTime = e.detail.value;
			},
			changeEdit(){
				this.isEdit = true;
			},
			bindSendTime(e) {
				this.formData1.sendTime = e.detail.value;
			},
			bindSampleTime(e) {
				this.formData1.sampleTime = e.detail.value;
			},
			bindSaveTime(e) {
				this.formData1.saveTime = e.detail.value;
			},
			bindWaterWarn(data) {
				this.formData1.waterWarn = data;
			},
			bindRainWarn(data) {
				this.formData1.rainWarn = data;
			},
			comfirmBasicConfig() {
				var _this = this;
				this.isEdit = false;
				var temp = transformFormat.runConfigTransform(_this);
				const value = uni.getStorageSync(this.project.name);
				if (value) {
					transformFormat.savePz(temp, uni, value[1], plus, true);
				}
				else {
					transformFormat.savePz(temp, uni, 'param_'+this.project.name, plus, true);
				}
				uni.navigateTo({
				    url: '/pages' + this.returnUrl,
				});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/checkConfig/runConfig.css");
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
	.code_style{
		display: flex;
	}
	.form_multi_name1{
		font-size: 35rpx;
		line-height: 30px;
		width: 120%;
	}
	.form_multi_checkbox1{
		border: 1.5px solid rgb(150, 150, 150);
		border-radius: 7px;
		width: 45rpx;
		height: 35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 30rpx;
		margin-bottom: 20rpx;
	}
	.gou{
		width: 80%;
		height: 80%;
		/* background-image:url('../../static/image/duigou.png'); */
		background-color: black;
		border-radius: 7rpx;
	}
	.bottom_button_block{
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;
		flex-direction: column;
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
</style>