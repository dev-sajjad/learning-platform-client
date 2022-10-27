import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

const Register = () => {

     const [accepted, setAccepted] = useState(false);

     const { createUser, setUser, updateUserProfile, verifyEmail } =
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


    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div onSubmit={handleSubmit} className="card-body">
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
                  <p>Already have an account?</p>{""}
                  <Link to="/login"> Login</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;