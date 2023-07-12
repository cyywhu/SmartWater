<template>
	<view>
		<view v-for="(i, index) in items">
			<view v-if="i.isShow" :class="index == isSelect ? 'form_multi_block1' : 'form_multi_block'" @click="emitData(i, index)">
				<view @longpress="showDelete(i)" class="form_multi_name">{{i.name}}</view>
				<view class="form_multi_checkbox" @click.stop="clickedMuti(i)">
					<view :class="{'gou': i.isClicked}"></view>
				</view>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"formMultiList",
		data() {
			return {
				selectedList: [],
				editMode: false,
				isSelect: -1
			};
		},
		props: {
			items: {
			 type: Array,
			 required: false,
		   },
			changeSelectedList:{
			 type: Array,
			 required: false,
		   },
			isEdit: {
			 type: Boolean,
			 required: false,
		   },
		},
		created() {
			this.selectedList = [...this.items];
			this.editMode = this.isEdit;
		},
		methods: {
			clickedMuti(i){
				if (this.editMode){
					i.isClicked = !i.isClicked;
					if (i.isClicked) {
						this.selectedList.push(i);
					}else if (this.selectedList.indexOf(i) !== -1){
						this.selectedList.splice(this.selectedList.indexOf(i));
					}
					this.$emit('changeSelected',this.selectedList);
				}
			},
			showDelete(item) {
				if (this.editMode) {
					var _this = this;
					uni.showModal({
						title: '提示',
						content: '确认删除本行吗？',
						showCancel:true,
						success: function (res) {
							if (res.confirm) {
								item.isShow = false;
								_this.selectedList.splice(_this.selectedList.indexOf(item));
								_this.$emit('changeSelected',_this.selectedList);
								_this.$emit('deleteData');
							} else if (res.cancel) {
							}
						}
					});
				}
				else {
					console.log('forbid edit')
				}
			},
			emitData(i, index) {
				this.isSelect = index;
				this.$emit('emitData',i);
			}
		},
		watch: {
			changeSelectedList(val, valOld) {
				this.selectedList = val;
			},
			isEdit(val, valOld) {
				this.editMode = val;
			}
		}
	}	
</script>

<style>
.form_multi_block{
	display: flex;
	margin-bottom: 20rpx;
	width: 90%;
	justify-content: space-between;
	align-items: center;
	margin-left: 35rpx;
	font-size: 35rpx;
	height: 55rpx;
}
.form_multi_block1{
	display: flex;
	margin-bottom: 20rpx;
	width: 90%;
	height: 55rpx;
	justify-content: space-between;
	align-items: center;
	padding-left: 35rpx;
	padding-right: 35rpx;
	font-size: 35rpx;
	height: 55rpx;
	background: rgb(198, 218, 192);
	border-radius: 10px;
}
.form_multi_name{
	font-size: 35rpx;
	line-height: 30px;
}
.form_multi_checkbox{
	border: 1.5px solid rgb(150, 150, 150);
	border-radius: 7px;
	width: 35rpx;
	height: 35rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.gou{
		width: 80%;
		height: 80%;
		/* background-image:url('../../static/image/duigou.png'); */
		background-color: black;
		border-radius: 7rpx;
	}
</style>