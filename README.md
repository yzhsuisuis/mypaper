# 0. 项目启动
1. 拉取到本地
```
git clone https://github.com/yzhsuisuis/mypaper.git
```
2. 获取密钥 (由于本项目是一个前端项目, 数据是调用别人 api 接口)
[链接入口](https://api.qingnian8.com/apis/)
由于这个 token 的有效期只有一天, 所以
通过看广告获取 token(6 位数), 然后将 token 写入到 request. Js 文件里
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241217090412.png)
3. 以微信小程序的形式运行需要执行此步(如果是以 H5 的形式运行, 此步忽略)
步骤 1 : 是添加调用的后端请求
步骤 2: 是在保存网络图片后的临时文件地址
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241217090805.png)

4. 启动项目
1. 使用Hbuilder 就直接启动
2. 使用 WebStorm ,则需要提前安装 uniapp 小程序的插件, 然后添加启动方式如下图
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241217092038.png)




# 1. 定义 defineDrops 变量时报错 (真的是奇了怪了那是因为你引用的是)
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241204232840.png)
# 2. View 布局组件内无法实现跳转, 要用 navigater 组件
如果要调到 tabar 上的 page 里, 需要加上 open-type  = "relaunch"属性
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241207103236.png)
# 3. 关于胶囊按钮和标题高度



![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241207173503.png)
# 4. 可以双开前端, webstorm 用来编写, 微信开发者工具用来看页面

# 5. 这就是为什么一般要套两个 data
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241207195416.png)
# 6. 当你跟着视频写完方法, 到网页里去测试发现没有反应的时候
请毫不犹豫的检查是否引用 import 了
# 7. 页面传参的语法
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241207200945.png)


遇到问题:

点击一个分类后, 一直显示缺少参数, classid 必填
# 8. 检查前端的某个依赖是否已经被安装的方法
```npm
npm list @dcloudio/uni-app
 

```
# 9. 打印对象变量
#打印对象值
#如果是打印ref值
记得是 ref. Value
```javascript
console.log(JSON.stringify(queryParams, null, 2))
```
昨天组件传参死活找不到入口, 到最后才发现是因为
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241207213704.png)
# 10 .页面传参
#界面传参
#页面传参
#uniapp界面传参
![20241208155730.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241208155730.png)

# 11. 前端节流

这里采用 mod 的方法


![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241208171224.png)

![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241208171217.png)


# 12 .结构后起别名
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241208173001.png)
# 13 .未申请域名
到小程序官网里去填
![file_1733654623789_502.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/file_1733654623789_502.png)


问题解决帖子 : 
[小程序-不在以下request合法域名列表中_不在以下 request 合法域名列表中-CSDN博客](https://blog.csdn.net/qq_27674439/article/details/115554071?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522499e11c735bee314a58daeaa893fa52a%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=499e11c735bee314a58daeaa893fa52a&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-4-115554071-null-null.nonecase&utm_term=%E4%B8%8D%E5%9C%A8%E4%BB%A5%E4%B8%8B%20request%20%E5%90%88%E6%B3%95%E5%9F%9F&spm=1018.2226.3001.4450)
# 14. 测试号变正式号
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241215192933.png)
# 15. 跳转到 tabBar 栏的界面需要添加 opentype
![image.png](https://hahaha310.oss-cn-qingdao.aliyuncs.com/20241216095641.png)
# 16 .如果要加上使用 router, 所有就直接导致了我不太好直接做跳转校验

