// 所有关于文章相关的操作
 var article = {
     // 文章类别
     get:function (page,type,status) {
      return  $.get(PATH.article_get,{"page":page,"type":type,"state":status});
    
     },
    // 根据拿到的id值 获取文章
    getById:function(id){
        return $.get(PATH.article_get,{'id':id})
    },
      //  删除文章
    del:function (id) {
        return $.get(PATH.article_del,{"id":id});
        
    },
    // 添加文章
    add:function (fd) {
        $.ajax({
            url:PATH.article_add,
            type:"post",
            data:fd,
            processData:false,//不允许处理数据
            contentType:false,//不要设置请求头
        })
      

    
    },
    // 保存文章修改
      // fd: formData对象
   edit: function(fd) {
    return $.ajax({
         type:'post',
         url : PATH.article_edit,
         data: fd,
         processData:false, // 不要让jquery去处理formData数据
         contentType:false, // 不设置默认的请求头
         
     })
 },

}
 