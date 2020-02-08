// 本js文件存放所有的接口文件
// basis根基
// var BASISURL="http://localhost:8000";
const BASISURL="http://192.168.1.104:8000";
 let PATH={
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

// 获取文章类别 删除
category_remove:BASISURL+"/admin/category_delete",

// 获取文章类别 编辑 保存
category_edit:BASISURL+"/admin/category_edit",


// 获取文章
article_get:BASISURL+"/admin/search",
// 删除文章
article_del:BASISURL+"/admin/article_delete",
// 添加文章
article_add:BASISURL+"/admin/article_publish",
// 编辑后再保存
article_edit: BASISURL + '/admin/article_edit'
 }