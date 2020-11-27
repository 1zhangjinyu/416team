//食谱
let url = 'https://www.hmyyz.top:8087/';
const foods = (props)=>{
    return (dispatch)=>{
        fetch(url+'foods',{
            method:'post',
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
export {foods}
export {goodsList}

