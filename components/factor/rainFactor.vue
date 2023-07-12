<template>
	<view>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">要素识别符： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindfactorSymbol2" :value="rainData.factorSymbol" :range="listSymbol">
					<view class="form_picker_self">{{listSymbol[rainData.factorSymbol]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<formInput :initialValue="rainData.rainInitial" :isEdit="isEdit" :isNessary="false" input_name="雨量初始值" @getInputValue="bindRainInitial" :isRemark="true" remarks="说明:初始值输入范围,0~6553.5"></formInput>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">雨量计分辨率 </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindRainRate" :value="rainData.rainRate" :range="listRainRate">
					<view class="form_picker_self">{{listRainRate[rainData.rainRate]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	import formInput from "components/formInput.vue"
	export default {
		name:"rainBlock",
		components: {
			formInput
		},
		props: {
			rainDataValue: Object,
			isEdit: Boolean
		},
		data() {
			return {
				rainData: {},
				listSymbol:['断面面积', '瞬时气温', '瞬时水温', '时间步长码 g', '时段长、引排水、抽水历时', '日蒸发量', '当前蒸发', '气压', '闸坝、水库闸门开启高度', '输水设备、闸门(组)编号', '输水设备类别', '水库、闸坝闸门开启孔数', '地温', '地下水瞬时埋深', '波浪高度', '10厘米处土壤含水量', '20厘米处土壤含水量', '30厘米处土壤含水量', '40厘米处土壤含水量', '50厘米处土壤含水量', '60厘米处土壤含水量', '80厘米处土壤含水量', '100厘米处土壤含水量', '湿度', '开机台数', '1 小时时段降水量', '2小时时段降水量', '3小时时段降水量', '6小时时段降水量', '12小时时段降水量', '日降水量', '当前降水量', '1分钟时段降水量', '5分钟时段降水量', '10分钟时段降水量', '30分钟时段降水量', '暴雨量', '降水量累计值', '瞬时流量、抽水流量', '取(排）水口流量 1', '取(排）水口流量 2', '取(排）水口流量 3', '取(排）水口流量 4', '取(排）水口流量 5', '取(排）水口流量 6', 
				'取(排)水口流量7', '取(排)水口流量8', '总水库流量、过闸总流量', '输水设备流量、过闸(组)流量', '输沙量', '风向', '风力(级)', '风速', '断面平均流速', '当前瞬时流速', '电源电压', '瞬时河道水位、潮位', '库(闸、站)下水位', '库(闸、站)上水位', '取(排)水口水位1', '取(排)水口水位2', '取(排)水口水位3', '取(排)水口水位4', '取(排)水口水位5', '取(排)水口水位6',
				 '取(排)水口水位7', '取(排)水口水位8', '含沙量', 'pH值', '溶解氧', '电导率', '浊度', '高猛酸盐指数', '氧化还原电位', '氨氮', '总磷', '总氮', '总有机碳', '铜', '锌', '硒', '砷', '总汞', '镉', '铅', '叶绿素a', '水压1', '水压2', '水压3', '水压4', '水压5', '水压6', '水压7', '水压8', '水表1剩余水量', '水表2剩余水量', '水表3剩余水量', '水表4剩余水量', '水表5剩余水量', '水表6剩余水量', '水表7剩余水量', '水表8剩余水量', '水表1每小时水量', '水表2每小时水量', '水表3每小时水量', '水表4每小时水量', '水表5每小时水量', '水表6每小时水量', '水表7每小时水量', '水表8每小时水量', '交流A相电压', '交流B相电压', '交流C相电压', '交流A相电流', '交流B相电流', '交流C相电流', '太阳能电池板电压—广西', '信号强度-广西', '信号强度1-湖南', '信号强度2-湖南', '图片信息', '1小时内每5分钟雨量', '1小时内每5分钟相对水位1', '1小时内每5分钟相对水位2', '1小时内每5分钟相对水位3', '信号强度', '误码率'
				],
				listRainRate: ['1mm', '0.5mm', '0.2mm', '0.1mm']
			}
		},
		methods: {
			bindfactorSymbol2(e) {
				this.rainData.factorSymbol = e.detail.value;
				this.$emit('changeRainData', this.rainData);
			},
			bindRainInitial(data) {
				this.rainData.rainInitial = data;
				this.$emit('changeRainData', this.rainData);
			},
			bindRainRate(e) {
				this.rainData.rainRate = e.detail.value;
				this.$emit('changeRainData', this.rainData);
			}
		},
		created() {
			this.rainData = this.rainDataValue;
		},
		watch: {
			rainDataValue(val, valOld) {
				this.rainData = this.rainDataValue;
			}
		}
	}
</script>

<style>
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
</style>