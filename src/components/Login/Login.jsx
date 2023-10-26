import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className='login-page'>
      <div className='login-form'>
        <h3>User Log In</h3>
            <form>
            <div><input type = "text" value ="email" className = "form-control" placeholder='Email'/></div>
            <div><input type = "text" value = "password" className = "form-control" placeholder='password' /></div>
            
            <div><button type = "submit"  className='btn-login'> <Link to='/' className='text-red'>Log in</Link></button></div>
           
            <div className = "form-note">
              Don't have an Account? <Link to='/signup' className='text-red'>Sign up</Link>
            </div>
            </form>

      </div>
    </div>
  )
}

export default Login
