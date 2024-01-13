import 'materialize-css/dist/css/materialize.min.css';  
import "../Formcss/loginPage.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { databaseAuth } from '../Service/firebase'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp(){
 
    // create user

    const [email, setEmailTel] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        
         
        createUserWithEmailAndPassword(databaseAuth, email, password)
        .then(data => console.log(data, "authData"))
         
    }
      
    return(
        <div className="container">
      <div className="row">
        <div className="col m8 s12 offset-m2">
          <div className="card horizontal">
          <div className="card-image" >
        </div>
            <div className="card-stacked hoverable">
              <div className="card-content">
                <div className="card-title">
                  <h4>Sign Up</h4>
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
                  <p className="card-text" style={{ margin: '2rem 0' }}>
                    Already have an account? <Link to = "/">Log In</Link>  <br/>
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
export default SignUp;