import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebasecConfig";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      navigate("/home"); // Redirect to home page on successful login
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError(error.message); // Display error if login fails
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
            Please log in to access exclusive offers and destinations.
          </p>
        </div>
      </div>
      <div className="rounded-lg flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Tour Travel Agency
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          {error && <p className="text-red-500">{error}</p>}

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
            <button
              type="submit"
              className="w-full md:w-96 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/SignUp">
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Sign up
            </a>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
