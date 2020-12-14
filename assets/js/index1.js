getUser()
let layer = layui.layer;
function getUser (){
    $.ajax({
     url:'/my/userinfo',
     headers:{
        Authorization:localStorage.getItem('token')
     },
     success:function(res){
       console.log(res)
        if(res.status !== 0){
            return layer.msg("获取用户信息失败");
        }
    let user_name = res.data.nickname || res.data.username
    $('.text-fir').text(user_name)
          
        if(res.data.user_pic){
            $('.layui-nav-img').attr('src',res.data.user_pic).show()
            $('.user-header').hide()
                }else{
                    $('.user-header').show() 
                    $('.layui-nav-img').hide()
                       
                     
                        let T1 = user_name[0].toUpperCase()
                        console.log(T1)
                        $('.user-header').text(T1)
                    }   
     }
 })
}


