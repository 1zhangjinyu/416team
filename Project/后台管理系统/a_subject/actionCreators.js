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
        .then(function(res){return res.text()})
        .then(res=>{
            dispatch({
                type:'MANAGER',
                managers:res
            })
        });
    }
}
//管理员
const managerdetail=(props)=>{
    return (dispatch)=>{
        fetch(url+'manager/detail',{
          method:'POST',
          mode:'cors',
        })
        .then(function (res){return res})
        .then(function(res){
            return dispatch({
                type:'MANAGERDETAIL',
                managerdetail:res
                //username，password，img
                
            })
        });
    }
}
//详细信息
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
export {managerdetail}
export {manager}
export {Information}