import constant from "./constant.js";

function getRequest(url,data,key,requestKey,_this,uni){
	uni.request({
	    url: url, //仅为示例，并非真实接口地址。
	    data: data,
		method: "GET",
	    success: (res) => {
			console.log(res);
			if(res.data.status == 500){
				plus.nativeUI.toast("查询失败！请检查数据库配置。");
				return 
			}
	        _this[key] = res.data[requestKey];
	    },
		fail: (res) => {
			console.log(res)
		}
	});
}

function postRequest(url,data,key,requestKey,_this,uni){
	uni.request({
	    url: url, //仅为示例，并非真实接口地址。
	    data: data,
		method: "POST",
	    success: (res) => {
			if(res.data.status == 500){
				plus.nativeUI.toast("查询失败！请检查数据库配置。");
				return 
			}
			_this[key] = res.data[requestKey];
	    }
	});
}


export default{
	getRequest,
	postRequest
}