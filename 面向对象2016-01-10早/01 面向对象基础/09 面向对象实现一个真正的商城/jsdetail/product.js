//�����Ʒ����
function Product(){
    /*��Ʒ����*/
    this.name='HM���з���ɽ��'
    /*��Ʒ����*/
    this.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    /*��ͨ�۸�*/
    this.normalPrice=144
    /*�Ź��۸�*/
    this.youhuijia=120
    /*�Ѿ����������*/
    this.buySum=100;
    /*�ֲ�ͼƬ�б�*/
    this.images=[
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ]
}
Product.prototype={
    /*��ͨ����*/
    buy:function(){},
    /*��ͼƬ�б�*/
    bindDOMImage:function(){
        var str=''
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>'
            str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='</li>'
        }
        $('#etalage').html(str)

        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    /*����ϸ��Ϣ*/
    bindDOMDetail:function(){
        /*��Ԫ��*/
        $('#pname').html(this.name)
        $('#description').html(this.description)
        $('#price').html(this.normalPrice)
        $('#groupPrice').html(this.youhuijia)
        $('#buyCount').html(this.buySum)
    },
    /*���¼�*/
    bindEvents:function(){
        /*���¼�*/
        $('#btnaddcart').onclick=function(){

        }
        $('#btnbuy').onclick=function(){}
    },
    /*�Ź�*/
    groupBuy:function(){},
    /*��ӵ����ﳵ*/
    addCart:function(){

    }
}