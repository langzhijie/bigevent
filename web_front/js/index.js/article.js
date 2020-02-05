// 所有关于文章相关的操作
 var article = {
     // 获得文章中焦点图
     getFouceFive:function (page,type,status) {
      return  $.get(PATH.article_get,{"perpage":5});
    
     },
      /**
     * 获取文章排行
     * @param {*} type 
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
    }
    

  
 }