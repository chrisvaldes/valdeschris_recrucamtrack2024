 import 'materialize-css/dist/css/materialize.min.css'; 
import author from "./image/author.jpg";
import "../Formcss/loginPage.css";
import {signInWithEmailAndPassword } from 'firebase/auth';
import { databaseAuth } from '../Service/firebase'; 
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function LoginPage(){
 
    // create user

    const [email, setEmailTel] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("")

    const handleLogin = (e) =>{
        e.preventDefault();
        
         
        signInWithEmailAndPassword(databaseAuth, email, password)
        .then(data => console.log(data, "authData"))

        navigate("/DeclarerVehicule")
         
    }
      
    return(
        <div className="container">
      <div className="row">
        <div className="col m8 s12 offset-m2">
          <div className="card horizontal">
          <div className="card-image" style={{background :  `url(${author})`, backgroundSize : "cover", backgroundPosition : "center"}}>
        </div>
            <div className="card-stacked hoverable">
              <div className="card-content">
                <div className="card-title">
                  <h4>Login</h4>
                </div>
                <div className={`form-group row`} >
                  <input 
                  type='email'
                    placeholder="Enter your email ou Telephone"
                    className="form-control"
                    onChange={e => setEmailTel(e.target.value)}
                  />
                </div>
                <div className={`form-group row`}>
                  <input 
                  type='password'
                    placeholder="password"
                    className="form-control"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                {/* {invalidCredentials && <p className="invalid-message" style={{color : "red"}}>Invalid email or password</p>} */}
                <div >
                  <p className="card-text" style={{ margin: '3rem 0' }}>
                    Don't have an account? <Link to="/SignUp">Sign Up</Link> <br/>
                  </p>
                </div>
                <div className="card-action">
                  <button onClick = {handleLogin} class="btn btn-primary waves-effect waves-light">
                    Login Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default LoginPage;