import React, { Component } from 'react'

 export default class InfoDetail extends Component {
    
    render() {
        
        return (
            <div>
                <div style={{width:'100%',backgroundColor:'rgb(86,186,186)'}}>
                    <p style={{textAlign:'center',fontSize:'35px',color:'white'}}>详细信息</p>
                </div>
                <table border="1px" cellspacing="0px" width="60%" height='100%' style={{marginTop:'30px',marginLeft:'250px'}}>
                  <tr>
                    
                  </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'50px',height:'50px'}}>用户名</td>
                    <td  style={{textAlign:'center',width:'50px'}}>2</td>
                </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'80px',height:'50px'}}>身高</td>
                    <td  style={{textAlign:'center'}}>2</td>
                </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'80px',height:'50px'}}>体重</td>
                    <td  style={{textAlign:'center'}}>2</td>
                </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'80px',height:'50px'}}>性别</td>
                    <td  style={{textAlign:'center'}}>2</td>
                </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'80px',height:'50px'}}>年龄</td>
                    <td  style={{textAlign:'center'}}>2</td>
                </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'80px',height:'50px'}}>BMI</td>
                    <td  style={{textAlign:'center'}}>2</td>
                </tr>
                <tr>
                    <td  style={{textAlign:'center',width:'80px',height:'50px'}}>目标体重</td>
                    <td  style={{textAlign:'center',width:'50px'}}>2</td>
                </tr>
                </table>
               
                
            </div>
        )
    }
}
