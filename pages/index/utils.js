function getconfigfiles(_this, uni) {
	uni.getStorageInfo({
	    success: function (res) {
			_this.itemList = [];
			for (var i = 0; i < res.keys.length; i++) {
				if(res.keys[i] !== 'temp' && res.keys[i].indexOf('under_') === -1 && res.keys[i].indexOf('param_') === -1 && res.keys[i].indexOf('elemen_') === -1){
					_this.itemList.push(res.keys[i]);
				}
			}
	    },
		fail: err => {
			console.log(err, '错误信息')
		}
	}); 
}

function importBasicConfig(_this, uni, name) {
	var configKey = ''
	uni.getStorage({
	    key: name,
	    success: function (res) { 
			configKey = res.data[0];
			uni.getStorage({
				key: configKey,
				success: function (res) {
					var config = res.data;
					console.log(config.str)
					
					// 中心站地址
					_this.isStation = config.csList01[0].fale;
					if(config.csList01[0].fale){
						_this.stationList = [{name: '中心站1地址', value: config.zxz01}, {name: '中心站2地址', value: config.zxz02}, {name: '中心站3地址', value: config.zxz03}, {name: '中心站4地址', value: config.zxz04}];
					}
					
					// 设备识别码
					if(config.csList02[1].fale){
						_this.recCode.value = config.ycztxsbsbh_0F;
						_this.recCode.isClicked = true;
					}
					else{
						_this.recCode.value = '';
						_this.recCode.isClicked = false;
					}
					
					// 遥测站类型
					var item = config.yczType_10Arr.find(item => item.val == config.yczType_10Val)
					_this.yaoceType = config.yczType_10Arr.indexOf(item)
					
					// 工作类型
					_this.work = config.gzfs_0CIndex;
					
					_this.formData = {input_value1: config.yczdz_02, input_value2: config.mm_03};
					if (config.under_05Val.object.lxVal == '02'){
						var mainChannel = {isShow: true, name: '中心站主信道1', isClicked: true,address: config.under_05Val.object.ip, port: config.under_05Val.object.dk, type: 0};
						_this.mainChannels.push(mainChannel);
						_this.selectedMainChannels.push(mainChannel);
					}
					else if (config.under_05Val.object.lxVal == '03'){
						var mainChannel = {isShow: true, name: '中心站主信道1', isClicked: true,beidouCode: config.under_05Val.object.beidouCode, type: 1};
						_this.mainChannels.push(mainChannel);
						_this.selectedMainChannels.push(mainChannel);
					}
					console.log(config.txddz)
					for (var i = 0; i < config.txddz.length; i++) {
						var channelName = config.txddz[i].key.split('类型')[0];
						if (config.txddz[i].object.lxVal == '02' && config.txddz[i].object.ip !== ''){
							var channel = {isShow: true, name: channelName, isClicked: config.txddz[i].fale,address: config.txddz[i].object.ip, port: config.txddz[i].object.dk, type: 0};
							if(channelName.indexOf('主') !== -1) {
								_this.mainChannels.push(channel);
								if(config.txddz[i].object.fale) {
									_this.selectedMainChannels.push(channel);
								}
							}
							else if (channelName.indexOf('备用') !== -1) {
								_this.channels.push(channel);
								if(config.txddz[i].object.fale) {
									_this.selectedChannels.push(channel);
								}
							}
						}
						else if (config.txddz[i].object.lxVal == '03' && config.txddz[i].object.beidouCode !== '') {
							var channel = {isShow: true, name: channelName, isClicked: config.txddz[i].fale, beidouCode: config.txddz[i].object.beidouCode, type: 1};
							if(channelName.indexOf('主') !== -1) {
								_this.mainChannels.push(channel);
								if(config.txddz[i].object.fale) {
									_this.selectedMainChannels.push(channel);
								}
							}
							else if (channelName.indexOf('备用') !== -1) {
								_this.channels.push(channel);
								if(config.txddz[i].object.fale) {
									_this.selectedChannels.push(channel);
								}
							}
						}
					}
					_this.showPage = true;
				}
			});
	    }
	}); 
}

function importRunConfig(_this, uni, name) {
	var configKey = ''
	uni.getStorage({
	    key: name,
	    success: function (res) { 
			configKey = res.data[1];
			uni.getStorage({
				key: configKey,
				success: function (res) {
					var config = res.data;
					console.log(config.str)
					
					// 定时报发送间隔
					var item3 = config.dssjbjgArr.find(item => item.val == config.dssjbjgVal)
					var send = config.dssjbjgArr.indexOf(item3);
					
					// 采样时间间隔
					var item4 = config.dssjbjgArr.find(item => item.val == config.cyjgVal)
					var sample = config.dssjbjgArr.indexOf(item4);
					
					// 数据存储间隔
					var item5 = config.dssjbjgArr.find(item => item.val == config.swsjccjgVal)
					var save = config.dssjbjgArr.indexOf(item5);
					
					// 降水量日起始时间
					var item1 = config.jslrqssjArr.find(item => item.val == config.jslrqssjVal)
					_this.startTime = config.jslrqssjArr.indexOf(item1);
					
					// 雨量计分辨率
					var item2 = config.yljfblArr.find(item => item.val == config.yljfblVal)
					_this.rate = config.yljfblArr.indexOf(item2);
					
					// 水位高程
					_this.height1 = config.swjz1.toString();
					// _this.height2 = config.swjz2.toString();
					
					// 水位修正值
					_this.fixHeight1 = config.item.swxzz1.toString();
					// _this.fixHeight2 = config.item.swxzz2.toString();
					
					// 加报时间间隔
					_this.isPlusMessage = config.csList[1].fale;
					_this.plusMessage = config.item.jbsjjg;
					
					// 雨量报警阈值
					_this.isRainWarn = config.csList[7].fale;
					var rain = config.item.yljbfz.toString();
					
					// 加报水位
					_this.isAddHeight1 = config.csList[12].fale;
					_this.addHeight1 = config.item.jbsw1.toString();
					// _this.isAddHeight2 = config.csList[13].fale;
					// _this.addHeight2 = config.item.jbsw2.toString();
					
					// 加报水位阈值
					_this.isWaterWarn = config.csList[14].fale;
					var water = ((config.item.jbswys / 100).toFixed(2)).toString();
					// _this.isWaterWarn1 = config.csList[15].fale;
					// _this.waterWarn1 = ((config.item.jbswyx / 100).toFixed(2)).toString();
					
					_this.formData1 = {
						sendTime: send,
						sampleTime: sample, 
						saveTime: save,
						waterWarn: water,
						rainWarn: rain
					};
				}
			});
	    }
	}); 
}

function importPlusConfig(_this, uni, name) {
	var configKey = ''
	uni.getStorage({
	    key: name,
	    success: function (res) { 
			configKey = res.data[2];
			uni.getStorage({
				key: configKey,
				success: function (res) {
					var config = res.data;
					var factor = {};
					for (var i = 0; i < config.ysList.length; i++) {
						switch (config.ysList[i].gzfs) {
							// case "雨量" : factor = transformRain(config.ysList[i], _this); break;
							// case "485通讯MODBUS整数形": factor = transformInt485(config.ysList[i], _this); break;
							// case "模拟量（端子接入）": factor = transformMonitor(config.ysList[i], _this); break;
							// case "485通讯MODBUS浮点数": factor = transformFloat485(config.ysList[i], _this); break;
							case "图片": 
								factor = transformPicture(config.ysList[i], _this); 
								let item1 = {isShow: true, name: config.ysList[i].gzfs, isClicked: true, ...factor};
								_this.factors.push(item1);
								_this.selectedfactors.push(item1);
								_this.isAddNew = false;
								break;
							default: break;
						}
					}
					for (var j = 0; j < config.resList.length; j++) {
						if (config.resList[j].name == '大坝渗压修正值') {
							var pressureData = {
								cPressure: '0.0'
							};
							let configs = config.resList[j].str.split(' ');
							let value = configs[1];
							var result = '';
							if (value.substring(0, 2) == 'FF'){
								result += '-';
							}
							result = result + (parseFloat(value.substring(2)) / 1000).toString();
							pressureData.cPressure = result;
							let item2 = {isShow: true, name: '大坝渗压修正值', isClicked: true, ...pressureData};
							_this.factors.push(item2);
							_this.selectedfactors.push(item2);
							_this.isAddNew = false;
						}
						else if (config.resList[j].name == '大坝渗流修正值'){
							var flowData = {
								cPressure: '0.0'
							};
							let configs = config.resList[j].str.split(' ');
							let value = configs[1];
							var result = '';
							if (value.substring(0, 2) == 'FF'){
								result += '-';
							}
							result = result + (parseFloat(value.substring(2)) / 1000).toString();
							flowData.cFlow = result;
							let item3 = {isShow: true, name: '大坝渗流修正值', isClicked: true, ...flowData};
							_this.factors.push(item3);
							_this.selectedfactors.push(item3);
							_this.isAddNew = false;
						}
					}
				}
			});
	    }
	}); 
}

function transformInt485(factor, item) {
	var int485Data = {
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
	}
	let configs = factor.str.split(' ');
	int485Data.factorSymbol = item.listSymbol.indexOf(factor.yssbf);
	int485Data.channel = configs[4] === "01" ? 0 : 1;
	int485Data = transform485Rule(int485Data, configs[5]);
	int485Data = transform485Check(int485Data, configs[6]);
	int485Data.address = configs[7];
	int485Data.functionCode = configs[8] === "03" ? 0 : 1;
	int485Data.rgHigh = configs[9].substr(0, 2);
	int485Data.rgLow = configs[9].substr(2, 2);
	int485Data.readNumber = configs[10] === "01" ? 0 : 1;
	int485Data = transform485CheckType(int485Data, configs[11]);
	int485Data.receiveDelay = configs[12];
	int485Data = transform485ReceiveRate(int485Data, configs[13]);
	int485Data.receiveOrder = configs[14] === "09" ? 0 : 1;
	int485Data.receiveCheckOrder = configs[15] === "02" ? 0 : 1;
	return int485Data;
}

function transform485Rule(int485Data, str) {
	switch(str) {
		case "01": int485Data.rule = 0; break;
		case "11": int485Data.rule = 1; break;
		case "12": int485Data.rule = 2; break;
		case "13": int485Data.rule = 3; break;
		case "14": int485Data.rule = 4; break;
		case "15": int485Data.rule = 5; break;
		case "16": int485Data.rule = 6; break;
		case "17": int485Data.rule = 7; break;
		case "18": int485Data.rule = 8; break;
		case "19": int485Data.rule = 9; break;
		case "20": int485Data.rule = 10; break;
		case "21": int485Data.rule = 11; break;
		case "22": int485Data.rule = 12; break;
		case "23": int485Data.rule = 13; break;
		case "24": int485Data.rule = 14; break;
		case "25": int485Data.rule = 15; break;
		case "26": int485Data.rule = 16; break;
		case "27": int485Data.rule = 17; break;
		case "28": int485Data.rule = 18; break;
		case "29": int485Data.rule = 19; break;
		default: int485Data.rule = 0; break;
	}
	return int485Data;
}

function transform485Check(int485Data, str) {
	switch(str) {
		case "01": int485Data.check = 0; break;
		case "02": int485Data.check = 1; break;
		case "03": int485Data.check = 2; break;
		case "04": int485Data.check = 3; break;
		case "05": int485Data.check = 4; break;
		case "06": int485Data.check = 5; break;
		default: int485Data.check = 0; break;
	}
	return int485Data;
}

function transform485CheckType(int485Data, str) {
	let type = str.substr(0, 2);
	let value = str.substr(2, 4);
	if (type === '01') {
		int485Data.checkType = 0;
		if (value === '0002') int485Data.checkTypeValue = 0;
		else if (value === '0001') int485Data.checkTypeValue = 1;
	}
	else if (type === '00') {
		int485Data.checkType = 1;
		int485Data.checkTypeValue2 = value;
	}
	return int485Data;
}

function transform485ReceiveRate(int485Data, str) {
	switch(str) {
		case "00": int485Data.receiveRate = 0; break;
		case "01": int485Data.receiveRate = 1; break;
		case "02": int485Data.receiveRate = 2; break;
		case "03": int485Data.receiveRate = 3; break;
		case "21": int485Data.receiveRate = 4; break;
		case "04": int485Data.receiveRate = 5; break;
		case "11": int485Data.receiveRate = 6; break;
		case "12": int485Data.receiveRate = 1; break;
		case "13": int485Data.receiveRate = 1; break;
		case "22": int485Data.receiveRate = 1; break;
		case "14": int485Data.receiveRate = 1; break;
		default: int485Data.receiveRate = 0; break;
	}
	return int485Data;
}

function transformRain(factor, item) {
	var rainData = {
		factorSymbol: 37,
		rainInitial: '0',
		rainRate: 0
	};
	let configs = factor.str.split(' ');
	rainData.factorSymbol = item.listSymbol.indexOf(factor.yssbf);
	rainData.rainInitial = (parseInt("0x"+configs[5]) / 10).toString();
	rainData = transformRainRate(rainData, configs[6]);
	return rainData;
}

function transformRainRate(rainData, str) {
	switch(str) {
		case "01": rainData.rainRate = 0; break;
		case "02": rainData.rainRate = 1; break;
		case "03": rainData.rainRate = 2; break;
		case "04": rainData.rainRate = 3; break;
		default: rainData.rainRate = 0; break;
	}
	return rainData;
}

function transformMonitor(factor, item) {
	var moniData = {
		factorSymbol: 0,
		channel: 0,
		range: '',
		ratio: '',
		offset: '',
		basic: '',
		inputRange: 0
	};
	let configs = factor.str.split(' ');
	moniData.factorSymbol = item.listSymbol.indexOf(factor.yssbf);
	moniData = transformMoniChannel(moniData, configs[4]);
	moniData.range = parseInt(configs[5]).toString();
	let intRatio = configs[6].substr(0, 2);
	let floatRatio = configs[6].substr(2, 4);
	moniData.ratio = parseInt(intRatio) === 0 && parseInt(floatRatio) === 0 ? "0" : parseInt(intRatio).toString() + "." + parseInt(floatRatio).toString();
	let intOffset = parseInt(configs[7]);
	moniData.offset = (intOffset / 100).toString();
	let intBasic = configs[8].substr(0, 6);
	let floatBasic = configs[8].substr(6, 2);
	moniData.basic = parseInt(intBasic) === 0 && parseInt(floatBasic) === 0 ? "0" : parseInt(intBasic).toString() + "." + parseInt(floatBasic).toString();
	moniData.inputRange = configs[9] === "01" ? 0 : 1;
	return moniData;
}

function transformMoniChannel(moniData, str) {
	switch (str) {
		case "01": moniData.channel = 0; break;
		case "02": moniData.channel = 1; break;
		case "03": moniData.channel = 2; break;
		case "04": moniData.channel = 3; break;
		case "05": moniData.channel = 4; break;
		case "06": moniData.channel = 5; break;
		case "07": moniData.channel = 6; break;
		case "08": moniData.channel = 7; break;
		case "09": moniData.channel = 8; break;
		case "10": moniData.channel = 9; break;
		case "11": moniData.channel = 10; break;
		case "12": moniData.channel = 11; break;
		case "13": moniData.channel = 12; break;
		case "14": moniData.channel = 13; break;
		case "15": moniData.channel = 14; break;
		case "16": moniData.channel = 15; break;
		default: moniData.channel = 0; break;
	}
	return moniData;
}

function transformFloat485(factor, item) {
	var float485Data = {
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
	};
	let configs = factor.str.split(' ');
	float485Data.factorSymbol = item.listSymbol.indexOf(factor.yssbf);
	float485Data.channel = configs[4] === "01" ? 0 : 1;
	float485Data = transform485Rule(float485Data, configs[5]);
	float485Data = transform485Check(float485Data, configs[6]);
	float485Data.address = configs[7];
	float485Data.functionCode = configs[8] === "03" ? 0 : 1;
	float485Data.rgHigh = configs[9].substr(0, 2);
	float485Data.rgLow = configs[9].substr(2, 2);
	float485Data = transform485CheckType(float485Data, configs[11]);
	float485Data.receiveDelay = configs[12];
	float485Data = transform485ReceiveRate(float485Data, configs[13]);
	float485Data = transformFloat485ROrder(float485Data, configs[14]);
	float485Data.receiveCheckOrder = configs[15] === "01" ? 1 : 0;
	return float485Data;
}

function transformFloat485ROrder(float485Data, str) {
	switch(str) {
		case "01": float485Data.receiveOrder = 0; break;
		case "02": float485Data.receiveOrder = 1; break;
		case "03": float485Data.receiveOrder = 2; break;
		case "04": float485Data.receiveOrder = 3; break;
		default: float485Data.receiveOrder = 0; break;
	}
	return float485Data;
}

function transformPicture(factor, item) {
	var pictureData = {
		stationName: '',
	};
	let configs = factor.str.split(' ');
	let str = configs.slice(11, configs.length+1);
	var name = '';
	for(var i = 0; i < str.length; i++){
		name += String.fromCharCode(parseInt(str[i],16));
	}
	pictureData.stationName = name;
	return pictureData;
}

function transformPicInterval(pictureData, str) {
	switch(str) {
		case "01": pictureData.timeInterval = 0; break;
		case "02": pictureData.timeInterval = 0; break;
		case "03": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
		case "01": pictureData.timeInterval = 0; break;
	}
}

function transformPlus(pictureData, str) {
	let plus1 = parseInt("0x"+str).toString(2);
	let num = 16 - plus1.length;
	for (var i = 0; i < num; i++) {
		plus1 = "0" + plus1;
	}
	pictureData.plus = plus1[0] === "1" ? "水压"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[1] === "1" ? "统计雨量"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[2] === "1" ? "备用"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[3] === "1" ? "蒸发量"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[4] === "1" ? "土壤含水量"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[5] === "1" ? "水质"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[6] === "1" ? "水温"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[7] === "1" ? "风速"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[8] === "1" ? "气压"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[9] === "1" ? "功率"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[10] === "1" ? "闸位"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[11] === "1" ? "流速"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[12] === "1" ? "瞬间流量"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[13] === "1" ? "水位"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[14] === "1" ? "当前雨量"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = plus1[15] === "1" ? "累计流量"+" "+pictureData.plus : pictureData.plus;
	pictureData.plus = pictureData.plus.substr(0, pictureData.plus.length - 1);
	return pictureData;
}
// Object.assign(_this.$data,res.data); 
// 			plus.nativeUI.toast("导入配置成功！");
// 			_this.qx01();

export default {
	getconfigfiles,
	importBasicConfig,
	importRunConfig,
	importPlusConfig
}