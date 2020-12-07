
const losefood = (props) => {
    return (dispatch)=>{
         let url='https://www.liucl.xyz:1770/foodlist/lose'
        fetch(url,{
            method:'post',

        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'LOSE',
                lose:res,
            })
            
        })
    }
}
export {losefood}