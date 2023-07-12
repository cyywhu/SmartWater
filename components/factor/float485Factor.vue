<template>
	<view>
		<!-- <formPicker :changeValue="listSymbol.indexOf(float485Data.factorSymbol)" initialValue="pH值" :isEdit="true" :isNessary="false" picker_name="要素识别符" :listArray="listSymbol" @getPickerValue='bindfactorSymbol2'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">要素识别符： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindfactorSymbol2" :value="float485Data.factorSymbol" :range="listSymbol">
					<view class="form_picker_self">{{listSymbol[float485Data.factorSymbol]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<!-- <formPicker :changeValue="listChannel2.indexOf(float485Data.channel)" :isEdit="true" :isNessary="false" picker_name="通道" :listArray="listChannel2" @getPickerValue='bindChannel2'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">通道： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannel2" :value="float485Data.channel" :range="listChannel2">
					<view class="form_picker_self">{{listChannel2[float485Data.channel]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<!-- <formPicker :changeValue="listRule.indexOf(float485Data.rule)" :isEdit="true" :isNessary="false" picker_name="数据寄存器读取规则" :listArray="listRule" @getPickerValue='bindRule'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">数据寄存器读取规则： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindRule" :value="float485Data.rule" :range="listRule">
					<view class="form_picker_self">{{listRule[float485Data.rule]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<!-- <formPicker :changeValue="listCheck.indexOf(float485Data.check)" :isEdit="true" :isNessary="false" picker_name="485通讯波特率+验位" :listArray="listCheck" @getPickerValue='bindCheck'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">485通讯波特率+验位： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindCheck" :value="float485Data.check" :range="listCheck">
					<view class="form_picker_self">{{listCheck[float485Data.check]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<formInput :initialValue="float485Data.address" :isEdit="isEdit" :isNessary="false" input_name="设备地址" @getInputValue="bindAddress" :isRemark="false"></formInput>
		<!-- <formPicker :changeValue="listCode.indexOf(float485Data.functionCode)" :isEdit="true" :isNessary="false" picker_name="功能码" :listArray="listCode" @getPickerValue='bindCode'></formPicker> -->
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">功能码： </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindCode" :value="float485Data.functionCode" :range="listCode">
					<view class="form_picker_self">{{listCode[float485Data.functionCode]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<formInput :initialValue="float485Data.rgHigh" :isEdit="isEdit" :isNessary="false" input_name="寄存器位置高字节" @getInputValue="bindRgHigh" :isRemark="false"></formInput>
		<formInput :initialValue="float485Data.rgLow" :isEdit="isEdit" :isNessary="false" input_name="寄存器位置低字节" @getInputValue="bindRgLow" :isRemark="false"></formInput>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">发送数据校验码类型 </view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindCheckType" :value="float485Data.checkType" :range="listCheckType">
					<view class="form_picker_self">{{listCheckType[float485Data.checkType]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<view v-if="float485Data.checkType === 0">
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="false" class="form_picker_plus">*</view>
					<view class="form_picker_name">CRC校验 </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindCheckTypeValue" :value="float485Data.checkTypeValue" :range="listCheckTypeValue">
						<view class="form_picker_self">{{listCheckTypeValue[float485Data.checkTypeValue]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view v-if="float485Data.checkType === 1">
			<formInput :initialValue="float485Data.checkTypeValue2" :isEdit="isEdit" :isNessary="false" input_name="固定码" @getInputValue="bindCheckTypeValue2" :isRemark="false"></formInput>
		</view>
		<formInput :initialValue="float485Data.receiveDelay" :isEdit="isEdit" :isNessary="false" input_name="接收延迟" @getInputValue="bindReceiveDelay" :isRemark="true" remarks="说明:01-99s,01代表0.1秒"></formInput>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">接收数据分辨率</view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindReceiveRate" :value="float485Data.receiveRate" :range="listReceiveRate">
					<view class="form_picker_self">{{listReceiveRate[float485Data.receiveRate]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">接收数据顺序</view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindReceiveOrder" :value="float485Data.receiveOrder" :range="listReceiveOrder">
					<view class="form_picker_self">{{listReceiveOrder[float485Data.receiveOrder]}}</view>
					<view class="bottom_icon_style">
						<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
					</view>
				</picker>
			</view>
		</view>
		<view class="form_picker_block">
			<view class="form_picker_style">
				<view v-if="false" class="form_picker_plus">*</view>
				<view class="form_picker_name">接收数据校验码顺序</view>
			</view>
			<view class="form_picker_frame_block">
				<picker :disabled="!isEdit" class="form_picker_frame" @change="bindReceiveCheckOrder" :value="float485Data.receiveCheckOrder" :range="listCheckTypeValue">
					<view class="form_picker_self">{{listCheckTypeValue[float485Data.receiveCheckOrder]}}</view>
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
		name:"float485Block",
		components: {
			formPicker,
			formInput
		},
		props: {
			float485DataValue: Object,
			isEdit: Boolean
		},
		data() {
			return {
				float485Data: {},
				listSymbol:['断面面积', '瞬时气温', '瞬时水温', '时间步长码 g', '时段长、引排水、抽水历时', '日蒸发量', '当前蒸发', '气压', '闸坝、水库闸门开启高度', '输水设备、闸门(组)编号', '输水设备类别', '水库、闸坝闸门开启孔数', '地温', '地下水瞬时埋深', '波浪高度', '10厘米处土壤含水量', '20厘米处土壤含水量', '30厘米处土壤含水量', '40厘米处土壤含水量', '50厘米处土壤含水量', '60厘米处土壤含水量', '80厘米处土壤含水量', '100厘米处土壤含水量', '湿度', '开机台数', '1小时时段降水量', '2小时时段降水量', '3小时时段降水量', '6小时时段降水量', '12小时时段降水量', '日降水量', '当前降水量', '1分钟时段降水量', '5分钟时段降水量', '10分钟时段降水量', '30分钟时段降水量', '暴雨量', '降水量累计值', '瞬时流量、抽水流量', '取(排）水口流量 1', '取(排）水口流量 2', '取(排）水口流量 3', '取(排）水口流量 4', '取(排）水口流量 5', '取(排）水口流量 6', 
				'取(排)水口流量7', '取(排)水口流量8', '总水库流量、过闸总流量', '输水设备流量、过闸(组)流量', '输沙量', '风向', '风力(级)', '风速', '断面平均流速', '当前瞬时流速', '电源电压', '瞬时河道水位、潮位', '库(闸、站)下水位', '库(闸、站)上水位', '取(排)水口水位1', '取(排)水口水位2', '取(排)水口水位3', '取(排)水口水位4', '取(排)水口水位5', '取(排)水口水位6',
				 '取(排)水口水位7', '取(排)水口水位8', '含沙量', 'pH值', '溶解氧', '电导率', '浊度', '高猛酸盐指数', '氧化还原电位', '氨氮', '总磷', '总氮', '总有机碳', '铜', '锌', '硒', '砷', '总汞', '镉', '铅', '叶绿素a', '水压1', '水压2', '水压3', '水压4', '水压5', '水压6', '水压7', '水压8', '水表1剩余水量', '水表2剩余水量', '水表3剩余水量', '水表4剩余水量', '水表5剩余水量', '水表6剩余水量', '水表7剩余水量', '水表8剩余水量', '水表1每小时水量', '水表2每小时水量', '水表3每小时水量', '水表4每小时水量', '水表5每小时水量', '水表6每小时水量', '水表7每小时水量', '水表8每小时水量', '交流A相电压', '交流B相电压', '交流C相电压', '交流A相电流', '交流B相电流', '交流C相电流', '太阳能电池板电压—广西', '信号强度-广西', '信号强度1-湖南', '信号强度2-湖南', '图片信息', '1小时内每5分钟雨量', '1小时内每5分钟相对水位1', '1小时内每5分钟相对水位2', '1小时内每5分钟相对水位3', '信号强度', '误码率'
				],
				listChannel2: ['RS485_1', 'RS485_2'],
				listRule: ['01', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
				listCheck: ['奇校验(115200波特)', '无校验(115200波特)', '偶校验(115200波特)', '奇校验(9600波特)', '无校验(9600波特)', '偶校验(9600波特)'],
				listCode: ['03','04'],
				listCheckType: ['CRC校验', '固定码'],
				listCheckTypeValue: ['低位在前，高位在后', '高位在前，低位在后'],
				listReceiveRate: ['不处理', '除以10', '除以100', '除以1000', '除以3600', '除以10000', '乘以10', '乘以100', '乘以1000', '乘以3600', '乘以10000'],
				listReceiveOrder: ['3210', '0123', '2301', '1032'],
			}
		},
		methods: {
			bindfactorSymbol2(e) {
				this.float485Data.factorSymbol = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindChannel2(e) {
				this.float485Data.channel = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindRule(e) {
				this.float485Data.rule = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindCheck(e) {
				this.float485Data.check = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindAddress(data) {
				this.float485Data.address = data;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindCode(e) {
				this.float485Data.functionCode = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindRgHigh(data) {
				this.float485Data.rgHigh = data;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindRgLow(data) {
				this.float485Data.rgLow = data;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindCheckType(e) {
				this.float485Data.checkType = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindCheckTypeValue(e) {
				this.float485Data.checkTypeValue = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindCheckTypeValue2(data) {
				this.float485Data.checkTypeValue2 = data;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindReceiveDelay(data) {
				this.float485Data.receiveDelay = data;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindReceiveRate(e) {
				this.float485Data.receiveRate = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindReceiveOrder(e) {
				this.float485Data.receiveOrder = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			},
			bindReceiveCheckOrder(e) {
				this.float485Data.receiveCheckOrder = e.detail.value;
				this.$emit('changeFloat485Data', this.float485Data);
			}
		},
		created() {
			this.float485Data = this.float485DataValue;
		},
		watch: {
			float485DataValue(val, valOld) {
				this.float485Data = this.float485DataValue;
			}
		}
	}
</script>

<style>
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
</style>