import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup'>
      <div className='col'>
        <div className='left-text'>Say goodbye to the stress of forgotten passwords and the fear of data breaches</div>
      </div>
      <div className='col'>
        <h3>Create an Account</h3>
            <form>
            <div><input type = "text" value ="name" className = "form-control" placeholder='Name'/></div>
            <div><input type = "text" value ="email" className = "form-control" placeholder='Email'/></div>
            <div><input type = "text" value = "password" className = "form-control" placeholder='Password' /></div>
            
            <div>
              <button type = "submit"  className='btn-login'> <Link to='/' className='text-red'>Sign up</Link></button>
              </div>
              <div className='text-red'><span >if already have an Account</span>  <Link to='/'>Log in</Link> </div>
           
           
            </form>

      </div>
    </div>
  )
}

export default Signup
