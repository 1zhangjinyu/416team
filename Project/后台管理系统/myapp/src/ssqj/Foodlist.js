import React from 'react'
import Head from './head'
import { connect } from 'react-redux'
import {addfood} from './addfood'
import {losefood} from './losefood'
import {keepfood} from './keepfood'
import {func} from './func'

const Foodlist = (props) => {
    props.dispatch(keepfood());
    props.dispatch(addfood());
    props.dispatch(losefood());
    let i=0,j=0,q=0;
    const foodid=0;
    
    
    return (

        <div>
            <Head/>
            <img id='img' style={{display:'none'}}/>
          
            <button id='img1' style={{display:'none'}}
            onClick={()=>{
                let img=document.getElementById('img');
                let img1=document.getElementById('img1');
               
                img.style.display="none";
                img1.style.display="none";
            }}
            >关闭</button>
            <div className='bread'> 数据管理>食谱管理</div>

            <div id = "update" style={{display:'none'}}>
                <form id = "foodupdate" action="" >
                    食物：<input type="text" name="fname" />
                    <span style={{marginLeft:'70px'}}>时间：</span>
                    <select name = "eattime">
                        <option value = "早"  >早 </option>
                        <option value = "中"> 中 </option>
                        <option value = "晚">晚</option>
                    </select>
                    <span style={{marginLeft:'70px'}}>图片：</span><input type = "file" name = "img" /><br></br>
                    <span >文章：</span><textarea  name ="content" rows = "3" cols = "30" > </textarea>
                    </form>
                    <button onClick={()=>{
                    let update=document.getElementById('update');
                    update.style.display="none";

                    }}>取消</button>
                    <button
                        onClick={(updf)=>{
                    let update=document.getElementById('update');
                    update.style.display="none";
                     let food=document.getElementById('foodupdate');
                     let fname=food.fname.value;
                     let eattime=food.eattime.value;
                     let img=food.img.value;
                     let content=food.content.value;
                     
                     updf={type:'updf',id:foodid,fname:fname,eattime:eattime,img:img,content:content}
                     console.log(updf)
                     func(updf)
                }}

                >确定</button>
                
                
            </div>
            
            <div className='foodlist'><div style={{fontSize:'15px',fontWeight:"bolder",paddingBottom:'10px'}}
>------------------增重------------------</div>
            <form id = "food1" action="" method="post">
                食物：<input type="text" name="fname" />
                <span style={{marginLeft:'70px'}}>时间：</span>
                <select name = "eattime">
                    <option value = "早"  >早 </option>
                    <option value = "中"> 中 </option>
                    <option value = "晚">晚</option>
                </select>
                <span style={{marginLeft:'70px'}}>图片：</span><input type = "file" name = "img" /><br></br>
                <span >文章：</span><textarea  name ="content" rows = "3" cols = "30" > </textarea>
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(addf)=>{
                    let food=document.getElementById('food1');
                    let fname=food.fname.value;
                    let eattime=food.eattime.value;
                    let img=food.img.value;
                    let content=food.content.value;
                    addf={table:'addweight',type:'addf',id:i,fname:fname,eattime:eattime,img:img,content:content}
                                                       
                    func(addf)
                }}
                >添加栏目</button>

                
                
                <table border='1' cellspacing='0'>
                    <tr>
                        <th>排序</th>
                        <th>食物名称</th>                        
                        <th>时间</th>
                        <th style={{width:'300px'}}>文章 </th>
                        <th>图片</th>
                        <th>操作</th>  
                    </tr>
                    {props.add.map((item)=>{
                        i++;
                        return<tr>
                            
                            <td>{i}</td>
                            <td><input style={{display:'none'}} value={item.foodname}/><span style={{display:'block'}}>{item.foodname}</span> </td>
                            <td>{item.eattime}</td>
                            <td >{item.content.slice(0,14)+'....'}</td>        
                                         
                            <td  >  <button onClick={()=>{
                                 let img=document.getElementById('img');
                                 let img1=document.getElementById('img1');
                                 img.src=item.img;
                                 img.style.display="block";
                                 img1.style.display="block";
                                return
                            }}>查看</button> </td>
                            <td>
                                <button onClick={()=>{ 
                                    
                                    let update=document.getElementById('update');
                                    update.style.display="block";
                                }}>编辑</button><button
                                onClick={(delf)=>{
                                    let id=item.id;
                                    delf={table:'addweight',type:'delf',id:id}
                                    func(delf)
                                }}
                                >删除</button>
                            </td>
                           
                        </tr>
                        
                    })}     
                </table>
            </div>
               
            <div className='foodlist'><div style={{fontSize:'15px',fontWeight:"bolder",paddingBottom:'10px'}}
            >------------------减重------------------</div>

<form id = "food2" action="" method="post">
                食物：<input type="text" name="fname" />
                <span style={{marginLeft:'70px'}}>时间：</span>
                <select name = "eattime">
                    <option value = "早"  >早 </option>
                    <option value = "中"> 中 </option>
                    <option value = "晚">晚</option>
                </select>
                <span style={{marginLeft:'70px'}}>图片：</span><input type = "file" name = "img" /><br></br>
                <span >文章：</span><textarea  name ="content" rows = "3" cols = "30" > </textarea>
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(addf)=>{
                    let food=document.getElementById('food2');
                    let fname=food.fname.value;
                    let eattime=food.eattime.value;
                    let img=food.img.value;
                    let content=food.content.value;
                    addf={table:'loseweight',type:'addf',id:i,fname:fname,eattime:eattime,img:img,content:content}
                                                       
                    func(addf)
                }}
                >添加栏目</button>
                <table border='1' cellspacing='0'>
                    <tr>
                        <th>排序</th>
                        <th>食物名称</th>                        
                        <th>时间</th>
                        <th style={{width:'300px'}}>文章 </th>
                        <th>图片</th>
                        <th>操作</th>   
                    </tr>
                    {props.lose.map((item)=>{
                         j++;
                        return<tr>
                            <td>{j}</td>
                            <td>{item.foodname} </td>
                            <td>{item.eattime}</td>
                            <td >{item.content.slice(0,14)+'....'}</td>         
                                         
                            <td  >  <button onClick={()=>{
                                 let img=document.getElementById('img');
                                 let img1=document.getElementById('img1');
                                 img.src=item.img;
                                 img.style.display="block";
                                 img1.style.display="block";
                                return
                            }}>查看</button> </td>
                            <td>
                                <button>编辑</button><button
                                 onClick={(delf)=>{
                                    let id=item.id;
                                    delf={table:'loseweight',type:'delf',id:id}
                                    func(delf)
                                }}>删除</button>
                            </td>
                        </tr>
                    })}                    
                </table>
            </div>  
            <div className='foodlist'><div style={{fontSize:'15px',fontWeight:"bolder",paddingBottom:'10px'}}>------------------保持------------------</div>
            <form id = "food3" action="" method="post">
                食物：<input type="text" name="fname" />
                <span style={{marginLeft:'70px'}}>时间：</span>
                <select name = "eattime">
                    <option value = "早"  >早 </option>
                    <option value = "中"> 中 </option>
                    <option value = "晚">晚</option>
                </select>
                <span style={{marginLeft:'70px'}}>图片：</span><input type = "file" name = "img" /><br></br>
                <span >文章：</span><textarea  name ="content" rows = "3" cols = "30" > </textarea>
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(addf)=>{
                    let food=document.getElementById('food3');
                    let fname=food.fname.value;
                    let eattime=food.eattime.value;
                    let img=food.img.value;
                    let content=food.content.value;
                    addf={table:'keepweight',type:'addf',id:i,fname:fname,eattime:eattime,img:img,content:content}
                                                       
                    func(addf)
                }}
                >添加栏目</button>
                <table border='1' cellspacing='0'>
                    <tr>
                        <th>排序</th>
                        <th>食物名称</th>                        
                        <th>时间</th>
                        <th style={{width:'300px'}}>文章 </th>
                        <th>图片</th>
                        <th>操作</th>   
                    </tr>
                    {props.keep.map((item)=>{
                         q++;
                        return<tr>
                            <td>{q}</td>
                            <td>{item.foodname} </td>
                            <td>{item.eattime}</td>
                            <td >{item.content.slice(0,14)+'....'}</td>         
                                         
                            <td  >  <button onClick={()=>{
                                 let img=document.getElementById('img');
                                 let img1=document.getElementById('img1');
                                 img.src=item.img;
                                 img.style.display="block";
                                 img1.style.display="block";
                                return
                            }}>查看</button> </td>
                            <td>
                                <button>编辑</button><button
                                 onClick={(delf)=>{
                                    let id=item.id;
                                    delf={table:'keepweight',type:'delf',id:id}
                                    func(delf)
                                }}>删除</button>
                            </td>
                        </tr>
                    })}                
                </table>
            </div>  
        </div>
    )
}
const mapStateToProps=(state)=>({
    add:state.addfood.add,
    lose:state.losefood.lose,
    keep:state.keepfood.keep
  })
export default connect(mapStateToProps)(Foodlist)

