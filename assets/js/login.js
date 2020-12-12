$(function(){
$('.first-2 a').on('click',function(){
    $('.first-2').hide()
    $('.first-3').show() 
})


$('.first-3 a').on('click',function(){
    $('.first-3').hide()
    $('.first-2').show() 
})

let  form = layui.form;
let  layer = layui.layer;

form.verify({
    pass: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'] ,
    repass:function(val){
    if(val !==$('.passInt').val()){
    return '密码不一致'
         }
    }
})

$('.registered').on('submit',function(e){
    e.preventDefault()
    let data = $(this).serialize()
    console.log(data)
  $.ajax({
      url:"http://ajax.frontend.itheima.net/api/reguser",
      type:'POST',
      data,
      success:function(res){
         if(res.status !==0){
            return layer.msg(res.message);
         }
         layer.msg('注册成功')
         $('.registered')[0].reset();
         $('.first-3 a').click()
      }
    })
})

$('.login1').on('submit',function(e){
    e.preventDefault()
    let data = $(this).serialize()
  $.ajax({
      url:'http://ajax.frontend.itheima.net/api/login',
      type:"POST",
      data,
      success:function(res){
        if(res.status !==0){
            return layer.msg(res.message);
     }
     layer.msg(
        "登录成功, 即将跳转到首页",
        {
          time: 2000, 
        },
        function () {
          location.href = '/home/index.html';
        }
      );
      }
    })             
  })
})