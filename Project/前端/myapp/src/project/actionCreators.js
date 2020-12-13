//登录页
let url = 'https://www.hmyyz.top:9999/';
const login = (data)=>{
    return (dispatch)=>{
        fetch('https://www.hmyyz.top:9999/',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.text()})
        .then(function(res){
            if(res===false){
                alert("密码错误")
            }
            return dispatch({
                type:'LOGIN',
                user:res,
            })
        });
    }
}
//食谱
const foods = (props)=>{
    return (dispatch)=>{
        fetch(url+'foods',{
            method:'POST',
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            return dispatch({
                type:'FOODS',
                foods:res,
            })
        });
    }
}
//基本信息页
const sub = (data)=>{
    return (dispatch)=>{
        fetch(url+'weight',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            return dispatch({
                type:'INFOR',
                infor:res,
            })
        });
    }
}
//每日推荐
const recommendfoods = (props)=>{
    return (dispatch)=>{
        fetch(url+'gftj',{
            method:'POST',
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'RECOMMEND',
                recommendfoods:res,
            })
        });
    }
}
//对比页搜索
const comparefoods = (data)=>{
    return (dispatch)=>{
        fetch(url+'compare',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            return dispatch({
                type:'COMPARE',
                comparefoods:res,
            })
        });
    }
}
//添加早餐食物
const addbreakfast = (data)=>{
    return (dispatch)=>{
        fetch(url+'eat',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'ADDBRE',
                breakfastfoods:res,
            })
        });
    }
}
//添加午餐食物
const addlunch = (data)=>{
    return (dispatch)=>{
        fetch(url+'eat',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'ADDLUN',
                lunchfoods:res,
            })
        });
    }
}
//添加晚餐食物
const adddinner = (data)=>{
    return (dispatch)=>{
        fetch(url+'eat',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'ADDDIN',
                dinnerfoods:res,
            })
        });
    }
}
//记录体重
const weights = (data)=>{
    return (dispatch)=>{
        fetch(url+'jltz',{
            method:'POST',
            mode:'cors',
            //body:JSON.stringify(data)
            body:data
        })
        .then(function(res){return res.json()})
        .then(function(res){
            return dispatch({
                type:'ADD-WEIGHT',
                weights:res,
            })
        });
        
    }
}
//获取摄入热量
const heat = (data)=>{
    return (dispatch)=>{
        fetch(url+'rest',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'REST',
                restcal:res,
            })
        });
    }
}
//获取体重曲线
const health = ()=>{
    return (dispatch)=>{
        fetch(url+'jkbg',{
            method:'POST',    
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'GET',
                health:res,
            })
        });
    }
}
// 我的食物
const myfoods = (props)=>{
    return (dispatch)=>{
        fetch(url+'myfoods',{
            method:'POST',
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'ADDMY',
                myfoods:res,
            })
        });
    }
}
// 发动态
const fadongtai = (data)=>{
    return (dispatch)=>{
        fetch(url+'dt',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.text()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'DT',
                myfoods:res,
            })
        });
    }
}
// 我的动态
const mydt = (data)=>{
    return (dispatch)=>{
        fetch(url+'mydt',{
            method:'POST',
            mode:'cors',
            body:data
        })
        .then(function(res){return res.json()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'ADDMYDT',
                mydt:res,
            })
        });
    }
}
const infor = (props)=>{
    return (dispatch)=>{
        fetch(url+'myinfo',{
            method:'POST',
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
            return dispatch({
                type:'DATA',
                data:res,
            })
        });
    }
}
export {infor}
export {myfoods}
export {health}
export {login}
export {weights}
export {comparefoods}
export {foods}
export {recommendfoods}
export {addbreakfast}
export {addlunch}
export {adddinner}
export {heat}
export {sub}
export {fadongtai}
export {mydt}

