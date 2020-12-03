//管理员登录
let url='https://www.liucl.xyz:3745';
const manager=(data)=>{
    // let data1={
    //     username:'123',
    //     password:'123'
    // }
    return (dispatch)=>{
        fetch('https://www.liucl.xyz:3745/manager',{
          method:'POST',
          mode:'cors',
          body:JSON.stringify(data) 
        })
        .then(function(res){return res.json()})
        .then(res=>{
            dispatch({
                type:'MANAGER',
                managers:res
            })
        });
    }
}
//修改管理员登录表单信息
const changeManager=(updata)=>{
    return (dispatch)=>{
        
        fetch('https://www.liucl.xyz:3745/changeManager',{
          method:'POST',
          mode:'cors',
          body:JSON.stringify(updata) 
        })
        .then(function(res){return res.text()})
        .then(res=>{
            dispatch({
                type:'CHANGEMANAGER',
                upmanager:res
            })
        });
    }
}


const managerdetail=(props)=>{
    return (dispatch)=>{
        fetch(url+'manager/detail',{
          method:'POST',
          mode:'cors',
        })
        .then(function (res){return res.json()})
        .then(function(res){
            return dispatch({
                type:'MANAGERDETAIL',
                managerdetail:res
                //username，password，img
                
            })
        });
    }
}

const collpages=(updata)=>{
    return (dispatch)=>{
        
        fetch('https://www.liucl.xyz:3745/changeManager',{
          method:'POST',
          mode:'cors',
          body:JSON.stringify(updata) 
        })
        .then(function(res){return res.text()})
        .then(res=>{
            dispatch({
                type:'CHANGEMANAGER',
                pages:res
            })
        });
    }
}
//基本信息
const Information=(props)=>{
    return (dispatch)=>{
        fetch('https://www.liucl.xyz:3745/inforuser',{
            method:'POST',
            mode:'cors',
        })
        .then(function (res){return res})
        .then(function (res){
            return dispatch({
                type:'INFORMATION',
                information:res
            })
        });
    }
}
export{Information}
export {collpages}
export {managerdetail}
export {manager}
export {changeManager}