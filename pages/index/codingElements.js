//自定义配置参数
var codingElements = [{
 		key: '断面面积',
 		val: '01'
 	}, {
 		key: '瞬时气温',
 		val: '02'
 	}, {
 		key: '瞬时水温',
 		val: '03'
 	}, {
 		key: '时间步长码 g',
 		val: '04'
 	},
 	{
 		key: '时段长,降水、引排水、抽水历时',
 		val: '05'
 	}, {
 		key: '日蒸发量',
 		val: '06'
 	}, {
 		key: '当前蒸发',
 		val: '07'
 	}, {
 		key: '气压',
 		val: '08'
 	},
 	{
 		key: '闸坝、水库闸门开启高度',
 		val: '09'
 	}, {
 		key: '输水设备、闸门(组)编号',
 		val: '0A'
 	}, {
 		key: '输水设备类别',
 		val: '0B'
 	},
 	{
 		key: '水库、闸坝闸门开启孔数',
 		val: '0C'
 	}, {
 		key: '地温',
 		val: '0D'
 	}, {
 		key: '地下水瞬时埋深',
 		val: '0E'
 	}, {
 		key: '波浪高度',
 		val: '0F'
 	},
 	{
 		key: '10 厘米处土壤含水量',
 		val: '10'
 	}, {
 		key: '20 厘米处土壤含水量',
 		val: '11'
 	}, {
 		key: '30 厘米处土壤含水量',
 		val: '12'
 	},
 	{
 		key: '40 厘米处土壤含水量',
 		val: '13'
 	}, {
 		key: '50 厘米处土壤含水量',
 		val: '14'
 	}, {
 		key: '60 厘米处土壤含水量',
 		val: '15'
 	},
 	{
 		key: '80 厘米处土壤含水量',
 		val: '16'
 	}, {
 		key: '100 厘米处土壤含水量',
 		val: '17'
 	}, {
 		key: '湿度',
 		val: '18'
 	}, {
 		key: '开机台数',
 		val: '19'
 	},
 	{
 		key: '1 小时时段降水量',
 		val: '1A'
 	}, {
 		key: '2 小时时段降水量',
 		val: '1B'
 	}, {
 		key: '3 小时时段降水量',
 		val: '1C'
 	},
 	{
 		key: '6 小时时段降水量',
 		val: '1D'
 	}, {
 		key: '12 小时时段降水量',
 		val: '1E'
 	}, {
 		key: '日降水量',
 		val: '1F'
 	},
 	{
 		key: '当前降水量',
 		val: '20'
 	}, {
 		key: '1 分钟时段降水量',
 		val: '21'
 	}, {
 		key: '5 分钟时段降水量',
 		val: '22'
 	},
 	{
 		key: '10 分钟时段降水量',
 		val: '23'
 	}, {
 		key: '30 分钟时段降水量',
 		val: '24'
 	}, {
 		key: '暴雨量',
 		val: '25'
 	},
 	{
 		key: '降水量累计值',
 		val: '26'
 	}, {
 		key: '瞬时流量、抽水流量',
 		val: '27'
 	}, {
 		key: '取(排）水口流量 1',
 		val: '28'
 	},
 	{
 		key: '取(排）水口流量 2',
 		val: '29'
 	}, {
 		key: '取(排）水口流量 3',
 		val: '2A'
 	}, {
 		key: '取(排）水口流量 4',
 		val: '2B'
 	},
 	{
 		key: '取(排）水口流量 5',
 		val: '2C'
 	}, {
 		key: '取(排）水口流量 6',
 		val: '2D'
 	}, {
 		key: '取(排）水口流量 7',
 		val: '2E'
 	},
 	{
 		key: '取(排）水口流量 8',
 		val: '2F'
 	}, {
 		key: '总出库流量、过闸总流量',
 		val: '30'
 	}, {
 		key: '输水设备流量、过闸(组)流量',
 		val: '31'
 	},
 	{
 		key: '输沙量',
 		val: '32'
 	}, {
 		key: '风向',
 		val: '33'
 	}, {
 		key: '风力(级)',
 		val: '34'
 	},
 	{
 		key: '风速',
 		val: '35'
 	}, {
 		key: '断面平均流速',
 		val: '36'
 	}, {
 		key: '当前瞬时流速',
 		val: '37'
 	},
 	{
 		key: '电源电压',
 		val: '38'
 	}, {
 		key: '瞬时河道水位、潮位',
 		val: '39'
 	}, {
 		key: '库(闸、站)下水位',
 		val: '3A'
 	},
 	{
 		key: '库(闸、站)上水位',
 		val: '3B'
 	}, {
 		key: '取(排）水口水位 1',
 		val: '3C'
 	}, {
 		key: '取(排）水口水位 2',
 		val: '3D'
 	},
 	{
 		key: '取(排）水口水位 3',
 		val: '3E'
 	}, {
 		key: '取(排）水口水位 4',
 		val: '3F'
 	}, {
 		key: '取(排）水口水位 5',
 		val: '40'
 	},
 	{
 		key: '取(排）水口水位 6',
 		val: '41'
 	}, {
 		key: '取(排）水口水位 7',
 		val: '42'
 	}, {
 		key: '取(排）水口水位 8',
 		val: '43'
 	},
 	{
 		key: '含沙量',
 		val: '44'
 	},
	{
 		key: 'pH 值',
 		val: '46'
 	},
 	{
 		key: '溶解氧',
 		val: '47'
 	}, {
 		key: '电导率',
 		val: '48'
 	}, {
 		key: '浊度',
 		val: '49'
 	},
 	{
 		key: '高锰酸盐指数',
 		val: '4A'
 	}, {
 		key: '氧化还原电位',
 		val: '4B'
 	}, {
 		key: '氨氮',
 		val: '4C'
 	},
 	{
 		key: '总磷',
 		val: '4D'
 	}, {
 		key: '总氮',
 		val: '4E'
 	}, {
 		key: '总有机碳',
 		val: '4F'
 	},
 	{
 		key: '铜',
 		val: '50'
 	}, {
 		key: '锌',
 		val: '51'
 	}, {
 		key: '硒',
 		val: '52'
 	},
 	{
 		key: '砷',
 		val: '53'
 	}, {
 		key: '总汞',
 		val: '54'
 	}, {
 		key: '镉',
 		val: '55'
 	},
 	{
 		key: '铅',
 		val: '56'
 	}, {
 		key: '叶绿素 a',
 		val: '57'
 	}, {
 		key: '水压 1',
 		val: '58'
 	},
 	{
 		key: '水压 2',
 		val: '59'
 	}, {
 		key: '水压 3',
 		val: '5A'
 	}, {
 		key: '水压 4',
 		val: '5B'
 	},
 	{
 		key: '水压 5',
 		val: '5C'
 	}, {
 		key: '水压 6',
 		val: '5D'
 	}, {
 		key: '水压 7',
 		val: '5E'
 	},
 	{
 		key: '水压 8',
 		val: '5F'
 	}, {
 		key: '水表 1 剩余水量',
 		val: '60'
 	}, {
 		key: '水表 2 剩余水量',
 		val: '61'
 	},
 	{
 		key: '水表 3 剩余水量',
 		val: '62'
 	}, {
 		key: '水表 4 剩余水量',
 		val: '63'
 	}, {
 		key: '水表 5 剩余水量',
 		val: '64'
 	},
 	{
 		key: '水表 6 剩余水量',
 		val: '65'
 	}, {
 		key: '水表 7 剩余水量',
 		val: '66'
 	}, {
 		key: '水表 8 剩余水量',
 		val: '67'
 	},
 	{
 		key: '水表 1 每小时水量',
 		val: '68'
 	}, {
 		key: '水表 2 每小时水量',
 		val: '69'
 	}, {
 		key: '水表 3 每小时水量',
 		val: '6A'
 	},
 	{
 		key: '水表 4 每小时水量',
 		val: '6B'
 	}, {
 		key: '水表 5 每小时水量',
 		val: '6C'
 	}, {
 		key: '水表 6 每小时水量',
 		val: '6D'
 	},
 	{
 		key: '水表 7 每小时水量',
 		val: '6E'
 	}, {
 		key: '水表 8 每小时水量',
 		val: '6F'
 	}, {
 		key: '交流 A 相电压',
 		val: '70'
 	},
 	{
 		key: '交流 B 相电压',
 		val: '71'
 	}, {
 		key: '交流 C 相电压',
 		val: '72'
 	}, {
 		key: '交流 A 相电流',
 		val: '73'
 	},
 	{
 		key: '交流 B 相电流',
 		val: '74'
 	}, {
 		key: '交流 C 相电流',
 		val: '75'
 	}, 
	{
		key: '太阳能电池板电压—广西',
		val: '76'
	}, 
	{
 		key: '信号强度-广西',
 		val: '77'
 	}, {
 		key: '信号强度1-湖南',
 		val: '8A'
 	}, {
 		key: '信号强度2-湖南',
 		val: '8B'
 	},
	{
		key: '图片信息',
		val: 'F3'
	},
	{
		key: '1小时内每5分钟雨量',
		val: 'F4'
	},
	{
		key: '1小时内每5分钟相对水位1',
		val: 'F5'
	},
	{
		key: '1小时内每5分钟相对水位2',
		val: 'F6'
	},
	{
		key: '1小时内每5分钟相对水位3',
		val: 'F7'
	},
	{
 		key: '信号强度',
 		val: '98'
 	},
	{
		key: '误码率',
		val: '99'
	}
 ];

 //整数加法集合
 var zsArr = {
 	'31': [0, 1, 2, 3, 4],
 	'30': [1, 2, 3, 4],
 	'29': [0, 2, 3, 4],
 	'28': [2, 3, 4],
 	'27': [0, 1, 3, 4],
 	'26': [1, 3, 4],
 	'25': [0, 3, 4],
 	'24': [3, 4],
 	'23': [0, 1, 2, 4],
 	'22': [1, 2, 4],
 	'21': [0, 2, 4],
 	'20': [2, 4],
 	'19': [0, 1, 4],
 	'18': [1, 4],
 	'17': [0, 4],
 	'16': [4],
 	'15': [0, 1, 2, 3],
 	'14': [1, 2, 3],
 	'13': [0, 2, 3],
 	'12': [2, 3],
 	'11': [0, 1, 3],
 	'10': [1, 3],
 	'9': [0, 3],
 	'8': [3],
 	'7': [0, 1, 2],
 	'6': [1, 2],
 	'5': [0, 2],
 	'4': [2],
 	'3': [0, 1],
 	'2': [1],
 	'1': [0]
 };
//小数加法集合
 var xsArr = {
 	'7': [0, 1, 2],
 	'6': [0, 1],
 	'5': [0, 2],
 	'4': [0],
 	'3': [1, 2],
 	'2': [1],
 	'1': [2]
 };

 function calcWs(ws) {
 	var wsArr = ws.split(".");
 	var zsWs = parseInt(wsArr[0].length / 2);
 	if (wsArr.length !== 1) {
 		var xsWs = wsArr[1].length;
 	}

 	var arr = [1, 2, 4, 8, 16];
 	var arr1 = [4, 2, 1];
 	var arr2 = [0, 0, 0, 0, 0]
 	var arr3 = [0, 0, 0]
 	var zsWzArr = zsArr[zsWs];
 	var xsWzArr = xsArr[xsWs];
 	for (var i = 0; i < zsWzArr.length; i++) {
 		arr2[zsWzArr[i]] = 1;
 	}

 	if (wsArr.length !== 1) {
 		for (var i = 0; i < xsWzArr.length; i++) {
 			arr3[xsWzArr[i]] = 1;
 		}
 	}

 	var ejzs = '';
 	for (var i = arr2.length - 1; i >= 0; i--) {
 		ejzs += arr2[i];
 	}
 	ejzs += arr3[0] + '' + arr3[1] + '' + arr3[2];
 	return bin_to_hex(ejzs);
 }
 
 function calcWs01(zswsLength, xswsLength) {
 	var zsWs = zswsLength;
 	if (xswsLength !== 0 && xswsLength !== undefined) {
 		var xsWs = xswsLength;
 	}
 
 	var arr = [1, 2, 4, 8, 16];
 	var arr1 = [4, 2, 1];
 	var arr2 = [0, 0, 0, 0, 0]
 	var arr3 = [0, 0, 0]
 	var zsWzArr = zsArr[zsWs];
 	var xsWzArr = xsArr[xsWs];
 	for (var i = 0; i < zsWzArr.length; i++) {
 		arr2[zsWzArr[i]] = 1;
 	}
 
 	if (xswsLength !== 0 && xswsLength !== undefined) {
 		for (var i = 0; i < xsWzArr.length; i++) {
 			arr3[xsWzArr[i]] = 1;
 		}
 	}
 
 	var ejzs = '';
 	for (var i = arr2.length - 1; i >= 0; i--) {
 		ejzs += arr2[i];
 	}
 	ejzs += arr3[0] + '' + arr3[1] + '' + arr3[2];
 	return bin_to_hex(ejzs);
 }
 
function calcDigits(zws, xsw, nub){
 	var sj = '';
 	if(!isInteger(zws/2)){
 		zws += 1
 	}
	var zws01 = zws / 2;
	var ws = calcWs01(zws01,xsw)
 	var nub1 = String(nub).replace("-","")
 	if(!isInteger(nub1)){
 		var splitArr = String(nub1).split(".");
 		var str01 = String(splitArr[0]);
 		var str02 = String(splitArr[1]);
 		for (var i = str01.length; i < zws01; i++) {
 			str01 = '0' + str01
 		}
 		for (var i = splitArr[1].length; i < xsw; i++) {
 			str02 = str02 + '0';
 		}
 		sj = str01+	str02
 	}else{
 		var zsNub = String(nub1);
 		var xsNub = '';
 		for (var i = zsNub.length; i < zws01; i++) {
 			zsNub = '0' + zsNub;
 		}
 		for (var i = xsNub.length; i < xsw; i++) {
 			xsNub += '0';
 		}
 		sj = zsNub + xsNub;
 	}
	
	for (var i = sj.length; i < zws; i++) {
		sj = '0' + sj;
	}
 	if(nub < 0){
 		sj = "FF" + sj;
 	}
 	return {val:sj,ws:ws}
 }
 
 function isInteger(obj) {
  return obj%1 === 0
 }

 //二进制转十六进制方法
 function bin_to_hex(str) {
 	let hex_array = [{
 			key: 0,
 			val: "0000"
 		}, {
 			key: 1,
 			val: "0001"
 		}, {
 			key: 2,
 			val: "0010"
 		}, {
 			key: 3,
 			val: "0011"
 		}, {
 			key: 4,
 			val: "0100"
 		}, {
 			key: 5,
 			val: "0101"
 		}, {
 			key: 6,
 			val: "0110"
 		}, {
 			key: 7,
 			val: "0111"
 		},
 		{
 			key: 8,
 			val: "1000"
 		}, {
 			key: 9,
 			val: "1001"
 		}, {
 			key: 'a',
 			val: "1010"
 		}, {
 			key: 'b',
 			val: "1011"
 		}, {
 			key: 'c',
 			val: "1100"
 		}, {
 			key: 'd',
 			val: "1101"
 		}, {
 			key: 'e',
 			val: "1110"
 		}, {
 			key: 'f',
 			val: "1111"
 		}
 	]
 	let value = ''
 	let list = []
 	if (str.length % 4 !== 0) {
 		let a = "0000"
 		let b = a.substring(0, 4 - str.length % 4)
 		str = b.concat(str)
 	}
 	while (str.length > 4) {
 		list.push(str.substring(0, 4))
 		str = str.substring(4);
 	}
 	list.push(str)
 	for (let i = 0; i < list.length; i++) {
 		for (let j = 0; j < hex_array.length; j++) {
 			if (list[i] == hex_array[j].val) {
 				value = value.concat(hex_array[j].key)
 				break
 			}
 		}
 	}
 	return value
 }

 function MODBUS_CRC(data) {
 	let crcValue = 0xFFFF;
	console.log(data[0])
 	for (let i = 0; i < data.length; i=i+2) {
 		crcValue ^= parseInt('0x'+data[i]+data[i+1]) & 0xFFFF
 		for (let j = 0; j < 8; j++) {
 			if (crcValue & 0x0001) {
 				crcValue >>= 1
 				crcValue ^= 0xA001
 			} else {
 				crcValue >>= 1
 			}
 		}
 	}

 	crcValue = crcValue.toString(16)
 	let crcArr = new Array(2)
 	crcArr[0] = crcValue.substring(0, 2)
 	crcArr[1] = crcValue.substring(2, 4)
 	return crcValue
 }

//补位data为数据,ws为补的多少位
 function bw(data, ws) {
 	var dataStr = String(data);
 	for (var i = dataStr.length; i < ws; i++) {
 		dataStr = '0' + dataStr;
 	}
 	return dataStr;
 }
 

	function sendData(str, _this, uni) {
				console.log(typeof(str))
				var str01 = str.toString().replace(/\s+/g,"");
				var codeLength = str01.length / 2
				// 向蓝牙设备发送一个0x00的16进制数据
				const buffer = new ArrayBuffer(codeLength)
				const dataView = new DataView(buffer)
			
				for (let i = 0; i < codeLength; i++) {
					dataView.setUint8(i, '0X' + str01.substring(i * 2, i * 2 + 2));
				} 

				uni.writeBLECharacteristicValue({
					// 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
					deviceId: getApp().globalData.deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId: getApp().globalData.serviceId,
					// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId: getApp().globalData.characteristicId2,
					// 这里的value是ArrayBuffer类型
					value: buffer,
					success(res) {
						console.log('writeBLECharacteristicValue success', res.errMsg)
					},
					fail(res) {
						console.log('writeBLECharacteristicValue fail', res.errMsg)
					}
				})
			}
			
			function stringToHex(str){
			            var val = "";
			            for (var i = 0; i < str.length; i++) {
			                if (val == "") {
			                    val = str.charCodeAt(i).toString(16);        //获取字符的Unicode码然后转16进制
			                } else {
			                    val += str.charCodeAt(i).toString(16);//获取字符的Unicode码然后转16进制再拼接,中间用逗号隔开
			                }
			            }
			            return val;
			        }
			
	function sendKeep(_this, uni){
		console.log('send')
		console.log(getApp().globalData.deviceId)
		// var str01 = stringToHex("keep alive");
		// var str01 = "7E7E 006815333300 1234 40 803b 02 0000 180121150033 01 20 01000000 02 28 0000000123 03 10 012304 50 02000000000000000000 0C 08 01 0F 70 3130303133393034353037313131 10 08 4B 05 6539 0D0A";
		var str01 = "6b65657020616c6976650D0A";
		var codeLength = str01.length / 2
		// 向蓝牙设备发送一个0x00的16进制数据
		const buffer = new ArrayBuffer(codeLength)
		const dataView = new DataView(buffer)
		
		// dataView.setInt16(0, sendD);\for (let i = 0; i < codeLength; i++) {
		for (let i = 0; i < codeLength; i++) {
			dataView.setUint8(i, '0X' + str01.substring(i * 2, i * 2 + 2));
		} 

		if (getApp().globalData.deviceId !== undefined) {
			uni.writeBLECharacteristicValue({
				// 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
				deviceId: getApp().globalData.deviceId,
				// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
				serviceId: getApp().globalData.serviceId,
				// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
				characteristicId: getApp().globalData.characteristicId2,
				// 这里的value是ArrayBuffer类型
				value: buffer,
				success(res) {
					console.log('keep alive success', res.errMsg)
				},
				fail(res) {
					plus.nativeUI.toast('蓝牙连接已断开！');
					uni.closeBLEConnection({
						deviceId: getApp().globalData.deviceId,
						success(res) {
							console.log('断开蓝牙连接', res.errMsg)
							var flag = false;
							getApp().globalData.bleDevs[0].isConneted = flag;
						},
					})
					var app = getApp();
					app.globalData.deviceId = undefined;
					app.globalData.serviceId = undefined;
					app.globalData.characteristicId = undefined;
					console.log('keep alive fail', res.errMsg)
				}
			})
		}
		else{
			console.log('blueTooth is not connected')
		}
	}
				
	function monitor(_this,nub,uni,str){
		// 这里获取回调，读取成功就的值就会在这个地方接收到！！！
		uni.onBLECharacteristicValueChange((res) => {
				console.log("监听成功", res.value)
				//res.value是ArrayBuffer类型的，官方给了一个方法转16进制，我们再进行操作
				console.log(ab2hex(res.value))
				if(_this !== undefined && nub !== 1){
					_this.realTimeArr.push(ab2hex(res.value));
					_this.realTimeData = "";
					if(ab2hex(res.value).indexOf("0d0a") !== -1){
						for (var i = 0; i < _this.realTimeArr.length; i++) {
							_this.realTimeData += _this.realTimeArr[i];
						}
						_this.realTimeArr = [];
						_this.realTimeData = hextoString(_this.realTimeData);
					}
				}else if(hextoString(ab2hex(res.value)).indexOf("config success") !== -1){
					if(str === undefined){
						str = '';
					}
					uni.showToast({
					    title: str + '成功！',
					    duration: 4000
					});
					return true
				}
				else{
					console.log('test')
				}
			})
	}
	
	function monitor01(_this,nub,uni,str){
		// 这里获取回调，读取成功就的值就会在这个地方接收到！！！
		uni.onBLECharacteristicValueChange((res) => {
				console.log("监听成功", res.value)
				//res.value是ArrayBuffer类型的，官方给了一个方法转16进制，我们再进行操作
				console.log(ab2hex(res.value))
				if(_this !== undefined && nub !== 1){
					_this.realTimeArr.push(ab2hex(res.value));
					_this.realTimeData = "";
					if(ab2hex(res.value).indexOf("0d0a") !== -1){
						for (var i = 0; i < _this.realTimeArr.length; i++) {
							_this.realTimeData += _this.realTimeArr[i];
						}
						_this.realTimeArr = [];
						_this.realTimeData = hextoString(_this.realTimeData);
					}
				}else if(hextoString(ab2hex(res.value)).indexOf("config success") !== -1){
					_this[str] = true;
					console.log('success '+ str)
					console.log(hextoString(ab2hex(res.value)))
				}else {
					console.log(hextoString(ab2hex(res.value)))
				}
			})
	}
	
	function hextoString(hex) {
	    var arr = hex.split("")
	    var out = ""
	    for (var i = 0; i < arr.length / 2; i++) {
	        var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1]
	        var charValue = String.fromCharCode(tmp);
	        out += charValue
	    }
	    return out
	}
	function ab2hex(buffer) {
			  const hexArr = Array.prototype.map.call(
			    new Uint8Array(buffer),
			    function (bit) {
			      return ('00' + bit.toString(16)).slice(-2)
			    }
			  )
			  return hexArr.join('')
		}
			
	function savePz(_this,uni,name,plus){
		if(_this.pzmc === ''){
			plus.nativeUI.toast("请输入配置名称！");
			return;
		}
		uni.setStorage({
		    key: name + _this.pzmc,
		    data: _this.$data,
		    success: function () {
				plus.nativeUI.toast("保存成功");
				_this.closeConfigWin();
		    }
		}); 
	}
	
	function tolead(_this,uni){
		uni.getStorage({
		    key: _this.pzArr[_this.current].name,
		    success: function (res) { 
				Object.assign(_this.$data,res.data); 
				plus.nativeUI.toast("导入配置成功！");
				_this.qx01();
		    }
		}); 
	}
	
	function selectPz(_this,uni,name){
		uni.getStorageInfo({
		    success: function (res) {
				_this.pzArr = [];
				for (var i = 0; i < res.keys.length; i++) {
					if(res.keys[i].indexOf(name) !== -1){
						_this.pzArr.push({name:res.keys[i],fale:false})
					}
				}
		    }
		}); 
	}
	
	function checkboxChange(e,name,val,_this) {
		var items = _this[name],
			values = e.detail.value;
		for (var i = 0, lenI = items.length; i < lenI; ++i) {
			const item = items[i]
			if (values.includes(item[val])) {
				item.fale = true
			} else {
				item.fale = false
			}
		}
		console.log(items)
	}
	
	function txdClFun(xhTypeVal,object){
		if(xhTypeVal === '01'){
			var val04fz = object.simCd;
			for (var i = object.simCd.length; i < 14; i++) {
				val04fz = '0' + val04fz;
			}
			return '01' + val04fz;
		}else if (xhTypeVal === '02'){
			var ip = ipGsh(object.ip);
			var dk = object.dk;
			for (var i = object.dk.length; i < 6; i++) {
				dk = '0' + dk;
			}
			return '02' + ip + dk;
		}else {
			var code = '';
			for (var i = 0; i < object.beidouCode.length; i++) {
				code = code + '3' + object.beidouCode[i];
			}
			return '03' + code;
		}
	}
	function ipGsh(ip) {
		var ipArr = ip.split(".");
		if (ipArr.length !== 4) {
			return '000000000000';
		}
		for (var i = 0; i < ipArr.length; i++) {
			for (var j = ipArr[i].length; j < 3 ; j++) {
				ipArr[i] = "0" + ipArr[i];
			}
		}
		return ipArr[0]+ipArr[1]+ipArr[2]+ipArr[3];
	}
	
		
	function inputSr16(_this,event,name01,name02){
		var value = event.detail.value;
		if(!value || value == " "){
			return '';
		}
		//匹配汉字的正则表达式
		const rule = /[^0-9,a-f,A-F]/g;//如果你们需要字母或者数字，就改这儿！
		_this.$nextTick(function () {
			if(name02 !== undefined){
				_this[name01][name02] = value.replace(rule,'');
			}else{
				_this[name01] = value.replace(rule,'');
			}
		})
	}
 

 export default {
 	codingElements,
 	zsArr,
 	xsArr,
 	calcWs,
	calcWs01,
	calcDigits,
 	MODBUS_CRC,
 	bw,
	bin_to_hex,
	sendData,
	sendKeep,
	savePz,
	tolead,
	selectPz,
	inputSr16,
	checkboxChange,
	monitor,
	monitor01,
	txdClFun,
	hextoString
 }
