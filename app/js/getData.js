var getData = (function(){
    let shopData;
    return {
        init(){
            this.event();
            this.getShopData();
            
        },
        event(){

        },
        getShopData(){
            //获取手机信息并加入到数值中
            var obj = {}
            obj.name = $(".model").children(".model-style").html();
            obj.type = $(".network-type").children(".model-style").html();
            obj.color = $(".color-classification").children(".model-style").children('span').html();
            obj.memory = $(".memory-capacity").children(".model-style").html();
            obj.price = $(".mod-price span").html();           
            obj.count = $('.inp').val() - 0;
            shopData = obj;
            this.setCarData(shopData);
            console.log(shopData);
        },
        setCarData(data) {
            // 获取原有数据
            let shopList = localStorage.shopList || '[]';
            // 存储到本地数据
            shopList = JSON.parse(shopList);
            var flag = true;
            // 添加数据分两种情况
            for(var i = 0; i < shopList.length; i++) {
                if(shopList[i].name == data.name && shopList[i].memory == data.memory) {
                    // 数据已存在,  相当于count进行累加
                    shopList[i].count += data.count;
                    flag = false;
                    break;
                }
            }
            // 第一次添加
            if(flag){
                // 把数据添加到数组中
                shopList.push(data);
            }

            // 替换原有数据
            localStorage.shopList = JSON.stringify(shopList);
            // alert('加入成功');
            $('.phone-inp').val(JSON.parse(localStorage.shopList).length - 0);
        },
    }
}())