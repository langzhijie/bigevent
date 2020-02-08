let user = {
    // 登录
    user_login: (name ,password)=>  $.post(PATH.user_loginUrl,{
           "user_name":name,
           "password":password
       }),

    // 退出请求
    user_out:  () =>$.post(PATH.user_logoutUrl),


      // 登陆者信息
      user_info:  () =>$.get(PATH.user_loginfoUrl),

};