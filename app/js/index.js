var index = (function (el) {
    let $phone, $ul, $liAll, $aAll, $person;
    return {
        init() {
            $person = $('.PersonalCenter');
            $ul = $('.frist-ul');//获取第ul
            $liAll = $($ul).children($("li"));//获取所有li
            $aAll = $($liAll).children($("a"));//获取所有a
            this.event();
            this.nullShopCar();
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
            });
                    //phone
                    $('.frist-ul').on('mouseenter', '.frist-li', function () {
                        const index = $(this).index();
                        $('.nav-phone').html(`
                        <div class="phone_con">
                <a href="" class="phone-h_1">
                    <img src="images/ph1.jpg" alt="">
                    <span class="phone-name">魅族Note9</span></br>
                    <span class="phone-price">￥1398</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph2.jpg" alt="">
                    <span class="phone-name">魅族Note8</span></br>
                    <span class="phone-price">￥999</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph3.jpg" alt="">
                    <span class="phone-name">魅族16X</span></br>
                    <span class="phone-price">￥1798</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph4.jpg" alt="">
                    <span class="phone-name">魅族V8高配版</span></br>
                    <span class="phone-price">￥898</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph5.jpg" alt="">
                    <span class="phone-name">魅族X8</span></br>
                    <span class="phone-price">￥1298</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph6.jpg" alt="">
                    <span class="phone-name">魅族16th</span></br>
                    <span class="phone-price">￥2498</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph7.jpg" alt="">
                    <span class="phone-name">魅族15</span></br>
                    <span class="phone-price">￥1498</span>
                </a>
                <a href="" class="phone-h_1">
                    <img src="images/ph8.jpg" alt="">
                    <span class="phone-name">魅蓝 E3</span></br>
                    <span class="phone-price">￥1799</span>
                </a>
            </div>`)
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        $('.nav-phone').css('display', 'block');
                    })
                    $('#header').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $('.nav-phone').css('display', 'none');
                    })
                    //shengxue
                    $('.frist-ul').on('mouseenter', '.shengxue-h', function () {
                        $('.nav-phone').html(`
                        <div class="phone_con">
                        <a href="" class="phone-h_1">
                            <img src="images/sheng2.jpg" alt="">
                            <span class="phone-name">真无线蓝牙耳机</span></br>
                            <span class="phone-price">￥499</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng.jpg" alt="">
                            <span class="phone-name">魅族Flow boss</span></br>
                            <span class="phone-price">￥399</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng3.jpg" alt="">
                            <span class="phone-name">HALO 激光蓝牙耳机</span></br>
                            <span class="phone-price">￥499</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng4.jpg" alt="">
                            <span class="phone-name">EP51 蓝牙运动耳机</span></br>
                            <span class="phone-price">￥129</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng5.jpg" alt="">
                            <span class="phone-name">EP 52 lite蓝牙耳机</span></br>
                            <span class="phone-price">￥129</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng6.jpg" alt="">
                            <span class="phone-name">LIVE 四单元动耳机</span></br>
                            <span class="phone-price">￥1099</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng7.jpg" alt="">
                            <span class="phone-name">EP-31 耳机</span></br>
                            <span class="phone-price">￥99</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/sheng8.jpg" alt="">
                            <span class="phone-name">EP52 蓝牙耳机</span></br>
                            <span class="phone-price">￥199</span>
                        </a>
                    </div>`)
                        // $('.nav-phone').stop().animate({
                        //     height: 'toggle'
                        // }, 300) //显示下拉列表 
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        $('.nav-phone').css('display', 'block');
                    })
                    $('#header').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $('.nav-phone').css('display', 'none');
                        
        
                    })
                    //paijian
                    $ul.on('mouseenter', '.peijian-h', function () {
                        $('.nav-phone').html(`
                        <div class="phone_con">
                        <a href="" class="phone-h_1">
                            <img src="images/p1.png" alt="">
                            <span class="phone-name">魅族移动电源</span></br>
                            <span class="phone-price">￥78</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p2.png" alt="">
                            <span class="phone-name">快充电源适配器</span></br>
                            <span class="phone-price">￥79</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p3.png" alt="">
                            <span class="phone-name">魅族无线充电器</span></br>
                            <span class="phone-price">￥79</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p4.png" alt="">
                            <span class="phone-name">魅族Type-c 数据线</span></br>
                            <span class="phone-price">￥49</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p5.jpg" alt="">
                            <span class="phone-name">魅族USB数据线</span></br>
                            <span class="phone-price">￥29</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p6.jpg" alt="">
                            <span class="phone-name">魅族Type-c 金属数据线</span></br>
                            <span class="phone-price">￥39</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p7.jpg" alt="">
                            <span class="phone-name">魅族16th 高透保护膜</span></br>
                            <span class="phone-price">￥19</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/p8.jpg" alt="">
                            <span class="phone-name">魅蓝16th 亲肤保护壳</span></br>
                            <span class="phone-price">￥29</span>
                        </a>
                    </div>
                        `)
                        // $('.nav-peijian').stop().animate({
                        //     height: 'toggle'
                        // }, 300) //显示下拉列表 
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        $(".nav-phone").css('display', 'block');
                    })
                    $('#header').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $(".nav-phone").css('display', 'none');
        
                    })
                    //life
                    $ul.on('mouseenter', '.life-h', function () {
                        $('.nav-phone').html(`
                        <div class="phone_con">
                        <a href="" class="phone-h_1">
                            <img src="images/pei1.jpg" alt="">
                            <span class="phone-name">魅族盒子 一键找回遥控器</span></br>
                            <span class="phone-price">￥199</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei2.jpg" alt="">
                            <span class="phone-name">魅族路由器 极速版</span></br>
                            <span class="phone-price">￥99</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei3.jpg" alt="">
                            <span class="phone-name">魅族桌面多功能排插</span></br>
                            <span class="phone-price">￥89</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei4.jpg" alt="">
                            <span class="phone-name">Everyday 乐友系列</span></br>
                            <span class="phone-price">￥599</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei5.jpg" alt="">
                            <span class="phone-name">魅蓝休闲旅行双肩包</span></br>
                            <span class="phone-price">￥199</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei6.jpg" alt="">
                            <span class="phone-name">魅蓝胸包</span></br>
                            <span class="phone-price">￥89</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei7.jpg" alt="">
                            <span class="phone-name">魅蓝收纳包</span></br>
                            <span class="phone-price">￥58</span>
                        </a>
                        <a href="" class="phone-h_1">
                            <img src="images/pei8.jpg" alt="">
                            <span class="phone-name">魅蓝旅行包</span></br>
                            <span class="phone-price">￥269</span>
                        </a>
                    </div>
                        `)
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        $(".nav-phone").css('display', 'block');
                    })
                    $('#header').on('mouseleave', function () {
                        $(".nav-phone").css('display', 'none');
                        $('.show-header').css('background', 'none');//关于背景
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                    })
                    $('.life-h').on('mouseleave',function(){
                        $aAll.css('color', '#000');
                        // $('.show-header').css('background', 'none');//关于背景
                    })
                    //flyme
                    $ul.on('mouseenter', '.flyme-h', function () {
                        $(this).siblings().children().css('color', '#fff');
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        $('.show-header').css('background', 'none');//关于背景
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                    })
                    $('.flyme-h').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                    })
                    //fuwu
                    $ul.on('mouseenter', '.fuwu-h', function () {
                        $(this).siblings().children().css('color', '#fff');
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        $('.show-header').css('background', 'none');//关于背景
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                    })
                    $('.fuwu-h').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                    })
                    //zhuangmai
                    $ul.on('mouseenter', '.zhuanmai-h', function () {
                        $(this).siblings().children().css('color', '#fff');
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        $('.show-header').css('background', 'none');//关于背景
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                    })
                    $('.zhuanmai-h').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                    })
                    //shequ
                    $ul.on('mouseenter', '.shequ-h', function () {
                        $(this).siblings().children().css('color', '#fff');
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        $('.show-header').css('background', 'none');//关于背景
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                    })
                    $('.shequ-h').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                    })
                    //app
                    $ul.on('mouseenter', '.app-h', function () {
                        $('.nav-phone').html(`
                        <div class="phone_con">
                        <a href="" class="app">
                            <img src="images/app2.jpg" alt="">
                        </a>
                    </div>
                        `)
                        const index = $(this).index();
                        $(this).children().css('color', '#00beff');
                        $(this).siblings().children().css('color', '#000');
                        $('.show-header').css('background', '#fff');
                        $('.PersonalCenter').children().children('.icon-touxiang').css('color', '#000');
                        $('.shopCar').children().children('.icon-gouwuche1').css('color', '#000');
                        $('.icon-meizu').css('color', '#00beff');
                        $(".nav-phone").css('display', 'block');
                    })
                    $('#header').on('mouseleave', function () {
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $aAll.css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.show-header').css('background', 'none');//关于背景
                        $(".nav-phone").css('display', 'none');
                    })

                    $('.nav-phone').on('mouseenter','.phone-h_1',function(){
                        $(this).siblings().css('opacity', '0.4');
                    })
                    $('.nav-phone').on('mouseleave','.phone-h_1',function(){
                        $(this).siblings().css('opacity', '1');
                    })
                    $('.sousuo').on('mouseenter','input',function(){
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        const index = $(this).index();
                        $('.show-header').css('background', 'none');//关于背景
                        $aAll.css('color', '#fff');
                    }) 
                    $('.PersonalCenter').on('mouseenter','a',function(){
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        const index = $(this).index();
                        $('.show-header').css('background', 'none');//关于背景
                        $aAll.css('color', '#fff');
                    })
                    $('.shopCar').on('mouseenter','a',function(){
                        $('.PersonalCenter').children('a').children('i').css('color', '#fff');
                        $('.shopCar').children().children().css('color', '#fff');
                        $('.icon-meizu').css('color', '#fff');
                        $('.nav-phone').empty();
                        const index = $(this).index();
                        $('.show-header').css('background', 'none');//关于背景
                        $aAll.css('color', '#fff');
                    });
        },
        nullShopCar(){
            var data = localStorage.shopList || '[]';
            let small_shop = JSON.parse(data).length
            console.log(JSON.parse(data).length);
            if(small_shop == 0){
                $('.shopCar a').attr('href','./car-null.html');
            }else{
                $('.shopCar a').attr('href','./shopCar.html');
            }
        }
    }
}());