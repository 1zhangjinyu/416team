import React from 'react'
import Head from './head'
import {connect } from 'react-redux'
import {contents} from './contents'
import {func} from './func'

var contid=0;


const Content = (props) => {
   
    let i=0;
    props.dispatch(contents());
    
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
            <div className='bread'> 用户管理>饮食记录</div>
            <div id = "update4" style={{display:'none'}}>
                <form id = "foodupdate4" action="" ><br></br><br></br>

                <span  style={{marginLeft:'30px'}}>文章id：</span><input type="text" name="contid" />  <br></br><br></br>             
                <span  style={{marginLeft:'30px'}}>点赞数：</span><input type="text" name="num" /><br></br><br></br>
                 <span  style={{marginLeft:'30px'}}>图片：</span><input type = "file" name = "img" /><br></br> <br></br>
                <span  style={{marginLeft:'30px'}}>文章：</span><textarea  name ="content" rows = "3" cols = "50" > </textarea>
               
                    </form><br></br><br></br>
                    <button  style={{marginLeft:'70px'}} onClick={()=>{
                    let update=document.getElementById('update4');
                    update.style.display="none";

                    }}>取消</button>
                    <button  style={{marginLeft:'20px'}}
                        onClick={(updc)=>{
                            
                            let update=document.getElementById('update4');
                            update.style.display="none";
                            let food=document.getElementById('foodupdate4');
                            
                            let img=food.img.value;
                            let num=food.num.value;
                            let content=food.content.value;
                            updc={type:'updc',table:'blog',content:content,contid:contid,num:num,img:img}      
                            props.dispatch(func(updc))
                            setTimeout(()=>{
                                if(props.rets!=='')
                                     alert('修改成功');
                            },1000)
                }}

                >确定</button>
                
                
            </div>



            <div className='cont'>
            <form id = "food6" action="" method="post">
                用户：<input type="text" name="userid" />
                <span style={{marginLeft:'70px'}}>文章id：</span><input type="text" name="contid" />               
                <span  style={{marginLeft:'70px'}}>点赞数：</span><input type="text" name="num" /><br></br> 
                <br></br>
                <span >文章：</span><textarea  name ="content" rows = "3" cols = "50" > </textarea>
                <span  style={{marginLeft:'140px'}}>图片：</span><input type = "file"  name = "img" />
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(addc)=>{
                   console.log (props)
                    let food=document.getElementById('food6');
                    
                   
                    let userid=food.userid.value;
                    let contid=food.contid.value;
                    let img=food.img.value;
                    let num=food.num.value;
                    let content=food.content.value;
                    addc={type:'addc',table:'blog',content:content,userid:userid,contid:contid,num:num,img:img}                               
                    props.dispatch(func(addc))
                    setTimeout(()=>{
                       alert ('添加成功')
                    },1000)
                    
                }}               
                >添加栏目</button>

                <table border='1' cellspacing='0'>
                    <tr>
                        <th>排序</th>
                        <th>用户ID</th>                        
                        <th>文章ID</th>
                        <th style={{width:'200px'}}>文章</th>
                        <th>点赞数 </th>
                        <th>图片 </th>
                        <th>操作</th>                         
                    </tr>
                    {props.cont.map((item)=>{
                        i++;
                        return<tr>
                            <td>{i}</td>
                            <td>{item.userid} </td>
                            <td>{item.contid}</td>
                            <td >{item.content.slice(0,12)+'....'}</td>     
                            <td > {item.num}</td>                
                            <td>  <button 
                            onClick={()=>{
                                    let img=document.getElementById('img');
                                    let img1=document.getElementById('img1');
                                    img.src=item.img;
                                    img.style.display="block";
                                    img1.style.display="block";
                            }}>查看</button> </td>
                            <td>
                            <button onClick={()=>{  
                                    let update=document.getElementById('update4');
                                    update.style.display="block";
                                    let id=item.contid;
                                    setTimeout(()=>{
                                         contid=id
                                    },10)      
                                   
                                }}>编辑</button><button
                                 onClick={(delc)=>{
                                    let contid=item.contid;
                                    delc={type:'delc',table:'blog',contid:contid}
                                    props.dispatch(func(delc))
                                    setTimeout(()=>{
                                        alert('删除成功')
                                    },1000)
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
    cont:state.contents.cont,
    rets:state.func.rets
  })
export default connect(mapStateToProps)(Content)

