import React from 'react'
import Head from './head'
import {connect } from 'react-redux'
import {eatfood} from './eatfood'
import {func} from './func'
const Eat = (props) => {
    let i=0;
    props.dispatch(eatfood());
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
            <div className='eat'>
            <form id = "food4" action="" method="post">
                食物：<input type="text" name="fname" />
                <span style={{marginLeft:'70px'}}>时间：</span><input type="text" name="dates" />               
                <span style={{marginLeft:'70px'}}>用户：</span><input type="text" name="id" /><br></br> 
                <span >热量：</span><input type="text" name="heat" />
                <span  style={{marginLeft:'70px'}}>图片：</span><input type = "file" name = "img" />
            </form>
                <button style={{marginTop:'30px'}}
                className='add'
                onClick={(adde)=>{
                    let food=document.getElementById('food4');
                    let fname=food.fname.value;
                    let dates=food.dates.value;
                    let img=food.img.value;
                    let heat=food.heat.value;
                    let id=food.id.value;
                    adde={table:'myfoods',type:'adde',id:id,fname:fname,dates:dates,img:img,heat:heat}                               
                    func(adde)
                }}
               
                >添加栏目</button>
                <table border='1' cellspacing='0'>
                    <tr>
                        <th>排序</th>
                        <th>食物名称</th>                        
                        <th>日期</th>
                        <th>用户 </th>
                        <th>热量 </th>
                        <th>图片</th>
                         
                    </tr>
                    {props.eats.map((item)=>{
                        i++;
                        return<tr>
                            <td>{i}</td>
                            <td>{item.fname} </td>
                            <td>{item.dates}</td>
                            <td >{item.id}</td>         
                            <td > {item.heat}</td>                
                            <td>  <button 
                            onClick={()=>{
                                    let img=document.getElementById('img');
                                    let img1=document.getElementById('img1');
                                    img.src=item.img;
                                    img.style.display="block";
                                    img1.style.display="block";
                            }}>查看</button> </td>
                            
                        </tr>
                    })}               
                </table>
            </div>   
        </div>
    )
}

const mapStateToProps=(state)=>({
    eats:state.eatfood.eats
  })
export default connect(mapStateToProps)(Eat)
