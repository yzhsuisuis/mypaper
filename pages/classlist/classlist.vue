<template>
<!-- 数据长度为0 ,且还有数据的时候 ,会加载 ,和下面的那一个是互补的-->
    <view class="loadingLayout" v-if="!classList.length && !noData">
        <uni-load-more status="loading"></uni-load-more>
    </view>
    <view class="classlist">
        <view class="content">
<!--            预期行为 : 3/12 ,用户点击后计入精图 ,为了得到这个12,我们不能每次都去请求的得到完整的,而是通过缓存,然后缓存赋值给classList,-->
<!--行为: 用户点击缩略图后,往preview页面传递一个 _id参数 ,preview页面通过onLoad()拿到id -->
<!--            通过对id的对比获取-->
<!--            -->
            <navigator :url="'/pages/preview/preview?id='+item._id" class="item"
                       v-for="item in classList"
                       :key="item._id"
            >
                <image :src="item.smallPicurl" mode="aspectFill"></image>
            </navigator>
        </view>
    </view>

<!--    不禁感叹这个真的很秀-->
    <view class="loadingLayout" v-if="classList.length || noData">
        <uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import {onLoad,onReachBottom} from "@dcloudio/uni-app"
import {apiGetClassList} from "@/api/apis.js"
//分类列表数据
const classList = ref([]);
const noData = ref(false)

//定义data参数
const queryParams = {
    // classid: "6523757d466d417a37a40d75",
    pageNum:1,
    pageSize:12
}
// 细节点: todo
//onLoad的加载是晚于set up语法糖的,肯定是已经
onLoad((e)=>{
    console.log(e)
    let {id=null,name=null} = e;
    queryParams.classid = id;
    console.log(id,name);
    //修改导航标题
    uni.setNavigationBarTitle({
        title:name
    })

    //执行获取分类列表方法
    getClassList();
})

// 触底加载
onReachBottom(()=>{
    if(noData.value) return;
    queryParams.pageNum++;
    getClassList();
})

//获取分类列表网络数据
const getClassList = async ()=>{
    console.log(JSON.stringify(queryParams, null, 2))
    let res = await apiGetClassList(queryParams);
    // ...展开 ,二维变一维
    classList.value = [...classList.value , ...res.data];
    if(queryParams.pageSize > res.data.length) noData.value = true;
    // 每次存入都会覆盖之前
    uni.setStorageSync("storgClassList",classList.value);
    console.log(classList.value);
}



</script>

<style lang="scss" scoped>
.classlist{
    .content{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap:5rpx;
        padding:5rpx;
        .item{
            height: 440rpx;
            image{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}
</style>
