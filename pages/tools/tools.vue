<template>
	<view>
		<selfTitle title_name="工具箱" selfUrl="/home/home"></selfTitle>
		<view class="send-message1">
			<view class="send-message-text">蓝牙连接设备</view>
			<view class="icon-style">
				<text v-if="lanyaStatus" class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeStatus"></text>
				<text v-if="!lanyaStatus" class="iconfont icon-xiangshangjiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeStatus"></text>
				<!-- <uni-icons v-if="lanyaStatus" type="bottom" size="20" color="rgb(88, 88, 88)" @click="changeStatus"></uni-icons> -->
				<!-- <uni-icons v-if="!lanyaStatus" type="top" size="20" color="rgb(88, 88, 88)" @click="changeStatus"></uni-icons> -->
			</view>
		</view>
		<view v-if="lanyaStatus" class="lanya-block">
			<view v-for="(dev, index) in bleDevs">
				<view class="lanya-style">
					<view>{{dev.name}}</view>
					<view v-if="dev.isConneted">已连接</view>
					<view class="connectButton" @click="bluetoothZt" v-if="!dev.isConneted">连接</view>
				</view>
			</view>
		</view>
		<view class="send-message2">
			<view class="send-message-text">网关设置管理</view>
			<view class="icon-style">
				<text v-if="databaseStatus" class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeDBListStatus"></text>
				<text v-if="!databaseStatus" class="iconfont icon-xiangshangjiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeDBListStatus"></text>
				<!-- <uni-icons :type="databaseStatus ? 'bottom' : 'top'" size="20" color="rgb(88, 88, 88)" @click="changeDBListStatus"></uni-icons> -->
			</view>
		</view>
		<view class="database-block" v-if="databaseStatus">
			<view class="send-message3" v-for="(database, index) in databaseList">
				<view class="database-title">
					<view class="send-message-text">{{database.name}}</view>
					<view class="icon-style">
						<text v-if="database.isShow" class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeDBStatus(index)"></text>
						<text v-if="!database.isShow" class="iconfont icon-xiangshangjiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeDBStatus(index)"></text>
						<!-- <uni-icons :type="database.isShow ? 'bottom' : 'top'" size="20" color="rgb(88, 88, 88)" @click="changeDBStatus(index)"></uni-icons> -->
					</view>
				</view>
				<view v-show="database.isShow" class="database-detail">
					<ipInput input_name="IP地址" :isEdit="true" :initialValue="database.ip" @getInputValue="bindIP"></ipInput>
					<!-- <formInput :initialValue="database.ip" :isEdit="true" :isNessary="false" input_name="IP地址" @getInputValue="bindIP" @emitBlur="bindIPValue(index)"></formInput> -->
					<formInput :initialValue="database.port" :isEdit="true" :isNessary="false" input_name="端口号" @getInputValue="bindPort" @emitBlur="bindPortValue(index)"></formInput>
					<formInput :initialValue="database.databaseName" :isEdit="true" :isNessary="false" input_name="数据库名" @getInputValue="bindDatabaseName" @emitBlur="bindDatabaseNameValue(index)"></formInput>
					<formInput :initialValue="database.username" :isEdit="true" :isNessary="false" input_name="用户名" @getInputValue="bindUsername" @emitBlur="bindUsernameValue(index)"></formInput>
					<formInput :isPassWord="true" :initialValue="database.password" :isEdit="true" :isNessary="false" input_name="密码" @getInputValue="bindPassword" @emitBlur="bindPasswordValue(index)"></formInput>
				</view>
			</view>
			<view v-if="!isAddNew" class="add_button" @click="addNewDatabase">新增网关设置</view>
			<view v-if="isAddNew" class="database-detail">
				<formInput :isEdit="true" :isNessary="false" input_name="网关名称" @getInputValue="bindNewName"></formInput>
				<ipInput input_name="IP地址" :isEdit="true" @getInputValue="bindNewIP"></ipInput>
				<!-- <formInput :isEdit="true" :isNessary="false" input_name="IP地址" @getInputValue="bindNewIP"></formInput> -->
				<formInput :isEdit="true" :isNessary="false" input_name="端口号" @getInputValue="bindNewPort"></formInput>
				<formInput :isEdit="true" :isNessary="false" input_name="数据库名" @getInputValue="bindNewDatabaseName"></formInput>
				<formInput :isEdit="true" :isNessary="false" input_name="用户名" @getInputValue="bindNewUsername"></formInput>
				<formInput :isPassWord="true" :isEdit="true" :isNessary="false" input_name="密码" @getInputValue="bindNewPassword"></formInput>
				<view v-if="isAddNew" class="confirm_button">
					<view class="add_button" @click="confirmNewDatabase">确认新增网关</view>
				</view>
			</view>
		</view>
		<view class="send-message1">
			<view class="send-message-text">手工配置报文</view>
			<view class="icon-style">
				<text v-if="messageStatus" class="iconfont icon-xiangxiajiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeMessageStatus"></text>
				<text v-if="!messageStatus" class="iconfont icon-xiangshangjiantou" style="font-size: 40rpx;color: rgb(88, 88, 88);" @click="changeMessageStatus"></text>
				<!-- <uni-icons :type="messageStatus ? 'bottom' : 'top'" size="20" color="rgb(88, 88, 88)" @click="changeMessageStatus"></uni-icons> -->
			</view>
		</view>
		<view v-if="messageStatus">
			<view class="send-block">
				<view class="send-block-style">
					<textarea maxlength="-1" class="send-text-style" :placeholder="'示例报文:\nVH\b12344\b\bMA\b123654'" :value="sendText"></textarea>
				</view>
			</view>
			<view class="button-block">
				<view class="button-style">清空报文</view>
				<view class="button-style">发送报文</view>
			</view>
		</view>
		<view class="send-message2" @click="goToPath('/downloads/downloads')">
			<view class="send-message-text">下载配置方案</view>
		</view>
		<view class="send-message1">
			<view class="send-message-text">清除固态数据</view>
		</view>
		<view class="send-message2">
			<view class="send-message-text">恢复出厂设置</view>
		</view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import formInput from "components/formInput.vue"
	import codingElements from '@/pages/index/codingElements.js';
	import ipInput from "components/ipInput.vue"
	export default{
		components: {
			selfTitle,
			formInput,
			ipInput
		},
		data() {
			return {
				lanyaStatus: true,
				bleDevs: [],
				// bleDevs1: [{name: 'RTU', isConneted: false}],
				deviceId: '',
				serviceId: '',
				characteristicId: '',
				characteristicId2: '',
				ip: '',
				port: '',
				databaseName: '',
				username: '',
				password: '',
				editFlag: false,
				messageStatus: true,
				sendText: '',
				databaseStatus: true,
				isAddNew: false,
				newDatabase: {},
				databaseList: [],
				num: 0
			}
		},
		onLoad(){
			var _this = this;
			const value = uni.getStorageSync("databases");
			this.bleDevs = getApp().globalData.bleDevs;
			if (value) {
				this.databaseList = value;
			}
			if(getApp().globalData.deviceId == undefined) {
				this.bluetoothZt(this);
			}
			uni.onBLEConnectionStateChange(function (res) {
				console.log("蓝牙连接状态监测")
				console.log(res.deviceId)
				console.log(res.connected)
				if(res.connected == false) {
					_this.bleDevs = [];
					if(_this.num <= 2){
						plus.nativeUI.toast('蓝牙已断开!');
						if(getApp().globalData.bleDevs.length !== 0){
							var flag = false;
							getApp().globalData.bleDevs[0].isConneted = flag;
							// this.bleDevs = getApp().globalData.bleDevs;
						}
						else{
							console.log('kong')
						}
						_this.num++;
						getApp().globalData.deviceId = undefined;
						// this.bluetoothZt();
					}
				}else{
					_this.num = 0;
				}
			})
		},
		methods: {
			changeStatus() {
				var _this = this;
				this.lanyaStatus = !this.lanyaStatus;
				if (this.lanyaStatus) {
					_this.bluetoothZt(_this);
				}
			},
			bluetoothZt(){
				var _this = this;
				uni.openBluetoothAdapter({
					success(res) {
						plus.nativeUI.toast('蓝牙初始化成功!');
						this.num = 0;
						// _this.bluetoothFale = true;
						setTimeout(function(){
							_this.sousuoLy();
						},3000)
					},
					fail(res) {
						plus.nativeUI.toast('请打开蓝牙!');
						_this.bluetoothFale = false;
					}
				})
			},
			sousuoLy() {
				var _this = this; 
				_this.bleDevs = [];
				uni.startBluetoothDevicesDiscovery({
					allowDuplicatesKey: false,
					success: (res) => {
						console.log('startBluetoothDevicesDiscovery success', res)
						// 发现外围设备
						_this.onBluetoothDeviceFound()
					},
					fail: err => {
						console.log(err, '错误信息')
					}
				})
			},
			onBluetoothDeviceFound() {
				var _this = this;
				// console.log("zhixing")
				uni.onBluetoothDeviceFound((res) => {
					console.log(res)
					if(res.devices[0].name === 'RTU'){
						var fale = false;
						for (var i = 0; i < _this.bleDevs.length; i++) {
							if(_this.bleDevs[i].deviceId === res.devices[0].deviceId){
								fale = true;
								break;
							}
						}
						if (!fale) {
							_this.bleDevs.push({isConneted: false, ...res.devices[0]});
						}	
					}
					// console.log(_this.bleDevs)
					setTimeout(function(){
						if(_this.bleDevs.length == 1){
							_this.createBLEConnection(_this.bleDevs[0])
						}else if(_this.bleDevs.length > 1){
							plus.nativeUI.toast('有多个RTU蓝牙开启!');
						}
					},300)
				})
			},
			createBLEConnection(item) {
				//console.log(bleDevs)
				let thit = this
				//data里面建立一个deviceId，存储起来
				thit.deviceId = item.deviceId;
				//连接蓝牙
				uni.createBLEConnection({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId: thit.deviceId,
					success(res) {
						//防止在这里面取不到this，古在外面用thit存储了this
						console.log("蓝牙连接成功deviceId", res)
						item.isConneted = true;
						thit.stopBluetoothDevicesDiscovery();
						console.log(getApp().globalData.serviceId)
						console.log(getApp().globalData.characteristicId2)
						thit.getBLEDeviceServices();
					}
				})
			},
			stopBluetoothDevicesDiscovery() {
				uni.stopBluetoothDevicesDiscovery({
					success(res) {
						console.log(res)
					}
				})
			}, 
			getBLEDeviceServices() {
				var _this = this;
				uni.getBLEDeviceServices({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId: _this.deviceId,
					success(res) {
						//这里会获取到好多个services  uuid  我们只存储我们需要用到的就行，这个uuid一般硬件厂家会给我们提供
						if (res.services.length === 0) {
							_this.getBLEDeviceServices();
							return;
						}
						console.log(res.services)
						res.services.forEach((item) => {
							if (item.uuid.indexOf("0000A002") != -1) {
								_this.serviceId = item.uuid;
								codingElements.monitor(undefined,1,uni);
								//进入特征
								_this.getBLEDeviceCharacteristics()
							}
						}) 
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
			getBLEDeviceCharacteristics() {
				var _this = this;
				console.log("进入特征");
				console.log("蓝牙服务码" + _this.serviceId)
				uni.getBLEDeviceCharacteristics({
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId: _this.deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId: _this.serviceId,
					success: (res) => {
						res.characteristics.forEach((item) => {
							if (item.properties.indicate) {
								_this.characteristicId = item.uuid
								//利用传参的形势传给下面的notify，这里的uuid如果都需要用到，就不用做判断了，建议使用setTimeout进行间隔性的调用此方法
								_this.notifyBLECharacteristicValueChange(item.uuid)
							}
							if (item.properties.write) {
								_this.characteristicId2 = item.uuid;
							}
						})
			
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
			notifyBLECharacteristicValueChange(characteristicId) {
				var _this = this;
				console.log('特征值', characteristicId)
			
				uni.notifyBLECharacteristicValueChange({
					state: true, // 启用 notify 功能
					// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
					deviceId: _this.deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId: _this.serviceId,
					// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId: _this.characteristicId,
					success: (res) => {
						plus.nativeUI.toast('启用notify成功!');
						console.log('启用 notify 功能 success', res.errMsg)
						getApp().globalData.characteristicId2 = _this.characteristicId2
						getApp().globalData.deviceId = _this.deviceId
						getApp().globalData.serviceId = _this.serviceId
						getApp().globalData.bleDevs = _this.bleDevs;
						setTimeout(function(){
							uni.showToast({
							    title: '蓝牙连接成功!',
							    duration: 2000
							});
						},5000)
					},
					fail: (res) => {
						console.log('启用 notify 功能 success2', res.errMsg)
					}
				})
			 
			},
			addNewDatabase() {
				this.isAddNew = true;
			},
			bindNewName(data) {
				this.newDatabase.name = data;
			},
			bindNewIP(data) {
				this.newDatabase.ip = data;
			},
			bindNewPort(data) {
				this.newDatabase.port = data;
			},
			bindNewDatabaseName(data) {
				this.newDatabase.databaseName = data;
			},
			bindNewUsername(data) {
				this.newDatabase.username = data;
			},
			bindNewPassword(data) {
				this.newDatabase.password = data;
			},
			confirmNewDatabase() {
				let item = {isShow: false, ...this.newDatabase};
				this.databaseList.push(item);
				this.isAddNew = false;
				uni.setStorage({
					key: "databases",
					data: this.databaseList,
				}); 
			},
			changeDBStatus(index) {
				this.databaseList[index].isShow = !this.databaseList[index].isShow;
			},
			bindIP(data) {
				this.ip = data;
				this.editFlag = true;
			},
			bindIPValue(index) {
				if (this.editFlag) {
					this.databaseList[index].ip = this.ip;
					uni.setStorage({
						key: "databases",
						data: this.databaseList,
					}); 
					this.editFlag = false;
				}
			},
			bindPort(data) {
				this.port = data;
				this.editFlag = true;
			},
			bindPortValue(index) {
				if (this.editFlag) {
					this.databaseList[index].port = this.port;
					uni.setStorage({
						key: "databases",
						data: this.databaseList,
					}); 
					this.editFlag = false;
				}
			},
			bindDatabaseName(data) {
				this.databaseName = data;
				this.editFlag = true;
			},
			bindDatabaseNameValue(index) {
				if (this.editFlag) {
					this.databaseList[index].databaseName = this.databaseName;
					uni.setStorage({
						key: "databases",
						data: this.databaseList,
					}); 
					this.editFlag = false;
				}
			},
			bindUsername(data) {
				this.username = data;
				this.editFlag = true;
			},
			bindUsernameValue(index) {
				if (this.editFlag) {
					this.databaseList[index].username = this.username;
					uni.setStorage({
						key: "databases",
						data: this.databaseList,
					}); 
					this.editFlag = false;
				}
			},
			bindPassword(data) {
				this.password = data;
				this.editFlag = true;
			},
			bindPasswordValue(index) {
				if (this.editFlag) {
					this.databaseList[index].password = this.password;
					uni.setStorage({
						key: "databases",
						data: this.databaseList,
					}); 
					this.editFlag = false;
				}
			},
			changeMessageStatus() {
				this.messageStatus = !this.messageStatus;
			},
			changeDBListStatus() {
				this.databaseStatus = !this.databaseStatus;
			},
			goToPath(pathStr){
				uni.navigateTo({
				    url: '/pages' + pathStr,
				});
			}
		}
	}
</script>

<style>
@import url("../../static/css/tools/tools.css");
@import url("../../static/iconfont.css");
</style>