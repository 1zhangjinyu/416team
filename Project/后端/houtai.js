
'use strict'

const titbit=require('titbit')
const mysql=require('mysql2/promise')

const app=new titbit({
  debug:true,
  https:true,
  key:'/usr/local/cert/www.liucl.xyz.key',
  cert:'/usr/local/cert/www.liucl.xyz.crt'
})

const con=mysql.createPool({
  host:'154.8.156.39',
  user:'cj',
  password:'iqjLryKLu9%C',
  database:'ssqj',
})

class Result{
  constructor(){
  this.code=0;
  this.msg='ok';
  this.data=null;
  }
}



app.post('/food',async (c,next)=>{

  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST')

//  let neww = c.body;
//  console.log(neww);
  let sql=`select * from food`;
  let [rows]=await con.execute(sql);
  let str=JSON.stringify(rows);


  c.res.body=str;

})




app.post('/foodlist/add',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let sql1=`select * from addweight`;

  let [rows1]=await con.execute(sql1);
  let add=JSON.stringify(rows1);
   c.res.body=add;

})

app.post('/foodlist/lose',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');


  let sql2=`select * from loseweight`;

  let [rows2]=await con.execute(sql2);
  let lose=JSON.stringify(rows2);
  c.res.body=lose;

})
 app.post('/foodlist/keep',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let sql=`select * from keepweight`;
  let [rows]=await con.execute(sql);
  let str=JSON.stringify(rows);

  c.res.body=str;

})



app.post('/eat',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let sql=`select * from myfoods`;
  let [rows]=await con.execute(sql);
  let str=JSON.stringify(rows);
  str=JSON.parse(str);

  c.res.body=str;
  })
app.post('/cont',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let sql=`select * from blog`;
  let [rows]=await con.execute(sql);
  let str=JSON.stringify(rows);
  str=JSON.parse(str);

  c.res.body=str;

})

app.post('/addf',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);

    let table=data.table;
    let id=data.id+1;
    let fname=data.fname;
    let eattime=data.eattime;
    let img=data.img;
    let content=data.content;
    let sql=`insert into ${table}
      values('${id}','6','${fname}','${eattime}','${img}','${content}')`;
    let [rows]=await con.execute(sql);

      c.res.body='添加成功'
})

app.post('/adde',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);
    let table=data.table;
    let id=data.id;
    let fname=data.fname;
    let dates=data.dates;
    let img=data.img;
    let heat=data.heat;
    let sql=`insert into ${table}
      values('${fname}','${dates}','${id}','${img}','${heat}')`;
    let [rows]=await con.execute(sql);
      c.res.body='添加成功'
})



app.post('/addc',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);

    let table=data.table;
    let userid=data.userid;
    let contid=data.contid;
    let num=data.num;
    let img=data.img;
    let content=data.content;
    let sql=`insert into ${table}
      values('${userid}','${contid}','${content}','${img}','${num}')`;
    let [rows]=await con.execute(sql);
      c.res.body='添加成功'

})





app.post('/addo',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);

    let table=data.table;
    let protein=data.protein;
    let fname=data.fname;
    let fat=data.fat;
    let img=data.img;
    let heat=data.heat;

    let co3=data.co3;
    let fiber=data.fiber;
    let gi=data.gi;
    let gl=data.gl;
    let wa=data.wa;
    let wc=data.wc;
    let we=data.we;
    let sql=`insert into ${table}
      values('${fname}','${heat}','${protein}','${fat}','${co3}','${fiber}',
          '${gi}','${gl}','${wa}','${wc}','${we}','${img}')`;
    let [rows]=await con.execute(sql);
      c.res.body='添加成功'
})


app.post('/delf',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);
      let id=data.id;
      let table=data.table;
      let sql=`delete from ${table} where id='${id}'`;
      let [rows]=await con.execute(sql);
      c.res.body='删除成功'
})

app.post('/delc',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);
      let contid=data.contid;
      let table=data.table;
      let sql=`delete from ${table} where contid='${contid}'`;
      let [rows]=await con.execute(sql);
      c.res.body='删除成功'
})



app.post('/delo',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);
      let fname=data.fname;
      let table=data.table;
      let sql=`delete from ${table} where fname='${fname}'`;
      let [rows]=await con.execute(sql);
      c.res.body='删除成功'
})

app.post('/updf',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);
    let table=data.table;
    let fname=data.fname;
    let id=data.id
    let eattime=data.eattime;
    let img=data.img;
    let content=data.content;
    //console.log(`${id},${fname},${eattime},${img},${content}`)
    let sql=`update ${table}
      set num=6,foodname='${fname}',eattime='${eattime}',img='${img}',
      content='${content}' where id='${id}'`;
    let [rows]=await con.execute(sql);
      c.res.body='修改成功'

})


app.post('/updc',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let data=c.body;
  data=JSON.parse(data);
  console.log(data);
    let table=data.table;
    let contid=data.contid
    let content=data.content;
    let img=data.img;
    let num=data.num;
    //console.log(`${id},${fname},${eattime},${img},${content}`)
    let sql=`update ${table}
      set content='${content}',img='${img}',num='${num}'
      where contid='${contid}'`;
    let [rows]=await con.execute(sql);
      c.res.body='修改成功'

})



app.run(1234)
