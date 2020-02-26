import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import './style.css'
import Axios from 'axios'
import {background} from '../images/background.jpg';
import {API_URL} from '../Config.js'
const Login=({props})=>{
  const [data,setData]=useState({"username":"","password":""});
  const [err,setErr]=useState({});
  const [isvalid,setIsvalid]=useState(false);
    const handlehubmit=()=>{
      if(data.username.length<=1){
        setErr({...err,"username":"Invalid User name"})
      }
      else if (data.password.length<6){
        setErr({...err,"password":"Invalid Password"});
      }
      else{
        
        Axios.post(`${API_URL}/login`,data).then((res)=>{
          console.log(res);
          setIsvalid(true);
        }).catch((err)=>{
              setErr({"username":err.data.message});
        })
      }
    }
    return (
        <div>
        { isvalid && <Redirect to="/dashboard" from ="/login"/>}

        <section className="login-block" >
          <div className="container-fluid" style={{backgroundImage: `url( ${ background })`}}>
            <div className="row ">
              <div className="col login-sec">
                <h2 className="text-center">Login Now</h2>
                <form className="login-form" onSubmit={handlehubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                    <input type="text" className="form-control" placeholder value={data.username} onChange={(e)=>{setData({...data,"username":e.target.value})}}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                    <input type="password" className="form-control" placeholder value={data.password} onChange={(e)=>{
                      setData({...data,"password":e.target.value})
                    }}/>
                  </div>
                  <div className="form-check">
                    {/* <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <small>Remember Me</small>
                    </label> */}
                    <small style={{float:'right'}}>Forget Password</small>
                    <br/>
                    <Link to="/signup" className="btn btn-info float-left">Register</Link>

                    <button type="submit" className="btn btn-success float-right">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      
    )
}

export default Login;