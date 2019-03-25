$.validator.setDefaults({
    submitHandler: function() {
      alert("登录成功!");
    }
});
$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
  $("#signupForm").validate({
      
	    rules: {
	      uname: {
	        required: true,
            minlength: 2,
            maxlength:10
	      },
	      pwd: {
	        required: true,
            minlength: 5,
            maxlength:16
	      },
	      confirm_pwd: {
	        required: true,
	        minlength: 5,
            equalTo: "#pwd",
            maxlength:16
	      },
	      agree: "required"
	    },
	    messages: {
	    
	      uname: {
	        required: "请输入用户名",
	        minlength: "用户名必需由两个字母组成"
	      },
	      pwd: {
	        required: "请输入密码",
            minlength: "密码长度不能小于 5 个字母",
            maxlength: "密码长度不能大于 16 个字母"
	      },
	      confirm_pwd: {
	        required: "请输入密码",
	        minlength: "密码长度不能小于 5 个字母",
            equalTo: "两次密码输入不一致",
            maxlength: "密码长度不能大于 16 个字母"
	      },
	      
	    }
	});
});