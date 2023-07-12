//******************基本参数*******************
//通信道地址参数
const txddz = [
	{
		key: '中心站1备用信道类型及地址',
		val: '05',
		object: {
			lxIndex: 1,
			lxVal: '02',
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
	},
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
		valf: '',
	},
	{
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
	},
	{
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
	}
];

//工作方式
var gzfs_0CArr = [
	{
		key: '自报工作状态',
		val: '01'
	},
	{
		key: '自报确认工作状态',
		val: '02'
	},
	{
		key: '查询应答工作状态',
		val: '03'
	}, {
		key: '调试或维修状态',
		val: '04'
	}
]

//遥测站类型
var yczType_10Arr = [
	{
		key: '降水',
		val: '50'
	},
	{
		key: '河道',
		val: '48'
	},
	{
		key: '水库',
		val: '4B'
	},
	{
		key: '闸坝',
		val: '5A'
	},
	{
		key: '泵站',
		val: '44'
	},
	{
		key: '潮汐',
		val: '54'
	},
	{
		key: '墒情',
		val: '4D'
	},
	{
		key: '地下水',
		val: '47'
	},
	{
		key: '水质',
		val: '51'
	},
	{
		key: '取水口',
		val: '49'
	},
	{
		key: '排水口',
		val: '4F'
	},
]

//选中参数数组1
var csList01 = [
	{
		key: 'zxz01',
		fale: false,
		code: '0120',
		codef: '0120',
		len: '12',
		valf: ''
	},
	{
		key: 'yczdz_02',
		fale: true,
		code: '0228',
		codef: '0228',
		len: '14',
		valf: ''
	},
	{
		key: 'mm_03',
		fale: true,
		code: '0310',
		codef: '0310',
		len: '8',
		valf: ''
	},
	{
		key: 'under_05Val',
		fale: true,
		code: '0400',
		codef: '0450',
		len: '18,24',
		valf: ''
	}
]

//选中参数数组2
var csList02 = [
	{
		key: 'gzfs_0CVal',
		fale: true,
		code: '0C08',
		codef: '0C08',
		len: '6',
		valf: ''
	},
	{
		key: 'ycztxsbsbh_0F',
		fale: false,
		code: '0F00',
		codef: '0F68',
		len: '30',
		valf: ''
	},
	{
		key: 'yczType_10Val',
		fale: true,
		code: '',
		codef: '',
		len: '',
		valf: ''
	},
	{
		key: 'yczcjys_11Val',
		fale: false,
		code: '0D40',
		codef: '0D40',
		len: '20',
		valf: ''
	}
	
]
var yczcjys = [
	{
		val:'00',
		list:[
			{
				name: '降水量',
				fale: false,
			},
			{
				name: '蒸发量',
				fale: false,
			},
			{
				name: '风向',
				fale: false,
			},
			{
				name: '风速',
				fale: false,
			},
			{
				name: '气温',
				fale: false,
			},
			{
				name: '湿度',
				fale: false,
			},
			{
				name: '地温',
				fale: false,
			},
			{
				name: '气压',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: '水位8',
				fale: false,
			},
			{
				name: '水位7',
				fale: false,
			},
			{
				name: '水位6',
				fale: false,
			},
			{
				name: '水位5',
				fale: false,
			},
			{
				name: '水位4',
				fale: false,
			},
			{
				name: '水位3',
				fale: false,
			},
			{
				name: '水位2',
				fale: false,
			},
			{
				name: '水位1',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: '地下水埋深',
				fale: false,
			},
			{
				name: '图片',
				fale: false,
			},
			{
				name: '波浪',
				fale: false,
			},
			{
				name: '闸门开度',
				fale: false,
			},
			{
				name: '水量',
				fale: false,
			},
			{
				name: '流速',
				fale: false,
			},
			{
				name: '流量',
				fale: false,
			},
			{
				name: '水压',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: '水表8',
				fale: false,
			},
			{
				name: '水表7',
				fale: false,
			},
			{
				name: '水表6',
				fale: false,
			},
			{
				name: '水表5',
				fale: false,
			},
			{
				name: '水表4',
				fale: false,
			},
			{
				name: '水表3',
				fale: false,
			},
			{
				name: '水表2',
				fale: false,
			},
			{
				name: '水表1',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: '100CM墒情',
				fale: false,
			},
			{
				name: '80CM墒情',
				fale: false,
			},
			{
				name: '60CM墒情',
				fale: false,
			},
			{
				name: '50CM墒情',
				fale: false,
			},
			{
				name: '40CM墒情',
				fale: false,
			},
			{
				name: '30CM墒情',
				fale: false,
			},
			{
				name: '20CM墒情',
				fale: false,
			},
			{
				name: '10CM墒情',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: 'pH值',
				fale: false,
			},
			{
				name: '溶解氧',
				fale: false,
			},
			{
				name: '电导率',
				fale: false,
			},
			{
				name: '浊度',
				fale: false,
			},
			{
				name: '氧化还原电位',
				fale: false,
			},
			{
				name: '高锰酸盐指数',
				fale: false,
			},
			{
				name: '氨氮',
				fale: false,
			},
			{
				name: '水温',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: '总有机碳',
				fale: false,
			},
			{
				name: '总氮',
				fale: false,
			},
			{
				name: '总磷',
				fale: false,
			},
			{
				name: '锌',
				fale: false,
			},
			{
				name: '硒',
				fale: false,
			},
			{
				name: '砷',
				fale: false,
			},
			{
				name: '总汞',
				fale: false,
			},
			{
				name: '镉',
				fale: false,
			}
		]
	},
	{
		val:'00',
		list:[
			{
				name: '备用5',
				fale: false,
			},
			{
				name: '备用4',
				fale: false,
			},
			{
				name: '备用3',
				fale: false,
			},
			{
				name: '备用2',
				fale: false,
			},
			{
				name: '备用1',
				fale: false,
			},
			{
				name: '叶绿素a',
				fale: false,
			},
			{
				name: '铜',
				fale: false,
			},
			{
				name: '铅',
				fale: false,
			}
		]
	}
	 
	
]

//中心站1主信道
var under_05Val = {
	key: '中心站1主信道',
	val: '04',
	object: {
		lxIndex: 1,
		lxVal: '02',
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
	fale: false
}


//*******************运行参数**********************
var dssjbjg01Arr = [{
		val: '01',
		key: '1小时'
	},
	{
		val: '02',
		key: '2小时'
	},
	{
		val: '03',
		key: '3小时'
	},
	{
		val: '04',
		key: '4小时'
	},
	{
		val: '06',
		key: '6小时'
	},
	{
		val: '08',
		key: '8小时'
	},
	{
		val: '12',
		key: '12小时'
	},
	{
		val: '24',
		key: '24小时'
	},
	{
		val: '31',
		key: '5分钟'
	},
	{
		val: '32',
		key: '10分钟'
	},
	{
		val: '33',
		key: '20分钟'
	},
	{
		val: '34',
		key: '30分钟'
	},
	{
		val: '41',
		key: '2天'
	},
	{
		val: '42',
		key: '3天'
	},
	{
		val: '43',
		key: '5天'
	},
	{
		val: '44',
		key: '10天'
	},
	{
		val: '45',
		key: '15天'
	},
	{
		val: '46',
		key: '1个月'
	}
]

var dssjbjgArr = [{
		val: '01',
		key: '5分钟'
	},
	{
		val: '02',
		key: '10分钟'
	},
	{
		val: '03',
		key: '20分钟'
	},
	{
		val: '04',
		key: '30分钟'
	},
	{
		val: '05',
		key: '1小时'
	},
	{
		val: '06',
		key: '2小时'
	},
	{
		val: '07',
		key: '3小时'
	},
	{
		val: '08',
		key: '6小时'
	},
	{
		val: '09',
		key: '12小时'
	},
	{
		val: '10',
		key: '1天'
	},
	{
		val: '11',
		key: '2天'
	},
	{
		val: '12',
		key: '3天'
	},
	{
		val: '13',
		key: '5天'
	},
	{
		val: '14',
		key: '10天'
	},
	{
		val: '15',
		key: '15天'
	},
	{
		val: '16',
		key: '1个月'
	}
]

var jslrqssjArr = [{
		key: '0时',
		val: '00'
	},
	{
		key: '1时',
		val: '01'
	},
	{
		key: '2时',
		val: '02'
	},
	{
		key: '3时',
		val: '03'
	},
	{
		key: '4时',
		val: '04'
	},
	{
		key: '5时',
		val: '05'
	},
	{
		key: '6时',
		val: '06'
	},
	{
		key: '7时',
		val: '07'
	},
	{
		key: '8时',
		val: '08'
	},
	{
		key: '9时',
		val: '09'
	},
	{
		key: '10时',
		val: '10'
	},
	{
		key: '11时',
		val: '11'
	},
	{
		key: '12时',
		val: '12'
	},
	{
		key: '13时',
		val: '13'
	},
	{
		key: '14时',
		val: '14'
	},
	{
		key: '15时',
		val: '15'
	},
	{
		key: '16时',
		val: '16'
	},
	{
		key: '17时',
		val: '17'
	},
	{
		key: '18时',
		val: '18'
	},
	{
		key: '19时',
		val: '19'
	},
	{
		key: '20时',
		val: '20'
	},
	{
		key: '21时',
		val: '21'
	},
	{
		key: '22时',
		val: '22'
	},
	{
		key: '23时',
		val: '23'
	}
]

var yljfblArr = [{
		key: '1mm',
		val: '10'
	},
	{
		key: '0.5mm',
		val: '05'
	},
	{
		key: '0.2mm',
		val: '02'
	},
	{
		key: '0.1mm',
		val: '01'
	},
]

var csList = [{
		key: 'dssjbjgVal',
		fale: false,
		code: "2008",
		codef: '2008',
		len: '6',
		valf: ''
	},
	{
		key: 'jbsjjg',
		fale: false,
		code: "2108",
		codef: '2108',
		len: '6',
		valf: ''
	},
	{
		key: 'jslrqssjVal',
		fale: false,
		code: "2208",
		codef: '2208',
		len: '6',
		valf: ''
	},
	{
		key: 'cyjgVal',
		fale: false,
		code: "2310",
		codef: '2310',
		len: '8',
		valf: ''
	},
	{
		key: 'swsjccjgVal',
		fale: false,
		code: "2408",
		codef: '2408',
		len: '6',
		valf: ''
	},
	{
		key: 'yljfblVal',
		fale: false,
		code: "2509",
		codef: '2509',
		len: '6',
		valf: ''
	},
	{
		key: 'swjfblVal',
		fale: false,
		code: "2609",
		codef: '2609',
		len: '6',
		valf: ''
	},
	{
		key: 'yljbfz',
		fale: false,
		code: "2708",
		codef: '2708',
		len: '6',
		valf: ''
	},
	{
		key: 'swjz1',
		fale: false,
		code: "2823",
		codef: '2823',
		len: '12,14',
		valf: ''
	},
	{
		key: 'swjz2',
		fale: false,
		code: "2923",
		codef: '2923',
		len: '12,14',
		valf: ''
	},
	{
		key: 'swxzz1',
		fale: false,
		code: "301B",
		codef: '301B',
		len: '10,12',
		valf: ''
	},
	{
		key: 'swxzz2',
		fale: false,
		code: "311B",
		codef: '311B',
		len: '10,12',
		valf: ''
	},
	{
		key: 'jbsw1',
		fale: false,
		code: "3812",
		codef: '3812',
		len: '8,10',
		valf: ''
	},
	{
		key: 'jbsw2',
		fale: false,
		code: "3912",
		codef: '3912',
		len: '8,10',
		valf: ''
	},
	{
		key: 'jbswys',
		fale: false,
		code: "4012",
		codef: '4012',
		len: '8,10',
		valf: ''
	},
	{
		key: 'jbswyx',
		fale: false,
		code: "4112",
		codef: '4112',
		len: '8,10',
		valf: ''
	}
]

//*******************扩展报文*******************

var tdArr = [{
		key: '01',
		val: '01'
	},
	{
		key: '02',
		val: '02'
	},
	{
		key: '03',
		val: '03'
	},
	{
		key: '04',
		val: '04'
	},
	{
		key: '05',
		val: '05'
	},
	{
		key: '06',
		val: '06'
	},
	{
		key: '07',
		val: '07'
	},
	{
		key: '08',
		val: '08'
	},
	{
		key: '09',
		val: '09'
	},
	{
		key: '10',
		val: '10'
	},
	{
		key: '11',
		val: '11'
	},
	{
		key: '12',
		val: '12'
	},
	{
		key: '13',
		val: '13'
	},
	{
		key: '14',
		val: '14'
	},
	{
		key: '15',
		val: '15'
	},
	{
		key: '16',
		val: '16'
	}
]

var td_0100Arr = [{
		key: '01',
		val: '01'
	},
	{
		key: '02',
		val: '02'
	},
	{
		key: '03',
		val: '03'
	},
	{
		key: '04',
		val: '04'
	},
	{
		key: '05',
		val: '05'
	},
	{
		key: '06',
		val: '06'
	},
	{
		key: '07',
		val: '07'
	},
	{
		key: '08',
		val: '08'
	},
	{
		key: '09',
		val: '09'
	},
	{
		key: '10',
		val: '10'
	},
	{
		key: '11',
		val: '11'
	},
	{
		key: '12',
		val: '12'
	},
	{
		key: '13',
		val: '13'
	},
	{
		key: '14',
		val: '14'
	},
	{
		key: '15',
		val: '15'
	},
	{
		key: '16',
		val: '16'
	}
]

var srlc_0100Arr = [{
		key: '4-20MA',
		val: '01'
	},
	{
		key: '0-20MA',
		val: '02'
	}
]

var yssbfArr = [{
	key: '',
	val: ''
}]

var gzfsArr = [{
		key: '模拟量（端子接入）',
		val: '0102'
	},
	{
		key: '485通讯MODBUS浮点数',
		val: '0105'
	},
	{
		key: '485通讯MODBUS整数形',
		val: '0205'
	},
	{
		key: '雨量',
		val: '0203'
	},
	{
		key: '开关量输入（端子）',
		val: '0304'
	},
	{
		key: '开关量输入（485MODBUS）',
		val: '0305'
	},
	{
		key: '图片',
		val: '0505'
	},
	{
		key: '脉冲量',
		val: '0203'
	},
	{
		key: '485自定义通讯',
		val: ''
	},
	{
		key: '渗压监测点压力',
		val: '0405',
		ys: '80',
	},
	{
		key: '渗压监测点温度',
		val: '0405',
		ys: '81',
	},
	{
		key: '渗流监测点流量',
		val: '0405',
		ys: '82',
	},
	{
		key: '渗流监测点温度',
		val: '0405',
		ys: '83',
	},
	{
		key: '水平X轴位移监测点数据',
		val: '0405',
		ys: '84',
	},
	{
		key: '水平Y轴位移监测点数据',
		val: '0405',
		ys: '85',
	},
	{
		key: '垂直位移监测点数据',
		val: '0405',
		ys: '86',
	},
	{
		key: '定位坐标经度',
		val: '0405',
		ys: '87',
	},
	{
		key: '定位坐标纬度',
		val: '0405',
		ys: '88',
	},
	{
		key: '定位坐标高程',
		val: '0405',
		ys: '89',
	}
]

var item = {
	lc_0100: 0,
	ys_0100: 1,
	pyl_0100: 0,
	pyl_0100Length: 4,
	jz_0100: 0,

	ylcsz_3: 0,

	czmc_0503: '',

	by_7: 0,

	sbdz_010203: '01',

	jcqgzj_010203: 0,
	jcqdzj_010203: 0,

	gdm_010203: 0,

	jsyc_010203: 30,

	data01: '01',
	data02: '',
	data04: '',
	data05: '',
	data06: '',
	data07: '',
	data08: '',
	data10: 30,
	data13: '',
}

var td_3Arr = [{
	key: '01',
	val: '01'
}]

var yljjs_3Arr = [{
		key: '1mm',
		val: '01'
	},
	{
		key: '0.5mm',
		val: '02'
	},
	{
		key: '0.2mm',
		val: '03'
	},
	{
		key: '0.1mm',
		val: '04'
	}
]

var td_0503Arr = [{
		key: '第一路图片报',
		val: '01'
	},
	{
		key: '第二路图片报',
		val: '02'
	}
]

var td_7Arr = [{
		key: '01',
		val: '01'
	},
	{
		key: '02',
		val: '02'
	},
	{
		key: '03',
		val: '03'
	},
	{
		key: '04',
		val: '04'
	},
	{
		key: '05',
		val: '05'
	},
	{
		key: '06',
		val: '06'
	},
	{
		key: '07',
		val: '07'
	},
	{
		key: '08',
		val: '08'
	}
]

var td_0302Arr = [{
	key: '01',
	val: '01'
}]

var gzsj_0503Arr = [{
		key: '00:00:00',
		val: '00'
	},
	{
		key: '01:00:00',
		val: '01'
	},
	{
		key: '02:00:00',
		val: '02'
	},
	{
		key: '03:00:00',
		val: '03'
	},
	{
		key: '04:00:00',
		val: '04'
	},
	{
		key: '05:00:00',
		val: '05'
	},
	{
		key: '06:00:00',
		val: '06'
	},
	{
		key: '07:00:00',
		val: '07'
	},
	{
		key: '08:00:00',
		val: '08'
	},
	{
		key: '09:00:00',
		val: '09'
	},
	{
		key: '10:00:00',
		val: '10'
	},
	{
		key: '11:00:00',
		val: '11'
	},
	{
		key: '12:00:00',
		val: '12'
	},
	{
		key: '13:00:00',
		val: '13'
	},
	{
		key: '14:00:00',
		val: '14'
	},
	{
		key: '15:00:00',
		val: '15'
	},
	{
		key: '16:00:00',
		val: '16'
	},
	{
		key: '17:00:00',
		val: '17'
	},
	{
		key: '18:00:00',
		val: '18'
	},
	{
		key: '19:00:00',
		val: '19'
	},
	{
		key: '20:00:00',
		val: '20'
	},
	{
		key: '21:00:00',
		val: '21'
	},
	{
		key: '22:00:00',
		val: '22'
	},
	{
		key: '23:00:00',
		val: '23'
	}
]

var sjjg_0503Arr = [{
		key: '1小时',
		val: '01'
	},
	{
		key: '2小时',
		val: '02'
	},
	{
		key: '3小时',
		val: '03'
	},
	{
		key: '4小时',
		val: '04'
	},
	{
		key: '5小时',
		val: '05'
	},
	{
		key: '6小时',
		val: '06'
	},
	{
		key: '7小时',
		val: '07'
	},
	{
		key: '8小时',
		val: '08'
	},
	{
		key: '9小时',
		val: '09'
	},
	{
		key: '10小时',
		val: '10'
	},
	{
		key: '11小时',
		val: '11'
	},
	{
		key: '12小时',
		val: '12'
	},
	{
		key: '13小时',
		val: '13'
	},
	{
		key: '14小时',
		val: '14'
	},
	{
		key: '15小时',
		val: '15'
	},
	{
		key: '16小时',
		val: '16'
	},
	{
		key: '17小时',
		val: '17'
	},
	{
		key: '18小时',
		val: '18'
	},
	{
		key: '19小时',
		val: '19'
	},
	{
		key: '20小时',
		val: '20'
	},
	{
		key: '21小时',
		val: '21'
	},
	{
		key: '22小时',
		val: '22'
	},
	{
		key: '23小时',
		val: '23'
	},
	{
		key: '24小时',
		val: '24'
	}
]

var fbl_0503Arr = [{
		key: '1',
		val: '01'
	},
	{
		key: '2',
		val: '02'
	},
	{
		key: '3',
		val: '03'
	},
	{
		key: '4',
		val: '04'
	},
	{
		key: '5',
		val: '05'
	}
]

var ysl_0503Arr = [{
		key: '1',
		val: '01'
	},
	{
		key: '2',
		val: '02'
	},
	{
		key: '3',
		val: '03'
	},
	{
		key: '4',
		val: '04'
	},
	{
		key: '5',
		val: '05'
	},
	{
		key: '6',
		val: '06'
	},
	{
		key: '7',
		val: '07'
	},
	{
		key: '8',
		val: '08'
	},
	{
		key: '9',
		val: '09'
	},
	{
		key: '10',
		val: '10'
	}
]

var sxtxh_0503Arr = [{
		key: '尚鑫航',
		val: '01'
	},
	{
		key: '查看添加',
		val: '02'
	}
]

var tpfjnr_0503 = [{
		key: '累计流量',
		checked: false
	},
	{
		key: '当前雨量',
		checked: false
	},
	{
		key: '水位',
		checked: false
	},
	{
		key: '瞬间流量',
		checked: false
	},
	{
		key: '流速',
		checked: false
	},
	{
		key: '闸位',
		checked: false
	},
	{
		key: '功率',
		checked: false
	},
	{
		key: '气压',
		checked: false
	},
	{
		key: '风速',
		checked: false
	},
	{
		key: '水温',
		checked: false
	},
	{
		key: '水质',
		checked: false
	},
	{
		key: '土壤含水量',
		checked: false
	},
	{
		key: '蒸发量',
		checked: false
	},
	{
		key: '备用',
		checked: false
	},
	{
		key: '统计雨量',
		checked: false
	},
	{
		key: '水压',
		checked: false
	}
]

var td_010203Arr = [{
		key: 'RS485_1',
		val: '01'
	},
	{
		key: 'RS485_2',
		val: '02'
	}
]

var sjdqgz_010203Arr = [{
		key: '01',
		val: '01'
	},
	{
		key: '11',
		val: '11'
	},
	{
		key: '12',
		val: '12'
	},
	{
		key: '13',
		val: '13'
	},
	{
		key: '14',
		val: '14'
	},
	{
		key: '15',
		val: '15'
	},
	{
		key: '16',
		val: '16'
	},
	{
		key: '17',
		val: '17'
	},
	{
		key: '18',
		val: '18'
	},
	{
		key: '19',
		val: '19'
	},
	{
		key: '21',
		val: '21'
	},
	{
		key: '22',
		val: '22'
	},
	{
		key: '23',
		val: '23'
	},
	{
		key: '24',
		val: '24'
	},
	{
		key: '25',
		val: '25'
	},
	{
		key: '26',
		val: '26'
	},
	{
		key: '27',
		val: '27'
	},
	{
		key: '28',
		val: '28'
	},
	{
		key: '29',
		val: '29'
	}
]

var txbl485_010203Arr = [{
		key: '奇校验（115200波特）',
		val: '01'
	},
	{
		key: '无校验（115200波特）',
		val: '02'
	},
	{
		key: '偶校验（115200波特）',
		val: '03'
	},
	{
		key: '奇校验（9600波特）',
		val: '04'
	},
	{
		key: '无校验（9600波特）',
		val: '05'
	},
	{
		key: '偶校验（9600波特）',
		val: '06'
	}
]

var gnm_010203Arr = [{
		key: '03',
		val: '03'
	},
	{
		key: '04',
		val: '04'
	}
]

var dqsl_010203Arr1 = [{
	key: '02',
	val: '02'
}]

var dqsl_010203Arr2 = [{
		key: '01',
		val: '01'
	},
	{
		key: '02',
		val: '02'
	}
]

var dqsl_010203Arr3 = [{
		key: '01',
		val: '01'
	},
	{
		key: '02',
		val: '02'
	}
]

var fssj_010203Arr = [{
		key: 'CRC校验',
		val: '01'
	},
	{
		key: '固定码',
		val: '00'
	}
]

var jym_010203Arr = [{
		key: '低位在前，高位在后',
		val: '0002'
	},
	{
		key: '高位在前，低位在后',
		val: '0001'
	}
]

var jssjqq_010203Arr1 = [{
		key: '不处理',
		val: '00'
	},
	{
		key: '除以10',
		val: '01'
	},
	{
		key: '除以100',
		val: '02'
	},
	{
		key: '除以1000',
		val: '03'
	},
	{
		key: '除以3600',
		val: '21'
	},
	{
		key: '除以10000',
		val: '04'
	},
	{
		key: '乘以10',
		val: '11'
	},
	{
		key: '乘以100',
		val: '12'
	},
	{
		key: '乘以1000',
		val: '13'
	},
	{
		key: '乘以3600',
		val: '22'
	},
	{
		key: '乘以10000',
		val: '14'
	}
]

var jssjqq_010203Arr2 = [{
		key: '不处理',
		val: '00'
	},
	{
		key: '除以10',
		val: '01'
	},
	{
		key: '除以100',
		val: '02'
	},
	{
		key: '除以1000',
		val: '03'
	},
	{
		key: '除以3600',
		val: '21'
	},
	{
		key: '除以10000',
		val: '04'
	},
	{
		key: '乘以10',
		val: '11'
	},
	{
		key: '乘以100',
		val: '12'
	},
	{
		key: '乘以1000',
		val: '13'
	},
	{
		key: '乘以3600',
		val: '22'
	},
	{
		key: '乘以10000',
		val: '14'
	}
]

var jssjqq_010203Arr3 = [{
	key: '不处理',
	val: '00'
}]

var jssjsx_010203Arr1 = [{
	key: '10',
	val: '10'
}]

var jssjsx_010203Arr2 = [{
		key: '3210',
		val: '05'
	},
	{
		key: '2301',
		val: '06'
	},
	{
		key: '1032',
		val: '07'
	},
	{
		key: '0123',
		val: '08'
	}
]

var jssjsx_010203Arr4 = [{
		key: '3210',
		val: '01'
	},
	{
		key: '0123',
		val: '02'
	},
	{
		key: '2301',
		val: '03'
	},
	{
		key: '1032',
		val: '04'
	}
]

var jssjsx_010203Arr3 = [{
		key: '高位在前，低位在后',
		val: '09'
	},
	{
		key: '低位在前，高位在后',
		val: '0A'
	}
]

var jsjymsx_010203Arr = [{
		key: '低位在前，高位在后',
		val: '02'
	},
	{
		key: '高位在前，低位在后',
		val: '01'
	}
]

var optionsSend = [{
		title: '准备发送'
	},
	{
		title: '扩展清除'
	},
	{
		title: '扩展配置'
	}
]

var data09Arr = [{
		key: '深圳有数',
		val: '0001'
	},
	{
		key: '基康',
		val: '0002'
	}
]

var data11Arr = [{
		key: '不处理',
		val: '00'
	},
	{
		key: '除以10',
		val: '01'
	},
	{
		key: '除以100',
		val: '02'
	},
	{
		key: '除以1000',
		val: '03'
	},
	{
		key: '除以10000',
		val: '04'
	},
	{
		key: '乘以10',
		val: '11'
	},
	{
		key: '乘以100',
		val: '12'
	},
	{
		key: '乘以1000',
		val: '13'
	},
	{
		key: '乘以10000',
		val: '14'
	}
]

var data12Arr = [{
		key: '四字节浮点数 3210',
		val: '01'
	},
	{
		key: '四字节浮点数 0123',
		val: '02'
	},
	{
		key: '四字节浮点数 2301',
		val: '03'
	},
	{
		key: '四字节浮点数 1032',
		val: '04'
	},
	{
		key: '四字节整形数 3210',
		val: '05'
	},
	{
		key: '四字节整形数 2301',
		val: '06'
	},
	{
		key: '四字节整形数 1032',
		val: '07'
	},
	{
		key: '四字节整形数 0123',
		val: '08'
	},
	{
		key: '两字节整形数 高位在前，低位在后',
		val: '09'
	},
	{
		key: '两字节整形数 低位在前，高位在后',
		val: '0A'
	}
]

//************大坝安全阈值设置*************

var jcxArr = [{
		key: '渗压',
		val: '',
		objList: [{
				name: '监测点编号',
				val: '',
				code: '11',
				len: '58',
				zsLen: 0,
				xsLen: 0
			},
			{
				name: '渗压阈值',
				val: '',
				code: '31',
				len: '23',
				zsLen: 8,
				xsLen: 3
			},
			/* {
				name:'温度阈值',
				val:'',
				code: '31',
				len: '3B',
				zsLen: 8,
				xsLen: 3
			} */
		]
	},
	{
		key: '渗流',
		val: '',
		objList: [{
				name: '监测点编号',
				val: '',
				code: '12',
				len: '58',
				zsLen: 0,
				xsLen: 0
			},
			{
				name: '渗流阈值',
				val: '',
				code: '32',
				len: '23',
				zsLen: 8,
				xsLen: 3
			}
		]
	},
	{
		key: '位移',
		val: '',
		objList: [{
				name: '位移点编号',
				val: '',
				code: '13',
				len: '90',
				zsLen: 0,
				xsLen: 0
			},
			{
				name: '水平阈值',
				val: '',
				code: '33',
				len: '22',
				zsLen: 8,
				xsLen: 2
			},
			{
				name: '垂直阈值',
				val: '',
				code: '35',
				len: '22',
				zsLen: 8,
				xsLen: 2
			}
		]
	}
]

export default {
	txddz,
	gzfs_0CArr,
	yczType_10Arr,
	csList01,
	csList02,
	under_05Val,
	optionsSend,

	dssjbjg01Arr,
	dssjbjgArr,
	jslrqssjArr,
	yljfblArr,
	csList,

	tdArr,
	td_0100Arr,
	srlc_0100Arr,
	yssbfArr,
	gzfsArr,
	item,
	td_3Arr,
	yljjs_3Arr,
	td_0503Arr,
	td_7Arr,
	td_0302Arr,
	gzsj_0503Arr,
	sjjg_0503Arr,
	fbl_0503Arr,
	ysl_0503Arr,
	sxtxh_0503Arr,
	tpfjnr_0503,
	td_010203Arr,
	sjdqgz_010203Arr,
	txbl485_010203Arr,
	gnm_010203Arr,
	dqsl_010203Arr1,
	dqsl_010203Arr2,
	dqsl_010203Arr3,
	fssj_010203Arr,
	jym_010203Arr,
	jssjqq_010203Arr1,
	jssjqq_010203Arr2,
	jssjqq_010203Arr3,
	jssjsx_010203Arr1,
	jssjsx_010203Arr2,
	jssjsx_010203Arr4,
	jssjsx_010203Arr3,
	jsjymsx_010203Arr,
	optionsSend,
	data09Arr,
	data11Arr,
	data12Arr,

	jcxArr,
	yczcjys
} 
