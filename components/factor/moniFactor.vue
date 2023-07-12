<template>
	<view>
		<!-- <formPicker :initialValue="moniData.factorSymbol" :changeValue="listSymbol.indexOf(moniData.factorSymbol)" :isEdit="true" :isNessary="false" picker_name="要素识别符" :listArray="listSymbol" @getPickerValue='bindfactorSymbol'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="true" class="form_picker_plus">*</view>
				<view class="form_picker_name">要素识别符： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindfactorSymbol" :value="moniData.factorSymbol" :range="listSymbol">
					<view class="form_picker_self">{{listSymbol[moniData.factorSymbol]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<!-- <formPicker :changeValue="listChannel.indexOf(moniData.channel)" :isEdit="true" :isNessary="false" picker_name="通道" :listArray="listChannel" @getPickerValue='bindChannel'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="true" class="form_picker_plus">*</view>
				<view class="form_picker_name">通道： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannel" :value="moniData.channel" :range="listChannel">
					<view class="form_picker_self">{{listChannel[moniData.channel]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<formInput :initialValue="moniData.range" :isEdit="isEdit" :isNessary="false" input_name="量程" @getInputValue="bindRange" :isRemark="true" remarks="说明:范围0000-9999"></formInput>
		<formInput :initialValue="moniData.ratio" :isEdit="isEdit" :isNessary="false" input_name="系数" @getInputValue="bindRatio" :isRemark="true" remarks="说明:范围00.00-99.99"></formInput>
		<formInput :initialValue="moniData.offset" :isEdit="isEdit" :isNessary="false" input_name="偏移量" @getInputValue="bindOffset" :isRemark="true" remarks="说明:范围-99.99-99.99"></formInput>
		<formInput :initialValue="moniData.basic" :isEdit="isEdit" :isNessary="false" input_name="基值" @getInputValue="bindBasic" :isRemark="true" remarks="说明:范围000000.00-999999.99"></formInput>
		<!-- <formPicker :changeValue="listInputRange.indexOf(moniData.inputRange)" :isEdit="true" :isNessary="false" picker_name="输入量程" :listArray="listInputRange" @getPickerValue='bindInputRange'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="true" class="form_picker_plus">*</view>
				<view class="form_picker_name">输入量程： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindInputRange" :value="moniData.inputRange" :range="listInputRange">
					<view class="form_picker_self">{{listInputRange[moniData.inputRange]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	import formPicker from "components/formPicker.vue"
	import formInput from "components/formInput.vue"
	export default {
		name:"moniBlock",
		components: {
			formPicker,
			formInput
		},
		props: {
			moniDataValue: Object,
			isEdit: Boolean
		},
		data() {
			return {
				listSymbol:['断面面积', '瞬时气温', '瞬时水温', '时间步长码 g', '时段长、引排水、抽水历时', '日蒸发量', '当前蒸发', '气压', '闸坝、水库闸门开启高度', '输水设备、闸门(组)编号', '输水设备类别', '水库、闸坝闸门开启孔数', '地温', '地下水瞬时埋深', '波浪高度', '10厘米处土壤含水量', '20厘米处土壤含水量', '30厘米处土壤含水量', '40厘米处土壤含水量', '50厘米处土壤含水量', '60厘米处土壤含水量', '80厘米处土壤含水量', '100厘米处土壤含水量', '湿度', '开机台数', '1小时时段降水量', '2小时时段降水量', '3小时时段降水量', '6小时时段降水量', '12小时时段降水量', '日降水量', '当前降水量', '1分钟时段降水量', '5分钟时段降水量', '10分钟时段降水量', '30分钟时段降水量', '暴雨量', '降水量累计值', '瞬时流量、抽水流量', '取(排）水口流量 1', '取(排）水口流量 2', '取(排）水口流量 3', '取(排）水口流量 4', '取(排）水口流量 5', '取(排）水口流量 6', 
				'取(排)水口流量7', '取(排)水口流量8', '总水库流量、过闸总流量', '输水设备流量、过闸(组)流量', '输沙量', '风向', '风力(级)', '风速', '断面平均流速', '当前瞬时流速', '电源电压', '瞬时河道水位、潮位', '库(闸、站)下水位', '库(闸、站)上水位', '取(排)水口水位1', '取(排)水口水位2', '取(排)水口水位3', '取(排)水口水位4', '取(排)水口水位5', '取(排)水口水位6',
				 '取(排)水口水位7', '取(排)水口水位8', '含沙量', 'pH值', '溶解氧', '电导率', '浊度', '高猛酸盐指数', '氧化还原电位', '氨氮', '总磷', '总氮', '总有机碳', '铜', '锌', '硒', '砷', '总汞', '镉', '铅', '叶绿素a', '水压1', '水压2', '水压3', '水压4', '水压5', '水压6', '水压7', '水压8', '水表1剩余水量', '水表2剩余水量', '水表3剩余水量', '水表4剩余水量', '水表5剩余水量', '水表6剩余水量', '水表7剩余水量', '水表8剩余水量', '水表1每小时水量', '水表2每小时水量', '水表3每小时水量', '水表4每小时水量', '水表5每小时水量', '水表6每小时水量', '水表7每小时水量', '水表8每小时水量', '交流A相电压', '交流B相电压', '交流C相电压', '交流A相电流', '交流B相电流', '交流C相电流', '太阳能电池板电压—广西', '信号强度-广西', '信号强度1-湖南', '信号强度2-湖南', '图片信息', '1小时内每5分钟雨量', '1小时内每5分钟相对水位1', '1小时内每5分钟相对水位2', '1小时内每5分钟相对水位3', '信号强度', '误码率'
				],
				moniData: {},
				listChannel: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
				listInputRange: ['4-20MA', '0-20MA']
			}
		},
		methods: {
			bindfactorSymbol(e) {
				this.moniData.factorSymbol = e.detail.value;
				this.$emit('changeMoniData', this.moniData);
			},
			bindChannel(e) {
				this.moniData.channel = e.detail.value;
				this.$emit('changeMoniData', this.moniData);
			},
			bindRange(data) {
				this.moniData.range = data;
				this.$emit('changeMoniData', this.moniData);
			},
			bindRatio(data) {
				this.moniData.ratio = data;
				this.$emit('changeMoniData', this.moniData);
			},
			bindOffset(data) {
				this.moniData.offset = data;
				this.$emit('changeMoniData', this.moniData);
			},
			bindBasic(data) {
				this.moniData.basic = data;
				this.$emit('changeMoniData', this.moniData);
			},
			bindInputRange(e) {
				this.moniData.inputRange = e.detail.value;
				this.$emit('changeMoniData', this.moniData);
			}
		},
		mounted() {
			this.moniData = this.moniDataValue;
		},
		watch: {
			moniDataValue(val, valOld) {
				this.moniData = this.moniDataValue;
			}
		}
	}
</script>

<style>
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
</style>