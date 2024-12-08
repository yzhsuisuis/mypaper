<template>
    <view class="classlist">
        <view class="content">
            <navigator url="/pages/preview/preview" class="item"
                       v-for="item in classList"
                       :key="item._id"
            >
                <image :src="item.smallPicurl" mode="aspectFill"></image>
            </navigator>
        </view>
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
    console.log("getClassList"+res.data);
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
