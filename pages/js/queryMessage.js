import codingElements from '@/pages/index/codingElements.js';
import initData from './initData';

function queryMessage(factorCode, queryCode){
	var strArr = [];
	var returnArr = [];
	var bwNumberArr = [0];
	var str = "";
	var len = 0;
	var bwNumber = 0;
	for (var i = 0; i < factorCode.length; i++) {
		str += factorCode[i] + " ";
		len += factorCode[i].replace(/\s+/g, "").length;
		bwNumber ++;
		if(len > 480 && len < 530){ 
			strArr.push(str);
			bwNumberArr.push(bwNumber);
			str = "";
			len = 0;
			bwNumber = 0;
		}
		if(i === factorCode.length - 1){
			strArr.push(str);
			bwNumberArr.push(bwNumber);
		}
	}
	
	var nub = 0;
	for (var i = 0; i < strArr.length; i++) {
		var index = 0;
		if(i != strArr.length - 1){
			index = 1;
		}
		nub += bwNumberArr[i]
		var str1 = pjbw1(index, nub, strArr[i], '7E7E 006815333300 1234 '+queryCode+' ')
		//console.log(str1) 
		returnArr.push(str1);
	}
	
	if(returnArr.length === 0){
		var str1 = pjbw1(0, 0, '', '7E7E 006815333300 1234 '+queryCode+' ')
		returnArr.push(str1);
	}
	console.log(returnArr);
	return returnArr;
}


function pjbw1(index, bwNumber, bwStr, bwkt){
	var str1 = " " + codingElements.bw(index.toString(16), 2) + codingElements.bw(bwNumber.toString(16), 2) + ' 180121150033 ' + bwStr;
	var strLength = str1.replace(/\s+/g, "").length / 2;
	var length16 = strLength.toString(16);
	for (var j = length16.length; j < 3; j++) {
		length16 = '0' + length16;
	}
	length16 = '8' + length16;
	str1 = bwkt + length16 + ' 02' + str1 + '05';
	var data1 = str1.replace(/\s+/g,"");
	// console.log(str1 + " " + codingElements.bw(codingElements.MODBUS_CRC(Buffer.from(data1).toString('hex')), 4) + ' 0D0A')
	return str1 + " " + codingElements.bw(codingElements.MODBUS_CRC(data1), 4) + ' 0D0A';
}

function queryBack(_this, message){
	var functionCode = message.substring(20, 22);
	var length = message.length;
	var message1 = message.substring(44, length-6);
	switch (functionCode) {
		case '41': // 查询基本配置
			queryBackBasic(_this, message1);
			break;
		case '37': // 查询实时数据
			queryBackData(_this, message1);
			break;
		case '43': // 查询运行配置
			queryBackRun(_this, message1);
		case 'F3': // 查询渗压渗流
		case 'f3':
			queryBackPressureFlow(_this, message1);
	}
}

function hexToLength(numMessage){
	var numM = parseInt(numMessage, 16).toString(2)
	var l = 8 - numM.length;
	for (var i = 0; i < l; i++){
		numM = '0' + numM;
	}
	var num2 = numM.substring(0, 5);
	var num = parseInt(num2, 2);
	return num * 2;
}

function hexToYaoceType(code){
	var result = 0
	switch (code) {
		case '50': // 降水
			result = 0; break;
		case '48': // 河道
			result = 1; break;
		case '4B': //水库
		case '4b':
			result = 2; break;
		case '5a': //闸坝
		case '5A':
			result = 3; break;
		case '44': // 泵站
			result = 4; break;
		case '54': // 潮汐
			result = 5; break;
		case '4D': //墒情
		case '4d':
			result = 6; break;
		case '47': // 地下水
			result = 7; break;
		case '51': // 水质
			result = 8; break;
		case '49': // 取水口
			result = 9; break;
		case '4f': // 排水口
		case '4F':
			result = 10; break;
		default: break;
	}
	return result;
}

function queryBackBasic(_this, message){
	_this.mainChannels = [];
	_this.channels = [];
	_this.selectedChannels = [];
	_this.selectedMainChannels = [];
	var length = 14;
	var functionCode = message.substring(length, length + 4);
	length += 4;
	while(length < message.length){
		switch (functionCode.substring(0, 2)) {
			case '02': // 遥测站地址
				var cLength = hexToLength(functionCode.substring(2, 4));
				_this.formData.input_value1 = message.substring(length, length + cLength);
				length = length + cLength;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '01': // 中心站地址
				_this.stationList[0].value = message.substring(length, length + 2);
				length = length + 2;
				_this.stationList[1].value = message.substring(length, length + 2);
				length = length + 2;
				_this.stationList[2].value = message.substring(length, length + 2);
				length = length + 2;
				_this.stationList[3].value = message.substring(length, length + 2);
				length = length + 2;
				if(_this.stationList[0].value !== '00' || _this.stationList[1].value !== '00' || _this.stationList[2].value !== '00' || _this.stationList[3].value !== '00'){
					_this.isStation = true;
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '03': // 遥测站密码
				var cLength = hexToLength(functionCode.substring(2, 4))
				_this.formData.input_value2 = message.substring(length, length + cLength);
				length = length + cLength;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '04': // 主信道1
			case '06': // 主信道2
			case '08': // 主信道3
			case '0a': // 主信道4
			case '0A': // 主信道4
				var newMainChannel = {
					address: '',
					port: '',
					work: 0,
				};
				var newMainChannel1 = {
					beidouCode: '',
				};
				var tlength = hexToLength(functionCode.substring(2, 4));
				var type = message.substring(length, length + 2);
				length += 2;
				if (type == '02'){
					var data1 = parseInt(message.substring(length, length + 3));
					length += 3;
					var data2 = parseInt(message.substring(length, length + 3));
					length += 3;
					var data3 = parseInt(message.substring(length, length + 3));
					length += 3;
					var data4 = parseInt(message.substring(length, length + 3));
					length += 3;
					var port = parseInt(message.substring(length, length + 6));
					length += 6;
					
					newMainChannel.address = data1.toString()+'.'+data2.toString()+'.'+data3.toString()+'.'+data4.toString();
					newMainChannel.port = port.toString();
					
					let num = _this.mainChannels.length+1+'';
					let item = {isShow: true, name: '中心站主信道'+num, isClicked: true, ...newMainChannel, type: 0};
					_this.mainChannels.push(item);
					_this.selectedMainChannels.push(item);
				}
				else if (type == '03') {
					var originCode = message.substring(length, length + tlength - 2);
					for (var i = 0; i < originCode.length; i++) {
						if (i % 2 == 0) {
							newMainChannel1.beidouCode += originCode[i];
						}
					}
					let num = _this.mainChannels.length+1+'';
					let item = {isShow: true, name: '中心站主信道'+num, isClicked: true, ...newMainChannel1, type: 1};
					_this.mainChannels.push(item);
					_this.selectedMainChannels.push(item);
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '05': // 备用信道1
			case '07': // 备用信道2
			case '09': // 备用信道3
			case '0b': // 备用信道4
			case '0B': // 备用信道3
				var newChannel = {
					address: '',
					port: '',
					work: 0
				};
				var newChannel1 = {
					beidouCode: '',
				};
				var tlength = hexToLength(functionCode.substring(2, 4));
				var type = message.substring(length, length + 2);
				length += 2;
				if (type == '02'){
					var data1 = parseInt(message.substring(length, length + 3));
					length += 3;
					var data2 = parseInt(message.substring(length, length + 3));
					length += 3;
					var data3 = parseInt(message.substring(length, length + 3));
					length += 3;
					var data4 = parseInt(message.substring(length, length + 3));
					length += 3;
					var port = parseInt(message.substring(length, length + 6));
					length += 6;
					
					newChannel.address = data1.toString()+'.'+data2.toString()+'.'+data3.toString()+'.'+data4.toString();
					newChannel.port = port.toString();
					
					let num = _this.channels.length+1+'';
					let item = {isShow: true, name: '中心站备用信道'+num, isClicked: true, ...newChannel, type: 0};
					_this.channels.push(item);
					_this.selectedChannels.push(item);
				}
				else if (type == '03') {
					var originCode = message.substring(length, length + tlength - 2);
					for (var i = 0; i < originCode.length; i++) {
						if (i % 2 == 0) {
							newChannel1.beidouCode += originCode[i];
						}
					}
					let num = _this.channels.length+1+'';
					let item = {isShow: true, name: '中心站备用信道'+num, isClicked: true, ...newChannel1, type: 1};
					_this.channels.push(item);
					_this.selectedChannels.push(item);
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '0c': // 工作方式
			case '0C': // 工作方式
				var type = message.substring(length, length + 2);
				_this.work = parseInt(type) - 1;
				length += 2;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '0f': // 设备识别号
			case '0F': // 设备识别号
				var cLength = hexToLength(functionCode.substring(2, 4));
				var code = message.substring(length, length + cLength);
				if (parseInt(code) !== 0){
					_this.recCode.value = code;
					_this.recCode.isClicked = true;
				}
				length += cLength;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '10': // 遥测站类型
				var type = message.substring(length, length + 2);
				length += 2;
				_this.yaoceType = hexToYaoceType(type);
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			default: length = message.length; break;	
		}
	}
}

function queryBackRun(_this, message){
	var length = 14;
	var functionCode = message.substring(length, length + 4);
	length += 4;
	while(length < message.length){
		switch (functionCode.substring(0, 2)) {
			case '20': // 定时报时间间隔
				var time = message.substring(length, length + 2);
				length += 2;
				_this.formData1.sendTime = parseInt(time) - 1;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '21': // 加报间隔
				var time = message.substring(length, length + 2);
				length += 2;
				if (time !== '00') {
					_this.isPlusMessage = true;
					_this.plusMessage = time;
				}
				else{
					_this.isPlusMessage = false;
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '22': // 降水量日起始时间
				var time = message.substring(length, length + 2);
				length += 2;
				_this.startTime = parseInt(time);
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '23': // 采样间隔
				var time = message.substring(length, length + 2);
				length += 2;
				_this.formData1.sampleTime = parseInt(time) - 1;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '24': // 水位数据存储间隔
				var time = message.substring(length, length + 2);
				length += 2;
				_this.formData1.saveTime = parseInt(time) - 1;
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '25': // 雨量计分辨率
				var time = message.substring(length, length + 2);
				length += 2;
				var item = initData.yljfblArr.find(item => item.val == time);
				_this.rate = _this.rateList.indexOf(item.key);
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '27': // 雨量加报阈值
				var time = message.substring(length, length + 2);
				length += 2;
				if (time !== '00') {
					_this.formData1.rainWarn = time;
					_this.isRainWarn = true;
				}
				else {
					_this.isRainWarn = false;
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '28': // 水位高程
				var cLength = hexToLength(functionCode.substring(2, 4));
				var time = message.substring(length, length + cLength);
				length += cLength;
				_this.height1 = (parseInt(time) / 1000).toFixed(3).toString();
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '30': // 水位修正值
				var cLength = hexToLength(functionCode.substring(2, 4));
				var time = message.substring(length, length + cLength);
				length += cLength;
				_this.fixHeight1 = (parseInt(time) / 1000).toFixed(3).toString();
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '38': // 加报水位
				var cLength = hexToLength(functionCode.substring(2, 4));
				var time = message.substring(length, length + cLength);
				length += cLength;
				if (parseInt(time) !== 0){
					_this.addHeight1 = (parseInt(time) / 100).toFixed(2).toString();
					_this.isAddHeight1 = true;
				}
				else {
					_this.isAddHeight1 = false;
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '40': // 加报以上加报阈值
				var cLength = hexToLength(functionCode.substring(2, 4));
				var time = message.substring(length, length + cLength);
				length += cLength;
				if (parseInt(time) !== 0){
					_this.formData1.waterWarn = (parseInt(time) / 100).toFixed(2).toString();
					_this.isWaterWarn = true;
				}
				else {
					_this.isWaterWarn = false;
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '41': // 加报以下加报阈值
				var cLength = hexToLength(functionCode.substring(2, 4));
				var time = message.substring(length, length + cLength);
				length += cLength;
				if (parseInt(time) !== 0){
					_this.waterWarn1 = (parseInt(time) / 100).toFixed(2).toString();
					_this.isWaterWarn1 = true;
				}
				else {
					_this.isWaterWarn1 = false;
				}
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			default: length = message.length; break;	
		}
	}
}

function queryBackPressureFlow(_this, message) {
	var length = 0;
	var functionCode = message.substring(length, length + 4);
	length += 4;
	while(length < message.length){
		if(functionCode.substring(2, 4) == '20' || functionCode.substring(2, 4) == '21') {
			var isPositive = message.substring(length + 2, length + 4);
			length += 4;
			var value = message.substring(length, length + 8);
			length += 8;
			if (isPositive == '00'){
				_this.flowData.cFlow = ((parseInt(value) / 1000).toFixed(3)).toString();
			}
			else {
				_this.flowData.cFlow = '-' + ((parseInt(value) / 1000).toFixed(3)).toString();
			}
			
			var pFactor = {isShow: true, name: '大坝渗流修正值', isClicked: true, ..._this.flowData}
			_this.factors.push(pFactor);
			_this.selectedfactors.push(pFactor);
			_this.isAddNew = false;
			_this.flowData = {
				cFlow: '0.0'
			};
		}
		else {
			var isPositive = message.substring(length + 2, length + 4);
			length += 4;
			var value = message.substring(length, length + 8);
			length += 8;
			if (isPositive == '00'){
				_this.pressureData.cPressure = ((parseInt(value) / 1000).toFixed(3)).toString();
			}
			else {
				_this.pressureData.cPressure = '-' + ((parseInt(value) / 1000).toFixed(3)).toString();
			}
			
			var pFactor = {isShow: true, name: '大坝渗压修正值', isClicked: true, ..._this.pressureData}
			_this.factors.push(pFactor);
			_this.selectedfactors.push(pFactor);
			_this.isAddNew = false;
			_this.pressureData = {
				cPressure: '0.0'
			};
		}
		functionCode = message.substring(length, length + 4);
		length = length + 4;
	}
}

function queryBackData(_this, message){
	var length = 14;
	var functionCode = message.substring(length, length + 2);
	length += 2;
	
	const yaoceTypeList = ['降水', '河道', '水库', '闸坝', '泵站', '潮汐', '墒情', '地下水', '水质', '取水口', '排水口'];
	var type = yaoceTypeList[hexToYaoceType(functionCode)];
	_this.itemList.push({name: '遥测站类型', value: type});
	
	functionCode = message.substring(length, length + 4);
	length += 4;

	while(length < message.length){
		switch (functionCode.substring(0, 2)) {
			case 'F0': // 采集时间（年月日时分）
				var year = '20' + message.substring(length, length + 2);
				length += 2;
				var month = parseInt(message.substring(length, length + 2)).toString();
				length += 2;
				var day = parseInt(message.substring(length, length + 2)).toString();
				length += 2;
				var hour = parseInt(message.substring(length, length + 2)).toString();
				length += 2;
				var minute = parseInt(message.substring(length, length + 2)).toString();
				length += 2;
				_this.itemList.unshift({name: '采集时间', value: year + '/' + month + '/' + day + ' ' + hour + ':' + minute});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '58': // 水压
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '水压', value: ((parseInt(value) / 100).toFixed(2)).toString() + '千帕'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '20': // 当前降水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '当前降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '27': // 瞬时流量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '瞬时流量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '立方米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '60': // 累计流量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '累计流量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '立方米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '25': // 暴雨量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '暴雨量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '26': // 降水量累计值
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '降水量累计值', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '28': // 取（排）水口流量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '取（排）水口流量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '立方米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '30': // 总出库流量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '总出库流量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '立方米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '31': // 输水设备流量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '输水设备流量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '立方米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '32': // 输沙量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '输沙量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '万吨'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '35': // 风速
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '风速', value: ((parseInt(value) / 10).toFixed(1)).toString() + '米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '36': // 断面平均流速
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '断面平均流速', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '37': // 当前瞬时流速
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '当前瞬时流速', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '米/秒'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '38': // 电源电压
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '电源电压', value: ((parseInt(value) / 100).toFixed(2)).toString() + '伏特'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '39': // 瞬时河道水位
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '瞬时河道水位', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				console.log(cLength)
				length = length + 4;
				break;
			case '3A': // 库（闸、站）下水位
			case '3a':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '库（闸、站）下水位', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '3b': // 库（闸、站）上水位
			case '3B':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '库（闸、站）上水位', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '3c': // 取（排）水口水位
			case '3C':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '取（排）水口水位', value: ((parseInt(value) / 100).toFixed(2)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '44': // 含沙量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '含沙量', value: ((parseInt(value) / 1000).toFixed(3)).toString() + '千克/立方米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '46': // PH值
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: 'PH值', value: ((parseInt(value) / 100).toFixed(2)).toString()});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '47': // 溶解氧
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '溶解氧', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫克/升'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '48': // 电导率
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '电导率', value: (parseInt(value)).toString() + '微西门/厘米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '49': // 浊度
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '浊度', value: (parseInt(value)).toString() + '度'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '68': // 水表每小时水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '水表每小时水量', value: ((parseInt(value) / 100).toFixed(2)).toString() + '立方米/小时'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '70': // 交流A相电压
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '交流A相电压', value: ((parseInt(value) / 10).toFixed(1)).toString() + '伏特'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '73': // 交流A相电流
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '交流A相电流', value: ((parseInt(value) / 10).toFixed(1)).toString() + '伏特'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '02': // 瞬时气温
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '瞬时气温', value: ((parseInt(value) / 10).toFixed(1)).toString() + '摄氏度'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '03': // 瞬时水温
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '瞬时水温', value: ((parseInt(value) / 10).toFixed(1)).toString() + '摄氏度'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '06': // 日蒸发量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '日蒸发量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '07': // 当前蒸发量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '当前蒸发量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '08': // 气压
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '气压', value: (parseInt(value)).toString() + '百帕'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '09': // 闸坝、水库闸门开启高度
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '闸坝、水库闸门开启高度', value: ((parseInt(value) / 100).toFixed(2)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '0D': // 地温
			case '0d':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '地温', value: ((parseInt(value) / 10).toFixed(1)).toString() + '摄氏度'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '0E': // 地下水瞬时埋深
			case '0e':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '地下水瞬时埋深', value: ((parseInt(value) / 100).toFixed(2)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '0F': // 波浪高度
			case '0f':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '波浪高度', value: ((parseInt(value) / 100).toFixed(2)).toString() + '米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '10': // 10厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '10厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '11': // 20厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '20厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '12': // 30厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '30厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '13': // 40厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '40厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '14': // 50厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '50厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '15': // 60厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '60厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '16': // 80厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '80厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '17': // 100厘米处土壤含水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '100厘米处土壤含水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '18': // 湿度
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '湿度', value: ((parseInt(value) / 10).toFixed(1)).toString() + '%'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '19': // 开机台数
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '开机台数', value: (parseInt(value)).toString() + '个'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '1A': // 1小时时段降水量
			case '1a':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '1小时时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '1B': // 2小时时段降水量
			case '1b':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '2小时时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '1C': // 3小时时段降水量
			case '1c':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '3小时时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '1D': // 6小时时段降水量
			case '1d':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '6小时时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '1E': // 12小时时段降水量
			case '1e':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '12小时时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '1F': // 日降水量
			case '1f':
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '日降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '20': // 当前降水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '当前降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '21': // 1分钟时段降水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '1分钟时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '22': // 5分钟时段降水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '5分钟时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '23': // 10分钟时段降水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '10分钟时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			case '24': // 30分钟时段降水量
				var cLength = hexToLength(functionCode.substring(2, 4));
				var value = message.substring(length, length + cLength);
				length += cLength;
				_this.itemList.push({name: '30分钟时段降水量', value: ((parseInt(value) / 10).toFixed(1)).toString() + '毫米'});
				functionCode = message.substring(length, length + 4);
				length = length + 4;
				break;
			default: length = message.length; break;
		}
	}
}

export default {
	queryMessage,
	queryBack,
}