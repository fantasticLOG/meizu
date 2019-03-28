var shopCar = (function () {
    var $box, shopData;
    return {
        init: function () {
           
            $box = $('.shop-phone');
            console.log($box);
            this.getCarData();
            this.event();
            this.shopCount();
            this.checkboxAll();
            
        },
        event: function () {
            var _this = this;
            $box.on('click','.del',function() {
                var self = $(this);
                // 获取点击按钮的索引
                var index = self.index('.del');
                console.log(index);
                shopData.splice(index, 1);
                // 删除对应dom, 重新渲染
                _this.insertData(shopData);
                // 修改本地数据
                _this.setCarData();

            })

            $box.on('change', '.shop-count', function() {
                var val = $(this).val() - 0;
                var index =  $(this).index('.shop-count');
                shopData[index].count = val;
                // 更新总价, 从新渲染数据
                _this.insertData(shopData);
                // 更新本地数据
                _this.setCarData();
            })
        },
        // 获取商品数据
        getCarData() {
           var data = localStorage.shopList || '[]';
           this.insertData(JSON.parse(data));
           $('.show-num').html(JSON.parse(data).length);
            console.log(JSON.parse(data).length);
           console.log(data);

        },
        // 添加到购物车的数据
        setCarData() {
            localStorage.shopList = JSON.stringify(shopData);
        },
        insertData(data) {
            $box.html('');
            shopData = data;
            console.log(data);
            data.forEach(x => {
                var htmlTemplate =
                `
                <div class="phone-title">
                <p>加价购</p>
                <span>另外再加19元起，即可换购超值商品</span>
                <a href="">立即加购 ></a>
            </div>
            <div class="phone-show">
                <input class="phone-checkbox" type="checkbox">
                <a class="phone-img" href=""><img src="./images/note9-1.jpg" alt=""></a>
                <div class="phone-box">
                    <h4 class="phone-name">${x.name}</h4>
                    <p class="phone-parameter">${x.type}   ${x.color}   ${x.memory}</p>
                </div>
                <div class="phone-show-price">
                    <em>￥<i class="phone-price">${x.price}</i></em>
                </div>
                <div class="phone-show-count">
                        <a href="javascript:void(0);" title="减少" class="count-minus">-</a>
                        <input class="phone-inp" type="text" value="${x.count}">
                        <a href="javascript:void(0);" title="增加" class="count-push">+</a>
                </div>
                <div class="phone-show-subtotal">
                    <em>￥<i class="phone-subtotal">${x.price * x.count}</i></em>
                </div>
                <div class="phone-del">
                    <button class="del">删除</button>
                </div>
            </div>
                `
                $box.append(htmlTemplate);
            })
        },
        shopCount(){
            //数量加减,小计切换
            $('.phone-show-count').on('click','.count-minus',function(){
                let self = $(this);
                // 获取点击按钮的索引
                var index = self.index('.count-minus');
                shopData.splice(index, 1);
                console.log(index)
                let shop_num = (self.siblings('.phone-inp').val()) - 0;

                if(shop_num < 2){
                    shop_num = 1;
                } else{
                    shop_num --;
                }
                self.siblings('.phone-inp').val(shop_num);
                // let shop_price = $('.phone-subtotal').html();
                let shop_dj =(self.parent().siblings('.phone-show-price').children('em').children('.phone-price').html()) - 0;

                self.parent().siblings('.phone-show-subtotal').children('em').children('.phone-subtotal').html(shop_dj * shop_num)
            })
            $('.phone-show-count').on('click','.count-push',function(){
                let self = $(this);
                // 获取点击按钮的索引
                var index = self.index('.count-push');
                shopData.splice(index, 1);
                let shop_num = (self.siblings('.phone-inp').val()) - 0;

                if(shop_num >= 10){
                    shop_num = 10;
                } else{
                    shop_num ++;
                }
                self.siblings('.phone-inp').val(shop_num);
                // let shop_price = $('.phone-subtotal').html();
                let shop_dj =(self.parent().siblings('.phone-show-price').children('em').children('.phone-price').html()) - 0;

                self.parent().siblings('.phone-show-subtotal').children('em').children('.phone-subtotal').html(shop_dj * shop_num)
            })
        },
        checkboxAll(){
            //复选框,加价格总价

            // 全选功能
        var $checkTotal = $('.title-checkbox');
        var $checkItem = $('.phone-checkbox');
        $checkTotal.click(function(){
            var bool = $(this).prop('checked')
            if(bool) {
                // 全选
                $checkItem.prop('checked', true);

            } else {
                // 非全选
                $checkItem.prop('checked', false);
            }
        })
        $checkItem.click(function() {
           let self = $(this);
            // 获取点击按钮的索引
            var index = self.index('.phone-checkbox');
            shopData.splice(index, 1);
            console.log(index)
            let shop_total = $('.shop-total').html() - 0;
            let shop_total_price = self.siblings('.phone-show-subtotal').children('em').children('.phone-subtotal').html() - 0;
            // console.log(shop_total_price);
            // console.log(shop_total);
             shop_total += shop_total_price ;
             $('.shop-total').html(shop_total);
            console.log(shop_total_price)
            var flag = true;
            $checkItem.each(function() {
                if(!$(this).prop('checked')) {
                    // 有一个文本框没被选中
                    $checkTotal.prop('checked', false);
                    flag = false;
                    return false;
                }
            })
            if(flag){
                $checkTotal.prop('checked', true);
                
            };

        })
        }
    }
}())
var cook = (function(){
    return {
        init(){
            var str = document.cookie;
            console.log(str);
            console.log(1);
            
            if(document.cookie){

            }
        }
    }
}())
