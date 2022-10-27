import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();
    
    const { signIn, setUser } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          form.reset();
          if (user.emailVerified) {
            navigate(from, { replace: true });
          } else {
            toast.error("Please verify your email first.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };


    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <p>Don't have an account?</p>{""}
                  <Link to="/register"> Register</Link>
                </label>
                <label className="label">
                  <Link to="">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;