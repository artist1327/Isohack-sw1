import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Link,withRouter,NavLink,Redirect} from 'react-router-dom'

//import App from './App'; 
import * as serviceWorker from './serviceWorker';

import Login from './Component/User/Login.js'
import Signup from './Component/User/Signup.js'
import DashLayout from './Component/Dashboard/Dashlayout';



class Home extends Component{
    constructor(){
            super();

        }
    // connect(message => {
    //   console.log(message);
    //   this.setState({message:message})
    // });

    render(){
        return (
            <div>
            
                {/* {/* Dashboard */}
                <Route path="/dashboard"  render={ (props)=> <DashLayout {...props} />}/>
                <Route path="/login"  render={ (props)=> <Login {...props} />}/>
               <Route path='/signup' render={(props)=><Signup {...props}/>}/>

            </div>
                 
         )
    }
}





const App = withRouter((props)=>{
    return (<Home {...props} />)
});

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , document.getElementById('root'));
// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
