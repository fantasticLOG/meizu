function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
function userTel(inputid,spanid,telid) {
    $(inputid).click(function() {
        if ($.trim($(telid).val()).length == 0) {
            $(spanid).html(" 手机号没有输入");
        } else {
            if (isPhoneNo($.trim($(telid).val())) == false) {
                $(spanid).html(" 手机号码不正确");
            }
        }
        $(inputid).click(function() {
            $(spanid).html("");
        });
    });
};
userTel('#btn', "#checkExistPhone",'#telephone');