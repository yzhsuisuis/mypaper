<template>
    <view class="content">
        <form @submit="formSubmit">
            <view class="avatorWrapper">
                <view class="avator">
                    <image class="img" src="../../static/logo.png" mode="widthFix"></image>
                </view>
            </view>
            <view class="form">
                <view class="inputWrapper">
                    <input  class="input"  name="username"  type="text" value="" placeholder="请输入用户名" @blur="spggBlur"/>

                </view>
                <view class="inputWrapper">
                    <input  class="input"  name="password"  type="password" value="" placeholder="请输入密码" @blur="spggBlur1"/>
                </view>


            </view>
            <button form-type="submit" class="loginBtn">确认登录</button>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello',



            username:"",
            password:"",
        }
    },
    onLoad() {

    },
    methods: {




        /**发布提交 */
        formSubmit(e) {
            var username = e.detail.value.username;
            var password = e.detail.value.password;
            var flag = (username === "1234" && password === "1234")

            if (flag) {
                // 这里调到某个界面
                // uni.navigateTo({
                //     url: "/pages/index/index",
                // });

                // 这里是切换到某个tabBar
                uni.switchTab({
                    url: '/pages/index/index'
                });
            } else {
                wx.showToast({
                    title: '用户名或密码错误',
                    icon: 'none',
                    duration: 500
                });
            }
        }



    }
}
</script>

<style>
.content {
    background: #377EB4;
    width: 100vw;
    height: 100vh;
}
.avatorWrapper{
    height: 20vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.avator{
    width: 200upx;
    height: 200upx;
    overflow: hidden;
}
.avator .img{
    width: 100%
}
.form{
    padding: 0 100upx;
    margin-top: 80px;
}
.inputWrapper{
    width: 100%;
    height: 80upx;
    background: white;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 25px;
}
.inputWrapper .input{
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
}
.loginBtn{
    width: 50%;
    height: 80upx;
    background: #77B307;
    border-radius: 50upx;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.loginBtn .btnValue{
    color: white;
}
.forgotBtn{
    text-align: center;
    color: #EAF6F9;
    font-size: 15px;
    margin-top: 20px;
}
</style>

