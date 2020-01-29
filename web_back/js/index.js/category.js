// 所有关于文章分类相关的
 var category = {
     // 文章类别
     get:function () {
      return  $.get(PATH.category_get);
    
     },
    //  添加文章类别
     add:function (name,slug) {
         return $.post(PATH.category_add,{"name":name,"slug":slug});
         
     }
 }