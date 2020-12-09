import React from 'react'
import Head from './head'
import { connect } from 'react-redux'
import {addfood} from './addfood'
import {losefood} from './losefood'
import {keepfood} from './keepfood'
import {func} from './func'
var foodid=0;
const Foodlist = (props) => {
    
    props.dispatch(keepfood());
    props.dispatch(addfood());
    props.dispatch(losefood());
    
    let i=0,j=0,q=0;
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

            <div id = "update1" style={{display:'none'}}>
                <form id = "foodupdate1" action="" >
                <br></br><br></br>
                    <span style={{marginLeft:'30px'}}>食物：</span><input type="text" name="fname" /><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>时间：</span>
                    <select style={{marginLeft:'30px'}} name = "eattime">
                        <option value = "早"  >早 </option>
                        <option value = "中"> 中 </option>
                        <option value = "晚">晚</option>
                    </select><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>图片：</span><input type = "file" name = "img" /><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>文章：</span><textarea  name ="content" rows = "3" cols = "50" > </textarea><br></br><br></br>
                    </form>
                    <button  style={{marginLeft:'70px'}} onClick={()=>{
                    let update=document.getElementById('update1');
                    update.style.display="none";

                    }}>取消</button>
                    <button  style={{marginLeft:'30px'}}
                        onClick={(updf)=>{
                            
                            let update=document.getElementById('update1');
                            update.style.display="none";
                            let food=document.getElementById('foodupdate1');
                            let fname=food.fname.value;
                            let eattime=food.eattime.value;
                            let img=food.img.value;
                            let content=food.content.value;
                            updf={type:'updf',table:'addweight',fname:fname,eattime:eattime,img:img,content:content,id:foodid}
                            
                            props.dispatch(func(updf))
                            setTimeout(()=>{
                                alert('修改成功');
                            },10000)
                }}

                >确定</button>
                
                
            </div>

            <div id = "update2" style={{display:'none'}}>
                <form id = "foodupdate2" action="" >
                <br></br><br></br>
                    <span style={{marginLeft:'30px'}}>食物：</span><input type="text" name="fname" /><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>时间：</span>
                    <select style={{marginLeft:'30px'}} name = "eattime">
                        <option value = "早"  >早 </option>
                        <option value = "中"> 中 </option>
                        <option value = "晚">晚</option>
                    </select><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>图片：</span><input type = "file" name = "img" /><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>文章：</span><textarea  name ="content" rows = "3" cols = "50" > </textarea><br></br><br></br>
                    </form>
                    <button style={{marginLeft:'70px'}} onClick={()=>{
                    let update=document.getElementById('update2');
                    update.style.display="none";

                    }}>取消</button>
                    <button style={{marginLeft:'30px'}}
                        onClick={(updf)=>{
                            
                            let update=document.getElementById('update2');
                            update.style.display="none";
                            let food=document.getElementById('foodupdate2');
                            let fname=food.fname.value;
                            let eattime=food.eattime.value;
                            let img=food.img.value;
                            let content=food.content.value;
                            updf={type:'updf',table:'loseweight',fname:fname,eattime:eattime,img:img,content:content,id:foodid}
                            
                            props.dispatch(func(updf))
                            setTimeout(()=>{
                                alert('修改成功');
                            },10000)
                }}

                >确定</button>
                
                
            </div>

            <div id = "update3" style={{display:'none'}}>
                <form id = "foodupdate3" action="" >
                <br></br><br></br>
                    <span style={{marginLeft:'30px'}}>食物：</span><input type="text" name="fname" /><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>时间：</span>
                    <select style={{marginLeft:'30px'}} name = "eattime">
                        <option value = "早"  >早 </option>
                        <option value = "中"> 中 </option>
                        <option value = "晚">晚</option>
                    </select><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>图片：</span><input type = "file" name = "img" /><br></br><br></br>
                    <span style={{marginLeft:'30px'}}>文章：</span><textarea  name ="content" rows = "3" cols = "50" > </textarea><br></br><br></br>
                    </form>
                    <button  style={{marginLeft:'70px'}} onClick={()=>{
                    let update=document.getElementById('update3');
                    update.style.display="none";

                    }}>取消</button>
                    <button   style={{marginLeft:'30px'}}
                        onClick={(updf)=>{
                            
                            let update=document.getElementById('update3');
                            update.style.display="none";
                            let food=document.getElementById('foodupdate3');
                            let fname=food.fname.value;
                            let eattime=food.eattime.value;
                            let img=food.img.value;
                            let content=food.content.value;
                            updf={type:'updf',table:'keepweight',fname:fname,eattime:eattime,img:img,content:content,id:foodid}
                            
                            props.dispatch(func(updf))
                            setTimeout(()=>{
                                alert('修改成功');
                            },10000)
                }}

                >确定</button>
                
                
            </div>
            
            <div className='foodlist'><div style={{fontSize:'15px',fontWeight:"bolder",paddingBottom:'10px'}}
>------------------增重------------------</div>
            <form id = "food1" action="" method="post">
                食物：<input type="text" name="fname" />
                <span style={{marginLeft:'100px'}}>时间：</span>
                <select name = "eattime">
                    <option value = "早"  >早 </option>
                    <option value = "中"> 中 </option>
                    <option value = "晚">晚</option>
                </select>
                <span style={{marginLeft:'100px'}}>图片：</span><input type = "file" name = "img" /><br></br><br></br>
                <span >文章：</span><textarea  name ="content" rows = "3" cols = "50" > </textarea>
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(addf)=>{
                    
                    let food=document.getElementById('food1');
                    let fname=food.fname.value;
                    let eattime=food.eattime.value;
                    let img=food.img.value;
                    let content=food.content.value;
                    addf={type:'addf',table:'addweight',id:i,fname:fname,eattime:eattime,img:img,content:content,}
                                                       
                    props.dispatch(func(addf))
                    setTimeout(()=>{
                        alert('添加成功')
                    },10000)
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
                                <button onClick={()=>{  
                                    let update=document.getElementById('update1');
                                    update.style.display="block";
                                    let id=item.id;
                                    setTimeout(()=>{
                                         foodid=id
                                    },10)      
                                    

                                }}>编辑</button><button
                                onClick={(delf)=>{
                                   
                                    let id=item.id;
                                    delf={type:'delf',table:'addweight',id:id}
                                    props.dispatch(func(delf))
                                    setTimeout(()=>{
                                        
                                        alert('删除成功');
                                    },10000)
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
                <span style={{marginLeft:'100px'}}>时间：</span>
                <select name = "eattime">
                    <option value = "早"  >早 </option>
                    <option value = "中"> 中 </option>
                    <option value = "晚">晚</option>
                </select>
                <span style={{marginLeft:'100px'}}>图片：</span><input type = "file" name = "img" /><br></br><br></br>
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
                    addf={type:'addf',table:'loseweight',id:i,fname:fname,eattime:eattime,img:img,content:content}
                                                       
                    props.dispatch(func(addf))
                    setTimeout(()=>{
                        alert('添加成功')
                    },10000)
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
                                <button onClick={()=>{  
                                    let update=document.getElementById('update2');
                                    update.style.display="block";
                                    let id=item.id;
                                    setTimeout(()=>{
                                         foodid=id
                                    },10)      

                                }}>编辑</button><button
                                 onClick={(delf)=>{
                                    
                                    let id=item.id;
                                    delf={type:'delf',table:'loseweight',id:id}
                                    props.dispatch(func(delf))
                                    setTimeout(()=>{
                                        alert('删除成功')
                                    },10000)
                                }}>删除</button>
                            </td>
                        </tr>
                    })}                    
                </table>
            </div>  
            <div className='foodlist'><div style={{fontSize:'15px',fontWeight:"bolder",paddingBottom:'10px'}}>------------------保持------------------</div>
            <form id = "food3" action="" method="post">
                食物：<input type="text" name="fname" />
                <span style={{marginLeft:'100px'}}>时间：</span>
                <select name = "eattime">
                    <option value = "早"  >早 </option>
                    <option value = "中"> 中 </option>
                    <option value = "晚">晚</option>
                </select>
                <span style={{marginLeft:'100px'}}>图片：</span><input type = "file" name = "img" /><br></br><br></br>
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
                    addf={type:'addf',table:'keepweight',id:i,fname:fname,eattime:eattime,img:img,content:content}
                                                       
                    props.dispatch(func(addf))
                    setTimeout(()=>{
                        alert('添加成功')
                    },10000)
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
                                <button onClick={()=>{  
                                    let update=document.getElementById('update3');
                                    update.style.display="block";
                                    let id=item.id;
                                    setTimeout(()=>{
                                         foodid=id
                                    },10)      

                                }}>编辑</button><button
                                 onClick={(delf)=>{
                                    let id=item.id;
                                    delf={type:'delf',table:'keepweight',id:id}
                                    props.dispatch(func(delf))
                                    setTimeout(()=>{
                                        alert('删除成功')
                                    },10000)
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
    keep:state.keepfood.keep,
    rets:state.func.rets
  })
export default connect(mapStateToProps)(Foodlist)

