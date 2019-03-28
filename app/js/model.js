function create (element, className) {
  var $box = document.createElement(element);
  if(className) $box.className = className;
  return $box;
}
 var Model = (function() {
    var instance = null; // {}
    function dialog() {
      // 创建dom结构
      var $box = create('div', 'model-dialog'),
      $content= create('div', 'model-content'),
      $header =  create('div', 'model-header'),
      $headerTitle =  create('h4', 'model-title');
      $body =  create('div', 'model-body');
      // appendChild()方法会返回添加的元素， 所以写成了链式结构
      $box.appendChild($content).appendChild($header).innerHTML = ` <a href="javascript:;" class="qf qf-shop-close close"></a>`;
      $header.appendChild($headerTitle);
      $content.appendChild($body);
      document.body.appendChild($box);
      return {
        event() {
          var _this = this;
          $box.onclick = function(e) {
            e = e || window.event();
            const target = e.target ||e.srcElement;
            if(target.classList.contains('close')) {
              _this.close()
            }
          }
        },
        // 通用方法
        show({title, content, type}) {
          let i = `<i class="qf qf-shop-${type}"> </i>`;
          $headerTitle.innerHTML = `${i}` + title;
          $body.innerHTML = `${content}`;
          $box.style.display = 'flex';
        },
        success(content = '<a href="./shopCar.html"> 去购物车结算 ></a>') {
          this.show({title: '已成功加入购物车', content, type: 'success'})
        },
        info(content = '这是一个提示') {
          this.show({title: '提示', content, type: 'info'})
        },
        error(content = '您还有未选择的') {
          this.show({title: '添加失败', content, type: 'error'})
        },
        warning(content = '这是一个警告') {
          this.show({title: '警告', content, type: 'warning'})
        },
        close() {
          $box.style.display = 'none';
        }
      }
      
    }
    return function() {
      if(!instance) {
        instance =  dialog();
        instance.event()
      }
      return instance;
    }
}())


// var model1 = new Model()
// var model2 = new Model()
// console.log(model1 === model2);
