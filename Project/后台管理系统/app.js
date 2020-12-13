'use strict'
const titbit=require('titbit'),
      app=new titbit({
        debug:true,
        https:true,
        key:'/usr/local/cert/www.liucl.xyz.key',

        cert:'/usr/local/cert/www.liucl.xyz.crt'
      });
const mysql = require('mysql2/promise');

const con = mysql.createPool({

  host:'localhost',
  user:'root',
  password:'iqjLryKLu9%C',
  database:'ssqj'

});
let {router}=app;

/*
router.get('/test',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
  
  const sql=`select * from users`;
  let [row]=await con.execute(sql);
  console.log(row);
  c.res.body=JSON.stringify(row);
});*/


//食物对比
//前端提供搜索的食物的名称fname  c.body.fname
router.post('/compare',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
  let fname=c.body;
  const sql=`select * from food where fname=${fname}`;
  let [rows]=await con.execute(sql);
  let str1=rows[0];
  let str=JSON.stringify(str1);
  c.res.body=str;
 
});


//添加早中晚餐时，点击具体的食物，返回给前端具体的食物热量，并把点击的十五添加到我的食物中和用户对应。
//前端提供fname:fname的字符串形式、user:users的id值

router.post('/eat',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');


  //c.res.body=c.query;//query返回URL中?后面的查询字符串，json格式
  const sql1=`select * from food where fname =${c.body}`;
  let [rows]=await con.execute(sql1);
  let str=JSON.stringify(rows[0]);
  if (str != ''){
    
    c.res.body=str;
  }else{
    c.res.body='false';
  }
});



//搜索得到食物后，前端点击，添加到我的食物 
//前端返回 fname，userid
router.post('/search/detail',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
 //解析传递的数据
 let fname=c.body.fname,
     userid=c.body.id;
 //日期
  let time=new Date();
  let year=(time.getFullYear()+"");
  let month=time.getMonth+1;
  month=month<10?'0'+month:month;
  let day=time.getDate();
  d=d<10?('0'+d):d;
  let date=year+month+day;
  //查找fname的对应的热量
  const sql1=`select * from food where fname =${c.body.fname}`;
  let [rows]=await con.execute(sql1);
  let str=JSON.stringify(rows[0]);
  let jsonstr=JSON.parse(str);
  //插入到myfood表
  const sql2=`insert into myfood values('${fname}',time,'${c.query.userid}',jsonstr.img,jsonstr.heat)`;
  let [rows1]=await con.execute(sql2);
  
});

// router.post('/eat',async c=>{
//   c.setHeader('Access-Control-Allow-Origin','*');
//   c.setHeader('Access-Control-Allow-Methods','GET,POST');
//   addAreas(rows);
//   c.res.body=rows;
// });
//用户点击我的食物功能时，从列表中查询记录并返回（检验date.now()）
//前端传递users的id ->c.query.id
router.post('/myfood' ,async c=>{
  //日期
  let time=new Date();
  let year=(time.getFullYear()+"");
  let month=time.getMonth+1;
  month=month<10?'0'+month:month;
  let day=time.getDate();
  d=d<10?('0'+d):d;
  let date=year+month+day;
  //解决跨域
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let userid=c.body.id;//用户
  //删除旧的数据
  const sql1=`delete from myfood where (dates <>'${date}' and id='${userid}')` ;
  let [row1]=con.execute(sql1);
  //查找当天的数据
  const sql2=`select from myfood where( dates='${date}' and  id='${userid}' )`;
  let [row2]=await con.execute(sql2);
  let str=JSON.stringify(row2[0]);
  c.res.body=str;
});



//后台管理系统交互
//管理员登录，获取username，password，判断是否存在，返回true或false
router.post('/manager',async c=>{
   c.setHeader('Access-Control-Allow-Origin','*');
   c.setHeader('Access-Control-Allow-Methods','GET,POST');
 
   let ret=JSON.parse(c.body);
  let username=ret.username;
  let password=ret.password;
  console.log(ret)

  const sql=`select * from manage where (username='${username}' 
      and password='${password}')`;
  let [row]=await con.execute(sql);
 
  let str=JSON.stringify(row[0]);
  console.log(str);
  if(str!=''){
    c.res.body=str;
  }
  else{
    c.res.body='false';
  }
});
//manager页,返回修改
router.post('/changeManager',async c=>{
   c.setHeader('Access-Control-Allow-Origin','*');
   c.setHeader('Access-Control-Allow-Methods','GET,POST');
 
   let ret=JSON.parse(c.body);
   let username=ret.username;
   let password=ret.password;
   
 
   let id=ret.id

   const sql=`update manage set username='${username}',
          password='${password}'  where id='${id}'`;
   let [row]=await con.execute(sql);

   //if(ret.imgsrc!=='undefined'){
      const sql1=`update manage set img='${ret.imgsrc}' where id='${id}'`;
      let [row1]=await con.execute(sql1);
   //}
   
   
   
  });
//
//详细信息
router.post('/inforusers',async c=>{
   c.setHeader('Access-Control-Allow-Origin','*');
   c.setHeader('Access-Control-Allow-Methods','GET,POST');
   
   const sql=`select * from users`;
   let [row]=await con.execute(sql);
   
   let str=JSON.stringify(row);
   c.res.body=str;
   

  
});
//删除用户
router.post('/deleteuser',async c=>{
   c.setHeader('Access-Control-Allow-Origin','*');
   c.setHeader('Access-Control-Allow-Methods','GET,POST');
   console.log(c.body);
   let id=JSON.parse(c.body);
   console.log(id);
   const sql2=`delete from myfoods where id='${id}'`;
   let [row2]=await con.execute(sql2);
   const sql3=`delete from recordweight where id='${id}'`;
   let [row3]=await con.execute(sql3);
   const sql4=`delete from blog where userid='${id}'`;
   let [row4]= await con.execute(sql4);
    
  const sql=`delete from users where id='${id}'`;
  let [row]=await con.execute(sql);
  console.log(row);


});
//用户信息页搜索用户
router.post('/searchuser',async c=>{
   c.setHeader('Access-Control-Allow-Origin','*');
   c.setHeader('Access-Control-Allow-Methods','GET,POST');

   let id=c.body;
   console.log(c.body);
   const sql=`select * from users where id='${id}'`;
   let [row]=await con.execute(sql);
   console.log(row);
  c.res.body=JSON.stringify(row[0]);

      
});
//添加用户
router.post('/adduser',async c=>{
    c.setHeader('Access-Control-Allow-Origin','*');
    c.setHeader('Access-Control-Allow-Methods','GET,POST');
    
  let str=JSON.parse(c.body);
  let id=str.idnew,
  username=str.usernamenew,
  psd=str.psdnew,
  height=str.heightnew,
  weights=str.weightnew,
  sex=str.sexnew,
  age=str.oldnew,
  bmi=str.bminew,
  goalweight=str.goalweightnew

  if(id===''){
    c.res.body='no'
  } else{
    c.res.body='ok';
  }
   
  const sql=`insert into users values('${id}','${username}','${psd}',
     '${height}','${weights}','${sex}','${age}','${bmi}','${goalweight}','增重'
     )` ;
  let [row]=await con.execute(sql);
 
});
//修改用户
router.post('/updateuser',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
      
  let str=JSON.parse(c.body);
  console.log(c.body);
  console.log(str);
  const sql=`update users set username='${str.username}',
  psd='${str.psd}',height='${str.height}',weights='${str.weights}',
    sex='${str.sex}',age='${str.age}',bmi='${str.bmi}',goalweight='${str.goalweight}',
    type='${str.type}' where id='${str.oldid}'
  `;
  let [row]=await con.execute(sql);
  if(str.oldid===str.id){
    c.res.body='ok'
  }else{
    c.res.body='no'
  }

  console.log(c.res.body);
 
});


//con.end();

app.run(3745);
