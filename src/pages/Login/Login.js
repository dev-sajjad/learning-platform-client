import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF} from "react-icons/fa";
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
          toast.error("Oops! Please verify your email first");
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
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const handleFacebook = () => {
        providerLoginFacebook(providerFacebook)
            .then(result => {
              const user = result.user;
              setUser(user);
              navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
        })
    }

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <Link to="/home">
              <span className="text-black">Learner</span>
              <span className="text-rose-700">Edge.</span>
            </Link>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Learn On Your Schedule From Any Device.
            Best Online Learning Platform.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <Link to='/register' className="underline">
              Get Started!
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link href="#" className="underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              conditions
            </Link>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label for="email" className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" className="text-sm font-semibold text-gray-500">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <Link
                  onClick={handleGoogle}
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span>
                  <FcGoogle/>
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                    Google
                  </span>
                </Link>
                <Link
                  onClick={handleFacebook}
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <span>
                   <FaFacebookF className="text-blue-700 group-hover:text-white"/>
                  </span>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Facebook
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
