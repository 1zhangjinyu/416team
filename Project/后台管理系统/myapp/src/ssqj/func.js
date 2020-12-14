const func = (oper) => {
    oper=JSON.stringify(oper)
    let url='https://www.liucl.xyz:1234/'+oper.slice(9,13)
    console.log(url)
    return (dispatch)=>{
        fetch(url,{
            method:'post',
            body:oper,
            mode:'cors'
        })
        .then(res=>res.text())
        .then(res=>{
            dispatch({
                type:'RET',
                rets:res,
            }) 
        }) 
    }
}
export {func}

// const image = (oper,formData) => {
//     oper=JSON.stringify(oper)
//     let url='https://www.liucl.xyz:1234/'+oper.slice(9,13)
//     console.log(url)
//     return (dispatch)=>{
//         fetch(url,{
//             method:'post',
//             body:formData,
//             mode:'cors'
//         })
//     }
// }
        
// export {image}

