<template>
	<view class="login_view" :style="'width:'+windowWidth+'px;'+'height:'+windowHeight+'px;'">
		<view class="login_view_login">
			<view class="login_view_puText">
				<view class="login_view_text">
					<text class="login_view_text_text">登录</text>
				</view>
				<view  class="login_view_passUser">
					<view class="login_view_passUser_user">
						<text style="margin-left: 10%;font-size: 2.2vh;">用户名</text>
						<input class="input01 inputIconUser"  type="text" v-model="username"  placeholder="请输入用户名" />
					</view>
					<view class="login_view_passUser_user">
						<text style="margin-left: 10%;font-size: 2.2vh;">密 码</text>
						<input class="input02"  type="password" v-model="password"  placeholder="请输入密码" />
					</view>
				</view>
			</view>
			<view class="login_view_puText">
				<view class="login_view_passUser_user">
					<button class="login_view_puText_button" @click="userLogin">登录</button>
				</view>
				<view class="login_view_passUser_user">
					<view class="login_view_puText_gsName">
						<text>武汉清源智慧</text><br>
						<text>水务科技有限公司</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
export default{
	data(){
		return{
			windowWidth:'',
			windowHeight:'',
			username:'',
			password:''
		}
	},
	onLoad() {
		var _this = this;
		uni.getSystemInfo({
			success: function (res){
				_this.windowWidth = res.windowWidth;
				_this.windowHeight = res.windowHeight;
			}
		});
	},
	methods:{
		userLogin(){
			var _this = this;
			if(this.username !== '' && this.password !== ''){
				if(this.username === 'admin' && this.password === '123'){
					uni.navigateTo({
				        url: '/pages/home/home',
				    });
				}else{
					plus.nativeUI.toast('用户名密码错误!');
				}
			}else{
				plus.nativeUI.toast('请填写用户名密码!');
			}
		}
	}
}
</script>

<style>
@import url("../../static/css/home/login.css");
	
</style>
