<template>
	<view v-if="showPage">
		<selfTitle title_name="查看基本参数" selfUrl="/config/config" :backConfirm="comfirmBasicConfig"></selfTitle>
		<formTitle title_name="遥测站信息配置"></formTitle>
		<view class="form_body1">
			<formInput :initialValue="formData.input_value1" :isEdit="isEdit" :isNessary="true" input_name="遥测站地址" @getInputValue="bindInputValue1"></formInput>
			<formInput :isPassWord="true" :initialValue="formData.input_value2" :isEdit="isEdit" :isNessary="true" input_name="连接密码" @getInputValue="bindInputValue2"></formInput>
			<view class="form_picker_block">
				<view class="form_picker_style">
					<view v-if="true" class="form_picker_plus">*</view>
					<view class="form_picker_name">遥测站类型： </view>
				</view>
				<view class="form_picker_frame_block">
					<picker :disabled="!isEdit" class="form_picker_frame" @change="bindYaoceType" :value="yaoceType" :range="yaoceTypeList">
						<view class="form_picker_self">{{yaoceTypeList[yaoceType]}}</view>
						<view class="bottom_icon_style">
							<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<formTitle title_name="中心站主信道配置"></formTitle>
		<view class="form_body1">
			<view v-for="(i, index) in mainChannels">
				<view class="form_multi_block" @click="bindMainChannel(i)">
					<view @longpress="showDelete(index)" class="form_multi_name">{{i.name}}</view>
					<view class="form_multi_checkbox" @click.stop="clickedMuti(i)">
						<view :class="{'gou': i.isClicked}"></view>
					</view>
				</view>
				<view v-if="i.isShow" class="form_body2">
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">信道类型： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannelType($event, i)" :value="i.type" :range="channelTypeList">
								<view class="form_picker_self">{{channelTypeList[i.type]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view v-if="i.type == 0">
						<ipInput input_name="主信道IP地址" :isEdit="true" :initialValue="i.address" @getInputValue="bindNowMainChannelAddress($event, i)"></ipInput>
						<!-- <formInput :initialValue="editMainChannel.address" :isEdit="isEdit" :isNessary="true" input_name="主信道IP地址" @getInputValue="bindNowMainChannelAddress"></formInput> -->
						<formInput :initialValue="i.port" :isEdit="isEdit" :isNessary="true" input_name="主信道端口" @getInputValue="bindNowMainChannelPort($event, i)"></formInput>
					</view>
					<view v-if="i.type == 1">
						<formInput :initialValue="i.beidouCode" :isEdit="isEdit" :isNessary="true" input_name="北斗卡号" @getInputValue="bindBeidouCode($event, i)"></formInput>
					</view>
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">工作方式： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindNowMainChannelWork" :value="work" :range="list">
								<view class="form_picker_self">{{list[work]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view v-if="isEdit" class="confirm_button">
						<view class="add_button" @click="confirmEditMainChannel(i, index)">确认更改该主信道</view>
					</view>
				</view>
			</view>
			<view v-if="isEdit" class="button_block">
				<view v-if="isShowMain" class="form_body2">
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">信道类型： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannelType($event, newMainChannel)" :value="newMainChannel.type" :range="channelTypeList">
								<view class="form_picker_self">{{channelTypeList[newMainChannel.type]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view v-if="newMainChannel.type == 0">
						<ipInput :isEdit="true" input_name="主信道IP地址" @getInputValue="bindMainChannelAddress"></ipInput>
						<!-- <formInput :isEdit="true" :isNessary="true" input_name="主信道IP地址" @getInputValue="bindMainChannelAddress"></formInput> -->
						<formInput :isEdit="true" :isNessary="true" input_name="主信道端口" @getInputValue="bindMainChannelPort"></formInput>
					</view>
					<view v-if="newMainChannel.type == 1">
						<formInput :isEdit="true" :isNessary="true" input_name="北斗卡号" @getInputValue="bindBeidouCode($event, newMainChannel)"></formInput>
					</view>
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">工作方式： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindMainChannelWork" :value="work" :range="list">
								<view class="form_picker_self">{{list[work]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view class="confirm_button">
						<view class="add_button" @click="confirmNewMainChannel">确认新增主信道</view>
					</view>
					<view class="confirm_button">
						<view class="add_button" @click="cancelNewMainChannel">取消新增主信道</view>
					</view>
				</view>
				<view v-if="!isShowMain && !isShowMainChannel && mainChannels.length < 4" class="add_button" @click="addNewMainChannel">新增主信道信息</view>
			</view>
		</view>
		<formTitle title_name="中心站备用信道配置"></formTitle>
		<view class="form_body1">
			<view v-for="(i, index) in channels">
				<view class="form_multi_block" @click="bindChannel(i)">
					<view @longpress="showDelete1(index)" class="form_multi_name">{{i.name}}</view>
					<view class="form_multi_checkbox" @click.stop="clickedMuti1(i)">
						<view :class="{'gou': i.isClicked}"></view>
					</view>
				</view>
				<view v-if="i.isShow" class="form_body2">
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">信道类型： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannelType($event, i)" :value="i.type" :range="channelTypeList">
								<view class="form_picker_self">{{channelTypeList[i.type]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view v-if="i.type == 0">
						<ipInput :isEdit="true" input_name="备用信道IP地址" :initialValue="i.address" @getInputValue="bindNowChannelAddress($event, i)"></ipInput>
						<!-- <formInput :initialValue="editChannel.address" :isEdit="isEdit" :isNessary="true" input_name="备用信道IP地址" @getInputValue="bindNowChannelAddress"></formInput> -->
						<formInput :initialValue="i.port" :isEdit="isEdit" :isNessary="true" input_name="备用信道端口" @getInputValue="bindNowChannelPort($event, i)"></formInput>
					</view>
					<view v-if="i.type == 1">
						<formInput :initialValue="i.beidouCode" :isEdit="isEdit" :isNessary="true" input_name="北斗卡号" @getInputValue="bindBeidouCode($event, i)"></formInput>
					</view>
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">工作方式： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindNowChannelWork" :value="work" :range="list">
								<view class="form_picker_self">{{list[work]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view v-if="isEdit" class="confirm_button">
						<view class="add_button" @click="confirmEditChannel(i, index)">确认更改该备用信道</view>
					</view>
				</view>
			</view>
			<view v-if="isEdit" class="button_block">
				<view v-if="isShow" class="form_body2">
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">信道类型： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannelType($event, newChannel)" :value="newChannel.type" :range="channelTypeList">
								<view class="form_picker_self">{{channelTypeList[newChannel.type]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view v-if="newChannel.type == 0">
						<ipInput :isEdit="true" input_name="备用信道IP地址" @getInputValue="bindChannelAddress"></ipInput>
						<!-- <formInput :isEdit="true" :isNessary="true" input_name="备用信道IP地址" @getInputValue="bindChannelAddress"></formInput> -->
						<formInput :isEdit="true" :isNessary="true" input_name="备用信道端口" @getInputValue="bindChannelPort"></formInput>
					</view>
					<view v-if="newChannel.type == 1">
						<formInput :isEdit="true" :isNessary="true" input_name="北斗卡号" @getInputValue="bindBeidouCode($event, newChannel)"></formInput>
					</view>
					<view class="form_picker_block">
						<view class="form_picker_style">
							<view v-if="true" class="form_picker_plus">*</view>
							<view class="form_picker_name">工作方式： </view>
						</view>
						<view class="form_picker_frame_block">
							<picker :disabled="!isEdit" class="form_picker_frame" @change="bindChannelWork" :value="work" :range="list">
								<view class="form_picker_self">{{list[work]}}</view>
								<view class="bottom_icon_style">
									<text class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);"></text>
								</view>
							</picker>
						</view>
					</view>
					<view class="confirm_button">
						<view class="add_button" @click="confirmNewChannel">确认新增备用信道</view>
					</view>
					<view class="confirm_button">
						<view class="add_button" @click="cancelNewChannel">取消新增备用信道</view>
					</view>
				</view>
				<view v-if="!isShow && !isShowChannel && channels.length < 4" class="add_button" @click="addNewChannel">新增备用信道信息</view>
			</view>
		</view>
		<view v-if="isSuper">
			<formTitle title_name="高级配置"></formTitle>
			<view class="form_body1">
				<view v-for="(i, index) in stationList">
					<view class="form_multi_block1">
						<view @longpress="showDeleteStation(index)" class="form_multi_name1">
							<formInput :initialValue="i.value" :isEdit="isEdit" :isNessary="false" :input_name=i.name @getInputValue="bindStationList($event, index)"></formInput>
						</view>
						<view class="form_multi_checkbox1" @click="clickedMutiStation(i)">
							<view :class="{'gou': isStation}"></view>
						</view>
					</view>
				</view>
				<view class="code_style">
					<view class="form_multi_name1">
						<formInput :initialValue="recCode.value" :isEdit="isEdit" :isNessary="false" input_name="通信设备识别号" @getInputValue="bindRecCode"></formInput>
					</view>
					<view class="form_multi_checkbox1" @click="clickRecCode">
						<view :class="{'gou': recCode.isClicked}"></view>
					</view>
				</view>
		
			</view>
		</view>
		<view class="nextBlock">
			<view class="nextStep" @click="preStep">上一步</view>
			<text>1&nbsp/&nbsp3</text>
			<view class="nextStep" @click="nextPage">下一步</view>
		</view>
		<view class="bottom_button_block">
			<view v-if="!isSuper" class="bottom_super_style" @click="showSuper">展开高级参数</view>
			<view v-if="isSuper" class="bottom_super_style" @click="hideSuper">收起高级参数</view>
		</view>
		<view class="bottom_button_block1">
			<view v-if="!isRead" class="bottom_super_style" @click="readConfig">读取基本配置</view>
			<view v-if="isRead" class="bottom_super_style" @click="backConfig">还原上次保存的配置</view>
		</view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import formTitle from "components/formTitle.vue"
	import formInput from "components/formInput.vue"
	import formPicker from "components/formPicker.vue"
	import formMultiList from "components/formMultiList.vue"
	import ipInput from "components/ipInput.vue"
	import utils from '@/pages/index/utils.js';
	import transformFormat from '@/pages/js/transformFormat.js'
	import queryMessage from '@/pages/js/queryMessage.js'
	export default {
	    components: {
			selfTitle,
			formTitle,
			formInput,
			formPicker,
			formMultiList,
			ipInput
		},
		data() {
			return {
				showPage: true,
				// project: {
				// 	id: String,
				// 	name: ''
				// },
				returnUrl: '',
				work: 0,
				list: ['自报工作状态', '自报确认工作状态', '查询应答工作状态', '调试或维修状态'],
				formData: {
					input_value1: '',
					input_value2: '',
				},
				mainChannels: [],
				nowMainChannel: {},
				editMainChannel: {},
				isShowMainChannel: false,
				selectedMainChannels: [],
				newMainChannel:{
					address: '',
					port: '',
					work: 0,
					type: 0,
					beidouCode: ''
				},
				channels: [],
				selectedChannels: [],//
				nowChannel: {},
				editChannel: {},
				isShowChannel: false,
				isShow: false,
				isShowMain: false,
				isEdit: true,
				newChannel: {
					address: '',
					port: '',
					work: 0,
					type: 0,
					beidouCode: ''
				},
				stationList:[{name: '中心站1地址', value: '00'},{name: '中心站2地址', value: '00'},{name: '中心站3地址', value: '00'},{name: '中心站4地址', value: '00'},],
				isStation: false,
				yaoceTypeList:['降水', '河道', '水库', '闸坝', '泵站', '潮汐', '墒情', '地下水', '水质', '取水口', '排水口'],
				yaoceType: 0,
				recCode: {isClicked: false, value: ''},
				isSuper: false,
				isRead: false,
				channelTypeList: ['IPV4', '北斗']
			}
		},
		created() {
			utils.importBasicConfig(this, uni, "temp");
		},
		methods: {
			bindChannelType($event, i){
				i.type = $event.detail.value;
			},
			bindBeidouCode($event, i){
				i.beidouCode = $event;
			},
			readConfig(){
				this.isRead = !this.isRead
				// 解析上行基础配置报文
				var _this = this;
				queryMessage.queryBack(_this, '7E7E0066666666011234410064020000191126151933F1F1666000555501200100000002286660005555031012340450020470972181240099990550020391081400620099990650020470972181240099990750020391081400620099990C08020F6031303139313233343536373810084B059BB7')
			},
			backConfig(){
				this.isRead = !this.isRead
				this.mainChannels = [];
				this.channels = [];
				this.selectedChannels = [];
				this.selectedMainChannels = [];
				this.formData = {
					input_value1: '',
					input_value2: '',
				};
				this.isStation = false;
				this.yaoceType = -1;
				this.recCode = {isClicked: false, value: ''};
				utils.importBasicConfig(this, uni, "temp");
			},
			preStep(){
				this.comfirmBasicConfig();
				this.goToPath("/config/config")
			},
			hideSuper(){
				this.isSuper = false;
			},
			showSuper(){
				this.isSuper = true;
			},
			clickRecCode(){
				if(this.isEdit){
					this.recCode.isClicked = !this.recCode.isClicked;
				}
			},
			bindRecCode(data){
				this.recCode.value = data;
				this.recCode.isClicked = true;
			},
			bindYaoceType(e){
				this.yaoceType = e.detail.value;
			},
			clickedMutiStation(i){
				if (this.isEdit){
					this.isStation = !this.isStation;
				}
			},
			bindStationList($event, index){
				this.stationList[index].value = $event;
			},
			cancelNewMainChannel(){
				this.isShowMain = false;
			},
			cancelNewChannel(){
				this.isShow = false;
			},
			clickedMuti(i){
				if (this.isEdit){
					i.isClicked = !i.isClicked;
					if (i.isClicked) {
						this.selectedMainChannels.push(i);
					}else if (this.selectedMainChannels.indexOf(i) !== -1){
						this.selectedMainChannels.splice(this.selectedMainChannels.indexOf(i));
					}
				}
			},
			clickedMuti1(i){
				if (this.isEdit){
					i.isClicked = !i.isClicked;
					if (i.isClicked) {
						this.selectedChannels.push(i);
					}else if (this.selectedChannels.indexOf(i) !== -1){
						this.selectedChannels.splice(this.selectedChannels.indexOf(i));
					}
				}
			},
			showDelete(index) {
				var _this = this;
				if (this.isEdit) {
					uni.showModal({
						title: '提示',
						content: '确认删除本行吗？',
						showCancel:true,
						success: function (res) {
							if (res.confirm) {
								_this.mainChannels.splice(index, 1);
								for(var j = index; j < _this.mainChannels.length; j++){
									_this.mainChannels[j].name = '中心站主信道'+(j+1)
									console.log(_this.mainChannels)
								}
							} else if (res.cancel) {
								
							}
						}
					});
				}
				else {
					console.log('forbid edit')
				}
			},
			showDelete1(index) {
				var _this = this;
				if (this.isEdit) {
					uni.showModal({
						title: '提示',
						content: '确认删除本行吗？',
						showCancel:true,
						success: function (res) {
							if (res.confirm) {
								_this.channels.splice(index, 1);
								for(var j = index; j < _this.channels.length; j++){
									_this.channels[j].name = '中心站备用信道'+(j+1)
								}
							} else if (res.cancel) {
								//
							}
						}
					});
				}
				else {
					console.log('forbid edit')
				}
			},
			backConfirm(){
				this.comfirmBasicConfig();
			},
			goToPath(pathStr){
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			},
			nextPage(){
				this.comfirmBasicConfig();
				this.goToPath('/newConfig/runConfig' + '?id=' + '0' + '&name=temp');
			},
			deleteMainChannel() {
				this.isShowMainChannel = false;
			},
			deleteChannel() {
				this.isShowChannel = false;
				this.isShow = false;
			},
			changeEdit(){
				this.isEdit = true;
			},
			comfirmBasicConfig(){
				var _this = this;
				console.log(_this.mainChannels)
				this.isEdit = true;
				var temp = transformFormat.basicConfigTransform(_this);
				const value = uni.getStorageSync("temp");
				if (value) {
					transformFormat.savePz(temp, uni, value[0], plus, true)
				}
				else {
					uni.setStorage({
						key: "temp",
						data: ["under_temp", "param_temp", "elemen_temp"],
					}); 
					transformFormat.savePz(temp, uni, 'under_temp', plus, true);
				}
			},
			bindMainChannel(i) {
				this.nowMainChannel = i;
				this.editMainChannel = i;
				i.isShow = !i.isShow;
			},
			bindNowMainChannelAddress($event, i) {
				i.address = $event;
			},
			bindNowMainChannelPort($event, i) {
				i.port = $event;
			},
			bindNowMainChannelWork(e) {
				this.work = e.detail.value;
			},
			confirmEditMainChannel(i, index) {
				// let oi = this.mainChannels.indexOf(this.nowMainChannel);
				// let si = this.selectedMainChannels.indexOf(this.nowMainChannel);
				this.mainChannels[index] = i
				// if (si !== -1) {
				// 	this.selectedMainChannels[si] = this.editMainChannel;
				// }
				i.isShow = false;
			},
			bindChannel(i) {
				this.nowChannel = i;
				this.editChannel = i;
				i.isShow = !i.isShow;
			},
			bindNowChannelAddress($event, i) {
				i.address = $event;
			},
			bindNowChannelPort($event, i) {
				i.port = $event;
			},
			bindNowChannelWork(e) {
				this.work = e.detail.value;
			},
			confirmEditChannel(i, index) {
				// let oi = this.channels.indexOf(this.nowChannel);
				// let si = this.selectedChannels.indexOf(this.nowChannel);
				this.channels[index] = i;
				// if (si !== -1) {
				// 	this.selectedChannels[si] = this.editChannel;
				// }
				i.isShow = false;
			},
			bindInputValue1(data){
				this.formData.input_value1 = data;
			},
			bindInputValue2(data){
				this.formData.input_value2 = data;
			},
			bindMainChannelAddress(data){
				this.newMainChannel.address = data;
			},
			bindMainChannelPort(data){
				this.newMainChannel.port = data;
			},
			bindMainChannelWork(e){
				this.work = e.detail.value;
			},
			addNewMainChannel(){
				this.isShowMain = true;
			},
			addNewChannel(){
				this.isShow = true;
			},
			bindChannelAddress(data){
				this.newChannel.address = data;
			},
			bindChannelPort(data){
				this.newChannel.port = data;
			},
			bindChannelWork(e){
				this.work = e.detail.value;
			},
			bindSelectedMainChannels(data) {
				this.selectedMainChannels = data;
			},
			bindSelectedChannels(data) {
				this.selectedChannels = data;
			},
			confirmNewChannel(){
				let num = this.channels.length+1+'';
				if (this.newChannel.type == 0 && this.newChannel.address !== '') {
					var item1 = {isShow: false, name: '中心站备用信道'+num, isClicked: true,address: this.newChannel.address, port: this.newChannel.port, type: 0};
					this.channels.push(item1);
					this.selectedChannels.push(item1);
				}
				else if (this.newChannel.type == 1 && this.newChannel.beidouCode !== '') {
					var item1 = {isShow: false, name: '中心站备用信道'+num, isClicked: true, beidouCode: this.newChannel.beidouCode, type: 1};
					this.channels.push(item1);
					this.selectedChannels.push(item1);
				}
				else if (this.newChannel.type == 0 && this.newChannel.address == ''){
					plus.nativeUI.toast('IP不可为空');
				}
				else if (this.newChannel.type == 1 && this.newChannel.beidouCode == ''){
					plus.nativeUI.toast('北斗卡号不可为空');
				}
				
				this.isShow = false;
				this.newChannel = {
					address: '',
					port: '',
					work: 0,
					type: 0,
					beidouCode: ''
				};
			},
			confirmNewMainChannel(){
				let num = this.mainChannels.length+1+'';
				if(this.newMainChannel.type == 0 && this.newMainChannel.address !== ''){
					let item = {isShow: false, name: '中心站主信道'+num, isClicked: true, address: this.newMainChannel.address, port: this.newMainChannel.port, type: 0};
					this.mainChannels.push(item);
					this.selectedMainChannels.push(item);
				}
				else if (this.newMainChannel.type == 1 && this.newMainChannel.beidouCode !== '') {
					var item1 = {isShow: false, name: '中心站主信道'+num, isClicked: true, beidouCode: this.newMainChannel.beidouCode, type: 1};
					this.mainChannels.push(item1);
					this.selectedMainChannels.push(item1);
				}
				else if (this.newMainChannel.type == 0 && this.newMainChannel.address == ''){
					plus.nativeUI.toast('IP不可为空');
				}
				else if (this.newMainChannel.type == 1 && this.newMainChannel.beidouCode == ''){
					plus.nativeUI.toast('北斗卡号不可为空');
				}
				this.isShowMain = false;
				this.newMainChannel = {
					address: '',
					port: '',
					work: 0,
					type: 0,
					beidouCode: ''
				};
			}
		}
	}
</script>

<style>
	@import url("../../static/css/checkConfig/basicConfig.css");
	@import url("../../static/css/formPicker.css");
	@import url("../../static/iconfont.css");
.nextBlock{
	margin-top: 30rpx;
	/* margin-bottom: 20rpx; */
	display: flex;
	/* height: 100rpx; */
	width: 100%;
	font-size: 35rpx;
	letter-spacing: 2px;
	justify-content: space-around;
}
.lastStep{
	width: 190rpx;
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
.form_multi_block{
		display: flex;
		margin-bottom: 20rpx;
		width: 83%;
		justify-content: space-between;
		align-items: center;
		margin-left: 65rpx;
		font-size: 35rpx;
		height: 55rpx;
	}
	.form_multi_name{
		font-size: 35rpx;
		line-height: 30px;
	}
	.form_multi_checkbox{
		border: 1.5px solid rgb(150, 150, 150);
		border-radius: 7px;
		width: 35rpx;
		height: 35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.gou{
		width: 80%;
		height: 80%;
		/* background-image:url('../../static/image/duigou.png'); */
		background-color: black;
		border-radius: 7rpx;
	}
	.form_multi_block1{
		display: flex;
		margin-bottom: 20rpx;
		width: 100%;
		/* justify-content: space-around; */
		align-items: center;
		font-size: 35rpx;
		height: 55rpx;
		/* margin-right: 30rpx; */
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
	.code_style{
		display: flex;
	}
</style>