<script>
	import codingElements from '@/pages/index/codingElements.js';
	export default {
		globalData: {  
		    timer: null, 
			bleDevs: []
		},
		methods: {
			async getBrowseAddRecord() {
				var _this = this;
				codingElements.monitor01(_this, 1, uni, "plusFale");
			    codingElements.sendKeep(_this, uni);
			},
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			this.getBrowseAddRecord();
			this.timer = setInterval(this.getBrowseAddRecord, 50000);
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*官方css库 */
	@import "./common/uni.css";
	/* 自定义图标库 */
	@import "./common/icon.css";
	/* 引入动画库 */
	@import "./common/animate.css";
</style>
