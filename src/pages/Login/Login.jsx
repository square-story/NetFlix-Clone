import { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
    const [signState, setSignState] = useState('Sign In')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const user_auth = async (event) => {
        event.preventDefault();
        setLoading(true)
        if (signState === 'Sign In') {
            await login(email, password)
        } else {
            await signup(name, email, password)
        }
        setLoading(false);
    }
    return (
        loading ? <div className="login-spinner">
            <img src={netflix_spinner} alt="" />
        </div> :
            <div className='login'>
                <img src={logo} className='login-logo' alt="" />
                <div className="login-form">
                    <h1>{signState}</h1>
                    <form>
                        {signState === 'Sign Up' ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' /> : <></>}
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Your Passord' />
                        <button onClick={user_auth} type='submit' className='submit-btn'>{signState}</button>
                        <div className="form-help">
                            <div className="remember">
                                <input type="checkbox" />
                                <label>Remember Me</label>
                            </div>
                            <p>Need Help?</p>
                        </div>
                    </form>
                    <div className="form-switch">
                        {signState === 'Sign Up' ? <p>Already have account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p> : <p>New To Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>}
                    </div>
                </div>
            </div>
    )
}

export default Login