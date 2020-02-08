let comment={
    // 游客的评论功能
    // name 用户名
    // content 内容
    // article_id  文章编号
    add: (name,content,article_id)=>  $.post(PATH.article_add,{
            "name":name,
            "content":content,
            "article_id":article_id,
        }),
    /**
     * 获取文章评论
     * @param {*文章编号} article_id 
     */
    get:id=>  $.get(PATH.comment_get, { 'article_id': id})
    

}