/**
 * Created by Lenovo on 2016/1/4.
 */


function itcast(){

}

itcast.prototype ={
    $id:function (str){
    return document.getElementById(str)
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag)
    },
    //�������ͼ��
    isNumber:function (val){
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean:function (val) {
        return typeof val ==="boolean";
    },
    isString:function (val) {
        return typeof val === "string";
    },
    isUndefined:function (val) {
        return typeof val === "undefined";
    },
    isObj:function (str){
        if(str === null || typeof str === 'undefined'){
            return false;
        }
        return typeof str === 'object';
    },
    isNull:function (val){
        return  val === null;
    },
    isArray:function (arr) {
        if(arr === null || typeof arr === 'undefined'){
            return false;
        }
        return arr.constructor === Array;
    },
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    ltrim:function(str) {
    return str.replace(/(^\s*)/g,'');
},
    //ɾ���ұߵĿո�
    rtrim:function(str) {
    return str.replace(/(\s*$)/g,'');
},
    ajax:function(){},
    dateFormate:function(){},
    tab:function (id) {
    //��λ�ȡĳ����Ԫ���������Ԫ��
    var box = $$.$id(id);
    var spans = box.getElementsByTagName('span');
    var lis = box.getElementsByTagName('li');
    //������
    //��һ��: �Ȱ��ϰ벿��ʵ��
    //Ⱥ����¼�  -- �����е�span���¼�
    //Ⱥ����¼�
    for(var i=0;i<spans.length;i++) {
        //���׷���  -- ����һ��һ������  --  ��ô�� -- �Զ�������
        spans[i].index=i;

        spans[i].onmouseover = function() {

            //����˼��:�����е�span��ΪĬ��״̬. Ȼ���ٽ���ǰ������ϵ�span��Ϊclass��select
            for(var i=0;i<spans.length;i++) {
                spans[i].className='';
                lis[i].className='';
            }
            this.className='select';
            lis[this.index].className='select';

           /* �ڶ���: ʵ���°벿��
            ����˼��:  �����е�li�������� Ȼ���ٽ���ǰ���������Ӧ��li��ʾ����
             for(var i=0;i<lis.length;i++)
			   {
				   lis[i].className='';
			   }
            Ѱ�Ҷ�Ӧ��Ů��
            lis[this.index].className='select';*/
        }
    }

}
}

var $$ = new itcast()