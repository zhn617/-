$(function(){
let form = layui.form
let layer= layui.layer
getInfo()
function getInfo(){
    $.ajax({
        url:'/my/userinfo',
        success:function(res){
            form.val("form", res.data);
        }
    })
}


$('.resBtn').on('click',function(e){
  e.preventDefault()
    getInfo()
})





$('.layui-form').on('submit',function(e){
    e.preventDefault()
    let data =$(this).serialize()
    $.ajax({
        url:'/my/userinfo',
        type:'POST',
        data,
        success:function(res){
            if (res.status !== 0) {
                return layer.msg("修改用户信息失败！");
              }
      
              layer.msg("修改用户信息成功！");
            window.parent.getUser()
        }
    })
})




})











