import React from 'react'
import './manage.css'


const Collection = () => {
    return (
        <div className="inforContainer">
            <div className="daohanglan"> 用户管理 {'>'} 收藏文章</div>
            <table border="1px" cellspacing="0px" width="100%">
                <tr>
                    <th width="50">文章id</th>
                    <th width="100">题目</th>    
                    <th width="120">内容</th>
                    <th width="100">被收藏的用户</th>

                </tr>
                <tr>
                    <td>1</td>
                    <td>果蔬汁</td>
                    <td>早饭必备</td>
                    <td>1，2，3，4</td>
                    

                </tr>
                {/* <tr>
                    <td>2</td>
                </tr><tr>
                    <td>3</td>
                </tr><tr>
                    <td>4</td>
                </tr> */}
            
            </table>
            
        </div>
    )
}
export  default Collection;

