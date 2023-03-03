import {useState} from "react";
const ConditionalRendering=()=>{
    const[bool,setBool]=useState(false);
    const[sucess,setSucess]=useState("hello");
    const[fail,setFail]=useState("welcome");
     const func_one=()=>{
        setBool(bool=>!bool);

     };;
     return(
        <>
        <button onClick={func_one}>
            change
        </button>
        {
            bool?<h1>{sucess}</h1>:<h1>{fail}</h1>
        }
        </>
     )

}
export default ConditionalRendering;