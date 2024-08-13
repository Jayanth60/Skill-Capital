"use client";
import { useState, useEffect } from "react";
import axios from 'axios'; // Import axios

function Logins() {
  const [logins, setLogins] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    fetchLogins();
  }, []);

  const fetchLogins = async () => {
    try {
      const response = await axios.get('http://localhost:8000/');

      setLogins(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };

  const validateEmail = (email) => {
    if (email.length === 0) {
      setEmailError('Please enter an email');
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    if (password.length === 0) {
      setPasswordError('Please enter a password');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await axios.post('http://3.84.242.127:8000/login', {
          email,
          password
        });

        console.log('Form submitted successfully:', response.data);

        // Handle success (e.g., redirect to another page or show a success message)
        
      } catch (error) {
        console.error('Error during form submission:', error.response?.data || error.message);
        // Handle errors (e.g., display an error message to the user)
      }
    }
  };

  const clearErrorMsgs = () => {
    setEmailError('');
    setPasswordError('');
  };

  return (
    <main>
      <div className="flex w-full lg:flex lg:h-screen">
        <div className="p-10 pb-8 lg:w-1/2 flex flex-col justify-center bg-white lg:pl-20">
          <div className="pl-5">
            <img src="/images/logo.png" alt="logo" />
          </div>

          <form onSubmit={handleSubmit} id="myform" className="container-sm relative top-9 border rounded max-w-xl shadow-lg p-9">
            <div className="mb-6">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="email">Email</label>
              <input
                className="shadow-sm appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
                onFocus={clearErrorMsgs}
              />
              {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 text-sm mb-2" htmlFor="password">Password</label>
              <input
                className="shadow-sm appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={clearErrorMsgs}
              />
              {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
            </div>

            <div className="pt-9">
              <button
                type="submit"
                className="w-full justify-center rounded-lg bg-gradient-to-r from-orange-300 to-pink-500 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
            <div className="mt-10">
              <input type="checkbox" className="h-4 w-5" /><label className="pl-1">Remember me</label>

              <p className="text-gray-600 text-center pt-10">
                ©2024, All rights reserved
              </p>
            </div>
          </form>
        </div>

        <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center bg-white pt-8">
          <h1 className="text-2xl font-bold text-center text-[#042D60] text-[2rem] w-3/4">Seamlessly manage all learner data in a unified platform.</h1>
          <p className="text-center text-lg text-gray-700 w-3/4">Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
          <img src="/images/pinkcrm.png" alt="skill-capital img" />
        </div>
      </div>
    </main>
  );
}

export default Logins;
