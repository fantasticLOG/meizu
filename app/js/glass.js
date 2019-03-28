$('.smallBox').mousemove(function(e){
    $('.bigBox').css('display','block');
    $('.tool').css('display','block');
    var x = e.pageX - $('.smallBox').offset().left - $('.tool').width()/2;
    var y = e.pageY - $('.smallBox').offset().top - $('.tool').height()/2;
    //限制下移动范围
    var maxLeft = $('.smallBox').width() - $('.tool').width();
    var maxTop = $('.smallBox').height() - $('.tool').height();
    if(x <= 0){
        x = 0;
    }
    if(x >= maxLeft){
        x = maxLeft;
    }
    if(y <= 0){
        y = 0;
    }
    if(y >= maxTop){
        y = maxTop;
    }

    $('.tool').css({'left': x,'top':y});
    //算下比例
    var widthNum = $('.bigBox img').width()/$('.smallBox img').width();
    var heightNum = $('.bigBox img').height()/$('.smallBox img').height();
    $('.bigBox img').css({
        'left': -(widthNum*x),
        'top': -(heightNum*y)
    })
})
$('.smallBox').mouseleave(function(e){
    $('.bigBox').css('display','none');
    $('.tool').css('display','none');
})