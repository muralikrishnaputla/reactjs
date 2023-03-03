import {useRef,useState} from "react";
const Register=()=>{
    const uname=useRef(``);
    const mobile=useRef(0);
    const[name,setName]=useState(``);
    const[num,setNum]=useState(0);
    const my_func=()=>{
        setName(uname.current.value);
        setNum(mobile.current.value);
 }
       return(
          <>
          <div className="container" mt-5>
            <div className="row">
                <div className="col-6">
                    <label>User Name</label>
                    <input type={`text`} ref={uname}
                    className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type={"number"} ref={mobile}
                    className="form-control"></input>
                </div>
                <div className="form-group mt-5">
                    <button className="btn btn-danger btn-lg"
                    onClick={my_func}>Display</button>
                </div>
             <div className="col-6">
                <table border={1}
                        align={"center"}
                        cellSpacing={10}
                        cellPadding={10}>
                            <tr>
                                <td>NAME</td>
                                <td>{name}</td>
                            </tr>

                            <tr>
                                <td>Mobile</td>
                                <td>{num}</td>
                            </tr>

                </table>

             </div>
            </div>
            
          </div>
         </>
 )
}
export default Register;