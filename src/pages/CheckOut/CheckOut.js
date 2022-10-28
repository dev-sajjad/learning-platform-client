import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const courseDetails = useLoaderData();

  const handleCheckOut = () => {
    toast.success("Congratulations! Successfully Enrolled");
    navigate("/home");
  };

  const { id, course_name } = courseDetails;

  return (
    <div className="min-h-screen bg-slate-300 min-w-full flex items-center justify-center">
      {" "}
      <div className="border rounded-md bg-white shadow-lg p-3 h-60">
        <div className="">
          <p className="bg-emerald-200 p-3 mb-2 rounded-md text-black">
            Course ID: <span className="text-xl ml-2 font-semibold ">{id}</span>
          </p>
          <p className="bg-emerald-200 p-1.5 text-center text-xl font-semibold text-rose-400 mb-2 rounded-md">
            Course Name:
          </p>
          <p className="bg-red-300  p-3 rounded-md text-emerald-800 text-center text-2xl font-bold">
            {course_name}
          </p>
        </div>
        <Link onClick={handleCheckOut}>
          <button className="btn btn-accent btn-outline btn-sm mt-6 w-full">
            CheckOut Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
