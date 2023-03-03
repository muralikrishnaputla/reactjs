const Child1=(props)=>{
    return(
        <>
        <h1>{props.str}</h1>
        <h1>{props.num}</h1>
        <h1>{JSON.stringify(props.obj)}</h1>
        {
            props.arr.map((element,index)=>{
                 return(<h1 key={index}>{element}</h1>)
            })
        }
        <h1>{props.obj.key1}....{props.obj.key2}</h1>
        

        </>
    )
}
export default Child1;