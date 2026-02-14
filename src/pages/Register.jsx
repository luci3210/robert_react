import React, { useState } from 'react'

export function Register() {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
    <div className="col-md-4">

      <div className="card shadow">
        <div className="card-body">
          <h4 className="text-center mb-4">Register</h4>

          <form action="/login" method="POST">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" name='email' value="" className="form-control" placeholder="Enter email" required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name='name' value="" className="form-control" placeholder="Enter full name" required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} name='password' value="" className="form-control" id="password" placeholder="Enter password" required/>
                <button className="btn btn-outline-secondary" type="button" id="togglePassword" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Re-Password</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} name='repassword' value="" className="form-control" id="repassword" placeholder="Enter password again" required/>
                <button className="btn btn-outline-secondary" type="button" id="togglePassword" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="remember"/>
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" onClick={()=>setShowPassword(!showPassword)} className="btn btn-primary w-100">Login</button>

          </form>

        </div>
      </div>

    </div>
  </div>
      </div>
    )
}

export default Register