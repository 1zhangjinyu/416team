'use strict';
const titbit = require('titbit'),
      mysql = require('mysql2/promise');

const app = new titbit(
  /*
    debug:true,
    https:true,
    key:'/usr/local/cert/www.hmyyz.top.key',     //证书
    cert:'/usr/local/cert/www.hmyyz.top.crt'
    */
);

let con = mysql.createPool({
    host:'154.8.156.39',
    user:'zjy',
    password:'iqjLryKLu9%C',
    database:'ssqj'
});

let id;


app.get('/test',async c=>{

  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  const sql1 = `insert into users values('888','ddd','000',1.80,80,'男',30,24                                                                                .69,70,'减重')`;

  await con.execute(sql1);
  const sql2 = `select * from users`;
  let [rows1] = await con.execute(sql2);
  console.log(rows1);
  //let str = JSON.stringify(rows[0]);
  /*
  c.res.body = JSON.parse(str);
  console.log(JSON.parse(str));
  */
})


//判断是否已经注册，若未注册，先注册，跳到登记信息页，并分配给一个新的id(date                                                                                .now())))
app.post('/',async (c,next) =>{

    c.setHeader('Access-Control-Allow-Origin','*');
    c.setHeader('Access-Control-Allow-Methods','GET,POST');
    c.body = JSON.parse(c.body);
    /*
    let username = c.body.username;
    const sql1 = `select id,psd from users where username=${username}`;
    let [rows] = await con.execute(sql1);
    if(rows.length === 0){
        let idnew = date.now();
        const sql2 = `insert into users (id,username) values('${idnew}',
          '${username}')`;
        await con.execute(sql2);

        id = idnew;

        c.res.body = false;
    }else{
        let str = JSON.stringify(rows[0]);
        let psd = JSON.parse(str).psd;
        id = JSON.parse(str).id;
        if(psd === c.body.psd)
          c.res.body = true;
        // 重新输入密码（前端密码输入框变为空）c.res.body=false
    }
       */
    if(c.body.username==='456'){  // 数据库中有该用户，直接跳到主页
      c.res.body=true;

    }else{   // 数据库中没有该用户，跳到登记信息页，数据库中加上用户信息
      c.res.body=false;
    }
    console.log(c.body);
})

app.post('/weight',async c=>{
    c.setHeader('Access-Control-Allow-Origin','*');
    c.setHeader('Access-Control-Allow-Methods','GET,POST');
    let body = c.body;
    body = JSON.parse(body);
    let sex = body.sex,
        weight = body.weight,
        goalweight = body.goalweight,
        height = body.height,
        type = body.type;
    console.log(sex,weight,goalweight,height,type);


    /*
     const sql = `update users set 'sex=${sex},weights=${weight},
      goalweight=${goalweight},height=${height},type={type}' where id='${id}'                                                                                `;
     await con.execute(sql);
     c.res.body = true;

     */
})

//主页推荐食谱---判断用户是增、减、保持体重，查询相应的表
app.post('/foods',async c=>{

  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');
/*
  const sql = `select type from users where id = '${id}'`;
  let [rows] = await con.execute(sql);
  let str = JSON.stringify(rows[0]);
  let type = JSON.parse(str).type;
  let num = Math.floor(Math.random()*5+1);
  switch (type){
    case '增重':
      const sql1 = `select * from addweight where num = '${num}'`;
      break;
    case '减重':
      const sql1 = `select * from loseweight where num = '${num}'`;
      break;
    case '保持':
      const sql1 = `select * from keepweight where num = '${num}'`;
      break;
  }
  let [rows1] = await con.execute(sql1);
  let arrstr = JSON.stringify(rows1);
  c.res.body = arrstr;
*/


  let arrstr=[{'id':'1','num':'2','foodname':'玉米苹果','eattime':'早',
  'img':'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=920652807                                                                                ,3844239314&fm=26&gp=0.jpg',
  'content':'玉米、苹果、青菜、牛奶'},
  {'id':'2','num':'2','foodname':'玉米苹果','eattime':'中',
  'img':'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=920652807                                                                                ,3844239314&fm=26&gp=0.jpg',
  'content':'玉米、苹果、青菜、牛奶'},
  {'id':'3','num':'2','foodname':'玉米苹果','eattime':'晚',
  'img':'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=920652807                                                                                ,3844239314&fm=26&gp=0.jpg',
  'content':'玉米、苹果、青菜、牛奶'}];

  c.res.body=arrstr;


})


//每日推荐
app.get('/gftj',async c=>{
  /*
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  const sql = `select type from users where id = '${id}'`;
  let [rows] = await con.execute(sql);
  let str = JSON.stringify(rows[0]);
  let type = JSON.parse(str).type;
  let num = Math.floor(Math.random()*5+1);
  switch (type){
    case '增重':
      const sql1 = `select * from addweight where id between 1 and 6`;
      break;
    case '减重':
      const sql1 = `select * from loseweight where id between 1 and 6`;
      break;
    case '保持':
      const sql1 = `select * from keepweight where id between 1 and 6`;
      break;
  }
  let [rows1] = await con.execute(sql1);
  let arrstr = JSON.stringify(rows1);
  c.res.body = arrstr;

  */

})

app.get('shuaxin',async c=>{
 /*
  c.setHeader('Access-Control-Allow-Origin','*');
  c.setHeader('Access-Control-Allow-Methods','GET,POST');

  let id1 = c.query.id;   //id1的值在7-40之间
  let id2 = id1 + 5;

  const sql = `select type from users where id = '${id}'`;
  let [rows] = await con.execute(sql);
  let str = JSON.stringify(rows[0]);
  let type = JSON.parse(str).type;
  let num = Math.floor(Math.random()*5+1);
  switch (type){
    case '增重':
      const sql1 = `select * from addweight where id between '${id1}' and '${                                                                                id2}'`;
      break;
    case '减重':
      const sql1 = `select * from loseweight where id between '${id1}' and '$                                                                                {id2}'`;
      break;
    case '保持':
      const sql1 = `select * from keepweight where id between '${id1}' and '$                                                                                {id2}'`;
      break;
  }
  let [rows1] = await con.execute(sql1);
  let arrstr = JSON.stringify(rows1);
  c.res.body = arrstr;

  */



})


app.run(8089);