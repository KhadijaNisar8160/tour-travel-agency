import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
// Adjust the path to your Firebase config
import logo from "../assets/logo.png";
import { auth } from "../FirebasecConfig";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      console.log("User created:", userCredential.user);
      navigate("/Login"); // Navigate to the login page after successful sign-up
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="grid grid-cols-2 items-center w-screen h-screen bg-slate-100">
      <div className="flex flex-col items-center bg-slate-200 h-full">
        <div className="mt-32">
          <img src={logo} alt="Logo" />
        </div>
        <div className="p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Our Travel Agency!
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Please sign up to access exclusive offers and destinations.
          </p>
        </div>
      </div>
      <div className="rounded-lg flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Tour Travel Agency
        </h2>

        <form className="space-y-4" onSubmit={handleSignUp}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col ">
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              User Name
            </label>
            <input
              type="text"
              id="text"
              name="text"
              required
              className="w-full px-4 py-2 mt-1 md:w-96 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 md:w-96 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full md:w-96 px-4 py-2 mt-1 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full md:w-96 px-4 py-2 mt-1 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your confirm password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full md:w-96 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
