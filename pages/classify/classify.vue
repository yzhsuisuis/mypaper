<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in 15"></theme-item>
		</view>
		
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	// 构成三个一行,三个一行的样子
.classify{
	padding: 30rpx;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	gap: 15rpx;

}

</style>
