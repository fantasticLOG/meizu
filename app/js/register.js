function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

function Vcode(code) {
    var $pattern = /^[a-z0-9_-]{6}$/;
    return $pattern.test(code);
}

function userTel(inputid, spanid, telephone,btnCode) {
    $(inputid).click(function () {
        $(inputid).toggle(function(){
            $(btnCode).toggle()
        })
        
    });
    $(telephone).change(function () {
        $(spanid).html("");
    });
};
userTel('#btn', "#checkExistPhone", '#telephone',"#btnCode");

function shoot(regid, loginid, codeid, telid, spanid) {
    $(regid).click(function () {
        if (isPhoneNo($(telid).val())) {
            $(loginid).toggle(function () {
                $(codeid).toggle()
            })
        } else {
            if (isPhoneNo($(telid).val()) == false) {
                $(spanid).html(" 手机号码格式不正确");
            }
            if ($(telid).val().length == 0) {
                $(spanid).html(" 手机号没有输入");
            }
        }

    });
    $(telid).change(function () {
        $(spanid).html("");
    });
};
shoot("#reg", ".login-box", ".vCode-box", '#telephone', "#checkExistPhone");

function pidding(nextone, vCodebox, pwdbox, Vword, spanid) {
    $(nextone).click(function () {
        if (Vcode($(Vword).val())) {
            $(vCodebox).toggle(function () {
                $(pwdbox).toggle()
            })
        } else {
            if (Vcode($(Vword).val()) == false) {
                $(spanid).html("验证码不正确");
            }
            if ($(Vword).val().length == 0) {
                $(spanid).html("输入验证码");
            }
        }
    });

}
pidding("#next-one", ".vCode-box", ".pwd-box", ".vCode-word", "#checkExistCode")

$("#reg").click(function () {
    $(".tel").html($("#telephone").val());
})
$("#vCode-word").click(function () {
    var time = 60;
    var timer = setInterval(function () {
        time--;
        $("#vCode-word").text("" + time + "秒重新获取");
        if (time == 0) {
            clearInterval(timer);
            $("#vCode-word").text("获取验证码");
        }
    }, 1000);
});
// var $form = document.querySelector('.form-box');
// $form['telephone'].onchange = function () {
//     var telephone = this.value;
//     var obj = {
//         telephone
//     }
//     sendAjax('../server/Verification.php', 'get', obj, data => {
//         // 所期待的data应该是一个正确的json字符串
//         data = JSON.parse(data);
//         if (data.code == 200) {
//             alert('用户名可用');
//         } else {
//             alert('用户名不可用');
//         }
//     });
// }