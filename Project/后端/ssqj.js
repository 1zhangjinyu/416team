'use strict';
const titbit = require('titbit'),
      mysql = require('mysql2/promise');

const app = new titbit({
    debug:true,
    https:true,
    key:'/usr/local/cert/www.hmyyz.top.key',     //证书
    cert:'/usr/local/cert/www.hmyyz.top.crt'
});

let con = mysql.createPool({
    host:'154.8.156.39',
    user:'zjy',
    password:'iqjLryKLu9%C',
    database:'ssqj'
});

let id,dtimg,contid;

//判断是否已经注册，若未注册，先注册，跳到登记信息页，并分配给一个新的id(date                                                                             w())))
app.post('/',async (c,next) =>{

    c.setHeader('Access-Control-Allow-Origin','*');
    c.setHeader('Access-Control-Allow-Methods','GET,POST');
    c.body = JSON.parse(c.body);

    let username = c.body.username;
    let psd1 = c.body.password;
    //console.log(psd1);
    const sql1 = `select id,psd from users where username='${username}'`;
    let [rows] = await con.execute(sql1);

    if(rows.length === 0){
        let idnew = Date.now();
        const sql2 = `insert into users (id,username,psd) values('${idnew}','sername}','${psd1}')`;
        await con.execute(sql2);

        id = idnew;
        //console.log(id);
        c.res.body = false;
    }else{
        let str = JSON.stringify(rows[0]);
        let psd = JSON.parse(str).psd;
        id = JSON.parse(str).id;
        //console.log(id)
        if(psd === psd1)
          c.res.body = true;
        // 重新输入密码（前端密码输入框变为空）
        //c.res.body=false
    }
    //const q = `delete from users where type is null`;
    //await con.execute(q);
    const s = `select * from users`;
    let [rowss] = await con.execute(s);
    //console.log(rowss);
    //console.log(rowss.length);

})

app.post('/weight',async c=>{
    c.setHeader('Access-Control-Allow-Origin','*');
    c.setHeader('Access-Control-Allow-Methods','GET,POST');
    let body = c.body;
    body = JSON.parse(body);
    let date1=new Date();
    let year = (date1.getFullYear()+'');
    let month=date1.getMonth()+1;
    month = month<10?'0'+month:month;
    let d=date1.getDate();
    d=d<10?('0'+d):d;
    let date=year+month+d;

    let sex = body.sex,
        weight = body.weight,
        goalweight = body.goalweight,
        height = body.height,
        type = body.type,
        age = body.age;
    console.log(sex,weight,goalweight,height,age,type);

    let bmi = weight/height/height;

     const sql = `update users set sex=${sex},age=${age},weights=${weight},goeight=${goalweight},height=${height},bmi=${bmi},type=${type} where id='${id}'
     await con.execute(sql);
     c.res.body = true;

     const sql1 = `insert into recordweight values('${id}','${weight}','${dat,0)`;
     await con.execute(sql1);

     const ss = `select * from users`;
     let [r]=await con.execute(ss);
     //console.log(r);

     c.res.body=c.body;


})

//主页推荐食谱---判断用户是增、减、保持体重，查询相应的表
app.post('/foods',async c=>{

  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  const sql = `select type from users where id = '${id}'`;
  let [rows] = await con.execute(sql);
  let str = JSON.stringify(rows[0]);
  let type = JSON.parse(str).type;
  let num = Math.floor(Math.random()*5+1);
  console.log(type);
  let sql1;
  switch (type){
    case '增重':
      sql1 = `select * from addweight where num = '${num}'`;
      break;
    case '减重':
      sql1 = `select * from loseweight where num = '${num}'`;
      break;
    case '保持':
      sql1 = `select * from keepweight where num = '${num}'`;
      break;
  }

  let [rows1] = await con.execute(sql1);
  let arrstr = JSON.stringify(rows1);
  //console.log(num);
  c.res.body = arrstr;

})

//健康报告（还可以吃）
app.post('/rest',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');


  const sql = `select height,age,sex from users where id ='${id}'`;
  const sql1 = `select neww from recordweight where num=0`;
  let [row] = await con.execute(sql);
  let [row1] = await con.execute(sql1);
  //console.log(row,row1);
  let str = JSON.stringify(row[0]);
  let str1 = JSON.stringify(row1[0]);

  let height = JSON.parse(str).height;
  let age = JSON.parse(str).age;
  let sex = JSON.parse(str).sex;
  let weight = JSON.parse(str1).neww;
  let rest;
  if(sex=='男'){
    rest = 66.5+13.7*weight+5*100*height-6.8*age;
  }
  else if(sex='女'){
    rest = 65.1+9.56*weight+1.85*100*height-4.68*age;
  }
  //console.log(height,age,sex,rest);
  c.res.body = rest;

})


//食物对比
//前端提供搜索的食物的名称fname  c.body.fname
app.post('/compare',async c=>{
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

app.post('/eat',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let fname = c.body;

  //console.log(fname);

  let date1=new Date();
  let year = (date1.getFullYear()+"")//.slice(-2);
  let month = date1.getMonth()+1;
  month = month < 10 ? '0' + month : month;
  let d = date1.getDate();
  d = d < 10 ? ('0' + d) : d;
  let date=year+month+d;
  //console.log(date)

  const sql1=`select * from food where fname =${fname}`;
  let [rows]=await con.execute(sql1);

  let str = JSON.stringify(rows);
  let food = JSON.parse(str);

  let str1=JSON.stringify(rows[0]);
  if (str1 != ''){
    c.res.body=str1;
  }else{
    c.res.body='false';
  }
  const sql2=`insert into myfoods values('${fname}','${date}','${id}','${food[0].img}','${food[0].heat}')`;
  let [rows1]=await con.execute(sql2);
  const l = `select * from myfoods`;
  let [w] = await con.execute(l);
  //console.log(w);

});


//用户点击我的食物功能时，从列表中查询记录并返回（检验date.now()）
//前端传递users的id ->c.query.id
app.post('/myfoods' ,async c=>{
  let date1=new Date();
  let year = (date1.getFullYear()+"")//.slice(-2);
  let month = date1.getMonth()+1;
  month = month < 10 ? '0' + month : month;
  let d = date1.getDate();
  d = d < 10 ? ('0' + d) : d;
  let date=year+month+d;

  //解决跨域
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  //let userid=c.body.id;//用户
  //删除旧的数据，只保存当天的饮食数据
  const sql1=`delete from myfoods where dates <>'${date}' and id='${id}'` ;
  let [row1]=await con.execute(sql1);
  //查找当天的数据
  const sql2=`select * from myfoods where dates='${date}' and id='${id}'`;
  let [row2]=await con.execute(sql2);
  let str=JSON.stringify(row2);
  //console.log(str)
  c.res.body=str;
});


function sortData(b,a){
  return a.dates-b.dates;
}


//健康记录里面的记录体重
app.post('/jltz',async (c,next)=>{

  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST')

  let neww = c.body;
  //console.log(neww);
  let sql1=`select * from recordweight where id='${id}'`;
  let [rows1]=await con.execute(sql1);
  let str1=JSON.stringify(rows1);
  str1=JSON.parse(str1);

//日期
  let date1=new Date();
  let year = (date1.getFullYear()+"")//.slice(-2);
  let month = date1.getMonth()+1;
  month = month < 10 ? '0' + month : month;
  let d = date1.getDate();
  d = d < 10 ? ('0' + d) : d;
  let date=year+month+d;

  //删除重复日期

  for(let i=0;i<str1.length;i++){
    if(date===str1[i].dates){
      let sql2=`delete from recordweight where dates='${date}'`;
      let [rows2]=await con.execute(sql2);
      let sql4=`update recordweight set num = num-1 where id='${id}'`;
      let [rows4]=await con.execute(sql4);
    }
    else{//num+1
 //   let sql4=`update recordweight set num = num+1 where id='${id}'`;
 //   let [rows4]=await con.execute(sql4);
    }
  }

//插入新数据

  let sql4=`update recordweight set num = num+1 where id='${id}'`;
  let [rows4]=await con.execute(sql4);
  let sql3=`insert into recordweight values ('${id}','${neww}','${date}','0')`;
  let [rows3]=await con.execute(sql3);


//删除日期超过7天的数据

  let sql=`delete from recordweight where num>6`;
  let [rows]=await con.execute(sql);

  let sql5=`select * from recordweight where id='${id}'`;
  let [rows5]=await con.execute(sql5);
  let str5=JSON.stringify(rows5);
  c.res.body=str5;
})

app.post('/jkbg',async (c,next)=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
  let sevenweight=[];
  let sevendate=[];
//删除日期超过7天的数据
  let sql1=`delete from recordweight where num>6`;
  let [rows1]=await con.execute(sql1);

 //得到该用户数据
  let sql2=`select * from recordweight where id='${id}'`;
  let [rows2]=await con.execute(sql2);
  let arr=[];

  //console.log(rows2);
  let str=JSON.stringify(rows2);
  str=JSON.parse(str);
  for (let i=0;i<str.length;i++){
    arr.push(str[i]);
  }
  arr.sort(sortData);
  //日期由近到远
  for (let i=0;i<arr.length;i++){
    sevenweight.push(arr[i].neww);
    sevendate.push(arr[i].dates);
  }
  //console.log(sevenweight,sevendate)

  //计算bmi
  let sql3=`select * from users where id = '${id}'`;
  let [rows3] = await con.execute(sql3);
  let str3=JSON.stringify(rows3);
  let score=0;
  str3=JSON.parse(str3);
  let BMI=str3[0].weights/(str3[0].height*str3[0].height);
  let goal=str3[0].weights-str3[0].goalweight;
  if(goal<0)
    goal=-goal;
  if(BMI>=20&&BMI<=22){
    score=95;
  }else if(BMI>=18.5&&BMI<20||BMI<=23.9&&BMI>22){
    score=86
  }else if(BMI>=17.5&&BMI<18.5||BMI<=25&&BMI>23.9){
    score=78
  }else
    score=70
  c.res.body={score,sevenweight,sevendate,BMI,goal};
})

app.post('/gftj',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Method','GET,POST');
 /*
  const s = `select username from users where id='${id}'`;
  const [r] = await con.execute(s);
  let name = JSON.stringify(r[0]);
  */

  const sql = `select blog.*,username from blog,users where userid=id order by contid desc`;
  const [row] = await con.execute(sql);
  let str = JSON.stringify(row);
  //console.log(str)
  c.res.body = str;

})

app.post('/dt',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Method','GET,POST');

  let body = JSON.parse(c.body);
  let content = body.inptext;

  //const s = `update blog set contid = contid+1`;
  //await con.execute(s);

  contid = Date.now();

  const sql = `insert into blog values('${id}','${contid}','${content}','${dtimg}',0)`;
  await con.execute(sql);

})

app.post('/imgs',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Method','GET,POST');
  //dtimg = c.body.slice(0,60);
  //console.log(c.body)
  dtimg = c.body;

})

app.post('/mydt',async c=>{

  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Method','GET,POST');
  console.log(c.body);
  const s = `delete from blog where contid = '${c.body}'`;
  await con.execute(s);
  const sql = `select * from blog where userid='${id}'`;
  const [row] = await con.execute(sql);
  c.res.body = JSON.stringify(row)
  //console.log(JSON.stringify(row))

})

app.post('myinfo',async c=>{
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Method','GET,POST');

  const sql = `select users.*,neww from users,recordweight where users.id='${id}' and recordweight.id='${id}' and num=0`;
  const [row] = await con.execute(sql);
  let str = JSON.stringify(row[0]);
  //console.log(str);
  c.res.body = str;

})


app.run(9999);