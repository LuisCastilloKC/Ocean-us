import React, { useState } from 'react'

const initialState = {
    email: "",
    password: ""
}

const Login = () => {
    const [formValue, setFormValue] = useState(initialState)
    const  { email, password } = formValue

    const handleSubmit = () => {}

    const onInputChange = (e) => {
        let { name, value } = e.target
        setFormValue({ ...formValue, [name]: value})
    }
     
    return(
        <div className="flex items-center justify-center pt-10">
        <div className="w-full max-w-lg">
          <div className="flex justify-center">
            <h1 className="text-5xl">Login</h1>
          </div>
            <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  autoComplete="off"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-md font-bold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  autoComplete="off"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button type="password" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Login</button>
                <a href="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"> Don't have an account? Register</a>
              </div>
            </form>
        </div>
      </div>
    );
  };

export default Login