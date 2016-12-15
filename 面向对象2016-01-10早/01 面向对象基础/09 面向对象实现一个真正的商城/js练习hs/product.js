/**
 * Created by Administrator on 2016/12/15 0015.
 */
//定义对象
function product() {
    this.price = '';
    this.desc = '';
    this.chicun = '';
    this.changdu = '';
    this.number = '';
    this.buynumber = '';
    this.img = [{smallImg: '', bigImg: ''}, {smallImg: '', bigImg: ''}, {smallImg: '', bigImg: ''}];
}

Product.prototype = {
    bindDomImg: function () {
        var str = '';
        /*
         *    <li>
         <img class="etalage_thumb_image" src="images/s11.jpg" class="img-responsive" />
         <img class="etalage_source_image" src="images/s13.jpg" class="img-responsive" />
         </li>*/
        for (var i = 0; i < this.img.length; i++) {
            str += '<li>';
            str += '<img class="etalage_thumb_image" src="' + this.img[i].smallImg + '" class="img-responsive" />';
            str += '<img class="etalage_source_image" src="' + this.img[i].bigImg + '" class="img-responsive" />';
            str += '</li>';
        }
        $('etalage').html(str);
    },
    bindDOmDetail: function () {
        $('#pname').html(this.name);
        $('#description').html(this.description);
        $('#price').html(this.normalPrice);
        $('#groupPrice').html(this.youhuijia);
        $('#buyCount').html(this.buySum);
    }
}