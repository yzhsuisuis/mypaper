<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
<!--			头像-->
			<view class="avatar">
				<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>

			</view>
<!--			ip-->
			<view class="ip">
				100.100.100.0
			</view>
			<view class="address">
				来自山东
			</view>

			<view class="section">
				<view class="list">
<!--					下载-->
<!--				<navigator url="/pages/classlist/classlist" class="row" >-->
<!--					<view class="left">-->
<!--						<uni-icons type="download-filled" size="30" color="#28b389"></uni-icons>-->
<!--						<view class="text">下载</view>-->
<!--					</view>-->

<!--					<view class="right">-->
<!--						<view class="text">33</view>-->
<!--						<uni-icons type="right" size="25" color="#aaa"></uni-icons>-->
<!--					</view>-->
<!--				</navigator>-->
					<view class="row" >
						<view class="left">
							<uni-icons type="download-filled" size="25" color="#28b389"></uni-icons>
							<view class="text">下载</view>
						</view>

						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="25" color="#aaa"></uni-icons>
						</view>
					</view>


<!--				评分	-->
					<view class="row" >
						<view class="left">
							<uni-icons type="star-filled" size="30" color="#28b389"></uni-icons>
							<view class="text">我的评分</view>
						</view>

						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="25" color="#aaa"></uni-icons>
						</view>
					</view>
<!--					联系客服-->
					<view class="row" >
						<view class="left">
							<uni-icons type="chatboxes-filled" size="25" color="#28b389"></uni-icons>
							<view class="text">联系我</view>
						</view>

						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="25" color="#aaa"></uni-icons>
						</view>
					</view>

					<view class="row" >
						<view class="left">
							<uni-icons type="flag-filled" size="25" color="#28b389"></uni-icons>
							<view class="text">常见问题</view>
						</view>
						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="25" color="#aaa"></uni-icons>
						</view>
					</view>



				</view>
			</view>

		</view>

		<view class="section">

		</view>


	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		//上下居中
		align-items: center;

		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;

		.avatar{
			width: 160rpx;
			height: 160rpx;
			//让整个容器都变成圆形,为了让图片也变,所以直接hidden,为了让图片居中展开,所以要直接两个双百
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			color:#333;
			padding:20rpx 0 5rpx;
		}
		.address{
			font-size: 28rpx;
			color:#aaa;
		}
	}
	.section{
		width: 690rpx;
		//这里设置为auto,通常可以认为是上下50 ,最优自动
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		.list{
			.row{
				display: flex;
				//让left和 right两个直接分两边靠边站
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid #eee;
				//&表示自身的含义
				&:last-child{border-bottom: 0}
				background: #fff;
				.left{
					display: flex;
					align-items: center;
					.text{
						padding-left: 20rpx;
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						font-size: 28rpx;
						color: #aaa;
					}
				}

			}
		}



	}
}

</style>
