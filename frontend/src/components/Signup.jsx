import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isFieldEmpty = () => {
    return !username.trim() || !email.trim() || !password.trim();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFieldEmpty()) {
      setError("All fields are required.");
      return;
    }
    setError("");
    //API Call
  };

  return (
    <div className=" flex justify-center items-center bg-gray-100">
      <div className="my-32 p-8 bg-white shadow-lg rounded-3xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-700">
          Sign Up
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
              placeholder="Create a username"
              autoComplete="username"
              required
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your email"
              autoComplete="email"
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
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          <Button
            buttonText={"Sign Up"}
            css={
              "bg-blue-500 text-white text-lg py-3 px-4 rounded-xl hover:bg-blue-600 w-full shadow-lg transition duration-150 ease-in-out"
            }
            handleOnClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SignUp;
