<template>
  <view class="homeLayout pageBg">
<!--		在这里固定一个胶囊按钮,固定悬停在上方,便于搜索的-->
		<custom-nav-bar title="推荐"></custom-nav-bar>
	  
	  <!-- 开头的轮播图,水平轮播 -->
<!--    <view class="banner">-->
<!--      <swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)"-->
<!--	   indicator-active-color="#fff" autoplay>-->
<!--        <swiper-item>-->
<!--          <image src="../../common/images/banner1.jpg" mode="aspectFill"></image>-->
<!--        </swiper-item>-->
<!--		<swiper-item>-->
<!--		  <image src="../../common/images/banner2.jpg" mode="aspectFill"></image>-->
<!--		</swiper-item>-->
<!--		<swiper-item>-->
<!--		  <image src="../../common/images/banner3.jpg" mode="aspectFill"></image>-->
<!--		</swiper-item>-->
<!--      </swiper>-->
<!--    </view>-->
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)"
							indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

	<!-- 垂直轮播公告 -->
	<view class="notice">
	  <view class="left">
	    <uni-icons type="sound-filled" size="20" ></uni-icons>
<!--		<uni-icons></uni-icons>-->
	    <text class="text">公告</text>
	  </view>
		<view class="center">
			<swiper vertical autoplay interval="1500" duration="300" circular>
				<swiper-item v-for="item in noticeList" :key="item._id">
					<navigator url="/pages/notice/detail">
						{{item.title}}
					</navigator>
				</swiper-item>
			</swiper>
		</view>
	  <view class="right">
	    <uni-icons type="right" size="16" color="#333"></uni-icons>
	  </view>
	</view>
	
	
	<!-- 每日推荐滑动 -->
	<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" ></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>							
						</view>						
					</view>
				</template>
			</common-title>

		<view class="content">
			<scroll-view scroll-x>
				<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview">
					<image :src="item.smallPicurl" mode="aspectFill"></image>
				</view>
			</scroll-view>
		</view>
		
		
		<!-- 九宫格 -->
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url=""  class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
<!--				组件传参,原来这里组件传参是可以这样子用的-->
				<theme-item v-for="item in classifyList"
										:key="item._id"
										:item="item"
				></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
	
  
  </view>
</template>
<script setup>
import { ref } from 'vue';
import {apiGetBanner,apiGetDayRandom,apiGetNotice,apiGetClassify} from "@/api/apis.js"
import {getStatusBarHeight} from "@/utils/system";


const bannerList = ref([]);
const randomList = ref([]);
const noticeList = ref([]);
const classifyList = ref([]);


const getBanner = async ()=>{
	let res =await apiGetBanner();
	bannerList.value = res.data;

}
const getDayRandom = async ()=>{
	let res =await apiGetDayRandom();
	randomList.value = res.data;
}

const getNotice = async()=>{
	let res =await apiGetNotice({select:true});
	noticeList.value = res.data
}
const getClassify =async()=>{
	let res =await apiGetClassify({
		select:true
	});
	classifyList.value = res.data
	console.log(res);
}



getBanner();
getDayRandom();
getNotice();
getClassify()
	
</script>

<style lang="scss" scoped>
.homeLayout{
  .banner{
	  width: 750rpx;
	  padding:30rpx 0;
	  swiper{
	    width: 750rpx;
	    height: 340rpx;
	    &-item{
	      width: 100%;
	      height: 100%;
	      padding:0 30rpx;
	      image{
	        width: 100%;
	        height: 100%;
	  		border-radius: 10rpx;
	      }
	    }
	  }
	}
  .notice{
  
	  width: 690rpx;
	  height: 80rpx;
	  line-height: 80rpx;
	  background: #f9f9f9;
	  margin: 0 auto;
	  // 直接让这个矩形变成圆弧
	  border-radius: 80rpx;
	  display: flex;
	  // 最中间版的居中
	  .left{
		  width: 140rpx;
		  display: flex;
		  align-items: center;
		  justify-content: center;

			//穿透样式,来改变图标的颜色
			//记住要加上scpoes样式
			//.left /deep/ .uni-icons {
			//	color: $brand-theme-color !important; /* 确保变量已定义 */
			//}

		  .text{
			  color: $brand-theme-color;
			  font-weight: 600;
			  font-size: 28rpx;

		  }
	  }
	  .center{
		  flex:1;
		  swiper{
// 让他的框完全在这个东西的里面
			  height: 100%;
			  &-item{
				  height: 100%;
				  font-size: 30rpx;
				  color:#666;
				  overflow: hidden;
				  white-space: nowrap;
				  text-overflow: ellipsis;
				  
			  }
			  
		  }
	  }
	  .right{
		  width: 70rpx;
		  display: flex;
		  align-items: center;
		  justify-content: center;
	  }
  }
  .select{
	  padding-top: 50rpx;
	  .date{
		  color: $brand-theme-color;
		  display: flex;
		  align-items: center;
			//.date /deep/ .uni-icons {
			//	color: $brand-theme-color !important; /* 确保变量已定义 */
			//}

		  .text{
			  margin-left: 5rpx;
		  }
	  }
	  .content{
		  width: 720rpx;
		  margin-left: 30rpx;
		  margin-top: 30rpx;
		  scroll-view{
			  white-space: nowrap;
			  .box{
				  width: 200rpx;
				  height: 430rpx;
				  display: inline-block;
				  margin-right: 15rpx;
				  image{
					  width: 100%;
					  height: 100%;
					  border-radius: 10rpx;
				  }
			  }
			  // 最后一个小图片右边距是15,我们想让他的右边距单独为15rpx
			  .box:last-child{margin-right: 30rpx;}
		  }
	  }
	  .theme{
	  	padding:50rpx 0;
	  	.more{
	  		font-size: 32rpx;
	  		color:#888;
	  		
	  	}
		.content{
			margin-top: 30rpx;
			padding: 0 30rpx;
			display: grid;
			gap:15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
  }
}
	
</style>