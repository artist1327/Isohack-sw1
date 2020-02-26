import React,{useState} from 'react';
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
import {API_URL} from '../Config.js';
const Signup=()=>{
  const [data,setData]=useState({"name":"","username":"","password":"","id":""})
  const [errors,setErrors]=useState({})  
  const {user,setUser}=useState("")
    const handlesubmit=()=>{
      if(data.name.length<3){
        setErrors({...errors,"name":"Invalid name!!"})
      }
      else if(data.username.length<3){
               setErrors({...errors,"username":"Invalid Username!!"})
      }
      else if (data.password.length<6){
          setErrors({...errors,"password":"Invalid Password!Password should be of minimum 6 letter"})

      }
      if (!errors){
        var id=Math.floor(Math.random() * 10000);
        setData({...data,"id":id})  
        Axios.post(`${API_URL}/signup`,data).then((res)=>{
            console.log(res);
            setUser(res.data.data);
        }).catch((err)=>{
              console.log(err);
              setErrors({...errors,"password":err.data.message});
        })
      }
    }
    return (
        <div>
        { user && <Redirect to="/dashboard" from ="/signup" /> }
  <section className="login-block">
    <div className="container-fluid">
      <div className="row ">
        <div className="col login-sec">
          <h2 className="text-center">Signup Now</h2>
          <form className="login-form" onSubmit={handlesubmit}>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
              <input type="text" className="form-control" placeholder value={data.name} onChange={(e)=>{
                setData({...data,"name":e.target.value})
              }} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
              <input type="text" className="form-control" placeholder value={data.username} onChange={(e)=>{
                setData({...data,"username":e.target.value})}}/>
                {errors.username && <small className="text-danger">{errors.username} </small>}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
              <input type="password" className="form-control" placeholder value={data.name} onChange={(e)=>{
                setData({...data,"password":e.target.value})}}/>
            {errors.password && <small className="text-danger">{errors.password} </small>}
            </div>
            <div className="form-check text-center">
              {/* <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                <small>Remember Me</small>
              </label> */}
              <button type="submit" className="btn btn-login">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
</div>

    )
}

export default Signup;