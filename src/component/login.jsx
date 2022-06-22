import { Link } from "react-router-dom"
import RightContant from './rightContant'
// import {useState} from 'react'

export default function Login() {

    return (
        <div className="contant" >
            <div className="left">
                <h1>Login into account</h1>
                <p>Use your credentials to access your account.</p>
                <div className="from">
                    <div  className='input-box'>
                        <span className="fa fa-envelope-o"></span>
                        <input  type="email" name="email" id="email" required placeholder="E-mail Address" />
                    </div>
                    <div className="input-box">
                        <span className="fa fa-lock"></span>
                        <input type="password" name="password" id="password" placeholder="Password" required />
                    </div>
                </div>
                <div className="rememder">
                    <div className="box">
                        <input type="checkbox" name="rememder" id="rememder" />
                        <span>Remember me </span>
                    </div>
                    <Link to='/forgetPassword' >Forgot password?</Link>
                </div>
                <button className="btn">Login</button>
                  <h4>or login with</h4>
                  <div className="socail-madia">
                      <Link className="link" to='#'>Facebook</Link>
                      <Link className="link" to='#'>Google</Link>
                      <Link className="link" to="#">Twitter</Link>
                  </div>
                <h3>Don't have an account? <Link to='/register' > Register here</Link></h3>
            </div>
           <RightContant/>
        </div>
    )
}