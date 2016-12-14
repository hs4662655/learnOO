/**
 * Created by Administrator on 2016/12/14 0014.
 */
//需要哪些对象：产品对象

function Product() {
    //产品名称
    this.name = '';
    //产品价格
    this.price = '';
    //产品图片
    this.image = '';
}

Product.prototype = {
    bindDOM: function () {
        //单个对象的dom的拼接
        return str;
    }
};

window.onload = function () {
    //抽象和具体 类和实例
    var product1 = new Product();
    var product2 = new Product();
    var product3 = new Product();
    var product4 = new Product();

    var product = [product1, product2, product3, product4];
    var str = '';
    for (var i = 0; i < product.length; i++) {
        str += product[i].bindDOM();
    }
    document.getElementById('container').innerHTML = str;
};