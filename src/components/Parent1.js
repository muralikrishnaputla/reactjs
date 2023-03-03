import Child from "./Child1";
import{useState}from "react";
const Parent1=()=>{
    const[str,setStr]=useState(`Reactjs`);
    const[num ,setNum]=useState(100);
    const[bool,setBool]=useState(true);
    const[arr,setArr]=useState([100,200,300,400,500]);
    const[obj,setObj]=useState({key1:`Reactjs`,key2:`nodejs`});
        return(
            <>
            <child1 str={str}
                      num={num}
                      bool={bool}
                      arr={arr}
                      obj={obj}>

            </child1>
            </>
        )
}
export default Parent1;