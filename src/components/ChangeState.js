import{useState} from "react";
 const ChangeState=()=>{
    const[num,setNum]=useState(0);
    const func_one=()=>{
        setNum(num=>num+1);
    }
        const func_two=()=>{
            setNum(num=>num-1);
        }
        return(
            <>
            <div style={{width:500,
                        height:500,
                        border:"5px dotted green",
                        position:"absolute" ,
                        left:"50%",
                        top:"50%",
                        transform:"translate(-50%,-50%)",
                        borderRadius:"25px"}}>
                            <h1 style={{textAlign:"center",
                        marginTop:50}}>
                            Number:{num}
                        </h1>

                        <button style={{margin:40,color:"red",
                        backgroundColor:"green"}}
                        onClick={func_one}>
                           Increment  
                        </button>
                        <button style={{margin:40,color:"red",
                                           backgroundcolor:"green"}}
                                           onClick={func_two}>Decrement</button>
            
                  </div>  
                   

            
            </>
        )

    }
    export default ChangeState;
 