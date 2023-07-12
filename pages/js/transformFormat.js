import initData from '@/pages/js/initData.js';
import codingElements from '@/pages/index/codingElements.js';
import aMessage from '@/pages/js/aMessage.js'

function basicConfigTransform(_this) {
	var temp = {
		bwKt: '7E7E 006815333300 1234 40 ',
		queryMessageKt: '7E7E 0011223344 05 1234 41 80',
		open: false,
		txddz: initData.txddz, // 中心主信道和备用信道列表
		str: '',
		pzmc: "水库",
		pzArr: [],
		current: 0,
		tjpzArr: [],
		
		zxz01: '01',
		zxz02: '00',
		zxz03: '00',
		zxz04: '00',
		
		yczdz_02: '', // 遥测站地址
		
		mm_03: '', // 遥测站密码
		
		gzfs_0CIndex: 0, // 工作方式
		gzfs_0CVal: '01',
		gzfs_0CArr: initData.gzfs_0CArr, // 工作方式列表
		
		ycztxsbsbh_0F: "13904507111",
		
		yczType_10Index: 2,
		yczType_10Val: "4B",
		yczType_10Arr: initData.yczType_10Arr,
		
		csList01: initData.csList01,
		
		csList02: initData.csList02,
		_timer: '',
		under_05Val: initData.under_05Val, // 中心站主信道
		optionsSend: [{
				title: '准备发送'
			},
			{
				title: '基本配置'
			},
		],
		optionsSendNub: 0,
		optionsSendFale: false,
		loadStatus: 1,
		underFale: false,
		
		codeObj: [{
			code: '0120',
		
		}],
		
		realTimeArr: [],
		realTimeData: '',
		
		yczcjys: initData.yczcjys,
		yczcjysXz: '00',
	}
	// 工作方式
	temp.gzfs_0CIndex = _this.work;
	temp.gzfs_0CVal = temp.gzfs_0CArr[_this.work].val;
	
	// 遥测站地址和密码
	temp.yczdz_02 = _this.formData.input_value1;
	temp.mm_03 = _this.formData.input_value2;
	
	// 中心站地址
	temp.csList01[0].fale = _this.isStation;
	if(_this.isStation){
		temp.zxz01 = _this.stationList[0].value;
		temp.zxz02 = _this.stationList[1].value;
		temp.zxz03 = _this.stationList[2].value;
		temp.zxz04 = _this.stationList[3].value;
	}
	
	// 设备识别号
	temp.csList02[1].fale = _this.recCode.isClicked;
	temp.ycztxsbsbh_0F = _this.recCode.isClicked ? _this.recCode.value : temp.ycztxsbsbh_0F;
	
	// 遥测站类型
	temp.yczType_10Index = _this.yaoceType !== -1 ? _this.yaoceType : 2;
	temp.yczType_10Val = temp.yczType_10Arr[temp.yczType_10Index].val;
	
	// 信道信息
	if (_this.mainChannels.length !== 0){
		if(_this.mainChannels[0].isClicked){
			temp.under_05Val = transformChannel(temp.under_05Val, _this.mainChannels[0]);
		}
	}
	
	temp.txddz[0] = _this.channels.length > 0 ? transformChannel(temp.txddz[0], _this.channels[0]) : {
		key: '中心站1备用信道类型及地址',
		val: '05',
		object: {
			lxIndex: 1,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0500',
		codef: '0538',
		len: '18,24',
		valf: ''
	};
	temp.txddz[1] = _this.mainChannels.length > 1 ? transformChannel(temp.txddz[1], _this.mainChannels[1]) : {
		key: '中心站2主信道类型及地址',
		val: '06',
		object: {
			lxIndex: 0,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0600',
		codef: '0650',
		len: '18,24',
		valf: ''
	};
	temp.txddz[2] = _this.channels.length > 1 ? transformChannel(temp.txddz[2], _this.channels[1]) : {
		key: '中心站2备用信道类型及地址',
		val: '07',
		object: {
			lxIndex: 0,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0700',
		codef: '0738',
		len: '18,24',
		valf: ''
	};
	temp.txddz[3] = _this.mainChannels.length > 2 ? transformChannel(temp.txddz[3], _this.mainChannels[2]) : {
		key: '中心站3主信道类型及地址',
		val: '08',
		object: {
			lxIndex: 0,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0800',
		codef: '0850',
		len: '18,24',
		valf: ''
	};
	temp.txddz[4] = _this.channels.length > 2 ? transformChannel(temp.txddz[4], _this.channels[2]) : {
		key: '中心站3备用信道类型及地址',
		val: '09',
		object: {
			lxIndex: 0,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0900',
		codef: '0938',
		len: '18,24',
		valf: ''
	};
	temp.txddz[5] = _this.mainChannels.length > 3 ? transformChannel(temp.txddz[5], _this.mainChannels[3]) : {
		key: '中心站4主信道类型及地址',
		val: '0A',
		object: {
			lxIndex: 0,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0A00',
		codef: '0A50',
		len: '18,24',
		valf: ''
	};
	temp.txddz[6] = _this.channels.length > 3 ? transformChannel(temp.txddz[6], _this.channels[3]) : {
		key: '中心站4备用信道类型及地址',
		val: '0B',
		object: {
			lxIndex: 0,
			lxVal: '01',
			lx: [{
				key: '短信',
				val: '01'
			}, {
				key: 'IPV4',
				val: '02'
			},
			{
				key: '北斗',
				val: '03'
			}],
			simCd: '',
			ip: '',
			dk: '',
			beidouCode: ''
		},
		fale: false,
		code: '0B00',
		codef: '0B38',
		len: '18,24',
		valf: ''
	};
	temp.str = getUnderMessage(temp);
	console.log(temp.str);
	return temp;
	// console.log(st)
}

function transformChannel(a, b) {
	console.log(b)
	if(b.type == 0) {
		a.object.ip = b.address;
		a.object.index = 1;
		a.object.lxVal = "02";
		a.object.dk = b.port;
		a.fale = b.isClicked;
		a.key = b.name;
	}
	else {
		console.log(b)
		a.object.index = 2;
		a.object.lxVal = "03";
		a.object.beidouCode = b.beidouCode;
		a.fale = b.isClicked;
	}
	return a;
}

function cl02(yczdz_02){
	var jcpz_02 = '';
	if(yczdz_02.toString().length <= 10){
		jcpz_02 = codingElements.bw(yczdz_02, 10);
	}else{
		var str = yczdz_02.toString();
		var str1 = str.substring(str.length - 6,str.length);
		jcpz_02 = str.substring(0,str.length - 6) + codingElements.bw(parseInt(str1).toString(16), 4);
	}
	return jcpz_02;
}

function tc26(nub26){
	var nubstr = nub26.toString();
	var nub = nubstr;
	for (var i = nubstr.length; i < 13; i++) {
		nub = "0" + nub; 
	}
	var str = '';
	for (var i = 0; i < nub.length; i++) {
		str += "3" + nub[i];
	}
	return str;
}

function getUnderMessage(temp){
	var jcpz_01 = '';
	if(temp.csList01[0].fale){
		var str = codingElements.bw( temp.zxz01, 2) + codingElements.bw( temp.zxz02, 2) + codingElements.bw( temp.zxz03, 2) + codingElements.bw( temp.zxz04, 2);
		jcpz_01 = '01 ' + codingElements.calcWs(str) + ' ' + str;
	}
	
	var jcpz_02 = '';
	if(temp.csList01[1].fale){
		jcpz_02 = cl02(temp.yczdz_02);
		jcpz_02 = ' 02 ' + codingElements.calcWs(jcpz_02) + ' ' + jcpz_02;
	}
				
	var jcpz_03 = '';
	if(temp.csList01[2].fale){
		jcpz_03 = codingElements.bw(temp.mm_03, 4);
		jcpz_03 = ' 03 ' + codingElements.calcWs(jcpz_03) + ' ' + jcpz_03;
	}
	
	var jcpz_04 = '';
	if(temp.csList01[3].fale){
		var val = codingElements.txdClFun(temp.under_05Val.object.lxVal,temp.under_05Val.object)
		jcpz_04 =  temp.under_05Val.val + ' ' + codingElements.calcWs(val) + ' ' + val;
	}
	
	var jcpz_05_0B = '';
	for (var i = 0; i < temp.txddz.length; i++) {
		if(temp.txddz[i].fale){
			var val = codingElements.txdClFun(temp.txddz[i].object.lxVal,temp.txddz[i].object)
			jcpz_05_0B = jcpz_05_0B + ' ' + temp.txddz[i].val + ' ' + codingElements.calcWs(val) + ' ' + val;
		}
	}
	if(jcpz_05_0B.indexOf('undefined') !== -1){
		plus.nativeUI.toast("请检查数据格式！");
		return
	}
	var jcpz_0C = '';
	if(temp.csList02[0].fale){
		jcpz_0C = ' 0C ' + codingElements.calcWs(temp.gzfs_0CVal) + ' ' + temp.gzfs_0CVal;
	}
	
	var jcpz_0F = '';
	if(temp.csList02[1].fale){ 
		jcpz_0F = '31' + tc26(temp.ycztxsbsbh_0F);
		jcpz_0F = ' 0F ' + codingElements.calcWs(jcpz_0F) + ' ' + jcpz_0F
	}
	
	var jcpz_10 = '';
	if(temp.csList02[2].fale){
		jcpz_10 = ' 10 ' + codingElements.calcWs(temp.yczType_10Val) + ' ' + temp.yczType_10Val;
	}
	
	var jcpz_11 = '';
	if(temp.csList02[3].fale){
		var yczcjys_11Val = '';
		temp.yczcjys.forEach(item => {
			//console.log(item.val)
			yczcjys_11Val += item.val;
		})
		jcpz_11 = ' 0D40 ' + yczcjys_11Val;
	}
	
	
	var str = '0000 180121150033 ' + jcpz_01 + jcpz_02 + jcpz_03 + jcpz_04 + jcpz_05_0B + jcpz_0C + jcpz_0F + jcpz_10 + jcpz_11; 
	
	var strLength = str.replace(/\s+/g,"").length / 2
	var length16 = strLength.toString(16);
	for (var i = length16.length; i < 3; i++) { 
		length16 = '0' + length16;
	} 
	length16 = '8' + length16; 
	str = temp.bwKt + length16 + ' 02 ' + str + ' 05';
	let data = str.replace(/\s+/g,"");

	console.log(str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(data),4)+ ' 0D0A')
	return str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(data),4)+ ' 0D0A';
}

function savePz(data,uni,name,plus, flag){
	uni.setStorage({
		key: name,
		data: data,
		success: function () {
			if (flag) {
				plus.nativeUI.toast("保存成功");
			}
			// _this.closeConfigWin();
		}
	}); 
}

function runConfigTransform(_this) {
	var temp = {
		codingElements: codingElements,
		bwKt: '7E7E 006815333300 1234 42 ',
		queryMessageKt: '7E7E 0011223344 05 1234 43 80',
		str: '',
		open: false,
		pzmc: '',
		pzArr: [],
		current: 0,
		tjpzArr: [],
		
		
		item: {
			jbsjjg: "05",
			yljbfz: 0, // 雨量加报阈值
		
			swjz1: 0,
			swjz2: 0,
			swxzz1: 0,
			swxzz2: 0,
			jbsw1: "12.24",
			jbsw2: "3.45",
		
			jbswyx: 0,
			jbswys: 0, // 加报水位阈值
		},
		
		dssjbjgIndex: 0, // 定时报时间间隔
		dssjbjgVal: '05',
		dssjbjg01Arr: initData.dssjbjg01Arr,
		dssjbjgArr: initData.dssjbjgArr, // 时间列表
		
		
		jslrqssjIndex: 8,
		jslrqssjVal: '08',
		jslrqssjArr: initData.jslrqssjArr,
		
		cyjgIndex: 0, // 采样时间间隔
		cyjgVal: '01',
		
		swsjccjgIndex: 0, // 数据存储时间间隔
		swsjccjgVal: '05',
		
		yljfblIndex: 1,
		yljfblVal: '02',
		yljfblArr: initData.yljjs_3Arr,
		
		swjfblIndex:0,
		swjfblVal: '01',
		swjfblArr: initData.yljfblArr,
		
		csList: initData.csList,
		optionsSend: [{
				title: '准备发送'
			},
			{
				title: '运行配置'
			}
		],
		optionsSendNub: 0,
		optionsSendFale: false,
		loadStatus: 1,
		paramFale: false,
		realTimeArr: [],
		realTimeData: ''
	}
	// 定时报发送间隔
	temp.dssjbjgIndex = _this.formData1.sendTime;
	temp.dssjbjgVal = temp.dssjbjgArr[_this.formData1.sendTime].val;
	
	// 采样时间间隔
	temp.cyjgIndex = _this.formData1.sampleTime;
	temp.cyjgVal = temp.dssjbjgArr[_this.formData1.sampleTime].val;
	
	// 数据存储间隔
	temp.swsjccjgIndex = _this.formData1.saveTime;
	temp.swsjccjgVal = temp.dssjbjgArr[_this.formData1.saveTime].val;
	
	// 降水日起始时间
	temp.jslrqssjIndex = _this.startTime;
	temp.jslrqssjVal = temp.jslrqssjArr[_this.startTime].val; 
	
	// 雨量计分辨率
	temp.yljfblIndex = _this.rate;
	temp.yljfblVal = temp.yljfblArr[_this.rate].val;
	
	// 水位高程
	temp.swjz1 = parseFloat(_this.height1);
	// temp.swjz2 = parseInt(_this.height2);
	
	// 水位修正值
	temp.item.swxzz1 = parseFloat(_this.fixHeight1);
	// temp.item.swxzz2 = parseInt(_this.fixHeight1);
	
	// 加报时间间隔
	temp.csList[1].fale = _this.isPlusMessage;
	if(_this.isPlusMessage){
		temp.item.jbsjjg = _this.plusMessage;
	}
	
	// 雨量报警阈值
	temp.csList[7].fale = _this.isRainWarn;
	if(_this.isRainWarn){
		temp.item.yljbfz = _this.formData1.rainWarn;
	}
	
	// 加报水位
	temp.csList[12].fale = _this.isAddHeight1;
	if(_this.isAddHeight1){
		temp.item.jbsw1 = (parseFloat(_this.addHeight1)).toString();
	}
	// temp.csList[13].fale = _this.isAddHeight2;
	// if(_this.isAddHeight2){
	// 	temp.item.jbsw2 = (parseFloat(_this.addHeight2)).toString();
	// }
	
	// 加报水位阈值
	temp.csList[14].fale = _this.isWaterWarn;
	if(_this.isWaterWarn){
		temp.item.jbswys = parseFloat(_this.formData1.waterWarn) * 100;
	}
	temp.csList[15].fale = _this.isWaterWarn1;
	if(_this.isWaterWarn1){
		temp.item.jbswyx = parseFloat(_this.waterWarn1) * 100;
	}
	
	temp.str = getParamMessage(temp);
	console.log(temp.str)
	return temp;
}

    // 字符串转16进制字符串
 function string2Hex(str) {
      let val = ""
      for (let i = 0; i < str.length; i++) {
        if (val == "")
          val = str.charCodeAt(i).toString(16)
        else
          val += str.charCodeAt(i).toString(16)
      }
      return val
    }

function zsCl(val,ws,name){
	val = String(val).replace('-',"");
	val = String(val).replace('.',"");
	for (var i = String(val).length; i < ws; i++) {
		val = '0' + val;
	}
	return val;
}

function getParamMessage(_this){  
	var param_20 = '';
	if(_this.csList[0].fale){
		param_20 = ' 20 '+ codingElements.calcWs(_this.dssjbjgVal) + ' ' + _this.dssjbjgVal;
	}
	
	var param_21 = '';
	if(_this.csList[1].fale){
		param_21 = ' 21 '+codingElements.calcWs(zsCl(_this.item.jbsjjg,2)) + ' ' + zsCl(_this.item.jbsjjg,2);
	}
	
	var param_22 = '';
	if(_this.csList[2].fale){
		param_22 = ' 22 '+codingElements.calcWs(_this.jslrqssjVal) + ' ' + _this.jslrqssjVal;
	}
	
	var param_23 = '';
	if(_this.csList[3].fale){
		param_23 = ' 23 '+codingElements.calcWs(_this.cyjgVal) + ' ' + _this.cyjgVal;
	}
	
	var param_24 = '';
	if(_this.csList[4].fale){
		param_24 = ' 24 '+codingElements.calcWs(_this.swsjccjgVal) + ' ' +  _this.swsjccjgVal;
	}
	
	var param_25 = '';
	if(_this.csList[5].fale){
		var item = codingElements.calcDigits(2,1,_this.yljfblVal)
		param_25 = ' 25 '+ item.ws + ' ' + _this.yljfblVal;
	}
	
	var param_26 = '';
	if(_this.csList[6].fale){
		var item = codingElements.calcDigits(2,1,_this.swjfblVal)
		param_26 = ' 26 '+ item.ws + ' ' + _this.swjfblVal;
	}
	
	var param_27 = '';
	if(_this.csList[7].fale){
		param_27 = ' 27 '+codingElements.calcWs(zsCl(_this.item.yljbfz,2)) + ' ' + zsCl(_this.item.yljbfz,2);
	
	}
	
	var param_28 = '';
	if(_this.csList[8].fale){
		var item = codingElements.calcDigits(7,3,_this.item.swjz1)
		param_28 = ' 28 '+ item.ws + ' ' + item.val;
	}
	
	var param_29 = '';
	if(_this.csList[9].fale){
		var item = codingElements.calcDigits(7,3,_this.item.swjz2)
		param_29 = ' 29 '+ item.ws + ' ' + item.val;
	}
		
	var param_30 = '';
	if(_this.csList[10].fale){
		var item = codingElements.calcDigits(5,3,_this.item.swxzz1)
		param_30 = ' 30 '+ item.ws + ' ' + item.val;
	}
	
	var param_31 = '';
	if(_this.csList[11].fale){
		var item = codingElements.calcDigits(5,3,_this.item.swxzz2)
		param_31 = ' 31 '+ item.ws + ' ' + item.val;
	}
	
	var param_38 = '';
	if(_this.csList[12].fale){
		var item = codingElements.calcDigits(4,2,_this.item.jbsw1)
		param_38 = ' 38 '+ item.ws + ' ' + item.val;
	}
	
	var param_39 = '';
	if(_this.csList[13].fale){
		var item = codingElements.calcDigits(4,2,_this.item.jbsw2)
		param_39 = ' 39 '+ item.ws + ' ' + item.val;
	}
		
	var param_40 = '';
	if(_this.csList[14].fale){
		var item = codingElements.calcDigits(3,2,_this.item.jbswys)
		param_40 = ' 40 '+ item.ws + ' ' + item.val;
	}
	
	var param_41 = '';
	if(_this.csList[15].fale){
		var item = codingElements.calcDigits(3,2,_this.item.jbswyx)
		param_41 = ' 41 '+ item.ws + ' ' + item.val;
	}
	  
	var str = '0000 180121150033 '+ param_20 + param_21 + param_22 + param_23 +
	param_24 + param_25 + param_26 + param_27 + param_28 + param_29 + param_30 +
	param_31 + param_38 + param_39 + param_40 + param_41;
	
	var strLength = str.replace(/\s+/g,"").length / 2;
	var length16 = strLength.toString(16);
	for (var i = length16.length; i < 3; i++) { 
		length16 = '0' + length16;
	}
	length16 = '8' + length16;
	str = _this.bwKt + length16 + '02' + str + '05';
	var data1 = str.replace(/\s+/g,"");
	console.log(str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(data1),4)+ ' 0D0A')
	return str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(data1),4)+ ' 0D0A';
	// console.log(str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(data.toString('hex')),4)+ ' 0D0A')
	// return str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(data.toString('hex')),4)+ ' 0D0A';
}

function plusConfigTransform(_this) {
	var temp = {
		bwKt: '7E7E 006815333300 1234 42 ',
		str: [],
		str1: '',
		disabled: false,
		pzmc: '',
		pzArr: [],
		current: 0,
		tjpzArr: [],
		ysList: [],
		ysObjList: [],
		
		type485: '0',
		gzfs485: '0',
		
		codingElements: codingElements,
		tdIndex: 0,
		tdVal: '01',
		tdArr: initData.tdArr,
		
		fssj_lx: '00',
		jym_Val: '00',
		
		td_0100Index: 0,
		td_0100Val: '01',
		td_0100Arr: initData.td_0100Arr,
		srlc_0100Index: 0,
		srlc_0100Val: '01',
		srlc_0100Arr: initData.srlc_0100Arr,
		
		
		yssbfIndex: 0,
		yssbfVal: '',
		yssbfArr: initData.yssbfArr,
		
		gzfsIndex: 0,
		gzfsVal: '0102',
		gzfsArr: initData.gzfsArr,
		
		item: initData.item,
		
		td_3Index: 0,
		td_3Val: '01',
		td_3Arr: initData.td_3Arr,
		
		yljjs_3Index: 0,
		yljjs_3Val: '10',
		yljjs_3Arr: initData.yljjs_3Arr,
		
		td_0503Index: 0,
		td_0503Val: '01',
		td_0503Arr: initData.td_0503Arr,
		
		td_7Index: 0,
		td_7Val: '01',
		td_7Arr: initData.td_7Arr,
		
		td_0302Index: 0,
		td_0302Val: '01',
		td_0302Arr: initData.td_0302Arr,
		
		gzsj_0503Index: 0,
		gzsj_0503Val: '00',
		gzsj_0503Arr: initData.gzsj_0503Arr,
		
		sjjg_0503Index: 0,
		sjjg_0503Val: '01',
		sjjg_0503Arr: initData.sjjg_0503Arr,
		
		fbl_0503Index: 0,
		fbl_0503Val: '01',
		fbl_0503Arr: initData.fbl_0503Arr,
		
		ysl_0503Index: 0,
		ysl_0503Val: '01',
		ysl_0503Arr: initData.ysl_0503Arr,
		
		sxtxh_0503Index: 0,
		sxtxh_0503Val: '01',
		sxtxh_0503Arr: initData.sxtxh_0503Arr,
		
		cb_0503: false,
		
		tpfjnr_0503: initData.tpfjnr_0503,
		
		td_010203Index: 0,
		td_010203Val: '01',
		td_010203Arr: initData.td_010203Arr,
		
		sjdqgz_010203Index: 0,
		sjdqgz_010203Val: '01',
		sjdqgz_010203Arr: initData.sjdqgz_010203Arr,
		
		txbl485_010203Index: 4,
		txbl485_010203Val: '05',
		txbl485_010203Arr: initData.txbl485_010203Arr,
		
		gnm_010203Index: 0,
		gnm_010203Val: '03',
		gnm_010203Arr: initData.gnm_010203Arr,
		
		dqsl_010203Index: 0,
		dqsl_010203Val: '',
		dqsl_010203Arr: [],
		
		dqsl_010203Index1: 0,
		dqsl_010203Val1: '02',
		dqsl_010203Arr1: initData.dqsl_010203Arr1,
		
		dqsl_010203Index2: 0,
		dqsl_010203Val2: '01',
		dqsl_010203Arr2: initData.dqsl_010203Arr2,
		
		dqsl_010203Index3: 0,
		dqsl_010203Val3: '01',
		dqsl_010203Arr3: initData.dqsl_010203Arr3,
		
		fssj_010203Index: 0,
		fssj_010203Val: '01',
		fssj_010203Arr: initData.fssj_010203Arr,
		
		jym_010203Index: 0,
		jym_010203Val: '0002',
		jym_010203Arr: initData.jym_010203Arr,
		
		
		jssjqq_010203Index: 0,
		jssjqq_010203Val: '',
		jssjqq_010203Arr: [],
		
		jssjqq_010203Index1: 0,
		jssjqq_010203Val1: '00',
		jssjqq_010203Arr1: initData.jssjqq_010203Arr1,
		
		jssjqq_010203Index2: 0,
		jssjqq_010203Val2: '00',
		jssjqq_010203Arr2: initData.jssjqq_010203Arr2,
		
		jssjqq_010203Index3: 0,
		jssjqq_010203Val3: '00',
		jssjqq_010203Arr3: initData.jssjqq_010203Arr3,
		
		jssjsx_010203Index: 0,
		jssjsx_010203Val: '',
		jssjsx_010203Arr: [],
		
		jssjsx_010203Index1: 0,
		jssjsx_010203Val1: '10',
		jssjsx_010203Arr1: initData.jssjsx_010203Arr1,
		
		jssjsx_010203Index2: 3,
		jssjsx_010203Val2: '08',
		jssjsx_010203Arr2: initData.jssjsx_010203Arr2,
		
		jssjsx_010203Index4: 1,
		jssjsx_010203Val4: '02',
		jssjsx_010203Arr4: initData.jssjsx_010203Arr4,
		
		jssjsx_010203Index3: 0,
		jssjsx_010203Val3: '09',
		jssjsx_010203Arr3: initData.jssjsx_010203Arr3,
		
		jsjymsx_010203Index: 0,
		jsjymsx_010203Val: '02',
		jsjymsx_010203Arr: initData.jsjymsx_010203Arr,
		
		optionsSend: initData.optionsSend,
		optionsSendNub: 0,
		optionsSendFale: false,
		loadStatus: 1,
		elemeFale: false,
		deleteFale: false,
		
		data03Val: '05',
		data03Index: 4,
		
		data09Val: '0001',
		data09Index: 0,
		data09Arr: initData.data09Arr,
		
		data11Val: '00',
		data11Index: 0,
		data11Arr: initData.data11Arr,
		
		data12Val: '01',
		data12Index: 0,
		data12Arr: initData.data12Arr,
		
		resList: [],
		resStr: ''
	}
	var factor = {};
	var pressureNum = 0;
	var flowNum = 0;
	for (var i = 0; i < _this.selectedfactors.length; i++) {
		switch(_this.selectedfactors[i].name) {
			// case "雨量" : factor = rainFactorTransform(_this.selectedfactors[i], _this.listSymbol); temp.ysList.push(factor); break;
			// case "485通讯MODBUS整数形": factor = int485FactorTransform(_this.selectedfactors[i], _this.listSymbol); temp.ysList.push(factor); break;
			// case "模拟量（端子接入）": factor = moniFactorTransform(_this.selectedfactors[i], _this.listSymbol); temp.ysList.push(factor); break;
			// case "485通讯MODBUS浮点数": factor = float485FactorTransform(_this.selectedfactors[i], _this.listSymbol); temp.ysList.push(factor); break;
			case "图片": factor = picturefactorTransform(_this.selectedfactors[i], _this.listSymbol); temp.ysList.push(factor); break;
			case "大坝渗压修正值" : pressureNum++; factor = pressureFactorTransform(_this.selectedfactors[i], pressureNum); temp.resList.push(factor); break;
			case "大坝渗流修正值" : flowNum++; factor = flowFactorTransform(_this.selectedfactors[i], flowNum); temp.resList.push(factor); break;
			default: break;
		}
	}
	temp.str = getElemeMessage(temp);
	temp.resStr = getPressureFlowMessage(temp);
	console.log(temp.resStr)
	return temp;
}

function rainFactorTransform(factor, item){
	var rainFactor = {
		gzfs: factor.name,
		yssbf: item[factor.factorSymbol],
		str: 'FF ' + codingElements.codingElements.find(o => o.key === item[factor.factorSymbol]).val + " 40 0203 01 "
	}
	var initRain = (parseFloat(factor.rainInitial) * 10).toString(16);
	let plus0 = 4 - initRain.length;
	for (var i = 0; i < plus0; i++) {
		initRain = '0' + initRain;
	}
	var rate = "0" + (factor.rainRate + 1).toString();
	rainFactor.str = rainFactor.str + initRain + ' ' + rate + ' 0000'
	return rainFactor;
}

function int485FactorTransform(factor, item){
	var int485Factor = {
		gzfs: factor.name,
		yssbf: item[factor.factorSymbol],
		str: 'FF '+ codingElements.codingElements.find(o => o.key === item[factor.factorSymbol]).val + ' 88 0205 '
	}
	var channel = "0" + (factor.channel + 1).toString();
	var rule = int485RuleTransform(rule, factor.rule);
	var check = "0" + (factor.check + 1).toString();
	var address = factor.address;
	var functionCode = factor.functionCode === 0 ? "03" : "04";
	var rg = factor.rgHigh + factor.rgLow;
	var readNumber = "0" + (factor.readNumber + 1).toString();
	var checkType = int485CheckTransform(checkType, factor);
	var receiveDelay = factor.receiveDelay;
	var receiveRate = int485RateTransform(receiveRate, factor.receiveRate);
	var receiveOrder = factor.receiveOrder === 0 ? '09' : '08';
	var receiveCheckOrder = factor.receiveCheckOrder === 0 ? '02' : '01';
	int485Factor.str = int485Factor.str + channel + ' ' + rule + ' ' + check + ' ' + address + ' ' + functionCode + ' ' + rg + ' ' + readNumber + ' ' + checkType + ' ' + receiveDelay + ' ' + receiveRate + ' ' + receiveOrder + ' ' + receiveCheckOrder;
	return int485Factor;
}

function int485RuleTransform(rule, num){
	switch(num) {
		case 0: rule = "01"; break;
		case 1: rule = "11"; break;
		case 2: rule = "12"; break;
		case 3: rule = "13"; break;
		case 4: rule = "14"; break;
		case 5: rule = "15"; break;
		case 6: rule = "16"; break;
		case 7: rule = "17"; break;
		case 8: rule = "18"; break;
		case 9: rule = "19"; break;
		case 10: rule = "20"; break;
		case 11: rule = "21"; break;
		case 12: rule = "22"; break;
		case 13: rule = "23"; break;
		case 14: rule = "24"; break;
		case 15: rule = "25"; break;
		case 16: rule = "26"; break;
		case 17: rule = "27"; break;
		case 18: rule = "28"; break;
		case 19: rule = "29"; break;
		default: rule = "01"; break;
	}
	return rule;
}

function int485CheckTransform(check, num){
	var check = '';
	if(num.checkType == 0) {
		check = '01';
		if(num.checkTypeValue === 0) check = check + '0002';
		else check = check + '0001';
	}
	else {
		check = '00' + num.checkTypeValue2;
	}
	return check;
}

function int485RateTransform(receiveRate, num){
	var receiveRate = '';
	switch(num) {
		case 0: receiveRate = "00"; break;
		case 1: receiveRate = "01"; break;
		case 2: receiveRate = "02"; break;
		case 3: receiveRate = "03"; break;
		case 4: receiveRate = "21"; break;
		case 5: receiveRate = "04"; break;
		case 6: receiveRate = "11"; break;
		case 7: receiveRate = "12"; break;
		case 8: receiveRate = "13"; break;
		case 9: receiveRate = "22"; break;
		case 10: receiveRate = "14"; break;
		default: receiveRate = "00"; break;
	}
	return receiveRate;
}

function moniFactorTransform(factor, item) {
	var moniFactor = {
		gzfs: factor.name,
		yssbf: item[factor.factorSymbol],
		str: 'FF '+ codingElements.codingElements.find(o => o.key === item[factor.factorSymbol]).val + ' 88 0102 '
	}
	var channel = "0" + (factor.channel + 1).toString();
	var range = factor.range.toString();
	let num = 4 - range.length;
	for (var i = 0; i < num; i++) {
		range = "0" + range;
	}
	var ratio = (parseFloat(factor.ratio) * 100).toString();
	let num1 = 4 - ratio.length;
	for (var i = 0; i < num1; i++){
		ratio = "0" + ratio;
	}
	let intOffset = (100 * parseFloat(factor.offset)).toString()
	let num2 = 4 - intOffset.length;
	var offset = intOffset;
	for (var i = 0; i < num2; i++) {
		offset = "0" + offset;
	}
	var basic = (parseFloat(factor.basic) * 100).toString();
	let num3 = 8 - basic.length;
	for (var i = 0; i < num3; i++) {
		basic = "0" + basic;
	}
	var inputRange = factor.inputRange === 0 ? '01' : '02';
	moniFactor.str = moniFactor.str + channel + ' ' + range + ' ' + ratio + ' ' + offset + ' ' + basic + ' ' + inputRange + ' 44 55 66';
	return moniFactor;
}

function float485FactorTransform(factor, item) {
	var float485Factor = {
		gzfs: factor.name,
		yssbf: item[factor.factorSymbol],
		str: 'FF '+ codingElements.codingElements.find(o => o.key === item[factor.factorSymbol]).val + ' 88 0105 '
	}
	var channel = "0" + (factor.channel + 1).toString();
	var rule = int485RuleTransform(rule, factor.rule);
	var check = "0" + (factor.check + 1).toString();
	var address = factor.address;
	var functionCode = factor.functionCode === 0 ? "03" : "04";
	var rg = factor.rgHigh + factor.rgLow;
	var checkType = int485CheckTransform(checkType, factor);
	var receiveDelay = factor.receiveDelay;
	var receiveRate = int485RateTransform(receiveRate, factor.receiveRate);
	var receiveOrder = "0" + (factor.receiveOrder + 1).toString();
	var receiveCheckOrder = factor.receiveCheckOrder === 0 ? '02' : '01';
	float485Factor.str = float485Factor.str + channel + ' ' + rule + ' ' + check + ' ' + address + ' ' + functionCode + ' ' + rg + ' 02 ' + checkType + ' ' + receiveDelay + ' ' + receiveRate + ' ' + receiveOrder + ' ' + receiveCheckOrder;
	return float485Factor;
}

function picturefactorTransform(factor, item){
	var pictureFactor = {
		gzfs: factor.name,
		yssbf: "图片信息",
		str: 'FFF3 '
		// str: 'FF '+ codingElements.codingElements.find(o => o.key === "图片信息").val + ' 50 0505 '
	}

	var stationCode = chineseToAcs(factor.stationName)
	var length = stationCode.length / 4 + 10;
	var str = length * 8;
	var stationLength = str.toString(16);
	// var channel = "0" + (factor.channel + 1).toString();
	// var startTime = factor.startTime.toString().length > 1 ? factor.startTime.toString() : "0" + factor.startTime.toString();
	// var timeInterval = (factor.timeInterval + 1).toString().length > 1 ? (factor.timeInterval + 1).toString() : "0" + (factor.timeInterval + 1).toString();
	// var rate = (factor.rate + 1).toString().length > 1 ? (factor.rate + 1).toString() : "0" + (factor.rate + 1).toString();
	// var compressRate = (factor.compressRate + 1).toString().length > 1 ? (factor.compressRate + 1).toString() : "0" + (factor.compressRate + 1).toString();
	// var camera = (factor.camera + 1).toString().length > 1 ? (factor.camera + 1).toString() : "0" + (factor.camera + 1).toString();
	// var plus = picturePlusTransform(plus, factor.plus);
	pictureFactor.str = pictureFactor.str + stationLength + ' ' + '05 03 01 08 01 01 01 01 0006 ' + stationCode;
	return pictureFactor;
}

function chineseToAcs(text){
	var result = '';
	for(var i=0; i<text.length; i++){
		if(i !== text.length - 1){
			result = result + text[i].charCodeAt().toString(16) + ' ';
		}
		else{
			result = result + text[i].charCodeAt().toString(16)
		}
	}
	return result;
}

function picturePlusTransform(plus, num) {
	var plus = '';
	var pluss = num.split(' ');
	plus = pluss.indexOf("水压") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("统计雨量") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("备用") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("蒸发量") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("土壤含水量") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("水质") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("水温") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("风速") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("气压") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("功率") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("闸位") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("流速") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("瞬间流量") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("水位") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("当前雨量") !== -1 ? plus + '1' : plus + '0';
	plus = pluss.indexOf("累计流量") !== -1 ? plus + '1' : plus + '0';
	plus = parseInt(plus, 2).toString(16);
	var num = 4 - plus.length;
	for (var i = 0; i < num; i++) {
		plus = "0" + plus;
	}
	return plus;
}

function pjbw(index, bwNumber, bwStr, _this){
	var str1 = " " + codingElements.bw(index.toString(16), 2) + codingElements.bw(bwNumber.toString(16), 2) + ' 180121150033 ' + bwStr;
	var strLength = str1.replace(/\s+/g, "").length / 2;
	var length16 = strLength.toString(16);
	for (var j = length16.length; j < 3; j++) {
		length16 = '0' + length16;
	}
	length16 = '8' + length16;
	str1 = _this.bwKt + length16 + ' 02' + str1 + '05';
	var data1 = str1.replace(/\s+/g,"");
	// console.log(str1 + " " + codingElements.bw(codingElements.MODBUS_CRC(Buffer.from(data1).toString('hex')), 4) + ' 0D0A')
	return str1 + " " + codingElements.bw(codingElements.MODBUS_CRC(data1), 4) + ' 0D0A';
}

function getElemeMessage(_this){
	var strArr = [];
	var returnArr = [];
	var bwNumberArr = [0];
	var str = "";
	var len = 0;
	var bwNumber = 0;
	for (var i = 0; i < _this.ysList.length; i++) {
		str += _this.ysList[i].str + " ";
		len += _this.ysList[i].str.replace(/\s+/g, "").length;
		bwNumber ++;
		if(len > 480 && len < 530){ 
			strArr.push(str);
			bwNumberArr.push(bwNumber);
			str = "";
			len = 0;
			bwNumber = 0;
		}
		if(i === _this.ysList.length - 1){
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
		var str1 = pjbw(index, nub, strArr[i], _this)
		//console.log(str1) 
		returnArr.push(str1);
	}
	
	if(returnArr.length === 0){
		var str1 = pjbw(0, 0, '', _this)
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

function getPressureFlowMessage(_this){
	// var bwKt = '7E7E 006815333300 1234 F2 ';
	// for (var i = 0; i < _this.resList.length; i++) {
		
	// }
	
	var strArr = [];
	var returnArr = [];
	var bwNumberArr = [0];
	var str = "";
	var len = 0;
	var bwNumber = 0;
	for (var i = 0; i < _this.resList.length; i++) {
		str += _this.resList[i].str + " ";
		len += _this.resList[i].str.replace(/\s+/g, "").length;
		bwNumber ++;
		if(len > 480 && len < 530){ 
			strArr.push(str);
			bwNumberArr.push(bwNumber);
			str = "";
			len = 0;
			bwNumber = 0;
		}
		if(i === _this.resList.length - 1){
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
		var str1 = pjbw1(index, nub, strArr[i], '7E7E 006815333300 1234 F2 ')
		//console.log(str1) 
		returnArr.push(str1);
	}
	
	if(returnArr.length === 0){
		var str1 = pjbw1(0, 0, '', '7E7E 006815333300 1234 F2 ')
		returnArr.push(str1);
	}
	// console.log(returnArr);
	return returnArr;
}

function pressureFactorTransform(factor, num){
	var pressureFactor = {
		name: '大坝渗压修正值',
		str: 'FF1' + (3 + num).toString() + '2B '
	}
	var temp = '';
	if(factor.cPressure[0] == '-'){
		pressureFactor.str = pressureFactor.str + 'FF';
		temp = (parseFloat(factor.cPressure.substring(1)) * 1000).toString();
	}
	else{
		pressureFactor.str = pressureFactor.str + '00';
		temp = (parseFloat(factor.cPressure) * 1000).toString();
	}
	var len = 8 - temp.length
	for(var i = 0; i < len; i++){
		temp = '0' + temp;
	}
	
	pressureFactor.str = pressureFactor.str + temp;	
	return pressureFactor;
}

function flowFactorTransform(factor, num){
	var flowFactor = {
		name: '大坝渗流修正值',
		str: 'FF2' + (-1 + num).toString() + '2B '
	}
	var temp = '';
	if(factor.cFlow[0] == '-'){
		flowFactor.str = flowFactor.str + 'FF';
		temp = (parseFloat(factor.cFlow.substring(1)) * 1000).toString();
	}
	else{
		flowFactor.str = flowFactor.str + '00';
		temp = (parseFloat(factor.cFlow) * 1000).toString();
	}
	var len = 8 - temp.length
	for(var i = 0; i < len; i++){
		temp = '0' + temp;
	}
	
	flowFactor.str = flowFactor.str + temp;	
	console.log(flowFactor.str)
	return flowFactor;
}

export default {
	basicConfigTransform,
	getUnderMessage,
	savePz,
	runConfigTransform,
	plusConfigTransform
}