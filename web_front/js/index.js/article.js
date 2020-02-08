// 所有关于文章相关的操作
 let article = {
     // 获得文章中焦点图
     getFouceFive: (page,type,status)=> $.get(PATH.article_get,{"perpage":5}),

      /**
     * 获取文章排行
     * @param {*} type  文章类别编号  如果不写就是全部的类别排行
     */
    getRank:type=>$.get(PATH.article_rank,{'type':type}),

     // ...
    /**
     * 获取最新的文章
     */
    getLastest:()=>$.get(PATH.article_last),
    // 在列表页获取文章列表数据
    // type 文章类型  page 表示当前第几页
    getList:(type,page)=>$.get(PATH.article_get,{"type":type,"page":page}),


    getDetail:id =>$.get(PATH.article_detail,{"id":id}),
    
    

  
 }