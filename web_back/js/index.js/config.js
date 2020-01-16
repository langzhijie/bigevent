var user = {
    // 登录
    user_login:function (name ,password) {
      return $.post(PATH.user_loginUrl,{
           "user_name":name,
           "password":password
       })
   },
    // 退出请求
    user_out: function () {
       return $.post(PATH.user_logoutUrl);
    },
      // 登陆者信息
      user_info: function () {
      return  $.get(PATH.user_loginfoUrl);
    },

};