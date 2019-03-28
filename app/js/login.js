var $from = document.querySelector('#signupForm');
var $btn = document.querySelector('.btn');
$btn.onclick = function () {
	var obj = {
		username: $from['username'].value,
		password: $from['password'].value
	}
	sendAjax('http://10.36.145.202:4396/meizu/server/validateLogon.php', 'POST', obj, data => {
		data = JSON.parse(data);
		if (data.code == 200) {
			alert('登录成功');
			document.cookie = `id=${data.data.id}`;
			location.href = "../index.html";
		} else {
			alert(data.msg);
		}
	});
};

function uname(name) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(name);
}

function pwd(passd) {
	var pattern1 = /^[a-z0-9_-]{6,18}$/;
	return pattern1.test(passd);
}

function pull(usname, psword, spanid,spaid) {
	$(usname).change(function () {
		if (uname($(usname).val())) {
			$(spanid).html("");
		} else {
			if ($(usname).val().length == 0) {
				$(spanid).html("填写账号");
			}
			if (uname($(usname).val()) == false) {
				$(spanid).html("账号格式不正确");
			}
		}
	});
	$(psword).change(function(){
		if (pwd($(psword).val())) {
			$(spaid).html("");
		} else {
			if ($(psword).val().length == 0) {
				$(spaid).html("填写密码");
			}
			if (pwd($(psword).val()) == false) {
				$(spaid).html("密码格式不正确");
			}
		}
	})
};
pull("#username", "#password", "#checkExistPhone",".checkExistCode");