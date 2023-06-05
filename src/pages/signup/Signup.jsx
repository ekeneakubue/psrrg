import { Link } from 'react-router-dom'
import './signup.css'

export default function Signup() {
  return (
    <div className='mysignup d-flex justify-content-center align-items-center vh-100'>
        <div className='signup-form text-light rounded'>
            <form action="">
                <div className="mb-3">
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' className='form-control rounded-0'/>
                </div>
                <div className="mb-3">
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' className='form-control rounded-0'/>
                </div>
                <button className="btn btn-success w-100 rounded-0"><strong>Sign up</strong></button>
                <p></p>
                <Link to='/login'><button className="btn btn-default text-light border w-100 rounded-0">Log in</button></Link>
            </form>
        </div>
    </div>
  )
}
