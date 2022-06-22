import RightContant from "./rightContant"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register() {
    const [information, setInformation] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    

    const registers = (event, password, username, email) => {
        event.preventDefault()
        if (password){
            const newInformation = {
                email: email,
                username: username,
                password: password
            }
            setInformation([newInformation,...information])
            setEmail('')
            setPassword('')
            setUserName('')
            alert('Thank you for register')
        }else{
            alert('Please fill in the your Information ')
        }
    }

    return (
        <div className="contant">
            <div className="left">
                <h1>Create an account</h1>
                <p>Setup a new account in a minute.</p>
                <div className="from">
                    <div className="input-box">
                        <span className="fa fa-user"></span>
                        <input value={username} onChange={(e)=> setUserName(e.target.value)} type="text" name="username" id="username" placeholder="username" required />
                    </div>
                    <div className='input-box'>
                        <span className="fa fa-envelope-o"></span>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" required placeholder="E-mail Address" />
                    </div>
                    <div className="input-box">
                        <span className="fa fa-lock"></span>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" required />
                    </div>
                    <button onClick={(e)=> registers(e, password, username, email)} className="btn">Register</button>
                    <h4>or register with</h4>
                    <div className="socail-madia">
                        <Link className="link" to='#'>Facebook</Link>
                        <Link className="link" to='#'>Google</Link>
                        <Link className="link" to="#">Twitter</Link>
                    </div>
                    <h3>Already have an account? <Link to='/' > Login here</Link></h3>
                </div>
            </div>
            <RightContant />
        </div>
    )
}