// 本js文件存放所有的接口文件
// basis根基
var BASISURL="http://192.168.1.101:8000";
 var PATH={
     // 登录
user_loginUrl: BASISURL+"/admin/login",
// 退出
user_logoutUrl:BASISURL+"/admin/logout",
// 管理者信息
user_loginfoUrl:BASISURL+"/admin/getuser",


// 获取文章类别
category_get:BASISURL+"/admin/category_search",

// 获取文章类别 新增名称
category_add:BASISURL+"/admin/category_add",

 }