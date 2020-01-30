// 所有关于文章相关的操作
 var article = {
     // 文章类别
     get:function (page) {
      return  $.get(PATH.article_get,{"page":page});
    
     },
 
 }