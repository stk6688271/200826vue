(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{397:function(a,t,n){"use strict";n.r(t);var e=n(40),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"day02"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day02"}},[a._v("#")]),a._v(" day02")]),a._v(" "),n("h2",{attrs:{id:"今日任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#今日任务"}},[a._v("#")]),a._v(" 今日任务")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("1). Home组件及其子组件(静态)\n2). 后台接口与使用postman测试接口\n3). ajax与后台进行交互\n4). 使用vuex管理组件状态数据\n5). TypeNavx组件动态展现\n")])])]),n("h2",{attrs:{id:"home组件及其子组件-静态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#home组件及其子组件-静态"}},[a._v("#")]),a._v(" Home组件及其子组件(静态)")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("1). TypeNav: 3级分类导航\n2). ListContainer: 包含轮播列表的容器\n3). TodayRecommend: 今日推荐\n4). Rank: 排行\n5). Like: 猜你喜欢\n6). Floor: 楼层\n7). Brand: 品牌\n注意: 图片\n")])])]),n("h2",{attrs:{id:"后台接口与使用postman测试接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台接口与使用postman测试接口"}},[a._v("#")]),a._v(" 后台接口与使用postman测试接口")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("1). 启动 ===> 选择登陆==> cancel ===> 进入主界面\n2). 输入url/参数进行请求测试\n3). 注意post请求体参数需要指定为json格式(后台只支持json格式, 不支持urlencoding)\n4). 保存测试接口 ==> 后面可以反复使用\n")])])]),n("h2",{attrs:{id:"ajax与后台进行交互"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ajax与后台进行交互"}},[a._v("#")]),a._v(" ajax与后台进行交互")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("1). 下载依赖包: npm install -S axios nprogress\n2). axios的二次封装(axios本身就是对XHR原生ajax的封装)     面试必说\n    1.配置通用的基础路径和超时\n        const intance = axios.create({baseURL, timeout})  // intance是一个能发ajax请求的函数\n        向外暴露的必须是instance\n    2.显示请求进度条\n        显示: 在请求拦截器回调中执行: NProgress.start()\n        隐藏: 在请求完成后的成功或失败回调中执行: NProgress.done()\n    3.成功返回的数据不再是response, 而直接是响应体数据response.data\n        在响应拦截器成功回调中: return response.data\n    4.统一处理请求错误, 具体请求也可以选择处理或不处理\n        在响应拦截器失败的回调中: 提法错误信息, 抛出error或返回失败的promise\n\n3). 接口请求函数模块\n    包含项目中所有接口对应的ajax请求函数\n    函数的返回值是promise, 函数内部调用ajax模块发请求\n    需要掌握一个技能: 根据接口文档, 定义接口请求函数\n\n4). 测试调用接口请求函数获取数据\n    出404错误\n        axios配置请求地址: /api/product/getBaseCategoryList\n        发请求所在的基础url: http://localhost:8080\n        http://localhost:8080/api/product/getBaseCategoryList(没有处理, 就404)\n        后台接口的地址: http://182.92.128.115/api/product/getBaseCategoryList(没有处理)\n    解决办法1: 使用CORS解决ajax请求跨域\n        给axios指定正确的地址: baseURL: http://182.92.128.115/api\n        这样ajax请求就跨域了: 服务器返回特别的响应头\n            Access-Control-Allow-Origin: http://localhost:8080\n            Access-Control-Allow-Credentials: true\n    解决办法2: 使用代理服务器   开发中用得比较多\n        配置代理服务器: \n            devServer: {\n              proxy: {\n                '/api': { // 只对请求路由以/api开头的请求进行代理转发\n                  target: 'http://182.92.128.115', // 转发的目标url\n                  changeOrigin: true // 支持跨域\n                }\n              }\n            },\n        baseURL: baseURL: '/api'\n")])])]),n("h2",{attrs:{id:"使用vuex管理组件状态数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用vuex管理组件状态数据"}},[a._v("#")]),a._v(" 使用vuex管理组件状态数据")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("vuex用来做什么?\n    vuex用来管理多个组件共享的状态数据\n    从后台动态获取数据\nvuex的基本使用\n    store相关: index / state / mutations / actions / getters \n    注册store: vm中注册store  ==> 组件中通过$store得到store对象\n    组件:  通过$store来读取或更新vuex管理的state数据\n          也可以通过mapState() / mapGetters() / mapMutations() / mapActions()\nvuex的多模块编程的必要性\n    vuex单模块问题: 需要的管理状态数据比较多, 那对应的mutations/actions模块就会变得比较大\n        如果添加新的数据管理, 需要修改现在文件(不断向其添加内容) \n    vuex多模块编程: 对各个功能模块的数据分别进行管理, 这样更加具有扩展性\n    什么时候需要用vuex多模块编程?  需要vuex管理的数据比较多时使用\n多模块编程的总state结构:\n    {\n        home:{\n            categoryList: [], // 分类列表\n            xxx: {},\n            yyy: 'atguigu'\n        }\n        user: {\n            userInfo: {}\n        }\n    }\n针对三级分类使用vuex管理\n    api: reqCategoryList\n    vuex: home.js中编写\n        异步action: \n            调用接口请求函数发异步ajax请求\n            请求成功后, 取出数据, 提交给mutation保存\n        mutation: \n            根据接收的数据参数更新当前模块的state中的状态数据\n        state: {categoryList, ...}\n    组件:\n        分发异步action请求获取数据到state: 数据从接口===> vuex的state\n        读取vuex的state中的数据到组件的计算属性: 数据从vuex的state ===> 组件的计算属性\n        在模板中动态显示: 插值 / 指令")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);