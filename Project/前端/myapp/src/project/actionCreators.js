
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
<<<<<<< HEAD
//记录体重
const weights = (data)=>{
    return (dispatch)=>{
        fetch('https://www.liucl.xyz:8000/jltz',{
            method:'POST',
            mode:'cors',
            // body:JSON.stringify(data)
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
export {comparefoods}
export {foods}
export {goodsList}
export {weights}
=======

export {comparefoods}
export {foods}
export {recommendfoods}
export {addbreakfast}

>>>>>>> a36b888f7bcf25f012bcc40cab25e482495c453d
