//食谱
let url = 'https://www.hmyyz.top:8089/';
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
// const newfoods = (props)=>{
//     return (dispatch)=>{
//         fetch(url+'foods',{
//             method:'POST',
//             mode:'cors',
//         })
//         .then(function(res){return res.json()})
//         .then(function(res){
//             return dispatch({
//                 type:'FOODS',
//                 foods:res,
//             })
//         });
//     }
// }
//每日推荐
const recommendfoods = (props)=>{
    return (dispatch)=>{
        fetch(url+'gftj',{
            method:'POST',
            mode:'cors',
        })
        .then(function(res){return res.json()})
        .then(function(res){
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
        fetch('https://www.liucl.xyz:3745/compare',{
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
        fetch('https://www.liucl.xyz:3745/eat',{
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors',
        })
        .then(function(res){return res.text()})
        .then(function(res){
            console.log(res)
            return dispatch({
                type:'ADDBRE',
                breakfastfoods:res,
            })
        });
    }
}

export {comparefoods}
export {foods}
export {recommendfoods}
export {addbreakfast}

