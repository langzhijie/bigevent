// 所有关于文章分类相关的
 var category = {
     // 文章类别
     get: ()=> $.get(PATH.category_get) ,
    //  添加文章类别
     add: (name,slug)=>  $.post(PATH.category_add,{"name":name,"slug":slug}),
    //  删除文章类别
    remove: id=>  $.post(PATH.category_remove,{"id":id}),
    // 编辑文章分类
    edit: (id,name,slug)=>  $.post(PATH.category_edit,{"id":id,"name":name,"slug":slug}),
}
 