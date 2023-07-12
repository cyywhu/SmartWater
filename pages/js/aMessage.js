import codingElements from '../index/codingElements.js';

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
	console.log(str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g,""),"hex")),4)+ ' 0D0A')
	return str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g,""),"hex")),4)+ ' 0D0A';
}

function getUnderMessage(_this){
	var jcpz_01 = '';
	if(_this.csList01[0].fale){
		var str = codingElements.bw( _this.zxz01, 2) + codingElements.bw( _this.zxz02, 2) + codingElements.bw( _this.zxz03, 2) + codingElements.bw( _this.zxz04, 2);
		jcpz_01 = '01 ' + codingElements.calcWs(str) + ' ' + str;
	}
	
	var jcpz_02 = '';
	if(_this.csList01[1].fale){
		jcpz_02 = cl02(_this.yczdz_02);
		jcpz_02 = ' 02 ' + codingElements.calcWs(jcpz_02) + ' ' + jcpz_02;
	}
				
	var jcpz_03 = '';
	if(_this.csList01[2].fale){
		jcpz_03 = codingElements.bw(_this.mm_03, 4);
		jcpz_03 = ' 03 ' + codingElements.calcWs(jcpz_03) + ' ' + jcpz_03;
	}
	
	var jcpz_04 = '';
	if(_this.csList01[3].fale){
		var val = codingElements.txdClFun(_this.under_05Val.object.lxVal,_this.under_05Val.object)
		jcpz_04 =  _this.under_05Val.val + ' ' + codingElements.calcWs(val) + ' ' + val;
	}
	
	var jcpz_05_0B = '';
	for (var i = 0; i < _this.txddz.length; i++) {
		if(_this.txddz[i].fale){
			var val = codingElements.txdClFun(_this.txddz[i].object.lxVal,_this.txddz[i].object)
			jcpz_05_0B = jcpz_05_0B + ' ' + _this.txddz[i].val + ' ' + codingElements.calcWs(val) + ' ' + val;
		}
	}
	if(jcpz_05_0B.indexOf('undefined') !== -1){
		plus.nativeUI.toast("请检查数据格式！");
		return
	}
	var jcpz_0C = '';
	if(_this.csList02[0].fale){
		jcpz_0C = ' 0C ' + codingElements.calcWs(_this.gzfs_0CVal) + ' ' + _this.gzfs_0CVal;
	}
	
	var jcpz_0F = '';
	if(_this.csList02[1].fale){ 
		jcpz_0F = '31' + tc26(_this.ycztxsbsbh_0F);
		jcpz_0F = ' 0F ' + codingElements.calcWs(jcpz_0F) + ' ' + jcpz_0F
	}
	
	var jcpz_10 = '';
	if(_this.csList02[2].fale){
		jcpz_10 = ' 10 ' + codingElements.calcWs(_this.yczType_10Val) + ' ' + _this.yczType_10Val;
	}
	
	var jcpz_11 = '';
	if(_this.csList02[3].fale){
		var yczcjys_11Val = '';
		_this.yczcjys.forEach(item => {
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
	str = _this.bwKt + length16 + ' 02 ' + str + ' 05';
	console.log(str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g,""),"hex")),4)+ ' 0D0A')
	return str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g,""),"hex")),4)+ ' 0D0A';
}

function getElemeMessage(_this){
	var strArr = [];
	var returnArr = [];
	var bwNumberArr = [0];
	var str = "";
	var len = 0;
	var bwNumber = 0;
	//console.log(_this.ysList)
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
	return returnArr; 
}

function pjbw(index, bwNumber, bwStr, _this){
	var str1 = " " + codingElements.bw(index.toString(16), 2) + codingElements.bw(bwNumber.toString(16), 2) + ' 180121150033 ' + bwStr;
	var strLength = str1.replace(/\s+/g, "").length / 2;
	var length16 = strLength.toString(16);
	for (var j = length16.length; j < 3; j++) {
		length16 = '0' + length16;
	}
	length16 = '8' + length16;
	str1 = _this.bwKt + " " + length16 + ' 02' + str1 + '05';
	return str1 + " " + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str1.replace(/\s+/g, ""), "hex")), 4) + ' 0D0A';
}

function tc26(nub26){
	var nubstr = String(nub26);
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


function zsCl(val,ws,name){
	val = String(val).replace('-',"");
	val = String(val).replace('.',"");
	for (var i = String(val).length; i < ws; i++) {
		val = '0' + val;
	}
	return val;
}

function cl02(yczdz_02){
	var jcpz_02 = '';
	if(String(yczdz_02).length <= 10){
		jcpz_02 = codingElements.bw(yczdz_02, 10);
	}else{
		var str = String(yczdz_02);
		var str1 = str.substring(str.length - 6,str.length);
		jcpz_02 = str.substring(0,str.length - 6) + codingElements.bw(parseInt(str1).toString(16), 4);
	}
	return jcpz_02;
}

function getUnderMessageTy(_this){
	var jcpz_01 = '';
	if(_this.csList01[0].fale){
		var str = codingElements.bw( _this.zxz01, 2) + '000000';
		jcpz_01 =  '01 ' + codingElements.calcWs(str) + str; 
	}
	var jcpz_02 = '';
	if(_this.csList01[1].fale){
		jcpz_02 = cl02(_this.yczdz_02); 
		jcpz_02 = ' 02 ' + codingElements.calcWs(jcpz_02) + ' ' + jcpz_02;
	}
	
	var jcpz_04 = '';
	if(_this.csList01[2].fale){
		var val = codingElements.txdClFun(_this.item.object.lxVal,_this.item.object)
		jcpz_04 = _this.item.val + ' ' + codingElements.calcWs(val) + ' ' + val;
	}
	
	var str = '0000 180121150033 ' + jcpz_01 + jcpz_02 + jcpz_04;
	var strLength = str.replace(/\s+/g,"").length / 2
	var length16 = strLength.toString(16);
	for (var i = length16.length; i < 3; i++) { 
		length16 = '0' + length16;
	}
	length16 = '8' + length16; 
	str = _this.bwKt + ' 40 ' + length16 + ' 02 ' + str + ' 05';
	str = str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g,""),"hex")),4)+ ' 0D0A';
	console.log(str)
	return str;
}

function getParamMessageTy(_this){
	var param_20 = '';
	var param_23 = '';
	var param_24 = '';
	if(_this.csList01[3].fale){
		var leth = codingElements.calcWs(_this.dssjbjgVal)
		param_20 = ' 20 '+ leth + ' ' + _this.dssjbjgVal;
		param_23 = ' 23 '+ leth + ' ' + _this.dssjbjgVal;
		param_24 = ' 24 '+ leth + ' ' + _this.dssjbjgVal;
	}
	var str = '0000 180121150033 '+ param_20 + ' 21 08 00 22 08 08 ' + param_23 + param_24 ;
	var strLength = str.replace(/\s+/g,"").length / 2;
	var length16 = strLength.toString(16);
	for (var i = length16.length; i < 3; i++) {
		length16 = '0' + length16;
	}
	length16 = '8' + length16;
	str = _this.bwKt + ' 42 '+ length16 + ' 02 ' + str + ' 05 ';
	str = str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g,""),"hex")),4)+ ' 0D0A';
	console.log(str)	
	return str;
}

//通用下发函数
function funError(_this){
		_this.optionsSendFale = true;
		_this.loadStatus = 2;
}
function fun01Error(_this,uni){
		// funError(_this);
		lbtp("基本参数失败！",'error',uni);
}
function fun02Error(_this,uni){
		funError(_this);
		lbtp("运行参数失败！",'error',uni);
}
function fun03Error(_this,uni){
		funError(_this);
		lbtp("扩展删除失败！",'error',uni);
}
function fun04Error(_this,uni){
		funError(_this);
		lbtp("扩展参数失败！",'error',uni);
}
function fun04Success(_this,uni){
		
		lbtp("下发成功！",'success',uni);
}

function fun06Error(_this,uni){
		funError(_this);
		lbtp("人工置数失败！",'error',uni);
}

function fun05Error(_this,uni){
		funError(_this);
		lbtp("大坝参数失败！",'error',uni);
}
function lbtp(str,icon,uni){
		uni.showToast({
		    title: str,
			icon: icon,
		    duration: 2000
		});
}

function dataG0(_this){
	_this.loadStatus = 1;
	_this.optionsSendFale = false;
	_this.optionsSendNub = 0;
}

function getDamSecurityMessage(_this){
	var bwStr = "";
	_this.ysList.forEach(item => {
		bwStr += item.str + ' '; 
	})
	
	var str = " 0000191126151933 " + bwStr;
	var strLength = str.replace(/\s+/g, "").length / 2;
	var length16 = strLength.toString(16);
	for (var j = length16.length; j < 3; j++) {
		length16 = '0' + length16;
	}
	length16 = '8' + length16;
	str = "7E7E0066666666011234B2 " + length16 + ' 02' + str + '05';
	var data = str + " " + codingElements.bw(codingElements.MODBUS_CRC(new Buffer(str.replace(/\s+/g, ""), "hex")), 4) + ' 0D0A';	
	console.log(data)
	return data;
}



export default {
	getParamMessage,
	getUnderMessage,
	getElemeMessage,
	getUnderMessageTy,
	getParamMessageTy,
	fun01Error,
	fun02Error,
	fun03Error,
	fun04Error,
	fun04Success,
	dataG0,
	lbtp,
	funError,
	getDamSecurityMessage,
	fun05Error,
	fun06Error
}