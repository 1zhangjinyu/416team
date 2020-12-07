const func = (oper) => {
    let url='https://www.liucl.xyz:1770/'
    let result=fetch(url,{
        method:'post',
        body:JSON.stringify(oper),
        mode:'cors'
    })

    return result
}

export {func}
