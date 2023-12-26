import { useState } from "react";
import Button from "./common/Button";
import { login } from "../api/login";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * @function Login
 * @description Component for user login. It captures username and password,
 * authenticates the user via an API, and navigates based on the response.
 *
 * @returns {JSX.Element} - The login form component.
 */
const Login = () => {
  // State hooks for username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // useNavigate hook from React Router for navigation after login
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior

    // Preparing the data to be sent to the login API
    const data = { username: username, password: password };

    // Calling the login function from the API module
    login(data).then(({ token }) => {
      // Setting cookies for access token, login status, and username
      Cookies.set("access_token", token.access);
      Cookies.set("isLogin", true);
      Cookies.set("username", username);
    });

    // Conditional navigation based on login status
    if (Cookies.get("isLogin")) {
      return navigate("/policies");
    }
    return navigate("/login");
  };

  // Rendering the login form
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="my-20 p-8 bg-white shadow-lg rounded-xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-700">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          <Button
            handleOnClick={handleSubmit}
            buttonText={"Login"}
            css={
              "bg-blue-500  text-white text-lg py-3 px-4 rounded-md hover:bg-blue-600 w-full shadow-lg transition duration-150 ease-in-out"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
