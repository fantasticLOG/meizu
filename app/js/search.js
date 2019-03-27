const search = (function () {
    let  $timer,$input,$ulbox;
    return {
        init(ele) {
            $input = $('#sousuo-baidu');
            $ulbox = $('.show-tips');
            this.event();
        },
        event() {
            var self = this;
            $input.on('focus', function () {
                console.log('获取焦点');
                self.show();
            })
            $input.on('click', function (e) {
                e.stopPropagation();
            })
            $input.on('input', function () {
                if (this.val().trim() == '') {
                    self.hidden();
                } else {
                    clearTimeout($timer);
                    $timer = setTimeout(_ => {
                        self.getData(this.val());
                        self.show();
                    }, 500)
                }
            })
            // document.on('click' , function () {
            //     self.hidden();
            // })
            $ulbox.on('click', function (e) {
                // console.log(1);
                console.log(e.target);
                if (e.target.nodeName === 'LI') {
                    $input.val() = e.target.html();
                }
            })
        },
        show() {
            if ($input.val().trim() != '')
                $ulbox.css('display', 'block')
        },
        hidden() {
            $ulbox.css('display', 'none')
        },
        getData(val) {
            const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
            const data = {
                wd: val,
                cb: "baidu.insertData"
            }
            sendJsonp(url, data);
        },
        insertData(data) {
            $ulbox.html('');
            data.s.forEach(x => {
                const $li = document.createElement('li');
                $li.html('x');
                $ulbox.append($li);
            })
        }
    }
})