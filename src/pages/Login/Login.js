import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();

  const providerFacebook = new FacebookAuthProvider();
    const providerGoogle = new GoogleAuthProvider();

  const { signIn, setUser,providerLogin, providerLoginFacebook } = useContext(AuthContext);

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
    
    

    const handleGoogle = () => {
      providerLogin(providerGoogle)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setUser(user);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const handleFacebook = () => {
        providerLoginFacebook(providerFacebook)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.log(error);
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
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
                  <p>Don't have an account?</p>
                  {""}
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
            </form>
          </div>
        </div>
        <div className="divider">OR</div>
        <div>
          <button
            onClick={handleGoogle}
            className="btn btn-outline capitalize gap-10"
          >
            <FaGoogle></FaGoogle>
            Login via Google
          </button>
        </div>
        <div className="flex justify-center w-11">
          <button onClick={handleFacebook} className="btn btn-outline capitalize gap-7">
            <FaFacebook></FaFacebook>
            Login via Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
