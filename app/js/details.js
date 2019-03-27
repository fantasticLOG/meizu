//给加减按钮添加事件
var a1 = $('.three').html();
var a2 = $('.six').html();
var a3 = $('.twelve').html();
var a4 = $('.six-i').html();
var a5 = $('.twelve-i').html();
$('.vm-minus').click(function () {
    var num = $('.inp').val();
    if (num > 1) {
        num--;
        $('.vm-minus').css('color', '#000')
    } else {
        num = 1;
        $('.vm-minus').css('color', '#e0e0e0');
        $('.vm-push').css('color', '#000');
    }
    $('.inp').val(num);
    var b = $('.inp').val();
    var c1 = (a1 * b).toFixed(2);
    var c2 = (a2 * b).toFixed(2);
    var c3 = (a3 * b).toFixed(2);
    var c4 = (a4 * b).toFixed(2);
    var c5 = (a4 * b).toFixed(2);
    $('.three').html(c1);
    $('.six').html(c2);
    $('.twelve').html(c3);
    $('.six-i').html(c4);
    $('.twelve-i').html(c5);
})
$('.vm-push').click(function () {
    var num = $('.inp').val();
    if (num >= 5) {
        num = 5;
        $('.vm-push').css('color', '#e0e0e0');
        $('.vm-minus').css('color', '#000');
    } else {
        num++;
        $('.vm-push').css('color', '#000');
    }
    $('.inp').val(num);
    var b = $('.inp').val();
    var c1 = (a1 * b).toFixed(2);
    var c2 = (a2 * b).toFixed(2);
    var c3 = (a3 * b).toFixed(2);
    var c4 = (a4 * b).toFixed(2);
    var c5 = (a4 * b).toFixed(2);
    $('.three').html(c1);
    $('.six').html(c2);
    $('.twelve').html(c3);
    $('.six-i').html(c4);
    $('.twelve-i').html(c5);
})

//给型号添加点击事件
$('.model').on('click', 'a', function () {
    $(this).siblings('a').removeClass('model-style');
    $(this).addClass('model-style');
});
$('.network-type').on('click', 'a', function () {
    $(this).siblings('a').removeClass('model-style');
    $(this).addClass('model-style');
});
$('.color-classification').on('click', 'a', function () {
    $(this).siblings('a').removeClass('model-style');
    $(this).addClass('model-style');
});
$('.memory-capacity').on('click', 'a', function () {
    $(this).siblings('a').removeClass('model-style');
    $(this).addClass('model-style');
});
$('.package').on('click', 'a', function () {
    $(this).siblings('a').removeClass('model-style');
    $(this).addClass('model-style');
});
$('.periodization').on('click', 'a', function () {
    $(this).siblings('a').removeClass('model-style');
    $(this).addClass('model-style');
});




//点击小图变换大图
$('.preview-thumb').on('click','img',function(){
    $('.big-img')[0].src = $(this)[0].src;
    
})

//点击加入购物车弹窗
 //获取窗口的高度 
 var windowHeight; 
 //获取窗口的宽度 
 var windowWidth; 
 //获取弹窗的宽度 
 var popWidth; 
 //获取弹窗高度 
 var popHeight; 
 function init(){ 
    windowHeight=$(window).height(); 
    windowWidth=$(window).width(); 
    popHeight=$("window").height(); 
    popWidth=$(".window").width(); 
 } 
 //关闭窗口的方法 
 function closeWindow(){ 
     $(".title img").click(function(){ 
         $(this).parent().parent().hide("slow"); 
         }); 
     } 
     //定义弹出居中窗口的方法 
     function popCenterWindow(){ 
         init(); 
         //计算弹出窗口的左上角Y的偏移量 
     var popY=(windowHeight-popHeight)/2; 
     var popX=(windowWidth-popWidth)/2; 
     //alert('jihua.cnblogs.com'); 
     //设定窗口的位置 
     $("#center").css("top",popY).css("left",popX).slideToggle("slow");  
     closeWindow(); 
     } 

     


