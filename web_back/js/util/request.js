//      此文件用来各种ajax请求

var user = {
    // 登陆
    login: function (myname,mypassword) {
        return  $.post(urlList.loginUrl, {
            'user_name': myname,
            'password': mypassword
        })
    },
    // 注销
    logout: function () {
        return  $.post(urlList.logoutUrl)
    },
    // 获取信息
    userInfo: function () {
        return  $.get(urlList.userInfoUrl)  
    }
}
