import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username.trim() || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    onLogin(username.trim(), password);
  };

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

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
