import Mock from 'mockjs';
//devserver创建接口，完成 找房 接口开发 
Mock.mock('/pagination','post',function(options){
  var params=JSON.parse(options.body);
  var {count,page}=params;
  //准备一个大数据池
  var data=Mock.mock({
    "list|1000":[
      {
        "id|+1":1,
        "name":'北京东湾',
        "title":'北京 通州',
        "pic":"@image(100x100,@color)",
        "price|1-10000":500
      }
    ]
  });
  var tempData=data.list.slice((page-1)*count,page*count);
  return{
    list:tempData,
    page:page,
    count:count,
    total:data.list.length
  }
})

//请求接口，根据筛选条件完成数据渲染
Mock.mock('/list','get',{
  "list|10":[
    {
      "id|+1":1,
      "name":'北京东湾',
      "title":'北京 通州',
      "pic":"@image(100x100,@color)",
      "price|1-10000":500
    }
  ]
})