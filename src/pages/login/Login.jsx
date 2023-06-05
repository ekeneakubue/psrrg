import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='mylogin d-flex justify-content-center align-items-center vh-100'>
        <div className='login-form text-light rounded'>
            <form action="">
                <div className="mb-3">
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' className='form-control rounded-0'/>
                </div>
                <div className="mb-3">
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' className='form-control rounded-0'/>
                </div>
                <button className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
                <p></p>
                <Link to='/signup'><button className="btn btn-default text-light border w-100 rounded-0">Create Account</button></Link>
            </form>
        </div>
    </div>
  )
}
