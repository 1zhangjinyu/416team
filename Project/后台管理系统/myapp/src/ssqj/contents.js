
const contents = (props) => {
    return (dispatch)=>{
         let url='https://www.liucl.xyz:1234/cont'
        fetch(url,{
            method:'post',

        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type:'CON',
                cont:res,
            })
            
        })
    }
}
export {contents}