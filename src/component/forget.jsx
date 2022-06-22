import RightContant from "./rightContant"
import { Link } from "react-router-dom"

export default function Forgot() {
    return (
        
        <div className="contant">
            <div className="left forget">
                <h1>Reset Your password</h1>
                <p>Please enter your email address and we will send you a password password link.</p>
                <div className="from">
                    <div className='input-box'>
                        <span className="fa fa-envelope-o"></span>
                        <input type="email" name="email" id="email" required placeholder="E-mail Address" />
                    </div>
                    <button className="btn">Send Reset Link</button>
                    <h4>or login with</h4>
                    <div className="socail-madia">
                        <Link className="link" to='#'>Facebook</Link>
                        <Link className="link" to='#'>Google</Link>
                        <Link className="link" to="#">Twitter</Link>
                    </div>
                    <h3>Don't have an account? <Link to='/register' > Register here</Link></h3>
                </div>
            </div>
            <RightContant />
        </div>
    )
}