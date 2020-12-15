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
     },
     complete:function(res){
            console.log(res)
          if(res.responseJSON.message !== "获取用户基本信息成功！" && res.responseJSON.status !== '0'){
            location.href = "/home/login.html"
            localStorage.removeItem('token')
          }
     }
 })
}


$('.delBtn').on('click',function(){
    layer.confirm('确定退出?', {icon: 3, title:'提示'}, function(index){
        localStorage.removeItem('token')
        location.href = "/home/login.html" 
        layer.close(index);
      });

})
