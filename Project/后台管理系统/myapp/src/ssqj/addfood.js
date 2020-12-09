
const addfood = (props) => {
    let data='add'
    return (dispatch)=>{
         let url='https://www.liucl.xyz:1234/foodlist/add'
        fetch(url,{
            method:'post',
            body:data

        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'ADD',
                add:res,
                
            })
            
        })
    }
}
export {addfood}