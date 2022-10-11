import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signup } from "../../redux/store/features/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { firstName, lastName, email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && firstName && lastName){
        dispatch(signup({ formValue, navigate, toast}))
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-full max-w-lg">
        <div className="flex justify-center">
          <h1 className="text-5xl">Sign up</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-md font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onInputChange}
              autoComplete="off"
              required
              invalid
              validation="Please provide first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onInputChange}
              autoComplete="off"
              required
              invalid
              validation="Please provide last name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onInputChange}
              autoComplete="off"
              required
              invalid
              validation="Please provide email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              autoComplete="off"
              required
              invalid
              validation="Please provide password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="password"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              {loading && (
                <p size="sm" role="status" tag="span" className="me-2" />
              )}
              Sign up
            </button>
            <Link
              to="/signin"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              {" "}
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
