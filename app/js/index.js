var index = (function (el) {
    let $phone, $ul, $liAll, $aAll, $person;
    return {
        init() {
            $person = $('.PersonalCenter');
            $ul = $('.frist-ul');
            // console.log($ul);

            $liAll = $($ul).children($("li"));
            // console.log($liAll);

            $aAll = $($liAll).children($("a"));
            console.log($aAll);

            // console.log($ul);
            // $phone = $('.phone-h')
            this.event();
        },
        event() {
            var self = this;
            $(document).ready(function () {
                //个人中心鼠标悬浮
                $($person).hover(function () {
                    $("#center").show();
                }, function () {
                    $("#center").hide();
                });
                $("#center").hover(function () {
                    $("#center").show();
                }, function () {
                    $("#center").hide();
                });

                // $ul.hover(function () {
                //         $('.nav').animate({
                //             height: 'toggle'
                //         },700) //显示下拉列表 
                //         $('.show-header').css('background', '#fff');
                //         $aAll.css('color', '#000');

                //         // $('#header').animate({
                //         //     background: '#fff',
                //         // },700);

                //         $('.icon-meizu').css('color', '#00beff');
                //         $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                //         $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                //     },
                //     function () {
                //         $('.nav').hide(); //鼠标移开后隐藏下拉列表
                //         $aAll.css('color', '#fff');
                //         $('.icon-meizu').css('color', '#fff');
                //         $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                //         $('.shopCar').children().children().css('color', '#fff');
                //         $('.show-header').css('background', 'none');
                //         // $(".show-header").stop(); 
                //     }
                // );

            });
            
            // $ul.on('mouseenter',,function(){
            //     $($aAll).css('color','#00b9f2');
            // })
            // for(let i = 0;i < $aAll.length;i++){
                // if($aAll[i].className == 'phone-h'){
                    $ul.on('mouseenter', '.frist-li', function () {
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.nav-phone').stop().animate({
                            height: 'toggle'
                        }, 300) //显示下拉列表 
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        $(".nav-phone").css('display', 'block');
                        console.log(11);
                    })
                    $('body').on('mouseleave', '#header', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        console.log(12);
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $(".nav-phone").css('display', 'none');
        
                    })
                // }else 
                // if($aAll[i].className == 'shengxue-h'){
                    $ul.on('mouseenter', '.shengxue-h', function () {
                        $('.nav-sheng').stop().animate({
                            height: 'toggle'
                        }, 300) //显示下拉列表 
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        // $('.phone-h').siblings('a').css('color','#000');
                        // $ul.children('li').siblings('a').css('color','#000')
                        $(".nav-sheng").css('display', 'block');
                        console.log(11);
                    })
                    $('body').on('mouseleave', '#header', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        console.log(12);
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $(".nav-sheng").css('display', 'none');
        
                    })
                    $ul.on('mouseenter', '.peijian-h', function () {
                        $('.nav-peijian').stop().animate({
                            height: 'toggle'
                        }, 300) //显示下拉列表 
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        // $('.phone-h').siblings('a').css('color','#000');
                        // $ul.children('li').siblings('a').css('color','#000')
                        $(".nav-peijian").css('display', 'block');
                        console.log(11);
                    })
                    $('body').on('mouseleave', '#header', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        console.log(12);
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $(".nav-peijian").css('display', 'none');
        
                    })
                // }
            // }
        }
    }

}());