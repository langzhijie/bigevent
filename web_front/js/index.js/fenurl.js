// 本js文件存放所有的接口文件
// basis根基
const BASISURL="http://localhost:8000";
 let PATH={


// 获取文章类别
category_get:BASISURL+"/category",




// 获取文章
article_get:BASISURL+"/search",

// 获取热门文章排行
article_rank:BASISURL+"/rank",

// 最新文章
article_last:BASISURL+"/lastest",
// 获取文章详情
article_detail:BASISURL+"/article",
// 发表评论
article_add:BASISURL+"/post_comment",

// 获取评论
comment_get: BASISURL + '/get_comments'
 }