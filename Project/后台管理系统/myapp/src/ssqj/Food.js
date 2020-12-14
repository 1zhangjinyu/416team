import React from 'react'
import Head from './head'
import {foodnote} from './foodnote'
import { connect } from 'react-redux'
import {func} from './func'

const Food = (props) => {
    let i=0;
    props.dispatch(foodnote());
    
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
            <div className='bread'> 数据管理>食物信息</div>
            <div className='food'>
            <form id = "food5" action="" method="post">
                食物：<input  style={{marginLeft:'23px'}} type="text" name="fname" />
                <span style={{marginLeft:'70px'}}>热量：</span><input style={{marginLeft:'42px'}} type="text" name="heat" />               
                <span style={{marginLeft:'70px'}}>蛋白质：</span><input style={{marginLeft:'14px'}} type="text" name="protein" /><br></br> <br></br> 
                <span >脂肪：</span><input style={{marginLeft:'23px'}}  type="text" name="fat" />
                
                <span style={{marginLeft:'70px'}}>碳水化合物：</span><input type="text" name="co3" />               
                <span style={{marginLeft:'70px'}}>膳食纤维：</span><input type="text" name="fiber" /><br></br> <br></br> 
                <span >GI：</span><input style={{marginLeft:'37px'}} type="text" name="gi" />
                
                <span style={{marginLeft:'70px'}}>GL：</span><input style={{marginLeft:'52px'}} type="text" name="gl" />               
                <span style={{marginLeft:'70px'}}>维生素A：</span><input style={{marginLeft:'4px'}} type="text" name="wa" /><br></br> <br></br> 
                <span >维生素C：</span><input type="text" name="wc" />
                <span style={{marginLeft:'70px'}}>维生素E：</span><input style={{marginLeft:'20px'}} type="text" name="we" />
                <span  style={{marginLeft:'70px'}}>图片：</span><input type = "file" name = "img" />
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(addo)=>{
                   
                    let food=document.getElementById('food5');
                    let fname=food.fname.value;
                    let protein=food.protein.value;
                    let img=food.img.value;
                    let heat=food.heat.value;
                    let fat=food.fat.value;
                    let co3=food.co3.value;
                    let fiber=food.fiber.value;
                    let gi=food.gi.value;
                    let gl=food.gl.value;
                    let wa=food.wa.value;
                    let wc=food.wc.value;
                    let we=food.we.value;
                    
                    addo={type:'addo',table:'food',fname:fname,img:img,protein:protein,fat:fat,co3:co3,fiber,gi:gi,gl:gl,wa:wa,wc:wc,we:we,heat:heat}                               
                    props.dispatch(func(addo))
                    setTimeout(()=>{
                        alert('添加成功');
                    },10000)
                    
                    
                }}
               
                >添加栏目</button>
                <table border='1' cellspacing='0'>
                    <tr>
                        <th style={{width:'40px'}}>排序</th>
                        <th>食物名称</th>                        
                        <th>热量</th>
                        <th>蛋白质</th>
                        <th>脂肪</th>
                        <th style={{width:'80px'}}>碳水化合物</th>
                        <th>膳食纤维</th>
                        <th style={{width:'55px'}}>GI</th>
                        <th style={{width:'55px'}} >GL</th>
                        <th>维生素A</th>
                        <th>维生素C</th>
                        <th>维生素E</th>
                        <th>图片</th>
                        <th style={{width:'80px'}}>操作</th>
                    </tr>
                    {props.foods.map((item)=>{
                        i++;
                        return<tr>
                            <td style={{width:'40px'}}>{i}</td>
                            <td>{item.fname} </td>
                            <td>{Math.floor(item.heat)}</td>
                            <td >{Math.floor(item.protein)}</td>         
                            <td >{Math.floor(item.fat)}</td>      
                            <td>{Math.floor(item.co3)}</td>
                            <td>{Math.floor(item.fiber)} </td>
                            <td>{Math.floor(item.gi)}</td>
                            <td >{Math.floor(item.gl)}</td>         
                            <td > {Math.floor(item.wa)}</td>
                            <td >{Math.floor(item.wc)}</td>         
                            <td > {Math.floor(item.we)}</td>              
                            <td>  <button 
                            onClick={()=>{
                                    let img=document.getElementById('img');
                                    let img1=document.getElementById('img1');
                                    img.src=item.img;
                                    img.style.display="block";
                                    img1.style.display="block";
                            }}>查看</button> </td>
                            <td>
                                <button
                                onClick={(delo)=>{
                                    
                                    let fname=item.fname;
                                    delo={type:'delo',table:'food',fname:fname}
                                    props.dispatch(func(delo))
                                    setTimeout(()=>{
                                        alert('删除成功');
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
    foods:state.foodnote.foods,
    rets:state.func.rets
  })
export default connect(mapStateToProps)(Food)
