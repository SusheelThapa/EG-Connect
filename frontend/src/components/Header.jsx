import image from "../img/EG-Connect.png";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../img/logo.png";

const Header = ({ active_feature, features }) => {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={image}
          alt="Description of the image"
          className="h-500 w-500"
        />
      </div>

      <div className="mb-4">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-48 py-4">
            <Link to="/" className="flex items-center ">
              <img src={logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                EG-Connect
              </span>
            </Link>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg">
                <li>
                  <Link
                    to="/policies"
                    className={`hover:text-green-400 ${
                      active_feature == features[0]
                        ? "text-green-500"
                        : "text-white"
                    }`}
                  >
                    Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/petition"
                    className={`hover:text-green-400 ${
                      active_feature == features[1]
                        ? "text-green-500"
                        : "text-white"
                    }`}
                  >
                    Petition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/notices"
                    className={`hover:text-green-400 ${
                      active_feature == features[2]
                        ? "text-green-500"
                        : "text-white"
                    }`}
                  >
                    Notice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

// Add PropTypes validation
Header.propTypes = {
  features: PropTypes.string.isRequired,
  active_feature: PropTypes.string.isRequired,
};

export default Header;
