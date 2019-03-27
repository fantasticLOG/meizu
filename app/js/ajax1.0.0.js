function sendAjax(url,method, data, callback) {
    var xhr = new XMLHttpRequest();
    // 拼接url
    method = method.toUpperCase();
    // {uanme: 'xxx', age: 18, color: 'red'};
    // server.php +  ?uname=xxx + &age=18 + &color=red;
    if(method == 'GET') {
        for(var attr in data) {
            url += `&${attr}=${data[attr]}`;
        }
        // server.php?uname=xxx&age=18&color=red;
        if(!url.includes('?')) {
            // 没有问号的情况
            url = url.replace('&', '?');
        }
        data = null;
    } else {
        // 传输格式是json字符串
        data = JSON.stringify(data);
    }
    xhr.open(method, url, true);
    // post请求
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                var data = xhr.responseText;
                callback && callback(data);
            }
        }
    }
}