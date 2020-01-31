// 所有关于文章相关的操作
 var article = {
     // 文章类别
     get:function (page,type,status) {
      return  $.get(PATH.article_get,{"page":page,"type":type,"state":status});
    
     },
      //  删除文章
    del:function (id) {
        return $.get(PATH.article_del,{"id":id});
        
    },
 
 }