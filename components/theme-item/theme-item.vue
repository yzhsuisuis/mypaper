<template>
	<view class="themeItem">
		<navigator url="/pages/preview/preview" class="box" v-if="!isMore">
			<image class="pic" src="../../common/images/preview2.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
		
		<!-- 九宫格的右下角,有一个 -->
<!--		这里因为是要跳转到tabar,所以要加类型属性 open-type= relaunch-->
		<navigator url="/pages/classify/classify" open-type="reLaunch"  class="box more" v-if="isMore">
			<image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
			
		</navigator>
		
		
	</view>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	isMore: {
		type: Boolean,
		default: false
	}
});
</script>

<style lang="scss" scoped>
.themeItem{
	.box{
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
		.pic{
			width: 100%;
			height: 100%;
		}
		.tab{
			position: absolute;
			left: 0;
			top:0;
			background: rgba(250, 129, 90, 0.7);
			backdrop-filter: blur(20rpx);
			color:#fff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
			transform: scale(0.8);
			transform-origin: left top;
			
		}
		.mask{
			width: 100%;
			height: 70rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.2);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(20rpx);
			font-weight: 600;
			font-size: 30rpx;
		}
	}
	.box.more{
		// 直接继承box的全部属性
		// 重写mask
		.mask{
			width: 100%;
			height: 100%;
			flex-direction: column;
			
			
		}
	}
}

</style>