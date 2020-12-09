
const keepfood = (props) => {
    return (dispatch)=>{
         let url='https://www.liucl.xyz:1234/foodlist/keep'
        fetch(url,{
            method:'post',

        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'KEEP',
                keep:res,
            })
            
        })
    }
}
export {keepfood}