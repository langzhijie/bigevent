// 所有关于文章相关的操作
 var article = {
     // 获得文章中焦点图
     getFouceFive:function (page,type,status) {
      return  $.get(PATH.article_get,{"perpage":5});
    
     },
      /**
     * 获取文章排行
     * @param {*} type  文章类别编号  如果不写就是全部的类别排行
     */
    getRank:function(type){
        return $.get(PATH.article_rank,{'type':type})
    },
     // ...
    /**
     * 获取最新的文章
     */
    getLastest:function(){
        return $.get(PATH.article_last)
    },
    // 在列表页获取文章列表数据
    // type 文章类型  page 表示当前第几页
    getList:function(type,page){
        return $.get(PATH.article_get,{"type":type,"page":page})
    }
    

  
 }