'use strict'
const titbit=require('titbit'),
      app=new titbit();
const mysql = require('mysql2/promise');
let con = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'iqjLryKLu9%C',
  database:'ssqj'

});


let {router}=app;
//添加早中晚餐时，点击具体的食物，返回给前端具体的食物热量，并把点击的十五添加到我的食物中和用户对应。
//前端提供fname:fname的字符串形式、user:users的id值
const sql='select * from users';
let [row]=await con.execute(sql);
console.log(row);
router.get('/eat',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  //c.res.body=c.query;//query返回URL中?后面的查询字符串，json格式
  const sql1=`select * from food where fname ='${c.query.fname}'`;
  let [rows]=await con.execute(sql1);
  let str=JSON.stringify(rows);
  let jsonstr=JSON.parse(str);
  if (str != ''){
    
    c.res.body=jsonstr;
  }else{
    c.res.body='false';
  }
});
//搜索得到食物后，前端点击，添加到我的食物 
//前端返回 fname，userid
router.get('/search/detail',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
 //解析传递的数据
 let fname=c.query.fname,
     userid=c.query.id;
 //日期
  let time=new Date();
  let year=(time.getFullYear()+"");
  let month=time.getMonth+1;
  month=month<10?'0'+month:month;
  let day=time.getDate();
  d=d<10?('0'+d):d;
  let date=year+month+day;
  //查找fname的对应的热量
  const sql1=`select * from food where fname ='${c.query.fname}'`;
  let [rows]=await con.execute(sql1);
  let str=JSON.stringify(rows);
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
router.get('/myfood' ,async c=>{
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

  let userid=c.query.id;//用户
  //删除旧的数据
  const sql1=`delete from myfood where (dates <>'${date} and id='${userid}'` ;
  let [row1]=con.execute(sql1);
  //查找当天的数据
  const sql2=`select from myfood where dates=('${date}' and  id='${userid} )`;
  let [row2]=await con.execute(sql2);
  let str=JSON.stringify(row2);
  return JSON.parse(str);
})
con.end();

app.run(3744);
