
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
//搜索
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
                type:'RANK',
                comparefoods:res,
            })
        });
    }
}

const goodsList = (goods,props)=>{
    return (dispatch)=>{
        fetch(url+'getgoodslist',{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'GOODS',
                goods:res.data
              
            })
        });
    }
}
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
