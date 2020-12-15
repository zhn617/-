$(function(){
let form = layui.form
let layer = layui.layer

    form.verify({
        pass: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'] ,
        newword:function(value){
                 if(value === $('[name = newPwd]').val()){
                    return '新旧密码不能相同';
                 }
            },
        two:function(value){
        if(value !== $('[name=newPwd]').val()){
            return '新密码不相同';
        }
        }
      })

      $('.layui-form').on('submit',function(e){
          e.preventDefault()
          let data = $(this).serialize()
       $.ajax({
           url:'/my/updatepwd',
           type:'POST',
           data,
           success:function(res){
            console.log(res)
            if(res.status !== 0){
               return layer.msg(res.message);
            }
            layer.msg(res.message);
            $('.layui-form')[0].reset()
           }
       })
      })
})