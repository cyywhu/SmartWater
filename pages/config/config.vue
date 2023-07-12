<template>
	<view>
		<selfTitle title_name="配置方案" selfUrl="/home/home"></selfTitle>
		<view class="top_block">
			<text class="top_font">请选择配置的方式</text>
		</view>
		<view class="body">
			<view class="body_block">
				<view class="body_button1" @click="goToPath('/config/importConfig')">已有配置方案</view>
				<view style="height: 45rpx;"></view>
				<view class="body_button2" @click="goToPath('/newConfig/basicConfig')">新建配置方案</view>
			</view>
		</view>
		<view class="button-block">
			<view class="button" @click="readUnbindMessage">读取RTU配置</view>
		</view>
		<view class="title-split">
		    <view class="line1"></view>
		    <text>提示</text>
		    <view class="line2"></view>
		</view>
		<view class="remind">
			<view class="remind1">
				<text class="plus">*</text>
				<text>选择已有配置方案，可以在模板方案的基础上进行修改，或直接配置</text>
			</view>
			<view class="remind2">
				<text class="plus">*</text>
				<text>选择新建配置方案，默认展示最近配置方案，如没有则为空白模板</text>
			</view>
		</view>
	</view>
</template>

<script>
	import selfTitle from "components/selfTitle.vue"
	import codingElements from '@/pages/index/codingElements.js';
	import initData from '@/pages/js/initData.js';
	export default{
		components: {
			selfTitle
		},
		data() {
			return {
				basicConfig: {
					bwKt: '7E7E 006815333300 1234 40 ',
					queryMessageKt: '7E7E 0011223344 05 1234 41 80',
					open: false,
					txddz: initData.txddz,
					str: '',
					pzmc: '',
					pzArr: [],
					current: 0,
					tjpzArr: [],
					
					zxz01: '00',
					zxz02: '00',
					zxz03: '00',
					zxz04: '00',
					
					yczdz_02: '',
					
					mm_03: '',
					
					gzfs_0CIndex: 0,
					gzfs_0CVal: '01',
					gzfs_0CArr: initData.gzfs_0CArr,
					
					ycztxsbsbh_0F: '',
					
					yczType_10Index: 0,
					yczType_10Val: '50',
					yczType_10Arr: initData.yczType_10Arr,
					
					csList01: initData.csList01,
					
					csList02: initData.csList02,
					_timer: '',
					under_05Val: initData.under_05Val,
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
			}
		},
		methods: {
			goToPath(pathStr){
				uni.navigateTo({
					url: '/pages' + pathStr,
				})
			},
			readGroupMessage() {
				var queryItem = '';
				this.basicConfig.csList01.forEach(item => {
					if (item.fale) {
						queryItem += item.code;
					}
				})
				this.basicConfig.txddz.forEach(item => {
					if (item.fale) {
						queryItem += item.code;
					}
				})
				this.basicConfig.csList02.forEach(item => {
					if (item.fale) {
						queryItem += item.code;
					}
				})
			
			
				var str = '0000 170718101912 ' + queryItem;
			
				var strLength = str.replace(/\s+/g, "").length / 2
				var length16 = codingElements.bw(strLength.toString(16), 2);;
			
				str = this.basicConfig.queryMessageKt + length16 + ' 02 ' + str + ' 05';
				console.log(str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(str.replace(/\s+/g, "")), 4) + ' 0D0A')
				return str + ' ' + codingElements.bw(codingElements.MODBUS_CRC(str.replace(/\s+/g, "")),
					4) + ' 0D0A';
			},
			readUnbindMessage() {
				var _this = this;
			
				codingElements.monitor(_this.basicConfig, 2, uni);
				codingElements.sendData(_this.readGroupMessage(), _this.basicConfig, uni);
			
				var str = _this.basicConfig.realTimeData;
				console.log(str)
				// str = '7E7E006815333300123440804502000018012115003301200000000002280000000000031000000450020000000000000000000C08010F7031303030303030303030303030301008500D4000000000000000000540710D0A';
				var codeOrLenOrData = str.substring(20, str.length - 10)
				var code = codeOrLenOrData.substring(0, 2);
				var len = codeOrLenOrData.substring(4, 6);
				var alldata = codeOrLenOrData.substring(38, codeOrLenOrData.length);
				//console.log(code,len,alldata)
			
				var checkArr = [];
				_this.basicConfig.csList01.forEach(item => {
					if (item.fale) {
						checkArr.push({
							code: item.codef,
							len: item.len,
							val: ''
						});
					}
				})
				_this.basicConfig.txddz.forEach(item => {
					if (item.fale) {
						checkArr.push({
							code: item.codef,
							len: item.len,
							val: ''
						});
					}
				})
				_this.basicConfig.csList02.forEach(item => {
					if (item.fale) {
						checkArr.push({
							code: item.codef,
							len: item.len,
							val: ''
						});
					}
				})
				checkArr.forEach(item => {
					var len = item.len.split(",");
					var codeOrLenLen = "";
					if (len.length === 1) {
						codeOrLenLen = len[0];
					} else {
						var type = alldata.substring(4, 6);
						if (type === '01') {
							codeOrLenLen = len[0];
						} else if (type === '02') {
							codeOrLenLen = len[1];
						}
					}
					var codeOrData = alldata.substring(0, codeOrLenLen);
					var code = codeOrData.substring(0, 4);
					console.log(codeOrData)
					console.log(code, item.code)
					if (code === item.code) {
						item.val = codeOrData.substring(4, codeOrData.length);
						alldata = alldata.substring(codeOrLenLen, alldata.length);
						console.log(item.val)
			
						_this.basicConfig.csList01.forEach(csList01Item => {
							if (csList01Item.codef == item.code) {
								csList01Item.valf = item.val
							}
						})
						_this.basicConfig.txddz.forEach(txddzItem => {
							if (txddzItem.codef == item.code) {
								txddzItem.valf = item.val
							}
						})
						_this.basicConfig.csList02.forEach(csList02Item => {
							if (csList02Item.codef == item.code) {
								csList02Item.valf = item.val
							}
						})
					} else {
						console.log("查询参数与返回参数不一致");
					}
				})
				_this.readAssignment();
				// goToPath('/config/readConfig'+ '?id=' + 'RTU' + '&name=' + '查看RTU配置文件')
			},
			readAssignment() {
				var _this = this;
				if (_this.basicConfig.csList01[0].fale) {
					_this.basicConfig.zxz01 = parseInt(_this.basicConfig.csList01[0].valf.substring(0, 2));
					_this.basicConfig.zxz02 = parseInt(_this.basicConfig.csList01[0].valf.substring(2, 4));
					_this.basicConfig.zxz03 = parseInt(_this.basicConfig.csList01[0].valf.substring(4, 6));
					_this.basicConfig.zxz04 = parseInt(_this.basicConfig.csList01[0].valf.substring(6, 8));
				}
			
				if (_this.basicConfig.csList01[1].fale) {
					_this.basicConfig.yczdz_02 = _this.basicConfig.csList01[1].valf;
				}
			
				if (_this.basicConfig.csList01[2].fale) {
					_this.basicConfig.mm_03 = _this.basicConfig.csList01[2].valf;
				}
			
				if (_this.basicConfig.csList01[3].fale) {
					this.zxzTd(_this.basicConfig.csList01[3], _this.basicConfig.under_05Val)
				}
			
				for (var i = 0; i < _this.basicConfig.txddz.length; i++) {
					if (_this.basicConfig.txddz[i].fale) {
						this.zxzTd(_this.basicConfig.txddz[i], _this.basicConfig.txddz[i])
					}
				}
			
				if (_this.basicConfig.csList02[0].fale) {
					for (var i = 0; i < _this.basicConfig.gzfs_0CArr.length; i++) {
						if (_this.basicConfig.gzfs_0CArr[i].val === _this.basicConfig.csList02[0].valf) {
							_this.basicConfig.gzfs_0CIndex = i;
							_this.basicConfig.gzfs_0CVal = _this.basicConfig.gzfs_0CArr[i].val;
						}
					}
				}
			
				if (_this.basicConfig.csList02[2].fale) {
					var smid = _this.basicConfig.csList02[2].valf.substring(2, _this.basicConfig.csList02[2].valf.length);
					var nubArr = [];
					_this.basicConfig.ycztxsbsbh_0F = '';
					for (var i = 0; i < smid.length; i += 2) {
						_this.basicConfig.ycztxsbsbh_0F += smid.slice(i, i + 2)[1];
					}
				}
			
				if (_this.basicConfig.csList02[3].fale) {
					/* var smid = _this.csList02[2].valf.substring(2, _this.csList02[2].valf.length);
					var nubArr = [];
					_this.ycztxsbsbh_0F = '';
					for(var i=0;i<smid.length;i+=2){
						_this.ycztxsbsbh_0F += smid.slice(i,i+2)[1];
					} */
			
					console.log(_this.basicConfig.csList02[3].valf)
				}
			},
			zxzTd(objectf, objectj) {
				var type = objectf.valf.substring(0, 2);
				var typeIndex = 0;
				if (type === "02") {
					typeIndex = 1;
					var ip = objectf.valf.substring(2, 14);
					var port = objectf.valf.substring(14, objectf.valf.length);
					var arrToIp = '';
					for (var i = 0; i < ip.length; i += 3) {
						var str = '';
						if (i < ip.length - 3) {
							str = '.';
						}
						arrToIp += parseInt(ip.slice(i, i + 3)) + str
					}
					objectj.object.dk = parseInt(port);
					objectj.object.ip = arrToIp;
				} else if (type === "01") {
					typeIndex = 0;
					objectj.object.simCd = objectf.valf.substring(3, 14);
				}
				objectj.object.lxVal = type;
				objectj.object.lxIndex = typeIndex;
			},
		}
	}
</script>

<style>
	@import url("../../static/css/config/config.css");
</style>