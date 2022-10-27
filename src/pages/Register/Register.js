import React, { useContext} from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const Register = () => {
//   const [accepted, setAccepted] = useState(false);
    const providerGoogle = new GoogleAuthProvider();
    const providerFacebook = new FacebookAuthProvider();

  const { createUser, setUser, updateUserProfile, verifyEmail, providerLogin, providerLoginFacebook } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        form.reset();
        handleupdateUserProfile(name, photoURL);
        emailVerification();
        toast.success("Email verification send. Please verify");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleupdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
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
         .then((result) => {
           const user = result.user;
           setUser(user);
         })
         .catch((error) => {
           console.log(error);
         });
     };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo URL"
                  required
                  className="input input-bordered"
                />
              </div>
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
                  <p>Already have an account?</p>
                  {""}
                  <Link to="/login"> Login</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="divider">OR</div>
        <div className="flex justify-center w-11">
          <button
            onClick={handleGoogle}
            className="btn btn-outline capitalize gap-10"
          >
            <FaGoogle></FaGoogle>
            Login via Google
          </button>
        </div>
        <div className="flex justify-center w-11">
          <button onClick={handleFacebook}
           
            className="btn btn-outline capitalize gap-7"
          >
            <FaFacebook></FaFacebook>
            Login via Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
