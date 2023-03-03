import{useRef, useState}from "react";
const Login=()=>{
    const uname=useRef(``);
    const upwd=useRef(``);
    const[res,setRes]=useState(``);

     const my_func=()=>{
        if(uname.current.value == "admin" && upwd.current.value == "admin@123"){
            setRes(`Login Success`);
        
        }
        else{
            setRes("Login Fail");
        }
    }

    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="form-group">
                    <label>User Name</label>
                    <input type={`text`} ref={uname} className="form-control"></input>
                      </div>
                      </div>
                       </div>
        
             <div className="row mt-2">
            <div className="col-3">
                <div className="form-group">
                <label> Password</label>
                <input type={`password`} ref={upwd} className="form-control"></input>
                </div>

                 </div>

                  </div>
        <div className="row mt-2">
            <div className="col-3">
               
<button className="btn btn-success btn-lg" onClick={my_func}>
               Login
                  </button>
                </div>
             </div>
              <h1 className="text text-success">{res}</h1>  
              </div>
        </>
    )
}
export default Login;