var comment={
    // 游客的评论功能
    // name 用户名
    // content 内容
    // article_id  文章编号
    add:function (name,content,article_id) {
     return   $.post(PATH.article_add,{
            "name":name,
            "content":content,
            "article_id":article_id,
        })
        
    },
    /**
     * 获取文章评论
     * @param {*文章编号} article_id 
     */
    get:function(id) {
        return $.get(PATH.comment_get, { 'article_id': id})
    }

}