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

                <br/>
                <a href="https://psrrg-dashboard.vercel.app/">
                  <button className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
                </a>
                <a href="https://psrrg-dashboard.vercel.app/">dashboard</a>
            </form>
        </div>
    </div>
  )
}
