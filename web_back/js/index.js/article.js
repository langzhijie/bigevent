// 所有关于文章相关的操作
 var article = {
     // 文章类别
     get:function (page,type,status) {
      return  $.get(PATH.article_get,{"page":page,"type":type,"state":status});
    
     },
 
 }