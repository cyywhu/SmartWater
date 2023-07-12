
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/login","pages/home/home","pages/config/config","pages/query/query","pages/artificial/artificial","pages/tools/tools","pages/config/importConfig","pages/config/checkConfig","pages/checkConfig/basicConfig","pages/checkConfig/runConfig","pages/checkConfig/plusConfig","pages/config/readConfig","pages/newConfig/basicConfig","pages/newConfig/plusConfig","pages/newConfig/runConfig","pages/query/query","pages/downloads/downloads"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#FFFFFF"},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"SmartWater","compilerVersion":"3.7.3","entryPagePath":"pages/home/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录","titleNView":false}},{"path":"/pages/home/home","meta":{},"window":{"navigationBarTitleText":"首页","titleNView":false}},{"path":"/pages/config/config","meta":{},"window":{"navigationBarTitleText":"配置方案","titleNView":false}},{"path":"/pages/query/query","meta":{},"window":{"navigationBarTitleText":"数据查询","titleNView":false}},{"path":"/pages/artificial/artificial","meta":{},"window":{"navigationBarTitleText":"人工置数","titleNView":false}},{"path":"/pages/tools/tools","meta":{},"window":{"navigationBarTitleText":"工具箱","titleNView":false}},{"path":"/pages/config/importConfig","meta":{},"window":{"navigationBarTitleText":"导入配置方案","titleNView":false}},{"path":"/pages/config/checkConfig","meta":{},"window":{"navigationBarTitleText":"查看配置方案","titleNView":false}},{"path":"/pages/checkConfig/basicConfig","meta":{},"window":{"navigationBarTitleText":"查看基本参数","titleNView":false}},{"path":"/pages/checkConfig/runConfig","meta":{},"window":{"navigationBarTitleText":"查看运行参数","titleNView":false}},{"path":"/pages/checkConfig/plusConfig","meta":{},"window":{"navigationBarTitleText":"查看扩展参数","titleNView":false}},{"path":"/pages/config/readConfig","meta":{},"window":{"navigationBarTitleText":"查看配置","titleNView":false}},{"path":"/pages/newConfig/basicConfig","meta":{},"window":{"navigationBarTitleText":"新建基本配置","titleNView":false}},{"path":"/pages/newConfig/plusConfig","meta":{},"window":{"navigationBarTitleText":"新建扩展配置","titleNView":false}},{"path":"/pages/newConfig/runConfig","meta":{},"window":{"navigationBarTitleText":"新建运行配置","titleNView":false}},{"path":"/pages/downloads/downloads","meta":{},"window":{"navigationBarTitleText":"下载文件","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
