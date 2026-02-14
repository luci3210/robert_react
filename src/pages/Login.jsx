import React, { useState } from 'react';

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
    <div className="col-md-4">

      <div className="card shadow">
        <div className="card-body">
          <h4 className="text-center mb-4">Login</h4>

          <form action="/login" method="POST">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" name='email' value="" className="form-control" placeholder="Enter email"/>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} name='password' value="" className="form-control" id="password" placeholder="Enter password"/>
                <button className="btn btn-outline-secondary" type="button" id="togglePassword" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" name='remember' value="" className="form-check-input" id="remember"/>
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" onClick={()=>setShowPassword(!showPassword)} className="btn btn-primary w-100">Login</button>

          </form>

        </div>
      </div>

    </div>
  </div>
</div>
  );
}

export default Login;
