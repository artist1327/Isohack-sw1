import React,{useState} from 'react';
import {Link ,NavLink} from 'react-router-dom';
import Webcam from 'react-webcam'
import Axios from 'axios'
import {API_URL} from '../Config.js'
const videoConstraints = {
  width: 500,
  height: 250,
  facingMode: "user"
};

const WebcamCapture = ({handle}) => {
  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    },
    [webcamRef]
  );
 
  return (
    <>
      <Webcam
        audio={true}
        height={250}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={videoConstraints}
      />
      <button onClick={()=>{
        handle(true)
        capture()
      } }>Capture photo</button>
    </>
  );
};


class DashLayout extends React.Component{
    
    constructor(){
      super();
      this.state={
        file:"",
        toggle:true
      }
    }
     setToggle=()=>{
      this.setState({...this.state,"toggle":!this.state.toggle})
    }
     uploadtocloud=async (image)=>{
        const form = new FormData();
        form.append('file',image);
        form.append('upload_preset','ml_default');
        console.log(form);
        const response=await Axios.post('https://api.cloudinary.com/v1_1/read-it/image/upload',form);
        console.log(response.data,"URL GENERATOR");
        return response;
    }

     handleclick=async ()=>{

          const resp= await this.uploadtocloud(this.state.file);
          const url=resp.data.secure_url
          console.log("url",url)
          await Axios.get(`${API_URL}/predict/${url}`).then((res)=>{
              console.log("from serversdjfhsdjfh shdfvjsf hvdfjh",res)
          }).catch((err)=>{
            console.log(err);
          })
    }
    
    render(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink activeStyle={{background:"red",font:"bold"}} className="navbar-brand" to="/">Dashboard</NavLink>
        
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          </ul>
        </div>
      </nav>
        <p><button className="btn btn-link" onClick={()=>{
          this.setState({...this.state,toggle:true});
        }}>Open Camera </button>
        
        or Insert image</p>

        { !this.state.toggle && <WebcamCapture handle={this.setToggle}/>}
      
       {this.state.toggle && <input type="file" name="file" className="btn btn-primary" onChange={(e)=>{ 
      console.log(e.target)
      this.setState({...this.state,"file":e.target.files[0]})
      }}/>}

      
      <button type="submit" className="btn btn-primary" onClick={this.handleclick} >Check</button>
      </div>

    )}
}

export default DashLayout;




 
